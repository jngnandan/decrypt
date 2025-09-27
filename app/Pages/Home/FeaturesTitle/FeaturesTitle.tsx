'use client';

import { IconShield, IconLock, IconCheck, IconUsers, IconEye } from '@tabler/icons-react';
import { Button, Container, Text, Title, Group, Stack, Card, SimpleGrid, Box, ThemeIcon } from '@mantine/core';

export function FeaturesTitle() {
  return (
    <div style={{ backgroundColor: '#fff', paddingTop: '80px', paddingBottom: '80px' }}>
      <Container size="lg">
        {/* Trust Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '60px', marginBottom: '80px' }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <ThemeIcon size={64} radius="md" style={{ backgroundColor: '#fff0e6', border: '2px solid #ff6b35' }}>
                <IconShield size={32} style={{ color: '#ff6b35' }} stroke={1.8} />
              </ThemeIcon>
              <Title order={2} style={{ fontSize: '32px', fontWeight: 700, color: '#1c1c1c' }}>
                Your success is our priority
              </Title>
            </div>
            
            <Text size="lg" style={{ color: '#666', lineHeight: 1.6, marginBottom: '24px' }}>
              At Protocon, we're committed to creating meaningful mentorship connections that drive real results. 
              Our platform ensures quality matches, verified mentors, and a secure environment for professional growth. 
              Your journey to success starts with the right guidance.
            </Text>
            
            <Button 
              size="lg"
              style={{
                backgroundColor: '#00aff0',
                borderRadius: '8px',
                padding: '12px 32px',
                fontSize: '16px',
                fontWeight: 600,
                border: 'none'
              }}
            >
              Get started
            </Button>
          </div>
          
          <div style={{ width: '300px', textAlign: 'center' }}>
            <div style={{ 
              width: '200px', 
              height: '200px', 
              backgroundColor: '#f0f9ff', 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
              border: '3px solid #00aff0'
            }}>
              <IconUsers size={80} style={{ color: '#00aff0' }} stroke={1.5} />
            </div>
          </div>
        </div>

        {/* Popular Mentorship Areas */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Title order={2} style={{ fontSize: '36px', fontWeight: 700, color: '#1c1c1c', marginBottom: '16px' }}>
            What would you like to work on?
          </Title>
          <Text size="lg" style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Explore our most popular mentorship areas and find the perfect match for your development goals
          </Text>
        </div>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg" style={{ marginBottom: '60px' }}>
          <Card radius="lg" style={{ border: '1px solid #e9ecef', textAlign: 'center', padding: '32px' }}>
            <Text fw={600} size="lg" style={{ color: '#1c1c1c', marginBottom: '8px' }}>
              Career Development
            </Text>
            <Text size="sm" style={{ color: '#666', marginBottom: '16px' }}>
              Strategic career planning and advancement
            </Text>
            <Text fw={600} style={{ color: '#00aff0', fontSize: '18px' }}>
              500+ mentors available
            </Text>
          </Card>

          <Card radius="lg" style={{ border: '1px solid #e9ecef', textAlign: 'center', padding: '32px' }}>
            <Text fw={600} size="lg" style={{ color: '#1c1c1c', marginBottom: '8px' }}>
              Leadership Skills
            </Text>
            <Text size="sm" style={{ color: '#666', marginBottom: '16px' }}>
              Develop executive presence and team management
            </Text>
            <Text fw={600} style={{ color: '#00aff0', fontSize: '18px' }}>
              350+ mentors available
            </Text>
          </Card>

          <Card radius="lg" style={{ border: '1px solid #e9ecef', textAlign: 'center', padding: '32px' }}>
            <Text fw={600} size="lg" style={{ color: '#1c1c1c', marginBottom: '8px' }}>
              Technical Skills
            </Text>
            <Text size="sm" style={{ color: '#666', marginBottom: '16px' }}>
              Programming, design, and technical expertise
            </Text>
            <Text fw={600} style={{ color: '#00aff0', fontSize: '18px' }}>
              800+ mentors available
            </Text>
          </Card>
        </SimpleGrid>

        {/* Call to Action */}
        <div style={{ textAlign: 'center', backgroundColor: '#f8f9fa', borderRadius: '16px', padding: '60px 40px' }}>
          <Title order={2} style={{ fontSize: '28px', fontWeight: 700, color: '#1c1c1c', marginBottom: '16px' }}>
            Ready to accelerate your growth?
          </Title>
          <Text size="lg" style={{ color: '#666', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
            Join thousands of professionals who have transformed their careers through meaningful mentorship connections.
          </Text>
          <Group justify="center" gap="lg">
            <Button 
              size="lg"
              style={{
                backgroundColor: '#00aff0',
                borderRadius: '8px',
                padding: '12px 32px',
                fontSize: '16px',
                fontWeight: 600,
                border: 'none'
              }}
            >
              Find a mentor
            </Button>
            <Button 
              variant="outline"
              size="lg"
              style={{
                borderColor: '#00aff0',
                color: '#00aff0',
                borderRadius: '8px',
                padding: '12px 32px',
                fontSize: '16px',
                fontWeight: 600
              }}
            >
              Become a mentor
            </Button>
          </Group>
        </div>
      </Container>
    </div>
  );
}