'use client';

import { TextInput, PasswordInput, Checkbox, Button, Stack, Group, Text, Anchor, Alert } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconAlertCircle, IconMail, IconLock } from '@tabler/icons-react';
import { useState } from 'react';
import { notifications } from '@mantine/notifications';

interface LoginCredentials {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface LoginFormProps {
  onSwitchToRegister?: () => void;
  onForgotPassword?: () => void;
}

export function LoginForm({ onSwitchToRegister, onForgotPassword }: LoginFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
    setError(null);
    setIsLoading(true);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock login - accepts any email/password with basic validation
      if (values.email && values.password.length >= 6) {
        const user = {
          id: '1',
          email: values.email,
          name: values.email.split('@')[0],
          displayName: values.email.split('@')[0],
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${values.email}`
        };
        
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(user));
        
        // Show success notification
        notifications.show({
          title: 'Welcome back!',
          message: `Hello ${user.name}`,
          color: 'green',
        });
        
        // Redirect to dashboard
        window.location.href = '/dashboard';
      } else {
        throw new Error('Please enter a valid email and password (minimum 6 characters)');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed';
      setError(errorMessage);
      notifications.show({
        title: 'Login failed',
        message: errorMessage,
        color: 'red',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const clearError = () => setError(null);

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
