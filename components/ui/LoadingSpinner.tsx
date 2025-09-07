import { Loader, Center, Text, Stack } from '@mantine/core';

interface LoadingSpinnerProps {
  message?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export function LoadingSpinner({ 
  message = 'Loading...', 
  size = 'md' 
}: LoadingSpinnerProps) {
  return (
    <Center p="xl">
      <Stack align="center" gap="md">
        <Loader size={size} />
        <Text c="dimmed">{message}</Text>
      </Stack>
    </Center>
  );
}
