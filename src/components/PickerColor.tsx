"use client";

import React, { useState } from 'react';
import { useColorTheme } from './ColorThemeProvider';
import { Palette, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function GlobalColorPicker() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTheme, setColorTheme, themes } = useColorTheme();

  return (
    <>
      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            group relative w-14 h-14 rounded-full 
            bg-gradient-primary text-primary-foreground
            shadow-elegant hover:shadow-glow
            transition-all duration-300 ease-out
            flex items-center justify-center
            ${isOpen ? 'rotate-180' : 'hover:rotate-12'}
          `}
        >
          {isOpen ? (
            <X className="w-5 h-5 transition-transform duration-200" />
          ) : (
            <Palette className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
          )}
          
          {/* Pulse effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-ping" />
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 bg-card border border-border rounded-lg px-3 py-2 shadow-card opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            <span className="text-sm font-medium text-black dark:text-white">Change Theme Colors</span>
          </div>
        </button>
      </motion.div>

      {/* Color Picker Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 25,
                duration: 0.3 
              }}
              className="fixed bottom-24 right-6 z-50 w-80"
            >
              <div className="bg-card border border-border rounded-2xl shadow-elegant p-6 backdrop-blur-xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-gradient-primary" />
                    <h3 className="font-semibold text-foreground">Theme Colors</h3>
                  </div>
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                    {themes.find(t => t.name === currentTheme)?.label}
                  </span>
                </div>

                {/* Color Grid */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {themes.map((theme, index) => (
                    <motion.button
                      key={theme.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => {
                        setColorTheme(theme.name);
                        setIsOpen(false);
                      }}
                      className={`
                        group relative aspect-square rounded-xl border-2 transition-all duration-300
                        hover:scale-105 hover:shadow-glow
                        ${currentTheme === theme.name 
                          ? 'border-foreground ring-2 ring-ring ring-offset-2 ring-offset-card' 
                          : 'border-border hover:border-muted-foreground'
                        }
                      `}
                      style={{
                        background: theme.colors.gradientPrimary
                      }}
                    >
                      {/* Active indicator */}
                      {currentTheme === theme.name && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute inset-2 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center"
                        >
                          <div className="w-3 h-3 rounded-full bg-white shadow-sm" />
                        </motion.div>
                      )}
                      
                      {/* Tooltip */}
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-card border border-border rounded-md px-2 py-1 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm">
                        {theme.label}
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Preview */}
                <div className="border border-border rounded-xl p-4 bg-gradient-hero">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Preview Theme</h4>
                      <p className="text-xs text-muted-foreground">See how it looks</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <div className="flex-1 h-2 rounded-full bg-gradient-primary opacity-80" />
                    <div className="flex-1 h-2 rounded-full bg-gradient-primary opacity-60" />
                    <div className="flex-1 h-2 rounded-full bg-gradient-primary opacity-40" />
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-muted-foreground">
                    Colors will be applied across the entire site
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}