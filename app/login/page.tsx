'use client';

import { Container, Box } from '@mantine/core';
import AuthenticationForm from '@/components/Authentication/Login/AuthenticationForm';

export default function LoginPage() {

  return (
    <Box
      style={{
        minHeight: '100vh',
        position: 'relative',
      }}
    >

      {/* Main Content */}
      <Container size="sm" pt="xs" pb="xl">
        <AuthenticationForm />
      </Container>
    </Box>
  );
}
