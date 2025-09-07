'use client';

import { Modal, TextInput, Textarea, Button, Stack, Group, Alert, Code, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { IconAlertCircle, IconCheck } from '@tabler/icons-react';

interface DecryptModalProps {
  opened: boolean;
  onClose: () => void;
}

export function DecryptModal({ opened, onClose }: DecryptModalProps) {
  const [decryptedText, setDecryptedText] = useState<string>('');
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [error, setError] = useState<string>('');

  const form = useForm({
    initialValues: {
      encryptedText: '',
      password: '',
    },
    validate: {
      encryptedText: (value) => (value.length < 1 ? 'Encrypted text is required' : null),
      password: (value) => (value.length < 1 ? 'Password is required' : null),
    },
  });

  const handleDecrypt = async (values: typeof form.values) => {
    setIsDecrypting(true);
    setError('');
    setDecryptedText('');

    try {
      // Simulate decryption process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simple base64 decode simulation (in real app, use proper decryption)
      try {
        const decoded = atob(values.encryptedText);
        setDecryptedText(decoded);
      } catch {
        throw new Error('Invalid encrypted text format');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Decryption failed');
    } finally {
      setIsDecrypting(false);
    }
  };

  const handleClose = () => {
    form.reset();
    setDecryptedText('');
    setError('');
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      title="Decrypt Text"
      size="lg"
      centered
    >
      <form onSubmit={form.onSubmit(handleDecrypt)}>
        <Stack gap="md">
        <Textarea
          label="Encrypted Text"
          placeholder="Paste your encrypted text here..."
          {...form.getInputProps('encryptedText')}
          minRows={4}
          autosize
        />

          <TextInput
            label="Password"
            type="password"
            placeholder="Enter decryption password"
            {...form.getInputProps('password')}
          />

          {error && (
            <Alert icon={<IconAlertCircle size={16} />} color="red">
              {error}
            </Alert>
          )}

          {decryptedText && (
            <Alert icon={<IconCheck size={16} />} color="green">
              <Text size="sm" fw={500} mb="xs">
                Decryption successful!
              </Text>
              <Code block style={{ whiteSpace: 'pre-wrap' }}>
                {decryptedText}
              </Code>
            </Alert>
          )}

          <Group justify="flex-end" mt="md">
            <Button variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" loading={isDecrypting}>
              {isDecrypting ? 'Decrypting...' : 'Decrypt'}
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
}
