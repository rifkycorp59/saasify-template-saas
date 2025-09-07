'use client';

import { useEffect, useState } from 'react';

interface DynamicAssetProps {
  url: string;
  alt?: string;
  parentClassName?: string;
  className?: string;
}

export default function DynamicSVG({
  url,
  alt,
  parentClassName,
  className = '',
}: DynamicAssetProps) {
  const [content, setContent] = useState<{ type: 'svg' | 'image' | 'error'; data: string }>({
    type: 'error',
    data: '',
  });

  useEffect(() => {
    if (url) {
      const fileExtension = url.split('.').pop()?.toLowerCase();

      if (fileExtension === 'svg') {
        fetch(url)
          .then(res => res.text())
          .then(text => {
            // Tambah atau update <title>
            let processedSVG = text;

            // Tambahkan/replace title
            if (alt) {
              if (/<title>.*<\/title>/.test(processedSVG)) {
                processedSVG = processedSVG.replace(/<title>.*<\/title>/, `<title>${alt}</title>`);
              } else {
                processedSVG = processedSVG.replace(/<svg([^>]*)>/, `<svg$1><title>${alt}</title>`);
              }
            }

            // Handle className injection
            const svgClassMatch = processedSVG.match(/<svg([^>]*class="([^"]*)"[^>]*)>/);
            const existingClasses = svgClassMatch ? svgClassMatch[2] : '';
            const combinedClasses = existingClasses ? `${existingClasses} ${className}` : className;

            if (svgClassMatch) {
              processedSVG = processedSVG.replace(
                /<svg([^>]*)(class="[^"]*")([^>]*)>/,
                `<svg$1class="${combinedClasses}"$3>`
              );
            } else {
              processedSVG = processedSVG.replace(
                /<svg([^>]*)>/,
                `<svg$1 class="${combinedClasses}">`
              );
            }

            setContent({ type: 'svg', data: processedSVG });
          })
          .catch(err => {
            console.error('Failed to load SVG:', err);
            setContent({ type: 'error', data: 'Failed to load SVG' });
          });
      } else if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(fileExtension || '')) {
        setContent({ type: 'image', data: url });
      } else {
        setContent({ type: 'error', data: 'Unsupported file format' });
      }
    }
  }, [url, className, alt]);

  if (content.type === 'svg') {
    return <div className={parentClassName} dangerouslySetInnerHTML={{ __html: content.data }} />;
  } else if (content.type === 'image') {
    return (
      <div className={parentClassName}>
        <img src={content.data} className={className} alt={alt || ''} />
      </div>
    );
  } else {
    return <div className={parentClassName}></div>;
  }
}
