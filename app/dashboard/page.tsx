'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  Card,
  Badge,
  SimpleGrid,
  Alert,
  Box,
  Center,
  Loader,
  ThemeIcon,
  Paper,
  Tabs,
  Progress,
  Skeleton
} from '@mantine/core';
import { 
  IconUsers, 
  IconTrendingUp, 
  IconSettings,
  IconPlus,
  IconHome,
  IconBell,
  IconInfoCircle,
  IconWallet,
  IconCheck,
  IconX,
  IconClock
} from '@tabler/icons-react';

// Mock data for governance dashboard
const mockProposals = [
  {
    id: 1,
    title: 'Treasury Allocation for Network Infrastructure',
    description: 'Proposal to allocate 500 ETH from treasury for upgrading network infrastructure, including servers, security audits, and performance optimizations.',
    status: 'Active',
    forVotes: 1250,
    againstVotes: 340,
    endDate: '2024-01-15',
    category: 'Treasury'
  },
  {
    id: 2,
    title: 'Governance Token Distribution Update',
    description: 'Update the governance token distribution mechanism to improve fairness and increase participation in voting processes.',
    status: 'Passed',
    forVotes: 2100,
    againstVotes: 450,
    endDate: '2024-01-10',
    category: 'Governance'
  },
  {
    id: 3,
    title: 'Community Development Fund Proposal',
    description: 'Establish a dedicated fund for community development initiatives, hackathons, and educational programs.',
    status: 'Failed',
    forVotes: 890,
    againstVotes: 1200,
    endDate: '2024-01-08',
    category: 'Community'
  }
];

export default function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string | null>('governance');
  
  // Mock authentication check - integrate with your actual auth system
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Check authentication status
    const checkAuth = () => {
      try {
        const userData = localStorage.getItem('user');
        if (userData) {
          setUser(JSON.parse(userData));
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (isAuthenticated === false) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  // Show loading while checking authentication
  if (isAuthenticated === null) {
    return (
      <Center h="100vh">
        <Stack align="center">
          <Loader size="lg" />
          <Text c="dimmed">Checking authentication...</Text>
        </Stack>
      </Center>
    );
  }

  // Don't render if not authenticated (will redirect)
  if (!isAuthenticated) {
    return null;
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'blue';
      case 'Passed': return 'green';
      case 'Failed': return 'red';
      default: return 'gray';
    }
  };

  const calculateProgress = (forVotes: number, againstVotes: number) => {
    const total = forVotes + againstVotes;
    return total > 0 ? (forVotes / total) * 100 : 0;
  };

  return (
    <Box bg="gray.0" mih="100vh">
      <Container size="xl" py="xl">
        <Stack gap="xl">
          {/* Header */}
          <Group justify="space-between">
            <Stack gap="xs">
              <Title order={1} c="dark">
                Welcome to your Governance Dashboard
              </Title>
              <Text c="dimmed" size="lg">
                Participate in digital democracy and help shape the future of our network state
              </Text>
              {user && (
                <Text size="sm" c="blue">
                  Welcome back, {user.displayName || user.email || 'User'}!
                </Text>
              )}
            </Stack>
            <Button variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
              Connect Wallet (Coming Soon)
            </Button>
          </Group>

          {/* Info Alert */}
          <Alert
            variant="light"
            color="blue"
            icon={<IconInfoCircle size={16} />}
          >
            <Text size="sm">
              This dashboard showcases the governance features of our Network State platform. 
              Blockchain integration is being finalized - for now you can explore the interface and functionality.
            </Text>
          </Alert>

          {/* Stats Cards */}
          <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="md">
            <Paper withBorder p="md" radius="md">
              <Group gap="xs">
                <ThemeIcon size="lg" variant="light" color="blue">
                  <IconUsers size={20} />
                </ThemeIcon>
                <Stack gap={0}>
                  <Text size="xs" c="dimmed" fw={700} tt="uppercase">
                    Active Proposals
                  </Text>
                  <Text fw={700} size="xl">
                    {mockProposals.filter(p => p.status === 'Active').length}
                  </Text>
                </Stack>
              </Group>
            </Paper>

            <Paper withBorder p="md" radius="md">
              <Group gap="xs">
                <ThemeIcon size="lg" variant="light" color="green">
                  <IconTrendingUp size={20} />
                </ThemeIcon>
                <Stack gap={0}>
                  <Text size="xs" c="dimmed" fw={700} tt="uppercase">
                    Treasury Balance
                  </Text>
                  <Text fw={700} size="xl">
                    1,250 LLD
                  </Text>
                </Stack>
              </Group>
            </Paper>

            <Paper withBorder p="md" radius="md">
              <Group gap="xs">
                <ThemeIcon size="lg" variant="light" color="orange">
                  <IconWallet size={20} />
                </ThemeIcon>
                <Stack gap={0}>
                  <Text size="xs" c="dimmed" fw={700} tt="uppercase">
                    Your Voting Power
                  </Text>
                  <Text fw={700} size="xl">
                    850 votes
                  </Text>
                </Stack>
              </Group>
            </Paper>

            <Paper withBorder p="md" radius="md">
              <Group gap="xs">
                <ThemeIcon size="lg" variant="light" color="purple">
                  <IconBell size={20} />
                </ThemeIcon>
                <Stack gap={0}>
                  <Text size="xs" c="dimmed" fw={700} tt="uppercase">
                    Participation Rate
                  </Text>
                  <Text fw={700} size="xl">
                    76%
                  </Text>
                </Stack>
              </Group>
            </Paper>
          </SimpleGrid>

          {/* Main Content Tabs */}
          <Tabs value={activeTab} onChange={setActiveTab}>
            <Tabs.List>
              <Tabs.Tab value="governance" leftSection={<IconHome size={16} />}>
                Governance
              </Tabs.Tab>
              <Tabs.Tab value="treasury" leftSection={<IconWallet size={16} />}>
                Treasury
              </Tabs.Tab>
              <Tabs.Tab value="settings" leftSection={<IconSettings size={16} />}>
                Settings
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="governance" pt="lg">
              <Stack gap="md">
                {/* Create Proposal Button */}
                <Group justify="space-between">
                  <Title order={2}>Active Proposals</Title>
                  <Button
                    leftSection={<IconPlus size={16} />}
                    variant="light"
                    disabled
                  >
                    Create Proposal (Coming Soon)
                  </Button>
                </Group>

                {/* Proposals Grid */}
                <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
                  {mockProposals.map((proposal) => (
                    <Card key={proposal.id} shadow="sm" padding="lg" radius="md" withBorder>
                      <Group justify="space-between" mb="xs">
                        <Badge color={getStatusColor(proposal.status)} variant="light">
                          {proposal.status}
                        </Badge>
                        <Badge color="gray" variant="outline" size="sm">
                          {proposal.category}
                        </Badge>
                      </Group>
                      
                      <Title order={4} mb="md" lineClamp={2}>
                        {proposal.title}
                      </Title>
                      
                      <Text size="sm" c="dimmed" mb="md" lineClamp={3}>
                        {proposal.description}
                      </Text>
                      
                      <Stack gap="sm">
                        <Group justify="space-between">
                          <Group gap="xs">
                            <IconUsers size={16} />
                            <Text size="sm" c="dimmed">Total Votes</Text>
                          </Group>
                          <Text fw={500}>
                            {(proposal.forVotes + proposal.againstVotes).toLocaleString()}
                          </Text>
                        </Group>
                        
                        <div>
                          <Group justify="space-between" mb="xs">
                            <Text size="sm" c="green">For: {proposal.forVotes.toLocaleString()}</Text>
                            <Text size="sm" c="red">Against: {proposal.againstVotes.toLocaleString()}</Text>
                          </Group>
                          <Progress value={calculateProgress(proposal.forVotes, proposal.againstVotes)} size="sm" />
                        </div>
                        
                        <Group justify="space-between" align="center">
                          <Group gap="xs">
                            <IconClock size={16} />
                            <Text size="sm" c="dimmed">
                              Ended on {proposal.endDate}
                            </Text>
                          </Group>
                          
                          {proposal.status === 'Active' && (
                            <Group gap="xs">
                              <Button
                                size="xs"
                                color="green"
                                variant="light"
                                leftSection={<IconCheck size={14} />}
                                disabled
                              >
                                For
                              </Button>
                              <Button
                                size="xs"
                                color="red"
                                variant="light"
                                leftSection={<IconX size={14} />}
                                disabled
                              >
                                Against
                              </Button>
                            </Group>
                          )}
                        </Group>
                      </Stack>
                    </Card>
                  ))}
                </SimpleGrid>
              </Stack>
            </Tabs.Panel>

            <Tabs.Panel value="treasury" pt="lg">
              <Stack gap="md">
                <Title order={2}>Treasury Overview</Title>
                <Alert
                  variant="light"
                  color="green"
                  icon={<IconInfoCircle size={16} />}
                >
                  Treasury functionality is currently being developed. Check back soon for detailed treasury management features.
                </Alert>
                
                <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
                  <Card withBorder p="lg">
                    <Title order={4} mb="md">Current Holdings</Title>
                    <Stack gap="sm">
                      <Group justify="space-between">
                        <Text>LLD Tokens</Text>
                        <Text fw={500}>1,250.00 LLD</Text>
                      </Group>
                      <Group justify="space-between">
                        <Text>ETH</Text>
                        <Text fw={500}>15.5 ETH</Text>
                      </Group>
                      <Group justify="space-between">
                        <Text>USDC</Text>
                        <Text fw={500}>50,000 USDC</Text>
                      </Group>
                    </Stack>
                  </Card>
                  
                  <Card withBorder p="lg">
                    <Title order={4} mb="md">Recent Transactions</Title>
                    <Stack gap="xs">
                      <Skeleton height={20} />
                      <Skeleton height={20} />
                      <Skeleton height={20} />
                      <Text c="dimmed" size="sm">Transaction history coming soon...</Text>
                    </Stack>
                  </Card>
                </SimpleGrid>
              </Stack>
            </Tabs.Panel>

            <Tabs.Panel value="settings" pt="lg">
              <Stack gap="md">
                <Title order={2}>Dashboard Settings</Title>
                <Alert
                  variant="light"
                  color="gray"
                  icon={<IconSettings size={16} />}
                >
                  Settings panel coming soon. You'll be able to customize your dashboard preferences here.
                </Alert>
                
                <Card withBorder p="lg">
                  <Stack gap="md">
                    <Group justify="space-between">
                      <div>
                        <Text fw={500}>Email Notifications</Text>
                        <Text size="sm" c="dimmed">Receive updates about governance activities</Text>
                      </div>
                      <Button variant="outline" size="sm" disabled>
                        Configure
                      </Button>
                    </Group>
                    
                    <Group justify="space-between">
                      <div>
                        <Text fw={500}>Wallet Preferences</Text>
                        <Text size="sm" c="dimmed">Manage your connected wallets</Text>
                      </div>
                      <Button variant="outline" size="sm" disabled>
                        Manage
                      </Button>
                    </Group>
                    
                    <Group justify="space-between">
                      <div>
                        <Text fw={500}>Privacy Settings</Text>
                        <Text size="sm" c="dimmed">Control your data and privacy options</Text>
                      </div>
                      <Button variant="outline" size="sm" disabled>
                        Configure
                      </Button>
                    </Group>
                  </Stack>
                </Card>
              </Stack>
            </Tabs.Panel>
          </Tabs>
        </Stack>
      </Container>
    </Box>
  );
}