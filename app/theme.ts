import { createTheme, MantineColorsTuple } from '@mantine/core';

// Enhanced color palette
const customBlue: MantineColorsTuple = [
  '#e6f3ff',
  '#b3d9ff',
  '#80bfff',
  '#4da6ff',
  '#1a8cff',
  '#0073e6',
  '#005bb3',
  '#004280',
  '#002a4d',
  '#00111a'
];

const customGray: MantineColorsTuple = [
  '#fafbfc',
  '#f3f4f6',
  '#e5e7eb',
  '#d1d5db',
  '#9ca3af',
  '#6b7280',
  '#4b5563',
  '#374151',
  '#1f2937',
  '#1a1d29'
];

const customGreen: MantineColorsTuple = [
  '#f0fdf4',
  '#dcfce7',
  '#bbf7d0',
  '#86efac',
  '#4ade80',
  '#22c55e',
  '#16a34a',
  '#15803d',
  '#166534',
  '#14532d'
];

const customRed: MantineColorsTuple = [
  '#fef2f2',
  '#fee2e2',
  '#fecaca',
  '#fca5a5',
  '#f87171',
  '#ef4444',
  '#dc2626',
  '#b91c1c',
  '#991b1b',
  '#7f1d1d'
];

const customPurple: MantineColorsTuple = [
  '#faf5ff',
  '#f3e8ff',
  '#e9d5ff',
  '#d8b4fe',
  '#c084fc',
  '#a855f7',
  '#9333ea',
  '#7c3aed',
  '#6b21a8',
  '#581c87'
];

const customOrange: MantineColorsTuple = [
  '#fff7ed',
  '#ffedd5',
  '#fed7aa',
  '#fdba74',
  '#fb923c',
  '#f97316',
  '#ea580c',
  '#c2410c',
  '#9a3412',
  '#7c2d12'
];

export const theme = createTheme({
  /** Primary color configuration */
  primaryColor: 'blue',
  primaryShade: { light: 6, dark: 4 },
  
  /** Default styling */
  defaultRadius: 'md',
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontFamilyMonospace: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, monospace',
  
  /** Headings configuration - BlaBlaCar style */
  headings: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontWeight: '600',
    sizes: {
      h1: { fontSize: '2.25rem', lineHeight: '1.2', fontWeight: '700' },
      h2: { fontSize: '1.875rem', lineHeight: '1.3', fontWeight: '600' },
      h3: { fontSize: '1.5rem', lineHeight: '1.4', fontWeight: '600' },
      h4: { fontSize: '1.25rem', lineHeight: '1.4', fontWeight: '600' },
      h5: { fontSize: '1.125rem', lineHeight: '1.5', fontWeight: '500' },
      h6: { fontSize: '1rem', lineHeight: '1.5', fontWeight: '500' },
    },
  },
  
  /** Enhanced color palette */
  colors: {
    blue: customBlue,
    gray: customGray,
    green: customGreen,
    red: customRed,
    purple: customPurple,
    orange: customOrange,
  },
  
  /** Enhanced spacing scale - BlaBlaCar style */
  spacing: {
    xs: '0.5rem',
    sm: '0.875rem',
    md: '1.25rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
  },
  
  /** Enhanced border radius scale */
  radius: {
    xs: '0.25rem',
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
  },
  
  /** Enhanced shadows */
  shadows: {
    xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  },
  
  /** Breakpoints */
  breakpoints: {
    xs: '36em',
    sm: '48em',
    md: '62em',
    lg: '75em',
    xl: '88em',
  },
  
  /** Enhanced theme properties */
  cursorType: 'pointer',
  respectReducedMotion: true,
  focusRing: 'auto',
  
  /** Component default props */
  components: {
    Button: {
      defaultProps: {
        radius: 'md',
      },
    },
    Card: {
      defaultProps: {
        radius: 'lg',
        shadow: 'sm',
      },
    },
    Paper: {
      defaultProps: {
        radius: 'md',
        shadow: 'xs',
      },
    },
    TextInput: {
      defaultProps: {
        radius: 'md',
      },
    },
    PasswordInput: {
      defaultProps: {
        radius: 'md',
      },
    },
    Select: {
      defaultProps: {
        radius: 'md',
      },
    },
    Textarea: {
      defaultProps: {
        radius: 'md',
      },
    },
    Modal: {
      defaultProps: {
        radius: 'lg',
        shadow: 'xl',
      },
    },
    Notification: {
      defaultProps: {
        radius: 'md',
      },
    },
  },
});
