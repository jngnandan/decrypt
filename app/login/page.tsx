'use client';

import { Container, Paper, Title, Text, Anchor, Stack, Box } from '@mantine/core';
import { LoginForm } from '@/components/auth/LoginForm';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <Box bg="gray.0" mih="100vh" style={{ display: 'flex', alignItems: 'center' }}>
      <Container size="xs" w="100%">
        <Paper shadow="md" p={30} mt={30} radius="md">
          <Title ta="center" size="h1" fw={900} mb="md">
            Welcome back!
          </Title>
          
          <Text c="dimmed" size="sm" ta="center" mb="lg">
            Do not have an account yet?{' '}
            <Link href="/signup" style={{ textDecoration: 'none' }}>
              <Anchor size="sm" component="span">
                Create account
              </Anchor>
            </Link>
          </Text>

          <LoginForm />
        </Paper>
      </Container>
    </Box>
  );
}
