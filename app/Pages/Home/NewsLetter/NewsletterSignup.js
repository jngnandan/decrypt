import React, { useState } from 'react';
import { TextInput, Button, Container, Title, Text, Paper, Anchor, Center, Box } from '@mantine/core';
import axios from 'axios';
import '@mantine/core/styles.css';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post('/newsletter/subscribe', { email });
      setMessage('Thank you for subscribing to our newsletter!');
      setEmail('');
    } catch (error) {
      console.error('Subscription error:', error);
      setMessage('Failed to subscribe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      backgroundColor: '#f8f9fa',
      minHeight: '500px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 0'
    }}>
      <Container size={420}>
        <Center>
          <Paper withBorder shadow="md" p={30} radius="md" style={{ width: '100%', maxWidth: 420 }}>
            <Title order={2} ta="center" mb={5}>
              Stay Updated with Liberland
            </Title>
            
            <Text c="dimmed" size="sm" ta="center" mb={30}>
              Enter your email to receive updates about our blockchain governance innovations
            </Text>

            <form onSubmit={handleSubmit}>
              <TextInput
                label="Your email"
                placeholder="your@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                radius="md"
                size="md"
                mb="md"
              />
              
              <Button 
                type="submit" 
                fullWidth 
                mt="xl" 
                size="md"
                disabled={loading}
                style={{ backgroundColor: '#00aff0' }}
              >
                {loading ? 'Subscribing...' : 'Subscribe to updates'}
              </Button>
              
              {message && (
                <Text 
                  mt="md" 
                  ta="center" 
                  size="sm"
                  c={message.includes('Thank you') ? 'teal' : 'red'}
                >
                  {message}
                </Text>
              )}
            </form>

            <Text c="dimmed" size="xs" ta="center" mt={20}>
              <Anchor href="/" size="xs" c="dimmed">
                Back to home page
              </Anchor>
            </Text>
          </Paper>
        </Center>
      </Container>
    </div>
  );
}