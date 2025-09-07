import { Modal } from '@mantine/core';
import { DecryptForm } from '@/components/ui/DecryptForm';
import type { DecryptModalProps } from '@/lib/types';

export function DecryptModal({ opened, onClose }: DecryptModalProps) {
  const handleSuccess = (decryptedText: string) => {
    // You can add additional success handling here
    console.log('Decryption successful:', decryptedText);
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Decrypt Text"
      size="lg"
      centered
    >
      <DecryptForm onSuccess={handleSuccess} />
    </Modal>
  );
}
