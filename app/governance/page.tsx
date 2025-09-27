import { Container, Title, Text, SimpleGrid, ThemeIcon, Group, Stack, Box, Paper, Card } from '@mantine/core';
import { IconBuilding, IconCheck, IconShield, IconUsers, IconChartBar, IconLock } from '@tabler/icons-react';

const features = [
  {
    icon: IconCheck,
    title: 'Decentralized Voting',
    description: 'Transparent, tamper-proof voting mechanisms that ensure every voice is heard and every vote counts.',
  },
  {
    icon: IconShield,
    title: 'Smart Contracts',
    description: 'Automated governance processes through blockchain smart contracts that execute decisions transparently.',
  },
  {
    icon: IconUsers,
    title: 'Community Proposals',
    description: 'Citizens can submit, discuss, and vote on proposals that shape the future of the network state.',
  },
  {
    icon: IconChartBar,
    title: 'Real-time Analytics',
    description: 'Comprehensive dashboards showing governance metrics, participation rates, and decision outcomes.',
  },
  {
    icon: IconLock,
    title: 'Constitutional Framework',
    description: 'On-chain constitution that defines rights, responsibilities, and governance processes for all citizens.',
  },
  {
    icon: IconBuilding,
    title: 'Institutional Integration',
    description: 'Seamless integration with traditional institutions while maintaining decentralized governance principles.',
  },
];

export default function GovernancePage() {
  return (
    <Box bg="gray.0" mih="100vh">
      <Container size="xl" py="xl">
        <Stack gap="xl" align="center">
          {/* Page Header */}
          <Stack gap="xs" mb="xl" style={{ textAlign: 'center' }}>
            <Group justify="center" gap="sm">
              <ThemeIcon size="xl" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
                <IconBuilding size={20} />
              </ThemeIcon>
              <Title 
                order={1} 
                size="h1" 
                fw={800} 
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan' }}
              >
                Governance & Democracy
              </Title>
            </Group>
            <Text size="lg" c="dimmed" maw={600}>
              Building transparent, accountable, and participatory governance systems that empower citizens and ensure democratic decision-making.
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
              Ready to participate in transparent governance?
            </Text>
            <Text c="dimmed">
              Join our network state and help shape the future through democratic participation and community-driven decisions.
            </Text>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}
