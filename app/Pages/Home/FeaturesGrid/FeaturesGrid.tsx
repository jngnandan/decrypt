'use client';

import { IconUsers, IconShield, IconBuildingBank, IconSchool, IconPlant, IconChecklist } from '@tabler/icons-react';
import { Container, SimpleGrid, Text, Title, Card, Group, ThemeIcon, Button, Box } from '@mantine/core';

const SERVICES = [
  {
    icon: IconChecklist,
    title: 'Governance',
    description: 'Participate in community decisions through transparent voting mechanisms',
    color: '#00aff0',
    href: '/governance'
  },
  {
    icon: IconBuildingBank,
    title: 'Treasury',
    description: 'Transparent financial management with real-time tracking and accountability',
    color: '#ff6b35',
    href: '/treasury'
  },
  {
    icon: IconSchool,
    title: 'Education',
    description: 'Access online courses, workshops, and skill development programs',
    color: '#7c4dff',
    href: '/education'
  },
  {
    icon: IconUsers,
    title: 'Community',
    description: 'Connect with like-minded citizens and build meaningful relationships',
    color: '#00c851',
    href: '/community'
  },
  {
    icon: IconPlant,
    title: 'Environment',
    description: 'Contribute to sustainability initiatives and track environmental impact',
    color: '#2bbbad',
    href: '/environment'
  },
  {
    icon: IconShield,
    title: 'Security',
    description: 'Blockchain-secured platform ensuring data integrity and privacy',
    color: '#ff5722',
    href: '/security'
  },
];

interface ServiceCardProps {
  icon: React.FC<any>;
  title: string;
  description: string;
  color: string;
  href: string;
}

export function ServiceCard({ icon: Icon, title, description, color, href }: ServiceCardProps) {
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
            How are you participating today?
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
            Explore our community services and find the perfect way to contribute to 
            our shared vision of transparent governance and sustainable living.
          </Text>
        </div>

        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 3 }}
          spacing="xl"
          verticalSpacing="xl"
        >
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </SimpleGrid>

        {/* Value Proposition */}
        <div style={{ textAlign: 'center', marginTop: '80px' }}>
          <Group justify="center" gap="xl">
            <div style={{ textAlign: 'center' }}>
              <Text fw={700} size="xl" style={{ color: '#1c1c1c', marginBottom: '8px' }}>
                Transparent
              </Text>
              <Text size="sm" style={{ color: '#666' }}>
                Every decision is recorded on blockchain for complete transparency
              </Text>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Text fw={700} size="xl" style={{ color: '#1c1c1c', marginBottom: '8px' }}>
                Secure
              </Text>
              <Text size="sm" style={{ color: '#666' }}>
                Advanced cryptography protects your identity and contributions
              </Text>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Text fw={700} size="xl" style={{ color: '#1c1c1c', marginBottom: '8px' }}>
                Community-driven
              </Text>
              <Text size="sm" style={{ color: '#666' }}>
                Citizens shape the future through collective decision-making
              </Text>
            </div>
          </Group>
        </div>
      </Container>
    </div>
  );
}
