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
  Progress,
  RingProgress,
  Tabs,
  Timeline,
  Avatar,
  List,
  Notification,
  Flex,
  Image,
  Overlay,
  BackgroundImage,
} from "@mantine/core";
import { 
  IconHeart, 
  IconStethoscope, 
  IconPill, 
  IconMicroscope,
  IconUsers,
  IconHome,
  IconBrandFacebook,
  IconBrandX,
  IconBrandLinkedin,
  IconChevronRight,
  IconCalendar,
  IconClock,
  IconUserPlus,
  IconTrendingUp,
  IconAlertCircle,
  IconShield,
  IconEye,
  IconPlus,
  IconLeaf,
  IconBrain,
  IconYoga,
  IconMoodHappy,
  IconActivity,
  IconHeartbeat,
  IconSun,
  IconMoon,
  IconDroplet,
  IconFlame,
  IconWind,
  IconBook,
  IconVideo,
  IconMessageCircle,
  IconChartLine,
  IconTarget,
  IconCheck,
  IconX,
  IconRobot,
  IconSparkles,
  IconActivity as IconWaveform,
  IconAtom,
  IconStars,
  IconBolt,
  IconBolt as IconZap,
  IconCircuitBattery as IconCircuitBoard,
  IconCpu,
} from "@tabler/icons-react";

export default function MedicinePage() {
  const [page, setPage] = useState(1);
  const [activeTab, setActiveTab] = useState('overview');

  // Holistic Health Data
  const holisticMetrics = {
    stressLevel: 35,
    sleepQuality: 78,
    nutritionScore: 85,
    mindfulnessMinutes: 120,
    physicalActivity: 65,
    socialConnection: 72,
    environmentalToxins: 15
  };

  const appointments = [
    {
      id: 1,
      patient: "Sarah Johnson",
      doctor: "Dr. Michael Chen",
      type: "Mind-Body Consultation",
      time: "10:00 AM",
      date: "2024-03-15",
      status: "completed",
      modality: "telemedicine"
    },
    {
      id: 2,
      patient: "Robert Smith",
      doctor: "Dr. Emily Rodriguez",
      type: "Naturopathic Assessment",
      time: "2:30 PM",
      date: "2024-03-15",
      status: "completed",
      modality: "in-person"
    },
    {
      id: 3,
      patient: "Maria Garcia",
      doctor: "Dr. David Kim",
      type: "Holistic Wellness Follow-up",
      time: "4:00 PM",
      date: "2024-03-15",
      status: "completed",
      modality: "telemedicine"
    },
    {
      id: 4,
      patient: "James Wilson",
      doctor: "Dr. Lisa Thompson",
      type: "Stress Management Session",
      time: "9:15 AM",
      date: "2024-03-16",
      status: "scheduled",
      modality: "telemedicine"
    },
    {
      id: 5,
      patient: "Anna Davis",
      doctor: "Dr. Mark Johnson",
      type: "Herbal Medicine Consultation",
      time: "11:30 AM",
      date: "2024-03-16",
      status: "scheduled",
      modality: "in-person"
    },
  ];

  const holisticTreatments = [
    { name: "Ashwagandha 300mg", status: "active", priority: "high", patient: "Sarah Johnson", type: "adaptogen" },
    { name: "Mindfulness Meditation", status: "active", priority: "medium", patient: "Robert Smith", type: "mind-body" },
    { name: "Turmeric Complex", status: "active", priority: "high", patient: "Maria Garcia", type: "anti-inflammatory" },
    { name: "Breathing Exercises", status: "completed", priority: "medium", patient: "James Wilson", type: "stress-management" },
    { name: "Probiotics + Prebiotics", status: "active", priority: "medium", patient: "Anna Davis", type: "gut-health" },
  ];

  const activeTreatments = holisticTreatments.filter(p => p.status === "active" || p.status === "pending");
  const completedTreatments = holisticTreatments.filter(p => p.status === "completed");

  // Mind-Body Medicine Interventions
  const mindBodyInterventions = [
    { name: "MBSR (Mindfulness-Based Stress Reduction)", status: "recommended", effectiveness: "high" },
    { name: "Cognitive Behavioral Therapy", status: "active", effectiveness: "high" },
    { name: "Progressive Muscle Relaxation", status: "completed", effectiveness: "medium" },
    { name: "Guided Imagery", status: "scheduled", effectiveness: "medium" },
    { name: "Biofeedback Training", status: "recommended", effectiveness: "high" },
  ];

  // Naturopathic Assessments
  const naturopathicData = [
    { system: "Digestive Health", score: 85, trend: "improving", lastCheck: "2024-03-10" },
    { system: "Immune Function", score: 78, trend: "stable", lastCheck: "2024-03-08" },
    { system: "Hormonal Balance", score: 72, trend: "improving", lastCheck: "2024-03-12" },
    { system: "Detoxification", score: 68, trend: "improving", lastCheck: "2024-03-09" },
    { system: "Stress Response", score: 45, trend: "needs attention", lastCheck: "2024-03-14" },
  ];

  const breadcrumbItems = [
    { title: "Home", href: "#" },
    { title: "Healthcare", href: "#" },
    { title: "Holistic Medicine", href: "#" }
  ].map((item, index) => (
    <Anchor href={item.href} key={index} size="sm" c="dimmed">
      {item.title}
    </Anchor>
  ));

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "green";
      case "scheduled": return "blue";
      case "active": return "green";
      case "pending": return "yellow";
      case "recommended": return "orange";
      default: return "gray";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "red";
      case "medium": return "yellow";
      case "low": return "green";
      default: return "gray";
    }
  };

  const getModalityIcon = (modality: string) => {
    return modality === "telemedicine" ? <IconVideo size={14} /> : <IconUsers size={14} />;
  };

  const rows = appointments.map((appointment) => (
    <Table.Tr key={appointment.id}>
      <Table.Td>
        <Group gap="xs">
          <ThemeIcon variant="light" color="blue" size="sm">
            {getModalityIcon(appointment.modality)}
          </ThemeIcon>
          <div>
            <Text fw={600} size="sm">{appointment.patient}</Text>
            <Text size="xs" c="dimmed">{appointment.doctor}</Text>
          </div>
        </Group>
      </Table.Td>
      <Table.Td>
        <Text size="sm" lineClamp={2}>{appointment.type}</Text>
        <Badge size="xs" variant="light" color="cyan" mt="xs">
          {appointment.modality}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Group justify="space-between">
          <Text fw={600} c="blue.7" size="sm">{appointment.time}</Text>
          <Badge color={getStatusColor(appointment.status)} variant="dot" size="sm">
            {appointment.status}
          </Badge>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Box 
      style={{ 
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
        minHeight: '100vh',
        position: 'relative'
      }}
    >
      {/* Animated Background Elements */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%)
          `,
          zIndex: 0
        }}
      />
      
      <Container size="xl" py="xl" style={{ position: 'relative', zIndex: 1 }}>
        {/* Modern Header with Glassmorphism */}
        <Paper 
          p="xl" 
          mb="xl" 
          radius="xl"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}
        >
          <Flex align="center" gap="lg">
            <Box
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '20px',
                padding: '20px',
                boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)'
              }}
            >
              <IconRobot size={32} color="white" />
            </Box>
            <Box style={{ flex: 1 }}>
              <Group gap="sm" mb="xs">
                <Title order={1} size="h1" fw={800} c="white">
                  AI Health Intelligence
                </Title>
                <ThemeIcon 
                  size="sm" 
                  variant="gradient" 
                  gradient={{ from: 'cyan', to: 'blue' }}
                  style={{ animation: 'pulse 2s infinite' }}
                >
                  <IconSparkles size={16} />
                </ThemeIcon>
              </Group>
              <Text c="gray.4" size="lg">
                Next-generation healthcare powered by artificial intelligence
              </Text>
            </Box>
            <Group gap="sm">
              <Button
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan' }}
                size="md"
                radius="xl"
                leftSection={<IconZap size={18} />}
                style={{
                  boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)',
                  transition: 'all 0.3s ease'
                }}
              >
                AI Analysis
              </Button>
            </Group>
          </Flex>
        </Paper>

        {/* AI-Powered Health Metrics */}
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg" mb="xl">
          {/* Stress Intelligence */}
          <Card 
            p="xl" 
            radius="xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(255, 159, 159, 0.05) 100%)',
              border: '1px solid rgba(255, 107, 107, 0.2)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(255, 107, 107, 0.1)'
            }}
          >
            <Stack gap="md">
              <Group justify="space-between">
                <Box
                  style={{
                    background: 'linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%)',
                    borderRadius: '15px',
                    padding: '12px',
                    boxShadow: '0 8px 25px rgba(255, 107, 107, 0.3)'
                  }}
                >
                  <IconBrain size={24} color="white" />
                </Box>
                <RingProgress
                  size={80}
                  thickness={6}
                  sections={[{ value: holisticMetrics.stressLevel, color: '#ff6b6b' }]}
                  label={
                    <Text size="sm" ta="center" fw={700} c="white">
                      {holisticMetrics.stressLevel}%
                    </Text>
                  }
                />
              </Group>
              <Stack gap="xs">
                <Text size="lg" fw={700} c="white">Stress Intelligence</Text>
                <Text size="sm" c="gray.4">AI-analyzed stress patterns</Text>
                <Group gap="xs">
                  <IconTrendingUp size={14} color="#4ade80" />
                  <Text size="xs" c="green.4" fw={500}>↓ 12% improvement</Text>
                </Group>
              </Stack>
            </Stack>
          </Card>

          {/* Sleep Optimization */}
          <Card 
            p="xl" 
            radius="xl"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 197, 253, 0.05) 100%)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(59, 130, 246, 0.1)'
            }}
          >
            <Stack gap="md">
              <Group justify="space-between">
                <Box
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #93c5fd 100%)',
                    borderRadius: '15px',
                    padding: '12px',
                    boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)'
                  }}
                >
                  <IconMoon size={24} color="white" />
                </Box>
                <RingProgress
                  size={80}
                  thickness={6}
                  sections={[{ value: holisticMetrics.sleepQuality, color: '#3b82f6' }]}
                  label={
                    <Text size="sm" ta="center" fw={700} c="white">
                      {holisticMetrics.sleepQuality}%
                    </Text>
                  }
                />
              </Group>
              <Stack gap="xs">
                <Text size="lg" fw={700} c="white">Sleep Optimization</Text>
                <Text size="sm" c="gray.4">Deep learning sleep analysis</Text>
                <Group gap="xs">
                  <IconTrendingUp size={14} color="#4ade80" />
                  <Text size="xs" c="green.4" fw={500}>↑ 8% quality boost</Text>
                </Group>
              </Stack>
            </Stack>
          </Card>

          {/* Nutrition AI */}
          <Card 
            p="xl" 
            radius="xl"
            style={{
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(134, 239, 172, 0.05) 100%)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(34, 197, 94, 0.1)'
            }}
          >
            <Stack gap="md">
              <Group justify="space-between">
                <Box
                  style={{
                    background: 'linear-gradient(135deg, #22c55e 0%, #86efac 100%)',
                    borderRadius: '15px',
                    padding: '12px',
                    boxShadow: '0 8px 25px rgba(34, 197, 94, 0.3)'
                  }}
                >
                  <IconLeaf size={24} color="white" />
                </Box>
                <RingProgress
                  size={80}
                  thickness={6}
                  sections={[{ value: holisticMetrics.nutritionScore, color: '#22c55e' }]}
                  label={
                    <Text size="sm" ta="center" fw={700} c="white">
                      {holisticMetrics.nutritionScore}%
                    </Text>
                  }
                />
              </Group>
              <Stack gap="xs">
                <Text size="lg" fw={700} c="white">Nutrition AI</Text>
                <Text size="sm" c="gray.4">Smart dietary optimization</Text>
                <Group gap="xs">
                  <IconStars size={14} color="#fbbf24" />
                  <Text size="xs" c="yellow.4" fw={500}>Excellent balance</Text>
                </Group>
              </Stack>
            </Stack>
          </Card>

          {/* Mindfulness Engine */}
          <Card 
            p="xl" 
            radius="xl"
            style={{
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(196, 181, 253, 0.05) 100%)',
              border: '1px solid rgba(168, 85, 247, 0.2)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(168, 85, 247, 0.1)'
            }}
          >
            <Stack gap="md">
              <Group justify="space-between">
                <Box
                  style={{
                    background: 'linear-gradient(135deg, #a855f7 0%, #c4b5fd 100%)',
                    borderRadius: '15px',
                    padding: '12px',
                    boxShadow: '0 8px 25px rgba(168, 85, 247, 0.3)'
                  }}
                >
                  <IconYoga size={24} color="white" />
                </Box>
                <Box ta="center">
                  <Text size="2xl" fw={800} c="white">{holisticMetrics.mindfulnessMinutes}</Text>
                  <Text size="xs" c="gray.4">minutes</Text>
                </Box>
              </Group>
              <Stack gap="xs">
                <Text size="lg" fw={700} c="white">Mindfulness Engine</Text>
                <Text size="sm" c="gray.4">AI-guided meditation</Text>
                <Group gap="xs">
                  <IconCheck size={14} color="#4ade80" />
                  <Text size="xs" c="green.4" fw={500}>Goal achieved</Text>
                </Group>
              </Stack>
            </Stack>
          </Card>
        </SimpleGrid>

        {/* Modern AI Interface */}
        <Paper 
          p="xl" 
          mb="xl" 
          radius="xl"
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}
        >
          <Tabs value={activeTab} onChange={(value) => setActiveTab(value || 'overview')}>
            <Tabs.List
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '15px',
                padding: '8px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <Tabs.Tab 
                value="overview" 
                leftSection={<IconChartLine size={16} />}
                style={{
                  borderRadius: '12px',
                  transition: 'all 0.3s ease'
                }}
              >
                AI Overview
              </Tabs.Tab>
              <Tabs.Tab 
                value="mind-body" 
                leftSection={<IconBrain size={16} />}
                style={{
                  borderRadius: '12px',
                  transition: 'all 0.3s ease'
                }}
              >
                Neural Networks
              </Tabs.Tab>
              <Tabs.Tab 
                value="naturopathy" 
                leftSection={<IconCircuitBoard size={16} />}
                style={{
                  borderRadius: '12px',
                  transition: 'all 0.3s ease'
                }}
              >
                Bio Analytics
              </Tabs.Tab>
              <Tabs.Tab 
                value="telemedicine" 
                leftSection={<IconRobot size={16} />}
                style={{
                  borderRadius: '12px',
                  transition: 'all 0.3s ease'
                }}
              >
                AI Telehealth
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="overview" pt="lg">
              <Grid>
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Card 
                    p="lg" 
                    radius="xl"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <Stack gap="md">
                      <Group>
                        <Box
                          style={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            borderRadius: '10px',
                            padding: '8px'
                          }}
                        >
                          <IconCalendar size={20} color="white" />
                        </Box>
                        <Title order={4} fw={700} c="white">AI Appointments</Title>
                      </Group>
                      <ScrollArea.Autosize mah={300}>
                        <Stack gap="sm">
                          {appointments.slice(0, 4).map((appointment) => (
                            <Paper 
                              key={appointment.id} 
                              p="md" 
                              radius="lg"
                              style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                transition: 'all 0.3s ease'
                              }}
                            >
                              <Group justify="space-between">
                                <Group>
                                  <Box
                                    style={{
                                      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                                      borderRadius: '8px',
                                      padding: '6px'
                                    }}
                                  >
                                    {getModalityIcon(appointment.modality)}
                                  </Box>
                                  <div>
                                    <Text fw={600} size="sm" c="white">{appointment.patient}</Text>
                                    <Text size="xs" c="gray.4">{appointment.type}</Text>
                                  </div>
                                </Group>
                                <Badge 
                                  color={getStatusColor(appointment.status)} 
                                  variant="light"
                                  size="sm"
                                  style={{
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    color: 'white'
                                  }}
                                >
                                  {appointment.status}
                                </Badge>
                              </Group>
                            </Paper>
                          ))}
                        </Stack>
                      </ScrollArea.Autosize>
                    </Stack>
                  </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Card 
                    p="lg" 
                    radius="xl"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <Stack gap="md">
                      <Group>
                        <Box
                          style={{
                            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                            borderRadius: '10px',
                            padding: '8px'
                          }}
                        >
                          <IconCpu size={20} color="white" />
                        </Box>
                        <Title order={4} fw={700} c="white">AI Treatments</Title>
                      </Group>
                      <ScrollArea.Autosize mah={300}>
                        <Stack gap="sm">
                          {activeTreatments.map((treatment, index) => (
                            <Paper 
                              key={index} 
                              p="md" 
                              radius="lg"
                              style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                transition: 'all 0.3s ease'
                              }}
                            >
                              <Group justify="space-between">
                                <Group>
                                  <Box
                                    style={{
                                      background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                                      borderRadius: '8px',
                                      padding: '6px'
                                    }}
                                  >
                                    <IconAtom size={12} color="white" />
                                  </Box>
                                  <div>
                                    <Text fw={600} size="sm" c="white">{treatment.name}</Text>
                                    <Text size="xs" c="gray.4">AI: {treatment.type}</Text>
                                  </div>
                                </Group>
                                <Badge 
                                  color={getStatusColor(treatment.status)} 
                                  variant="light"
                                  size="sm"
                                  style={{
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    color: 'white'
                                  }}
                                >
                                  {treatment.status}
                                </Badge>
                              </Group>
                            </Paper>
                          ))}
                        </Stack>
                      </ScrollArea.Autosize>
                    </Stack>
                  </Card>
                </Grid.Col>
              </Grid>
            </Tabs.Panel>

            <Tabs.Panel value="mind-body" pt="lg">
              <Stack gap="lg">
                <Group>
                  <Box
                    style={{
                      background: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
                      borderRadius: '15px',
                      padding: '12px',
                      boxShadow: '0 8px 25px rgba(139, 92, 246, 0.3)'
                    }}
                  >
                    <IconBrain size={24} color="white" />
                  </Box>
                  <div>
                    <Title order={4} fw={700} c="white">Neural Network Interventions</Title>
                    <Text size="sm" c="gray.4">AI-powered mind-body medicine</Text>
                  </div>
                </Group>
                <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
                  {mindBodyInterventions.map((intervention, index) => (
                    <Card 
                      key={index}
                      p="lg" 
                      radius="xl"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <Stack gap="md">
                        <Group justify="space-between">
                          <Text fw={600} size="sm" c="white">{intervention.name}</Text>
                          <Badge 
                            color={getStatusColor(intervention.status)} 
                            variant="light"
                            size="sm"
                            style={{
                              background: 'rgba(255, 255, 255, 0.1)',
                              color: 'white'
                            }}
                          >
                            {intervention.status}
                          </Badge>
                        </Group>
                        <Progress 
                          value={intervention.effectiveness === "high" ? 90 : intervention.effectiveness === "medium" ? 60 : 30} 
                          size="lg" 
                          radius="sm" 
                          color="blue"
                          style={{
                            '& .mantine-Progress-bar': {
                              background: 'linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%)'
                            }
                          }}
                        />
                        <Text size="xs" c="gray.4">Effectiveness: {intervention.effectiveness}</Text>
                      </Stack>
                    </Card>
                  ))}
                </SimpleGrid>
              </Stack>
            </Tabs.Panel>

            <Tabs.Panel value="naturopathy" pt="lg">
              <Stack gap="lg">
                <Group>
                  <Box
                    style={{
                      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                      borderRadius: '15px',
                      padding: '12px',
                      boxShadow: '0 8px 25px rgba(16, 185, 129, 0.3)'
                    }}
                  >
                    <IconCircuitBoard size={24} color="white" />
                  </Box>
                  <div>
                    <Title order={4} fw={700} c="white">Bio Analytics Engine</Title>
                    <Text size="sm" c="gray.4">AI-driven biological system analysis</Text>
                  </div>
                </Group>
                <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
                  {naturopathicData.map((system, index) => (
                    <Card 
                      key={index}
                      p="lg" 
                      radius="xl"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <Stack gap="md">
                        <Group justify="space-between">
                          <Text fw={600} size="sm" c="white">{system.system}</Text>
                          <Badge 
                            color={system.trend === "improving" ? "green" : system.trend === "needs attention" ? "red" : "blue"}
                            variant="light"
                            size="sm"
                            style={{
                              background: 'rgba(255, 255, 255, 0.1)',
                              color: 'white'
                            }}
                          >
                            {system.trend}
                          </Badge>
                        </Group>
                        <RingProgress
                          size={80}
                          thickness={8}
                          sections={[{ value: system.score, color: '#10b981' }]}
                          label={
                            <Text size="sm" ta="center" fw={700} c="white">
                              {system.score}%
                            </Text>
                          }
                        />
                        <Text size="xs" c="gray.4">Last analysis: {system.lastCheck}</Text>
                      </Stack>
                    </Card>
                  ))}
                </SimpleGrid>
              </Stack>
            </Tabs.Panel>

            <Tabs.Panel value="telemedicine" pt="lg">
              <Grid>
                <Grid.Col span={{ base: 12, md: 8 }}>
                  <Card 
                    p="lg" 
                    radius="xl"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <Stack gap="lg">
                      <Group>
                        <Box
                          style={{
                            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                            borderRadius: '15px',
                            padding: '12px',
                            boxShadow: '0 8px 25px rgba(245, 158, 11, 0.3)'
                          }}
                        >
                          <IconRobot size={24} color="white" />
                        </Box>
                        <div>
                          <Title order={4} fw={700} c="white">AI Telehealth Hub</Title>
                          <Text size="sm" c="gray.4">Intelligent remote healthcare</Text>
                        </div>
                      </Group>
                      <ScrollArea.Autosize mah={400}>
                        <Table 
                          highlightOnHover 
                          verticalSpacing="md" 
                          horizontalSpacing="lg"
                          style={{
                            '--mantine-color-text': 'white'
                          }}
                        >
                          <Table.Thead>
                            <Table.Tr>
                              <Table.Th>
                                <Text fw={600} c="white">Patient & Doctor</Text>
                              </Table.Th>
                              <Table.Th>
                                <Text fw={600} c="white">AI Consultation</Text>
                              </Table.Th>
                              <Table.Th>
                                <Text fw={600} c="white">Status</Text>
                              </Table.Th>
                            </Table.Tr>
                          </Table.Thead>
                          <Table.Tbody>{rows}</Table.Tbody>
                        </Table>
                      </ScrollArea.Autosize>
                    </Stack>
                  </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4 }}>
                  <Card 
                    p="lg" 
                    radius="xl"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <Stack gap="lg">
                      <Group>
                        <Box
                          style={{
                            background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                            borderRadius: '15px',
                            padding: '12px',
                            boxShadow: '0 8px 25px rgba(239, 68, 68, 0.3)'
                          }}
                        >
                          <IconBolt size={24} color="white" />
                        </Box>
                        <div>
                          <Title order={5} fw={700} c="white">AI Actions</Title>
                          <Text size="sm" c="gray.4">Smart healthcare tools</Text>
                        </div>
                      </Group>
                      <Stack gap="sm">
                        <Button 
                          leftSection={<IconVideo size={16} />}
                          variant="gradient"
                          gradient={{ from: 'blue', to: 'cyan' }}
                          size="md"
                          radius="xl"
                          fullWidth
                          style={{
                            boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)'
                          }}
                        >
                          AI Video Call
                        </Button>
                        <Button 
                          leftSection={<IconMessageCircle size={16} />}
                          variant="light"
                          color="blue"
                          size="md"
                          radius="xl"
                          fullWidth
                          style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            color: 'white',
                            border: '1px solid rgba(255, 255, 255, 0.2)'
                          }}
                        >
                          AI Chat
                        </Button>
                        <Button 
                          leftSection={<IconSparkles size={16} />}
                          variant="light"
                          color="purple"
                          size="md"
                          radius="xl"
                          fullWidth
                          style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            color: 'white',
                            border: '1px solid rgba(255, 255, 255, 0.2)'
                          }}
                        >
                          AI Analysis
                        </Button>
                      </Stack>
                    </Stack>
                  </Card>
                </Grid.Col>
              </Grid>
            </Tabs.Panel>
          </Tabs>
        </Paper>

        {/* Modern Pagination */}
        <Center mb="xl">
          <Paper 
            p="md" 
            radius="xl"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <Pagination 
              total={5} 
              value={page} 
              onChange={setPage} 
              radius="xl" 
              color="blue"
              size="lg"
              withEdges
              styles={{
                control: {
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.2)'
                  }
                }
              }}
            />
          </Paper>
        </Center>
      </Container>
    </Box>
  );
}
