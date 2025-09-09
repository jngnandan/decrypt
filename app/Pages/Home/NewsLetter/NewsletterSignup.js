import React, { useState } from 'react';
import { TextInput, Button, Container, Title, Text, Paper, Grid } from '@mantine/core';
import axios from 'axios'; // For sending HTTP requests
import '@mantine/core/styles.css';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Ensure the URL matches your backend route
      await axios.post('/newsletter/subscribe', { email });
      setMessage('Thank you for subscribing to our newsletter!');
      setEmail('');
    } catch (error) {
      console.error('Subscription error:', error); // Log error for debugging
      setMessage('Failed to subscribe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      borderTop: '1px solid rgba(233, 236, 239, 0.3)', 
      position: 'relative',
      backgroundImage: 'url("https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Container size="lg" py="xl">
        <Grid justify="center" style={{ width: '100%' }} gutter="xl">
          <Grid.Col span={12} md={10} lg={8}>
            <Paper withBorder shadow="xl" p={20} radius="md" style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <Title align="center" mb="md" c="dark">Subscribe to our Newsletter</Title>
              <form onSubmit={handleSubmit}>
                <TextInput
                  label="Email"
                  placeholder="you@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  radius="xs"
                />
                <Button type="submit" className='w/2' mt="md" disabled={loading} radius="xs">
                  {loading ? 'Submitting...' : 'Subscribe'}
                </Button>
                {message && <Text mt="md" align="center">{message}</Text>}
              </form>
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}