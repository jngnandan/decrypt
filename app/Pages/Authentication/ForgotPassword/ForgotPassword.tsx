'use client';

import React, { useState } from 'react';
import {
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
  Anchor,
  Center,
  Box,
  rem,
} from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import classes from './ForgotPassword.module.css';
import Link from "next/link";
import { auth } from '../../../firebase.js';
import { sendPasswordResetEmail } from 'firebase/auth';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      // Firebase is temporarily disabled, show mock response
      if (!auth) {
        setMessage('Password reset feature temporarily disabled. Please contact support.');
        return;
      }
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent. Please check your inbox.');
    } catch (error: any) {
      console.error('Error sending password reset email:', error);
      setMessage(`Error: ${error.message || 'Password reset failed'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container size={460} mt={96}>
      <Title className={classes.title} ta="center">
        Forgot your password?
      </Title>
      <Text c="dimmed" fz="sm" ta="center">
        Enter your email to get a reset link
      </Text>
      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Your email"
            placeholder="me@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {message && (
            <Text color={message.includes('Error') ? 'red' : 'green'} mt="sm">
              {message}
            </Text>
          )}
          <Group justify="space-between" mt="lg" className={classes.controls}>
            <Anchor c="dimmed" size="sm" className={classes.control}>
              <Center inline>
                <IconArrowLeft style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                <Link href="/login">
                  <Box ml={5}>Back to the login page</Box>
                </Link>
              </Center>
            </Anchor>
            <Button type="submit" className={classes.control} loading={isLoading}>
              Reset password
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
}

export default ForgotPassword;