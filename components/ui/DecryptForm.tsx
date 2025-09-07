import { TextInput, Textarea, Button, Stack, Group, Alert, Code, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconAlertCircle, IconCheck } from '@tabler/icons-react';
import { useDecryption } from '@/hooks/useDecryption';
import type { DecryptFormData } from '@/lib/types';

interface DecryptFormProps {
  onSuccess?: (decryptedText: string) => void;
}

export function DecryptForm({ onSuccess }: DecryptFormProps) {
  const { decrypt, reset, isLoading, result } = useDecryption();

  const form = useForm<DecryptFormData>({
    initialValues: {
      encryptedText: '',
      password: '',
    },
    validate: {
      encryptedText: (value) => (value.length < 1 ? 'Encrypted text is required' : null),
      password: (value) => (value.length < 1 ? 'Password is required' : null),
    },
  });

  const handleSubmit = async (values: DecryptFormData) => {
    await decrypt(values);
  };

  const handleReset = () => {
    form.reset();
    reset();
  };

  // Call onSuccess when decryption is successful
  if (result?.success && result.decryptedText && onSuccess) {
    onSuccess(result.decryptedText);
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
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

        {result && !result.success && (
          <Alert icon={<IconAlertCircle size={16} />} color="red">
            {result.error}
          </Alert>
        )}

        {result?.success && result.decryptedText && (
          <Alert icon={<IconCheck size={16} />} color="green">
            <Text size="sm" fw={500} mb="xs">
              Decryption successful!
            </Text>
            <Code block style={{ whiteSpace: 'pre-wrap' }}>
              {result.decryptedText}
            </Code>
          </Alert>
        )}

        <Group justify="flex-end" mt="md">
          <Button variant="outline" onClick={handleReset}>
            Reset
          </Button>
          <Button type="submit" loading={isLoading}>
            {isLoading ? 'Decrypting...' : 'Decrypt'}
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
