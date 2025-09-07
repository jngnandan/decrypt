'use client';

import { TextInput, PasswordInput, Checkbox, Button, Stack, Group, Text, Anchor, Alert } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconAlertCircle, IconMail, IconLock } from '@tabler/icons-react';
import { useAuth } from '@/hooks';
import type { LoginCredentials } from '@/lib/types';

interface LoginFormProps {
  onSwitchToRegister?: () => void;
  onForgotPassword?: () => void;
}

export function LoginForm({ onSwitchToRegister, onForgotPassword }: LoginFormProps) {
  const { login, isLoading, error, clearError } = useAuth();

  const form = useForm<LoginCredentials>({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validate: {
      email: (value) => {
        if (!value) return 'Email is required';
        if (!/^\S+@\S+\.\S+$/.test(value)) return 'Invalid email format';
        return null;
      },
      password: (value) => {
        if (!value) return 'Password is required';
        if (value.length < 6) return 'Password must be at least 6 characters';
        return null;
      },
    },
  });

  const handleSubmit = async (values: LoginCredentials) => {
    clearError();
    await login(values);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap="md">
        {error && (
          <Alert 
            icon={<IconAlertCircle size={16} />} 
            color="red" 
            onClose={clearError}
            withCloseButton
          >
            {error}
          </Alert>
        )}

        <TextInput
          label="Email"
          placeholder="Enter your email"
          leftSection={<IconMail size={16} />}
          {...form.getInputProps('email')}
          required
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          leftSection={<IconLock size={16} />}
          {...form.getInputProps('password')}
          required
        />

        <Group justify="space-between">
          <Checkbox
            label="Remember me"
            {...form.getInputProps('rememberMe', { type: 'checkbox' })}
          />
          <Anchor
            size="sm"
            onClick={onForgotPassword}
            style={{ cursor: 'pointer' }}
          >
            Forgot password?
          </Anchor>
        </Group>

        <Button
          type="submit"
          fullWidth
          loading={isLoading}
          disabled={isLoading}
        >
          {isLoading ? 'Signing in...' : 'Sign In'}
        </Button>

        <Text ta="center" size="sm" c="dimmed">
          Don't have an account?{' '}
          <Anchor
            size="sm"
            onClick={onSwitchToRegister}
            style={{ cursor: 'pointer' }}
          >
            Sign up
          </Anchor>
        </Text>
      </Stack>
    </form>
  );
}
