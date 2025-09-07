import { IconShield, IconLock, IconKey, IconEye } from '@tabler/icons-react';
import type { Feature } from '../types';

export const APP_CONFIG = {
  name: 'Decrypt',
  description: 'A powerful, secure, and user-friendly decryption tool',
  version: '1.0.0',
} as const;

export const FEATURES: Feature[] = [
  {
    icon: IconShield,
    title: 'Secure Decryption',
    description: 'Advanced encryption algorithms to protect your data',
  },
  {
    icon: IconLock,
    title: 'Privacy First',
    description: 'Your data stays on your device, never sent to servers',
  },
  {
    icon: IconKey,
    title: 'Easy to Use',
    description: 'Simple interface for complex decryption operations',
  },
  {
    icon: IconEye,
    title: 'Real-time Preview',
    description: 'See your decrypted content instantly',
  },
];

export const DECRYPTION_CONFIG = {
  minPasswordLength: 1,
  maxTextLength: 10000,
  simulationDelay: 2000,
} as const;
