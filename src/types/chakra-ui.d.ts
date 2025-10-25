// Type declarations for Chakra CLI generated components
// This file helps TypeScript understand the generated UI components

import type { ComponentProps, FC } from 'react';

declare module '@/components/ui/*' {
  const Component: FC<ComponentProps<'div'>>;
  export default Component;
  export const Component: FC<ComponentProps<'div'>>;
  export * from '@chakra-ui/react';
}

// Specific exports that are commonly used
declare module '@/components/ui/color-mode' {
  export const ColorModeButton: FC<ComponentProps<'button'>>;
  export const DarkMode: FC<ComponentProps<'div'>>;
  export const LightMode: FC<ComponentProps<'div'>>;
  export const useColorMode: () => { colorMode: string; toggleColorMode: () => void };
  export const useColorModeValue: <T>(light: T, dark: T) => T;
}

declare module '@/components/ui/link-button' {
  export const LinkButton: FC<ComponentProps<'a'>>;
}

declare module '@/components/ui/provider' {
  export const Provider: FC<ComponentProps<'div'>>;
}

declare module '@/components/ui/button' {
  export const Button: FC<ComponentProps<'button'>>;
}

declare module '@/components/ui/input-group' {
  export const InputGroup: FC<ComponentProps<'div'>>;
}

declare module '@/components/ui/menu' {
  export const Menu: FC<ComponentProps<'div'>>;
}

declare module '@/components/ui/number-input' {
  export const NumberInput: FC<ComponentProps<'input'>>;
}

declare module '@/components/ui/toaster' {
  export const Toaster: FC<ComponentProps<'div'>>;
}

declare module '@/components/ui/tooltip' {
  export const Tooltip: FC<ComponentProps<'div'>>;
}