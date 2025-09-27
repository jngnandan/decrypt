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
      
      // Try multiple storage methods for browser compatibility
      let storageSuccess = false;
      
      try {
        const userDataString = JSON.stringify(user);
        
        // Try localStorage first
        if (typeof Storage !== 'undefined') {
          localStorage.setItem('user', userDataString);
          const storedData = localStorage.getItem('user');
          if (storedData) {
            console.log('Login: Stored in localStorage successfully');
            storageSuccess = true;
          }
        }
        
        // If localStorage failed, try sessionStorage
        if (!storageSuccess && typeof sessionStorage !== 'undefined') {
          sessionStorage.setItem('user', userDataString);
          const storedData = sessionStorage.getItem('user');
          if (storedData) {
            console.log('Login: Stored in sessionStorage successfully');
            storageSuccess = true;
          }
        }
        
        // If both fail, use URL parameter method (fallback for restricted environments)
        if (!storageSuccess) {
          console.log('Login: Using URL parameter method as fallback');
          const encodedUser = btoa(userDataString); // Base64 encode for URL safety
          // Show success notification
          notifications.show({
            title: 'Login Successful!',
            message: `Welcome ${user.name}!`,
            color: 'green',
          });
          
          // Redirect with user data in URL
          setTimeout(() => {
            window.location.href = `/dashboard?auth=${encodedUser}`;
          }, 500);
          return;
        }
        
        // Show success notification for storage methods
        notifications.show({
          title: 'Login Successful!',
          message: `Welcome ${user.name}!`,
          color: 'green',
        });
        
        // Redirect to dashboard
        setTimeout(() => {
          console.log('Redirecting to dashboard...');
          window.location.href = '/dashboard';
        }, 500);
        
      } catch (storageError) {
        console.error('All storage methods failed:', storageError);
        
        // As final fallback, proceed without storage (demo mode)
        notifications.show({
          title: 'Login Successful!',
          message: `Welcome ${user.name}! (Demo mode - session won't persist)`,
          color: 'orange',
        });
        
        // Encode user data and pass via URL
        const encodedUser = btoa(JSON.stringify(user));
        setTimeout(() => {
          window.location.href = `/dashboard?auth=${encodedUser}`;
        }, 500);
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