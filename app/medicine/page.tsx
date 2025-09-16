import { Container, Title, Text, SimpleGrid, ThemeIcon, Group, Stack, Box, Paper, Card } from '@mantine/core';
import { IconHeart, IconStethoscope, IconPill, IconMicroscope, IconShield, IconUsers } from '@tabler/icons-react';

const features = [
  {
    icon: IconStethoscope,
    title: 'Telemedicine',
    description: 'Access healthcare professionals remotely through secure video consultations and digital health monitoring.',
  },
  {
    icon: IconPill,
    title: 'Digital Prescriptions',
    description: 'Secure, blockchain-verified prescription management with automated refill reminders and drug interaction checks.',
  },
  {
    icon: IconMicroscope,
    title: 'Health Analytics',
    description: 'AI-powered health insights and predictive analytics to help prevent diseases and optimize treatment plans.',
  },
  {
    icon: IconShield,
    title: 'Data Privacy',
    description: 'End-to-end encrypted health records with patient-controlled access and HIPAA-compliant data protection.',
  },
  {
    icon: IconUsers,
    title: 'Community Health',
    description: 'Connect with healthcare communities, support groups, and wellness programs for holistic health management.',
  },
  {
    icon: IconHeart,
    title: 'Emergency Response',
    description: '24/7 emergency medical assistance with GPS-based location services and instant connection to local healthcare providers.',
  },
];

export default function MedicinePage() {
  return (
    <Box bg="gray.0" mih="100vh">
      <Container size="xl" py="xl">
        <Stack gap="xl" align="center">
          {/* Page Header */}
          <Stack gap="xs" mb="xl" style={{ textAlign: 'center' }}>
            <Group justify="center" gap="sm">
              <ThemeIcon size="xl" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
                <IconHeart size={20} />
              </ThemeIcon>
              <Title 
                order={1} 
                size="h1" 
                fw={800} 
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan' }}
              >
                Medicine & Healthcare
              </Title>
            </Group>
            <Text size="lg" c="dimmed" maw={600}>
              Revolutionizing healthcare through blockchain technology, telemedicine, and AI-powered solutions for better patient outcomes and accessible care.
            </Text>
          </Stack>

          {/* Features Grid */}
          <Paper 
            withBorder 
            radius="xl" 
            p="xl" 
            shadow="lg"
            style={{ 
              backgroundColor: 'white',
              borderColor: '#e0e0e0',
              maxWidth: '1200px',
              width: '100%'
            }}
          >
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
              {features.map((feature) => (
                <Card 
                  key={feature.title} 
                  withBorder 
                  radius="lg" 
                  p="lg" 
                  shadow="sm"
                  style={{ 
                    backgroundColor: 'white',
                    borderColor: '#e9ecef'
                  }}
                >
                  <Group mb="md">
                    <ThemeIcon size={50} radius="md" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
                      <feature.icon size={26} />
                    </ThemeIcon>
                    <Title order={3} size="h4">
                      {feature.title}
                    </Title>
                  </Group>
                  <Text c="dimmed">
                    {feature.description}
                  </Text>
                </Card>
              ))}
            </SimpleGrid>
          </Paper>

          {/* Call to Action */}
          <Paper 
            withBorder 
            radius="xl" 
            p="xl" 
            shadow="lg"
            style={{ 
              backgroundColor: 'white',
              borderColor: '#e0e0e0',
              maxWidth: '800px',
              width: '100%',
              textAlign: 'center'
            }}
          >
            <Text size="lg" fw={500} mb="md">
              Ready to transform your healthcare experience?
            </Text>
            <Text c="dimmed">
              Join our network of healthcare providers and patients working together for better health outcomes.
            </Text>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}
