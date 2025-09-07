import { MantineTheme } from '@mantine/core';

// Common Mantine styling utilities
export const mantineStyles = {
  // Button variants
  buttonPrimary: (theme: MantineTheme) => ({
    root: {
      background: `linear-gradient(135deg, ${theme.colors.blue[6]}, ${theme.colors.blue[7]})`,
      border: 'none',
      borderRadius: theme.radius.md,
      fontWeight: 600,
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: theme.shadows.lg,
      },
    },
  }),

  buttonSecondary: (theme: MantineTheme) => ({
    root: {
      backgroundColor: 'transparent',
      border: `1px solid ${theme.colors.gray[4]}`,
      color: theme.colors.gray[7],
      borderRadius: theme.radius.md,
      fontWeight: 600,
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: theme.colors.gray[1],
        borderColor: theme.colors.blue[6],
        color: theme.colors.blue[6],
        transform: 'translateY(-1px)',
      },
    },
  }),

  // Card styles
  cardElevated: (theme: MantineTheme) => ({
    root: {
      borderRadius: theme.radius.lg,
      boxShadow: theme.shadows.md,
      border: `1px solid ${theme.colors.gray[2]}`,
      transition: 'all 0.3s ease',
      '&:hover': {
        boxShadow: theme.shadows.lg,
        transform: 'translateY(-4px)',
        borderColor: theme.colors.blue[4],
      },
    },
  }),

  cardInteractive: (theme: MantineTheme) => ({
    root: {
      borderRadius: theme.radius.lg,
      boxShadow: theme.shadows.sm,
      border: `1px solid ${theme.colors.gray[2]}`,
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      '&:hover': {
        boxShadow: theme.shadows.md,
        transform: 'translateY(-2px)',
        borderColor: theme.colors.blue[4],
      },
    },
  }),

  // Input styles
  inputFocused: (theme: MantineTheme) => ({
    input: {
      borderColor: theme.colors.blue[6],
      boxShadow: `0 0 0 3px ${theme.colors.blue[1]}`,
      transition: 'all 0.3s ease',
    },
  }),

  inputError: (theme: MantineTheme) => ({
    input: {
      borderColor: theme.colors.red[6],
      '&:focus': {
        borderColor: theme.colors.red[6],
        boxShadow: `0 0 0 3px ${theme.colors.red[1]}`,
      },
    },
  }),

  // Modal styles
  modalCentered: (theme: MantineTheme) => ({
    content: {
      borderRadius: theme.radius.lg,
      boxShadow: theme.shadows.xl,
    },
    header: {
      borderBottom: `1px solid ${theme.colors.gray[2]}`,
      paddingBottom: theme.spacing.md,
    },
  }),

  // Paper styles
  paperElevated: (theme: MantineTheme) => ({
    root: {
      borderRadius: theme.radius.lg,
      boxShadow: theme.shadows.md,
      border: `1px solid ${theme.colors.gray[2]}`,
    },
  }),

  paperSubtle: (theme: MantineTheme) => ({
    root: {
      borderRadius: theme.radius.md,
      boxShadow: theme.shadows.xs,
      border: `1px solid ${theme.colors.gray[1]}`,
    },
  }),

  // Text styles
  textGradient: (theme: MantineTheme) => ({
    root: {
      background: `linear-gradient(135deg, ${theme.colors.blue[6]}, ${theme.colors.purple[6]})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
  }),

  textMuted: (theme: MantineTheme) => ({
    root: {
      color: theme.colors.gray[6],
    },
  }),

  // Container styles
  containerFluid: (theme: MantineTheme) => ({
    root: {
      maxWidth: '100%',
      padding: `0 ${theme.spacing.md}`,
    },
  }),

  containerCentered: (theme: MantineTheme) => ({
    root: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: `0 ${theme.spacing.md}`,
    },
  }),

  // Group styles
  groupSpaced: (theme: MantineTheme) => ({
    root: {
      gap: theme.spacing.lg,
    },
  }),

  groupTight: (theme: MantineTheme) => ({
    root: {
      gap: theme.spacing.sm,
    },
  }),

  // Stack styles
  stackSpaced: (theme: MantineTheme) => ({
    root: {
      gap: theme.spacing.lg,
    },
  }),

  stackTight: (theme: MantineTheme) => ({
    root: {
      gap: theme.spacing.sm,
    },
  }),

  // Grid styles
  gridResponsive: (theme: MantineTheme) => ({
    root: {
      gap: theme.spacing.lg,
    },
  }),

  // Badge styles
  badgeSuccess: (theme: MantineTheme) => ({
    root: {
      backgroundColor: theme.colors.green[1],
      color: theme.colors.green[8],
      border: `1px solid ${theme.colors.green[3]}`,
    },
  }),

  badgeWarning: (theme: MantineTheme) => ({
    root: {
      backgroundColor: theme.colors.orange[1],
      color: theme.colors.orange[8],
      border: `1px solid ${theme.colors.orange[3]}`,
    },
  }),

  badgeError: (theme: MantineTheme) => ({
    root: {
      backgroundColor: theme.colors.red[1],
      color: theme.colors.red[8],
      border: `1px solid ${theme.colors.red[3]}`,
    },
  }),

  // Notification styles
  notificationSuccess: (theme: MantineTheme) => ({
    root: {
      borderLeft: `4px solid ${theme.colors.green[6]}`,
    },
  }),

  notificationError: (theme: MantineTheme) => ({
    root: {
      borderLeft: `4px solid ${theme.colors.red[6]}`,
    },
  }),

  notificationWarning: (theme: MantineTheme) => ({
    root: {
      borderLeft: `4px solid ${theme.colors.orange[6]}`,
    },
  }),

  notificationInfo: (theme: MantineTheme) => ({
    root: {
      borderLeft: `4px solid ${theme.colors.blue[6]}`,
    },
  }),
};

// Common size configurations
export const sizes = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
} as const;

// Common color configurations
export const colors = {
  primary: 'blue',
  secondary: 'gray',
  success: 'green',
  error: 'red',
  warning: 'orange',
  info: 'purple',
} as const;

// Common radius configurations
export const radius = {
  none: 'xs',
  small: 'sm',
  medium: 'md',
  large: 'lg',
  extraLarge: 'xl',
} as const;

// Common shadow configurations
export const shadows = {
  none: 'xs',
  small: 'sm',
  medium: 'md',
  large: 'lg',
  extraLarge: 'xl',
} as const;
