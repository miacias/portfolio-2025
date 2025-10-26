"use client"

import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"

// chakra-ui custom system with Open Dyslexic font for better readability
const customSystem = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: "Poppins, Arial, Helvetica, sans-serif" },
        body: { value: "'Open-Dyslexic', Arial, Helvetica, sans-serif" },
        brand: { value: "'Poppins', var(--font-geist-sans), sans-serif" },
        dyslexic: { value: "'Open-Dyslexic', Arial, Helvetica, sans-serif" },
        mono: { value: "var(--font-geist-mono), 'Courier New', monospace" },
      },
      colors: {
        brand: {
          theme: { value: '#B7A3E3' },
          dark: { value: '#2b2833' },
          primary: { value: '#FF8F8F' },
          secondary: { value: '#FFF1CB' },
          accent: { value: '#C2E2FA' },
        },
      },
    },
    recipes: {
      badge: {
        base: {
          fontFamily: "dyslexic",
          fontWeight: "medium",
          padding: "0.5em 1em",
        },
      },
    },
  },
})

import React from "react";

export function Provider(props: ColorModeProviderProps) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    // Optionally render a fallback here (e.g., a spinner)
    return null;
  }
  return (
    <ChakraProvider value={customSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
