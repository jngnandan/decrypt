export interface DecryptFormData {
  encryptedText: string;
  password: string;
}

export interface DecryptResult {
  success: boolean;
  decryptedText?: string;
  error?: string;
}

export interface Feature {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  description: string;
}

export interface DecryptModalProps {
  opened: boolean;
  onClose: () => void;
}

// Re-export auth types
export * from './auth';