'use client';

import { TextInput, PasswordInput, Checkbox, Button, Stack, Group, Text, Anchor, Alert } from '@mantine/core';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { notifications } from '@mantine/notifications';
import { IconAlertCircle, IconMail, IconLock } from '@tabler/icons-react';

interface LoginFormProps {
  onSwitchToRegister?: () => void;
  onForgotPassword?: () => void;
}

export function LoginForm({ onSwitchToRegister, onForgotPassword }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
    
    setError(null);
    setIsLoading(true);
    
    try {
      // Basic validation
      if (!email || !email.includes('@')) {
        throw new Error('Please enter a valid email address');
      }
      
      if (!password || password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }
      
      console.log('Validation passed, creating user...');
      
      // Create user object
      const user = {
        id: '1',
        email: email,
        name: email.split('@')[0],
        displayName: email.split('@')[0],
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
      };
      
      // Store in localStorage securely and verify
      try {
        const userDataString = JSON.stringify(user);
        localStorage.setItem('user', userDataString);
        
        // Verify storage worked
        const storedData = localStorage.getItem('user');
        console.log('Login: User stored:', user);
        console.log('Login: Verification - stored data:', storedData);
        
        if (!storedData) {
          throw new Error('Failed to store user data');
        }
        
        // Show success notification
        notifications.show({
          title: 'Login Successful!',
          message: `Welcome ${user.name}!`,
          color: 'green',
        });
        
        // Add small delay to ensure localStorage is fully written, then redirect
        setTimeout(() => {
          console.log('Redirecting to dashboard...');
          console.log('Final check - user data:', localStorage.getItem('user'));
          window.location.href = '/dashboard';
        }, 500);
        
      } catch (storageError) {
        console.error('Storage error:', storageError);
        setError('Login failed: Unable to store session');
      }
      
    } catch (err) {
      console.error('Login error:', err);
      const errorMessage = err instanceof Error ? err.message : 'Login failed';
      setError(errorMessage);
      
      notifications.show({
        title: 'Login Failed',
        message: errorMessage,
        color: 'red',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        {error && (
          <Alert 
            icon={<IconAlertCircle size={16} />} 
            color="red" 
            onClose={() => setError(null)}
            withCloseButton
          >
            {error}
          </Alert>
        )}

        <TextInput
          label="Email"
          placeholder="Enter your email"
          leftSection={<IconMail size={16} />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          leftSection={<IconLock size={16} />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Group justify="space-between">
          <Checkbox
            label="Remember me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.currentTarget.checked)}
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