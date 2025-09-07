"use client";

import React from 'react';
import { useColorTheme } from './ColorThemeProvider';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Palette, Check } from 'lucide-react';

export function ColorToggle() {
  const { currentTheme, setColorTheme, themes } = useColorTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Palette className="h-4 w-4" />
          <span className="sr-only">Color theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.name}
            onClick={() => setColorTheme(theme.name)}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <div 
                className="w-4 h-4 rounded-full border border-border"
                style={{
                  background: theme.colors.gradientPrimary
                }}
              />
              <span>{theme.label}</span>
            </div>
            {currentTheme === theme.name && (
              <Check className="h-4 w-4" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Alternative: Floating Color Picker (for landing pages)
export function FloatingColorPicker() {
  const { currentTheme, setColorTheme, themes } = useColorTheme();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-card border border-border rounded-lg p-3 shadow-elegant">
        <div className="text-xs font-medium text-muted-foreground mb-2">
          Theme Colors
        </div>
        <div className="grid grid-cols-3 gap-2">
          {themes.map((theme) => (
            <button
              key={theme.name}
              onClick={() => setColorTheme(theme.name)}
              className={`
                w-8 h-8 rounded-lg border-2 transition-all duration-200
                hover:scale-110 hover:shadow-glow
                ${currentTheme === theme.name 
                  ? 'border-foreground ring-2 ring-ring ring-offset-2 ring-offset-background' 
                  : 'border-border hover:border-muted-foreground'
                }
              `}
              style={{
                background: theme.colors.gradientPrimary
              }}
              title={theme.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Inline Color Picker (for navigation bars)
export function InlineColorPicker() {
  const { currentTheme, setColorTheme, themes } = useColorTheme();

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-muted-foreground">Colors:</span>
      <div className="flex items-center gap-1">
        {themes.map((theme) => (
          <button
            key={theme.name}
            onClick={() => setColorTheme(theme.name)}
            className={`
              w-6 h-6 rounded-full border-2 transition-all duration-200
              hover:scale-110 
              ${currentTheme === theme.name 
                ? 'border-foreground ring-2 ring-ring ring-offset-1 ring-offset-background' 
                : 'border-border hover:border-muted-foreground'
              }
            `}
            style={{
              background: theme.colors.gradientPrimary
            }}
            title={theme.label}
          />
        ))}
      </div>
    </div>
  );
}