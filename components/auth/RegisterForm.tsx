'use client';

import { TextInput, PasswordInput, Button, Stack, Text, Anchor, Alert } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconAlertCircle, IconMail, IconLock, IconUser } from '@tabler/icons-react';
import { useState } from 'react';
import { notifications } from '@mantine/notifications';

interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface RegisterFormProps {
  onSwitchToLogin?: () => void;
}

export function RegisterForm({ onSwitchToLogin }: RegisterFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
    setError(null);
    setIsLoading(true);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock registration - basic validation
      if (values.name && values.email && values.password.length >= 6 && values.password === values.confirmPassword) {
        const user = {
          id: '1',
          email: values.email,
          name: values.name,
          displayName: values.name,
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${values.email}`
        };
        
        // Store user data in localStorage securely
        try {
          localStorage.setItem('user', JSON.stringify(user));
        } catch (storageError) {
          console.warn('Storage not available, continuing without persistence');
        }
        
        // Show success notification
        notifications.show({
          title: 'Welcome!',
          message: `Account created for ${user.name}`,
          color: 'green',
        });
        
        // Redirect to dashboard using Next.js router
        setTimeout(() => {
          window.location.assign('/dashboard');
        }, 1000);
      } else {
        throw new Error('Please fill in all fields correctly and ensure passwords match');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Registration failed';
      setError(errorMessage);
      notifications.show({
        title: 'Registration failed',
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
