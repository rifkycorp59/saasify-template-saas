"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

// Define color themes
interface ColorTheme {
  name: string;
  label: string;
  colors: {
    primary: string;
    primaryGlow: string;
    accent: string;
    ring: string;
    gradientPrimary: string;
    shadowGlow: string;
  };
}

const colorThemes: ColorTheme[] = [
  {
    name: 'blue',
    label: 'Ocean Blue',
    colors: {
      primary: 'hsl(235, 69%, 61%)',
      primaryGlow: 'hsl(248, 73%, 69%)',
      accent: 'hsl(235, 69%, 61%)',
      ring: 'hsl(235, 69%, 61%)',
      gradientPrimary: 'linear-gradient(135deg, hsl(235, 69%, 61%), hsl(248, 73%, 69%))',
      shadowGlow: '0 0 40px hsl(235, 69%, 61%, 0.15)',
    }
  },
  {
    name: 'emerald',
    label: 'Emerald Green',
    colors: {
      primary: 'hsl(142, 76%, 36%)',
      primaryGlow: 'hsl(160, 84%, 39%)',
      accent: 'hsl(142, 76%, 36%)',
      ring: 'hsl(142, 76%, 36%)',
      gradientPrimary: 'linear-gradient(135deg, hsl(142, 76%, 36%), hsl(160, 84%, 39%))',
      shadowGlow: '0 0 40px hsl(142, 76%, 36%, 0.15)',
    }
  },
  {
    name: 'purple',
    label: 'Royal Purple',
    colors: {
      primary: 'hsl(262, 83%, 58%)',
      primaryGlow: 'hsl(270, 91%, 65%)',
      accent: 'hsl(262, 83%, 58%)',
      ring: 'hsl(262, 83%, 58%)',
      gradientPrimary: 'linear-gradient(135deg, hsl(262, 83%, 58%), hsl(270, 91%, 65%))',
      shadowGlow: '0 0 40px hsl(262, 83%, 58%, 0.15)',
    }
  },
  {
    name: 'rose',
    label: 'Rose Pink',
    colors: {
      primary: 'hsl(330, 81%, 60%)',
      primaryGlow: 'hsl(340, 82%, 52%)',
      accent: 'hsl(330, 81%, 60%)',
      ring: 'hsl(330, 81%, 60%)',
      gradientPrimary: 'linear-gradient(135deg, hsl(330, 81%, 60%), hsl(340, 82%, 52%))',
      shadowGlow: '0 0 40px hsl(330, 81%, 60%, 0.15)',
    }
  },
  {
    name: 'orange',
    label: 'Sunset Orange',
    colors: {
      primary: 'hsl(24, 95%, 53%)',
      primaryGlow: 'hsl(43, 96%, 56%)',
      accent: 'hsl(24, 95%, 53%)',
      ring: 'hsl(24, 95%, 53%)',
      gradientPrimary: 'linear-gradient(135deg, hsl(24, 95%, 53%), hsl(43, 96%, 56%))',
      shadowGlow: '0 0 40px hsl(24, 95%, 53%, 0.15)',
    }
  },
  {
    name: 'teal',
    label: 'Ocean Teal',
    colors: {
      primary: 'hsl(173, 80%, 40%)',
      primaryGlow: 'hsl(180, 83%, 47%)',
      accent: 'hsl(173, 80%, 40%)',
      ring: 'hsl(173, 80%, 40%)',
      gradientPrimary: 'linear-gradient(135deg, hsl(173, 80%, 40%), hsl(180, 83%, 47%))',
      shadowGlow: '0 0 40px hsl(173, 80%, 40%, 0.15)',
    }
  }
];

interface ColorThemeContextType {
  currentTheme: string;
  setColorTheme: (theme: string) => void;
  themes: ColorTheme[];
  getCurrentThemeColors: () => ColorTheme['colors'];
}

const ColorThemeContext = createContext<ColorThemeContextType | undefined>(undefined);

export function ColorThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState('blue');

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('color-theme');
    if (savedTheme && colorThemes.find(t => t.name === savedTheme)) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  // Apply theme to CSS variables
  useEffect(() => {
    const theme = colorThemes.find(t => t.name === currentTheme);
    if (!theme) return;

    const root = document.documentElement;
    const { colors } = theme;

    // Apply colors to CSS variables
    root.style.setProperty('--primary', colors.primary);
    root.style.setProperty('--primary-glow', colors.primaryGlow);
    root.style.setProperty('--accent', colors.accent);
    root.style.setProperty('--ring', colors.ring);
    root.style.setProperty('--gradient-primary', colors.gradientPrimary);

    // Update dark mode versions too
    if (document.documentElement.classList.contains('dark')) {
      root.style.setProperty('--shadow-glow', colors.shadowGlow.replace('0.15', '0.2'));
    } else {
      root.style.setProperty('--shadow-glow', colors.shadowGlow);
    }

    // Save to localStorage
    localStorage.setItem('color-theme', currentTheme);
  }, [currentTheme]);

  const setColorTheme = (theme: string) => {
    if (colorThemes.find(t => t.name === theme)) {
      setCurrentTheme(theme);
    }
  };

  const getCurrentThemeColors = () => {
    const theme = colorThemes.find(t => t.name === currentTheme);
    return theme?.colors || colorThemes[0].colors;
  };

  return (
    <ColorThemeContext.Provider 
      value={{ 
        currentTheme, 
        setColorTheme, 
        themes: colorThemes,
        getCurrentThemeColors 
      }}
    >
      {children}
    </ColorThemeContext.Provider>
  );
}

export function useColorTheme() {
  const context = useContext(ColorThemeContext);
  if (context === undefined) {
    throw new Error('useColorTheme must be used within a ColorThemeProvider');
  }
  return context;
}