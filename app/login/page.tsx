'use client';

import { Container, Box } from '@mantine/core';
import AuthenticationForm from '@/components/Authentication/Login/AuthenticationForm';

export default function LoginPage() {
  return (
    <Box bg="gray.0" mih="100vh">
      <Container size="sm" py="xl">
        <AuthenticationForm />
      </Container>
    </Box>
  );
}
