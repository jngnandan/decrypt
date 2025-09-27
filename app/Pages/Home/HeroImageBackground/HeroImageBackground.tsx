'use client';

import cx from 'clsx';
import { Button, Container, Text, Title, Paper, Stack, Group, TextInput, Select, Card } from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';

export function HeroImageBackground() {
  return (
    <div style={{ backgroundColor: '#fff', paddingTop: '60px', paddingBottom: '80px' }}>
      <Container size="lg">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Title 
            order={1} 
            style={{ 
              fontSize: '48px', 
              fontWeight: 700, 
              color: '#1c1c1c',
              marginBottom: '20px',
              lineHeight: 1.2
            }}
          >
            Find your perfect{' '}
            <Text component="span" inherit style={{ color: '#00aff0' }}>
              mentor
            </Text>
          </Title>

          <Text 
            size="xl" 
            style={{ 
              color: '#666', 
              maxWidth: '600px', 
              margin: '0 auto',
              fontSize: '20px',
              lineHeight: 1.5
            }}
          >
            Connect with experienced professionals who will guide you through your career journey 
            and help you achieve your goals.
          </Text>
        </div>

        {/* Main Action Card */}
        <Card 
          shadow="lg" 
          radius="lg" 
          style={{ 
            maxWidth: '800px', 
            margin: '0 auto',
            border: '1px solid #e9ecef',
            backgroundColor: '#fff'
          }}
        >
          <Stack gap="lg">
            <Group justify="center" gap="xl">
              <Button
                variant="subtle"
                size="lg"
                leftSection={<IconSearch size={20} />}
                style={{
                  color: '#00aff0',
                  backgroundColor: 'transparent',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: 600
                }}
              >
                Find mentors
              </Button>
              <Button
                variant="subtle"
                size="lg"
                leftSection={<IconArrowRight size={20} />}
                style={{
                  color: '#666',
                  backgroundColor: 'transparent',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: 600
                }}
              >
                Become a mentor
              </Button>
            </Group>

            <div style={{ borderTop: '1px solid #e9ecef', paddingTop: '24px' }}>
              <Group gap="md" align="end">
                <TextInput
                  placeholder="What skills do you want to develop?"
                  size="lg"
                  style={{ flex: 1 }}
                  styles={{
                    input: {
                      border: '2px solid #e9ecef',
                      borderRadius: '8px',
                      fontSize: '16px',
                      padding: '12px 16px'
                    }
                  }}
                />
                <Select
                  placeholder="Industry"
                  size="lg"
                  data={['Technology', 'Business', 'Design', 'Marketing', 'Finance']}
                  style={{ minWidth: '160px' }}
                  styles={{
                    input: {
                      border: '2px solid #e9ecef',
                      borderRadius: '8px',
                      fontSize: '16px'
                    }
                  }}
                />
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
                  rightSection={<IconSearch size={20} />}
                >
                  Search
                </Button>
              </Group>
            </div>
          </Stack>
        </Card>

        {/* Secondary Actions */}
        <Group justify="center" gap="xl" style={{ marginTop: '40px' }}>
          <Button 
            variant="outline" 
            size="lg" 
            component={Link} 
            href="/mentors"
            style={{
              borderColor: '#00aff0',
              color: '#00aff0',
              borderRadius: '8px',
              padding: '12px 32px',
              fontSize: '16px',
              fontWeight: 600
            }}
          >
            Browse Mentors
          </Button>
          <Button 
            variant="subtle" 
            size="lg"
            style={{
              color: '#666',
              fontSize: '16px',
              fontWeight: 600
            }}
          >
            How it works
          </Button>
        </Group>
      </Container>
    </div>
  );
}