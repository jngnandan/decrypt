'use client';

import { Card, Title, Text, Stack, Tabs, Container } from '@mantine/core';
import { IconLogin, IconUserPlus } from '@tabler/icons-react';
import { useState } from 'react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

export function AuthCard() {
  const [activeTab, setActiveTab] = useState<string | null>('login');

  const handleSwitchToRegister = () => setActiveTab('register');
  const handleSwitchToLogin = () => setActiveTab('login');

  const handleForgotPassword = () => {
    // TODO: Implement forgot password functionality
    console.log('Forgot password clicked');
  };

  return (
    <Container size="sm" py="xl">
      <Card shadow="lg" padding="xl" radius="md" withBorder>
        <Stack align="center" gap="xl">
          <Stack align="center" gap="sm">
            <Title order={1} size="2rem" c="blue">
              Welcome to Decrypt
            </Title>
            <Text c="dimmed" ta="center">
              Sign in to your account or create a new one
            </Text>
          </Stack>

          <Tabs
            value={activeTab}
            onChange={setActiveTab}
            w="100%"
            variant="pills"
          >
            <Tabs.List justify="center">
              <Tabs.Tab
                value="login"
                leftSection={<IconLogin size={16} />}
              >
                Sign In
              </Tabs.Tab>
              <Tabs.Tab
                value="register"
                leftSection={<IconUserPlus size={16} />}
              >
                Sign Up
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="login" pt="md">
              <LoginForm
                onSwitchToRegister={handleSwitchToRegister}
                onForgotPassword={handleForgotPassword}
              />
            </Tabs.Panel>

            <Tabs.Panel value="register" pt="md">
              <RegisterForm onSwitchToLogin={handleSwitchToLogin} />
            </Tabs.Panel>
          </Tabs>
        </Stack>
      </Card>
    </Container>
  );
}
