'use client';

import { useState } from "react";
import {
  Container,
  Group,
  Button,
  Text,
  Title,
  Card,
  Table,
  Pagination,
  Badge,
  Anchor,
  Divider,
  Paper,
  Stack,
  Grid,
  ActionIcon,
  Box,
  ThemeIcon,
  SimpleGrid,
  Center,
  ScrollArea,
  Breadcrumbs,
} from "@mantine/core";
import { 
  IconWallet, 
  IconCash, 
  IconPlus, 
  IconEye,
  IconTrendingUp,
  IconHome,
  IconBrandFacebook,
  IconBrandX,
  IconBrandLinkedin,
  IconChevronRight,
  IconReceipt
} from "@tabler/icons-react";

export default function TreasuryPage() {
  const [page, setPage] = useState(1);

  const expenses = [
    {
      id: 1,
      type: "Hospital Expenses",
      desc: "Naturopathy Consultation at Aldgate Medical Center",
      amount: 570,
      date: "2024-03-15",
      status: "completed"
    },
    {
      id: 2,
      type: "Software Expenses",
      desc: "Annual subscription for project management tools",
      amount: 299,
      date: "2024-03-14",
      status: "completed"
    },
    {
      id: 3,
      type: "Office Supplies",
      desc: "Stationery and equipment for remote workers",
      amount: 180,
      date: "2024-03-13",
      status: "completed"
    },
    {
      id: 4,
      type: "Training Expenses",
      desc: "Professional development workshops for team",
      amount: 450,
      date: "2024-03-12",
      status: "completed"
    },
    {
      id: 5,
      type: "Marketing",
      desc: "Digital advertising campaign Q1 2024",
      amount: 380,
      date: "2024-03-11",
      status: "completed"
    },
  ];

  const proposals = [
    { name: "Hospital Expenses", status: "approved", priority: "high" },
    { name: "Equipment Upgrade", status: "pending", priority: "medium" },
    { name: "Team Building Event", status: "pending", priority: "low" },
    { name: "Software Licenses", status: "approved", priority: "high" },
    { name: "Office Renovation", status: "under_review", priority: "medium" },
  ];

  const approvedProposals = proposals.filter(p => p.status === "approved" || p.status === "under_review");
  const pendingProposals = proposals.filter(p => p.status === "pending");

  const breadcrumbItems = [
    { title: "Home", href: "#" },
    { title: "Governance", href: "#" },
    { title: "Treasury", href: "#" }
  ].map((item, index) => (
    <Anchor href={item.href} key={index} size="sm" c="dimmed">
      {item.title}
    </Anchor>
  ));

  const getStatusColor = (status) => {
    switch (status) {
      case "approved": return "green";
      case "pending": return "yellow";
      case "under_review": return "blue";
      default: return "gray";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high": return "red";
      case "medium": return "yellow";
      case "low": return "green";
      default: return "gray";
    }
  };

  const rows = expenses.map((exp) => (
    <Table.Tr key={exp.id}>
      <Table.Td>
        <Group gap="xs">
          <ThemeIcon variant="light" color="blue" size="sm">
            <IconReceipt size={14} />
          </ThemeIcon>
          <div>
            <Text fw={600} size="sm">{exp.type}</Text>
            <Text size="xs" c="dimmed">{exp.date}</Text>
          </div>
        </Group>
      </Table.Td>
      <Table.Td>
        <Text size="sm" lineClamp={2}>{exp.desc}</Text>
      </Table.Td>
      <Table.Td>
        <Group justify="space-between">
          <Text fw={600} c="blue.7" size="lg">${exp.amount}</Text>
          <Badge color="green" variant="dot" size="sm">Paid</Badge>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Box bg="gray.0" mih="100vh">
      <Container size="lg" py="xl">
        {/* Header Navigation */}
        {/* <Paper shadow="md" p="md" mb="xl" radius="md" bg="white">
          <Group justify="space-between">
            <Group>
              <ThemeIcon size="lg" color="blue">
                <Text fw={900} c="white" size="lg">O</Text>
              </ThemeIcon>
              <Group gap="xl" visibleFrom="sm">
                <Anchor href="#" fw={500} c="dark.7" td="none">Home</Anchor>
                <Anchor href="#" fw={500} c="dark.7" td="none">Features</Anchor>
                <Anchor href="#" fw={500} c="dark.7" td="none">Mentors</Anchor>
                <Anchor href="#" fw={500} c="dark.7" td="none">About</Anchor>
              </Group>
            </Group>
            <Group gap="sm">
              <Button variant="light" color="blue">Login</Button>
              <Button variant="filled" color="blue" radius="md">Sign Up</Button>
            </Group>
          </Group>
        </Paper> */}

      

        {/* Page Header */}
 <Paper shadow="xs" p="2xl" withBorder mb="xl" radius="sm" bg="white" >
    {/* Breadcrumb Navigation */}
    <Group mb="xl">
          <ActionIcon variant="light" color="blue" size="sm">
            <IconHome size={14} />
          </ActionIcon>
          <Breadcrumbs separator={<IconChevronRight size={14} />}>
            {breadcrumbItems}
          </Breadcrumbs>
        </Group>
 <Box className="flex flex-row justify-center">

 <Stack gap="xs">
   <Group align="center" gap="sm">
     <ThemeIcon size="xl" color="blue" variant="light">
       <IconWallet size={22} />
     </ThemeIcon>
     <div>
       <Title order={1} size="h1" fw={800} c="black">Treasury Dashboard</Title>
       <Text c="dimmed" size="lg">Manage your organization's financial resources</Text>
     </div>
   </Group>
 </Stack>
 </Box>

</Paper>
       

        {/* Treasury Stats */}
        <Paper shadow="xs" withBorder p="lg" mb="xl" radius="sm" bg="white">
          <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
            <Card withBorder shadow="xs" p="xl" radius="sm" bg="white">
              <Stack gap="sm">
                <Group justify="space-between">
                  <ThemeIcon size="lg" variant="light" color="blue">
                    <IconWallet size={20} />
                  </ThemeIcon>
                  <ActionIcon variant="subtle" color="blue">
                    <IconTrendingUp size={16} />
                  </ActionIcon>
                </Group>
                <div>
                  <Text size="sm" c="dimmed" fw={500}>Total Treasury</Text>
                  <Title order={2} c="blue.8" fw={700}>$5,500</Title>
                  <Text size="xs" c="teal.6" fw={500}>↗ 12% from last month</Text>
                </div>
              </Stack>
            </Card>
            <Card withBorder shadow="xs" p="xl" radius="sm" bg="white">
              <Stack gap="sm">
                <Group justify="space-between">
                  <ThemeIcon size="lg" variant="light" color="blue">
                    <IconCash size={20} />
                  </ThemeIcon>
                  <ActionIcon variant="subtle" color="blue">
                    <IconTrendingUp size={16} />
                  </ActionIcon>
                </Group>
                <div>
                  <Text size="sm" c="dimmed" fw={500}>Money Spent</Text>
                  <Title order={2} c="blue.8" fw={700}>$2,850</Title>
                  <Text size="xs" c="red.6" fw={500}>↗ 8% from last month</Text>
                </div>
              </Stack>
            </Card>
            <Card withBorder shadow="xs" p="xl" radius="sm" bg="white">
              <Stack gap="sm">
                <Group justify="space-between">
                  <ThemeIcon size="lg" variant="light" color="blue">
                    <IconReceipt size={20} />
                  </ThemeIcon>
                  <Text size="xs" fw={600} c="green.7">AVAILABLE</Text>
                </Group>
                <div>
                  <Text size="sm" c="dimmed" fw={500}>Remaining Budget</Text>
                  <Title order={2} c="blue.8" fw={700}>$2,650</Title>
                  <Text size="xs" c="green.6" fw={500}>48% of total budget</Text>
                </div>
              </Stack>
            </Card>
            <Card withBorder shadow="xs" p="xl" radius="sm" bg="white">
              <Stack gap="sm">
                <Group justify="space-between">
                  <ThemeIcon size="lg" variant="light" color="blue">
                    <IconPlus size={20} />
                  </ThemeIcon>
                  <Text size="xs" fw={600} c="orange.7">PENDING</Text>
                </Group>
                <div>
                  <Text size="sm" c="dimmed" fw={500}>Pending Proposals</Text>
                  <Title order={2} c="blue.8" fw={700}>3</Title>
                  <Text size="xs" c="orange.6" fw={500}>Awaiting approval</Text>
                </div>
              </Stack>
            </Card>
          </SimpleGrid>
        </Paper>

        {/* Proposals Section */}
        <Paper withBorder shadow="xs" p="lg" mb="xl" radius="sm" bg="white">
          <Grid>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Stack gap="xl">
                <Button 
                  leftSection={<IconEye size={18} />}
                  variant="filled"
                  color="blue"
                  size="md"
                  radius="sm"
                  fullWidth
                >
                  View All Proposals
                </Button>
                <Button 
                  leftSection={<IconPlus size={18} />}
                  variant="light"
                  color="blue"
                  size="md"
                  radius="sm"
                  fullWidth
                >
                  Create New Proposal
                </Button>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 8 }}>
              <Stack gap="lg">
                <Box>
                  <Group justify="space-between" mb="md">
                    <Title order={4} fw={600}>Approved Proposals</Title>
                    <Badge variant="light" color="blue">{approvedProposals.length} Active</Badge>
                  </Group>
                  <ScrollArea.Autosize mah={150}>
                    <Stack gap="sm">
                      {approvedProposals.map((proposal, index) => (
                        <Paper key={index}  shadow="xs" p="md" radius="sm" bg="white">
                          <Group justify="space-between">
                            <Group>
                              <ThemeIcon 
                                variant="light" 
                                color={getPriorityColor(proposal.priority)}
                                size="sm"
                              >
                                <IconReceipt size={12} />
                              </ThemeIcon>
                              <div>
                                <Text fw={500} size="sm">{proposal.name}</Text>
                                <Text size="xs" c="dimmed">Priority: {proposal.priority}</Text>
                              </div>
                            </Group>
                            <Badge 
                              color={getStatusColor(proposal.status)} 
                              variant="dot"
                              size="sm"
                            >
                              {proposal.status.replace('_', ' ')}
                            </Badge>
                          </Group>
                        </Paper>
                      ))}
                    </Stack>
                  </ScrollArea.Autosize>
                </Box>
                <Box>
                  <Group justify="space-between" mb="md">
                    <Title order={4} fw={600}>Pending Proposals</Title>
                    <Badge variant="light" color="blue">{pendingProposals.length} Active</Badge>
                  </Group>
                  <ScrollArea.Autosize mah={150}>
                    <Stack gap="sm">
                      {pendingProposals.map((proposal, index) => (
                        <Paper key={index} shadow="xs" p="md" radius="sm" bg="white">
                          <Group justify="space-between">
                            <Group>
                              <ThemeIcon 
                                variant="light" 
                                color={getPriorityColor(proposal.priority)}
                                size="sm"
                              >
                                <IconReceipt size={12} />
                              </ThemeIcon>
                              <div>
                                <Text fw={500} size="sm">{proposal.name}</Text>
                                <Text size="xs" c="dimmed">Priority: {proposal.priority}</Text>
                              </div>
                            </Group>
                            <Badge 
                              color={getStatusColor(proposal.status)} 
                              variant="dot"
                              size="sm"
                            >
                              {proposal.status.replace('_', ' ')}
                            </Badge>
                          </Group>
                        </Paper>
                      ))}
                    </Stack>
                  </ScrollArea.Autosize>
                </Box>
              </Stack>
              <Group justify="center" mt="md">
                <Anchor size="sm" fw={500}>View All Proposals →</Anchor>
              </Group>
            </Grid.Col>
          </Grid>
        </Paper>

        {/* Expenses Table */}
        <Paper withBorder shadow="xs" p="lg" radius="sm" bg="white" mb="xl">
          <Group justify="space-between" mb="lg">
            <div>
              <Title order={3} fw={700}>Expense History</Title>
              <Text c="dimmed" size="sm">Track all your organizational expenses</Text>
            </div>
            <Badge size="lg" variant="light" color="blue">
              {expenses.length} Records
            </Badge>
          </Group>
          <ScrollArea.Autosize>
            <Table highlightOnHover verticalSpacing="md" horizontalSpacing="lg">
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>
                    <Text fw={600} c="dark.6">Expense Details</Text>
                  </Table.Th>
                  <Table.Th>
                    <Text fw={600} c="dark.6">Description</Text>
                  </Table.Th>
                  <Table.Th>
                    <Text fw={600} c="dark.6">Amount & Status</Text>
                  </Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
          </ScrollArea.Autosize>
        </Paper>

        {/* Pagination */}
        <Center mb="xl">
          <Pagination 
            total={5} 
            page={page} 
            onChange={setPage} 
            radius="sm" 
            color="blue"
            size="lg"
            withEdges
          />
        </Center>

        {/* Footer */}
        {/* <Paper shadow="md" p="xl" radius="md" bg="white" mt="xl">
          <Group justify="space-between" align="flex-start">
            <div>
              <Group mb="sm">
                <ThemeIcon size="lg" color="blue">
                  <Text fw={900} c="white" size="lg">O</Text>
                </ThemeIcon>
                <Title order={4} c="black">Originalform</Title>
              </Group>
              <Text size="sm" c="dimmed">
                Terms and conditions are registered with Treio
              </Text>
              <Text size="xs" c="dimmed" mt="xs">
                © 2024 Originalform. All rights reserved.
              </Text>
            </div>
            <Group>
              <ActionIcon variant="subtle" color="blue" size="lg">
                <IconBrandFacebook size={20} />
              </ActionIcon>
              <ActionIcon variant="subtle" color="blue" size="lg">
                <IconBrandX size={20} />
              </ActionIcon>
              <ActionIcon variant="subtle" color="blue" size="lg">
                <IconBrandLinkedin size={20} />
              </ActionIcon>
            </Group>
          </Group>
        </Paper> */}
      </Container>
    </Box>
  );
}