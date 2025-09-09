import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="px-4 text-center">
        {/* Error 404 Heading */}
        <h1 className="mb-8 text-5xl font-bold text-primary">Error 404</h1>

        {/* Description */}
        <p className="mx-auto mb-8 text-xl text-[#757763] md:text-xl">
          The page you are trying to reach does not exist
        </p>

        {/* Back to Home Button */}
        <Link
          href="/"
          className="inline-block rounded-sm border-2 border-primary bg-white px-8 py-3 font-medium text-primary shadow-sm transition-colors duration-300 hover:bg-primary hover:text-white">
          Return to the main page
        </Link>
      </div>
    </div>
  );
}
