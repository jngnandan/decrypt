'use client';

import { Container, Stack, Text, Group, Button, Box } from '@mantine/core';
import { IconArrowLeft, IconShield } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import SignupForm from '../Pages/Authentication/Signup/SignupForm';
import { APP_CONFIG } from '@/lib/constants';

export default function SignupPage() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/');
  };

  return (
    <Box
      style={{
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      {/* Header */}
      <Container size="lg" pt="md">
        <Group justify="space-between" align="center">
          <Group gap="sm">
            <Button
              variant="outline"
              leftSection={<IconArrowLeft size={16} />}
              onClick={handleGoBack}
              size="sm"
            >
              Back to Home
            </Button>
          </Group>
          
          <Group gap="xs">
            <IconShield size={24} color="blue" />
            <Text c="blue" fw={600} size="lg">
              {APP_CONFIG.name}
            </Text>
          </Group>
        </Group>
      </Container>

      {/* Main Content */}
      <Container size="sm" py="xl">
        <SignupForm />
      </Container>
    </Box>
  );
}
