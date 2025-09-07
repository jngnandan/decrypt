'use client';

import { TextInput, PasswordInput, Button, Stack, Text, Anchor, Alert } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconAlertCircle, IconMail, IconLock, IconUser } from '@tabler/icons-react';
import { useAuth } from '@/hooks';
import type { RegisterCredentials } from '@/lib/types';

interface RegisterFormProps {
  onSwitchToLogin?: () => void;
}

export function RegisterForm({ onSwitchToLogin }: RegisterFormProps) {
  const { register, isLoading, error, clearError } = useAuth();

  const form = useForm<RegisterCredentials>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: {
      name: (value) => {
        if (!value) return 'Name is required';
        if (value.length < 2) return 'Name must be at least 2 characters';
        return null;
      },
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
      confirmPassword: (value, values) => {
        if (!value) return 'Please confirm your password';
        if (value !== values.password) return 'Passwords do not match';
        return null;
      },
    },
  });

  const handleSubmit = async (values: RegisterCredentials) => {
    clearError();
    await register(values);
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
          label="Full Name"
          placeholder="Enter your full name"
          leftSection={<IconUser size={16} />}
          {...form.getInputProps('name')}
          required
        />

        <TextInput
          label="Email"
          placeholder="Enter your email"
          leftSection={<IconMail size={16} />}
          {...form.getInputProps('email')}
          required
        />

        <PasswordInput
          label="Password"
          placeholder="Create a password"
          leftSection={<IconLock size={16} />}
          {...form.getInputProps('password')}
          required
        />

        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm your password"
          leftSection={<IconLock size={16} />}
          {...form.getInputProps('confirmPassword')}
          required
        />

        <Button
          type="submit"
          fullWidth
          loading={isLoading}
          disabled={isLoading}
        >
          {isLoading ? 'Creating account...' : 'Create Account'}
        </Button>

        <Text ta="center" size="sm" c="dimmed">
          Already have an account?{' '}
          <Anchor
            size="sm"
            onClick={onSwitchToLogin}
            style={{ cursor: 'pointer' }}
          >
            Sign in
          </Anchor>
        </Text>
      </Stack>
    </form>
  );
}
