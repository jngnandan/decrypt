import { Container, Title, Text, SimpleGrid, ThemeIcon, Group, Stack, Box, Paper, Card } from '@mantine/core';
import { IconUsers, IconMessageCircle, IconCheck, IconBulb, IconTrendingUp, IconHeart } from '@tabler/icons-react';

const features = [
  {
    icon: IconMessageCircle,
    title: 'Public Forums',
    description: 'Open discussion platforms where citizens can engage in meaningful dialogue about social and political issues.',
  },
  {
    icon: IconCheck,
    title: 'Opinion Polls',
    description: 'Regular polling mechanisms to gauge public sentiment and inform policy decisions through community input.',
  },
  {
    icon: IconBulb,
    title: 'Policy Proposals',
    description: 'Citizen-driven policy development with collaborative drafting and community feedback integration.',
  },
  {
    icon: IconTrendingUp,
    title: 'Social Analytics',
    description: 'Data-driven insights into social trends, political sentiment, and community engagement patterns.',
  },
  {
    icon: IconHeart,
    title: 'Civic Engagement',
    description: 'Tools and platforms that encourage active participation in civic life and community building.',
  },
  {
    icon: IconUsers,
    title: 'Community Building',
    description: 'Foster strong social connections and shared values through organized events and collaborative projects.',
  },
];

export default function SocioPoliticalPage() {
  return (
    <Box bg="gray.0" mih="100vh">
      <Container size="xl" py="xl">
        <Stack gap="xl" align="center">
          {/* Page Header */}
          <Stack gap="xs" mb="xl" style={{ textAlign: 'center' }}>
            <Group justify="center" gap="sm">
              <ThemeIcon size="xl" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
                <IconUsers size={20} />
              </ThemeIcon>
              <Text 
                component="h1" 
                size="h1" 
                fw={800} 
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan' }}
              >
                Socio-Political Discourse
              </Text>
            </Group>
            <Text size="lg" c="dimmed" maw={600}>
              Fostering meaningful dialogue, civic engagement, and community building through transparent communication platforms and participatory democracy.
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
              Ready to engage in meaningful discourse?
            </Text>
            <Text c="dimmed">
              Join our community platforms and participate in shaping the social and political future of our network state.
            </Text>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}
