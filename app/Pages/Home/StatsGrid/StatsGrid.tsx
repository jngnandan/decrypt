import { Container, Group, Paper, SimpleGrid, Text, ThemeIcon } from '@mantine/core';
import { IconUsers, IconCoin, IconLeaf, IconBrandGithub } from '@tabler/icons-react';

const data = [
  {
    title: 'Active Citizens',
    value: '12,847',
    diff: '+34%',
    description: 'Registered e-residents and active participants in the Liberland ecosystem',
    icon: IconUsers,
    color: '#00aff0',
  },
  {
    title: 'LLD Tokens Circulating',
    value: '70M',
    diff: '+18%', 
    description: 'Total Liberland Dollar tokens in circulation supporting the economy',
    icon: IconCoin,
    color: '#51cf66',
  },
  {
    title: 'Carbon Credits Issued',
    value: '156,892',
    diff: '+52%',
    description: 'Verified carbon credits generated through sustainable initiatives',
    icon: IconLeaf,
    color: '#40c057',
  },
  {
    title: 'Open Source Projects',
    value: '23',
    diff: '+127%',
    description: 'Community-driven development projects building the network state',
    icon: IconBrandGithub,
    color: '#fd7e14',
  },
];

export function StatsGrid() {
  const stats = data.map((stat) => {
    const Icon = stat.icon;
    const DiffIcon = stat.diff.startsWith('+') ? () => <span style={{ color: '#51cf66' }}>↗</span> : () => <span style={{ color: '#ff6b6b' }}>↘</span>;

    return (
      <Paper withBorder p="md" radius="md" key={stat.title} style={{ height: '100%' }}>
        <Group justify="space-between" mb="xs">
          <Text size="xs" c="dimmed" fw={700} tt="uppercase">
            {stat.title}
          </Text>
          <ThemeIcon
            color="gray"
            variant="light"
            style={{
              color: stat.color,
              backgroundColor: `${stat.color}15`,
            }}
            size={38}
            radius="md"
          >
            <Icon size={28} stroke={1.5} />
          </ThemeIcon>
        </Group>

        <Group align="flex-end" gap="xs" mb="xs">
          <Text fw={700} fz="xl">
            {stat.value}
          </Text>
          <Text c={stat.diff.startsWith('+') ? 'teal' : 'red'} fw={700} size="sm">
            <DiffIcon />
            {stat.diff}
          </Text>
        </Group>

        <Text fz="xs" c="dimmed" style={{ lineHeight: 1.4 }}>
          {stat.description}
        </Text>
      </Paper>
    );
  });

  return (
    <Container size="lg" py={80}>
      <Group justify="center" mb={50}>
        <div style={{ textAlign: 'center', maxWidth: 600 }}>
          <Text fw={600} fz="h2" mb="md" style={{ color: '#1a1a1a' }}>
            Building the Future of Governance
          </Text>
          <Text size="lg" c="dimmed" style={{ lineHeight: 1.6 }}>
            Real-time metrics from our blockchain-based network state, showcasing transparent
            resource allocation and community-driven sustainable development.
          </Text>
        </div>
      </Group>
      
      <SimpleGrid
        cols={{ base: 1, xs: 2, md: 4 }}
        spacing={{ base: 'md', md: 'lg' }}
      >
        {stats}
      </SimpleGrid>
    </Container>
  );
}