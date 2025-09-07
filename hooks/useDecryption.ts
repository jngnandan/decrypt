'use client';

import { useState } from 'react';
import { DecryptionService } from '@/lib/utils/decryption';
import type { DecryptFormData, DecryptResult } from '@/lib/types';

export function useDecryption() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<DecryptResult | null>(null);

  const decrypt = async (data: DecryptFormData) => {
    setIsLoading(true);
    setResult(null);

    try {
      const decryptResult = await DecryptionService.decrypt(data);
      setResult(decryptResult);
    } catch (error) {
      setResult({
        success: false,
        error: error instanceof Error ? error.message : 'An unexpected error occurred',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setResult(null);
    setIsLoading(false);
  };

  return {
    decrypt,
    reset,
    isLoading,
    result,
  };
}
