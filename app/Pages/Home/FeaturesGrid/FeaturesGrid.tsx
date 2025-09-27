'use client';

import { IconUsers, IconShield, IconBuildingBank, IconSchool, IconPlant, IconChecklist } from '@tabler/icons-react';
import { Container, SimpleGrid, Text, Title, Card, Group, ThemeIcon, Button, Box } from '@mantine/core';

const FEATURES = [
  {
    icon: IconUsers,
    title: 'Expert Mentors',
    description: 'Connect with industry professionals who have years of experience and proven track records',
    color: '#00aff0',
    href: '/mentors'
  },
  {
    icon: IconSchool,
    title: 'Personalized Learning',
    description: 'Get customized guidance tailored to your specific goals and learning style',
    color: '#ff6b35',
    href: '/learning'
  },
  {
    icon: IconChecklist,
    title: 'Goal Tracking',
    description: 'Set clear objectives and track your progress with built-in milestone tracking',
    color: '#7c4dff',
    href: '/goals'
  },
  {
    icon: IconBuildingBank,
    title: 'Career Advancement',
    description: 'Accelerate your professional growth with strategic career development advice',
    color: '#00c851',
    href: '/career'
  },
  {
    icon: IconShield,
    title: 'Safe Environment',
    description: 'Verified mentors and secure platform ensuring a trusted mentorship experience',
    color: '#2bbbad',
    href: '/safety'
  },
  {
    icon: IconPlant,
    title: 'Long-term Growth',
    description: 'Build lasting professional relationships and continuous skill development',
    color: '#ff5722',
    href: '/growth'
  },
];

interface FeatureCardProps {
  icon: React.FC<any>;
  title: string;
  description: string;
  color: string;
  href: string;
}

export function FeatureCard({ icon: Icon, title, description, color, href }: FeatureCardProps) {
  return (
    <Card
      shadow="sm"
      radius="lg"
      style={{
        border: '1px solid #e9ecef',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
        height: '100%'
      }}
      styles={{
        root: {
          '&:hover': {
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
            transform: 'translateY(-2px)'
          }
        }
      }}
    >
      <Card.Section p="lg" style={{ flex: 1 }}>
        <Group gap="md" align="flex-start">
          <ThemeIcon
            size={48}
            radius="md"
            style={{ backgroundColor: `${color}15`, color: color, border: 'none' }}
          >
            <Icon size={28} stroke={1.8} />
          </ThemeIcon>
          
          <Box style={{ flex: 1 }}>
            <Text fw={600} size="lg" style={{ color: '#1c1c1c', marginBottom: '8px' }}>
              {title}
            </Text>
            <Text size="sm" style={{ color: '#666', lineHeight: 1.5 }}>
              {description}
            </Text>
          </Box>
        </Group>
      </Card.Section>

      <Card.Section p="lg" pt={0}>
        <Button
          variant="subtle"
          size="sm"
          style={{
            color: color,
            padding: '8px 0',
            fontWeight: 600,
            backgroundColor: 'transparent'
          }}
          rightSection={<span style={{ fontSize: '16px' }}>→</span>}
        >
          Learn more
        </Button>
      </Card.Section>
    </Card>
  );
}

export function FeaturesGrid() {
  return (
    <div style={{ backgroundColor: '#f8f9fa', paddingTop: '80px', paddingBottom: '80px' }}>
      <Container size="lg">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Title 
            order={2} 
            style={{ 
              fontSize: '36px', 
              fontWeight: 700, 
              color: '#1c1c1c',
              marginBottom: '16px'
            }}
          >
            Why choose our mentorship platform?
          </Title>
          <Text 
            size="lg" 
            style={{ 
              color: '#666', 
              maxWidth: '600px', 
              margin: '0 auto',
              fontSize: '18px',
              lineHeight: 1.6
            }}
          >
            Discover the features that make our platform the best choice for your 
            professional development and career growth journey.
          </Text>
        </div>

        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 3 }}
          spacing="xl"
          verticalSpacing="xl"
        >
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </SimpleGrid>

        {/* Value Proposition */}
        <div style={{ textAlign: 'center', marginTop: '80px' }}>
          <Group justify="center" gap="xl">
            <div style={{ textAlign: 'center' }}>
              <Text fw={700} size="xl" style={{ color: '#1c1c1c', marginBottom: '8px' }}>
                1000+
              </Text>
              <Text size="sm" style={{ color: '#666' }}>
                Expert mentors from top companies
              </Text>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Text fw={700} size="xl" style={{ color: '#1c1c1c', marginBottom: '8px' }}>
                50k+
              </Text>
              <Text size="sm" style={{ color: '#666' }}>
                Successful mentorship sessions completed
              </Text>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Text fw={700} size="xl" style={{ color: '#1c1c1c', marginBottom: '8px' }}>
                95%
              </Text>
              <Text size="sm" style={{ color: '#666' }}>
                Of mentees achieve their career goals
              </Text>
            </div>
          </Group>
        </div>
      </Container>
    </div>
  );
}