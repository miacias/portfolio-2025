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

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={customSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
