import React from 'react';
import { 
  Container, 
  Title, 
  Text, 
  SimpleGrid, 
  Card, 
  ThemeIcon, 
  Group, 
  Button, 
  Table, 
  Code, 
  Stack,
  Anchor,
  Box,
  Paper,
  Badge
} from '@mantine/core';
import {
  IconBook,
  IconUsers,
  IconShield,
  IconNetwork,
  IconCheck,
  IconCoin,
  IconScale,
  IconGlobe,
  IconChartBar,
  IconKey,
  IconBuilding,
  IconArrowRight,
  IconExternalLink,
  IconDownload,
  IconHeart,
  IconStar,
  IconBrandGithub
} from '@tabler/icons-react';

export default function KnowledgePage() {
  // Getting Started Templates - Network State Fundamentals
  const fundamentals = [
    {
      icon: IconNetwork,
      title: "Network State Basics",
      description: "Learn the core concepts of network states, digital sovereignty, and decentralized governance",
      action: "Start Learning",
      link: "/about"
    },
    {
      icon: IconUsers,
      title: "Digital Citizenship",
      description: "Understand how digital citizenship works, rights, responsibilities, and participation",
      action: "Explore Citizenship",
      link: "/about#citizenship"
    },
    {
      icon: IconShield,
      title: "Blockchain Governance",
      description: "Deep dive into blockchain-based governance, smart contracts, and consensus mechanisms",
      action: "Learn Governance",
      link: "/governance"
    },
    {
      icon: IconCoin,
      title: "Digital Economy",
      description: "Discover how digital currencies, tokens, and economic systems work in network states",
      action: "Understand Economy",
      link: "/about#economy"
    }
  ];

  // Core Concepts - Advanced Topics
  const coreTopics = [
    {
      icon: IconCheck,
      title: "Decentralized Democracy", 
      description: "Advanced voting mechanisms, proposal systems, and democratic participation in digital space",
      badge: "Advanced"
    },
    {
      icon: IconScale,
      title: "Constitutional Framework",
      description: "Legal structures, smart contract constitutions, and on-chain governance protocols",
      badge: "Governance"
    },
    {
      icon: IconGlobe,
      title: "Global Citizenship Models",
      description: "Explore different models of global digital citizenship and international recognition",
      badge: "Identity"
    },
    {
      icon: IconKey,
      title: "Cryptographic Identity",
      description: "Self-sovereign identity, digital keys, and privacy-preserving authentication systems",
      badge: "Technical"
    },
    {
      icon: IconChartBar,
      title: "Economic Analytics",
      description: "Understanding network state economics, token mechanics, and resource allocation",
      badge: "Economics"
    },
    {
      icon: IconBuilding,
      title: "Institutional Integration",
      description: "How network states interact with traditional institutions and legal frameworks",
      badge: "Policy"
    }
  ];

  // Knowledge Areas Guide
  const knowledgeAreas = [
    {
      title: "For Citizens",
      description: "Best choice for individuals looking to understand and participate in network state governance",
      recommended: true,
      topics: ["Digital Rights", "Voting Systems", "Economic Participation", "Identity Management"]
    },
    {
      title: "For Developers", 
      description: "Technical implementation of blockchain governance, smart contracts, and dApps",
      recommended: true,
      topics: ["Smart Contracts", "Blockchain Dev", "Identity Protocols", "Governance APIs"]
    },
    {
      title: "For Researchers",
      description: "Academic and theoretical foundations of network states and digital governance",
      recommended: false,
      topics: ["Political Theory", "Economics", "Legal Framework", "Social Systems"]
    },
    {
      title: "For Policymakers",
      description: "Integration with existing legal systems and regulatory considerations",
      recommended: false,
      topics: ["Legal Integration", "Regulatory Framework", "International Law", "Recognition"]
    },
    {
      title: "For Entrepreneurs",
      description: "Building businesses and organizations within network state ecosystems",
      recommended: false,
      topics: ["Digital Business", "Token Economics", "DAO Formation", "Funding"]
    }
  ];

  // Key Topics Table
  const keyTopics = [
    { name: "Network State Theory", description: "Foundational concepts and political theory behind network states" },
    { name: "Digital Governance", description: "Blockchain-based voting, proposal systems, and community management" },
    { name: "Cryptographic Identity", description: "Self-sovereign identity systems and privacy-preserving authentication" },
    { name: "Token Economics", description: "Digital currencies, governance tokens, and economic incentive mechanisms" },
    { name: "Smart Contracts", description: "Automated governance protocols and constitutional enforcement" },
    { name: "DAO Formation", description: "Creating and managing decentralized autonomous organizations" },
    { name: "Legal Framework", description: "Integration with traditional legal systems and regulatory compliance" },
    { name: "Community Building", description: "Social cohesion, shared values, and collective decision-making" },
    { name: "Digital Rights", description: "Constitutional rights, privacy protection, and citizen protections" },
    { name: "Economic Systems", description: "Resource allocation, market mechanisms, and wealth distribution" },
    { name: "Technical Infrastructure", description: "Blockchain networks, consensus mechanisms, and scalability solutions" },
    { name: "International Relations", description: "Recognition, diplomacy, and interaction with nation-states" }
  ];

  // Learning Resources
  const resources = [
    { title: "Network State Whitepaper", description: "Comprehensive guide to network state theory and implementation", link: "/about" },
    { title: "Digital Constitution", description: "Our constitutional framework and citizen rights", link: "/governance" },
    { title: "Governance Protocol", description: "Technical documentation for governance smart contracts", link: "/governance" },
    { title: "Token Economics Guide", description: "Understanding the digital economy and incentive structures", link: "/blockchain" },
    { title: "Citizen Handbook", description: "Practical guide for new citizens and community participation", link: "/about" },
    { title: "Developer Documentation", description: "APIs, smart contracts, and technical integration guides", link: "/blockchain" }
  ];

  return (
    <Container size="lg" py={60}>
      <Stack gap={80}>
        {/* Hero Section */}
        <Box ta="center">
          <Title order={1} size={48} fw={600} mb="lg">
            Network State Knowledge Center
          </Title>
          <Text size="xl" c="dimmed" maw={800} mx="auto" lh={1.6}>
            Comprehensive resources for understanding digital governance, blockchain democracy, 
            and the future of decentralized nation-states. Learn how to participate in the 
            world's first network state.
          </Text>
        </Box>

        {/* Get Started with Fundamentals */}
        <Box>
          <Title order={2} size={32} fw={500} mb="lg">
            Get started with network state fundamentals
          </Title>
          <Text size="lg" c="dimmed" mb="xl" lh={1.6}>
            The easiest way to get started is to begin with core concepts.
            All guides include practical examples and real-world applications.
            Choose your learning path based on your role and interests.
          </Text>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
            {fundamentals.map((item, index) => (
              <Card key={index} withBorder shadow="sm" padding="lg" radius="md" h="100%">
                <Card.Section p="lg" pb="xs">
                  <ThemeIcon size={50} radius="xl" variant="light" color="blue" mb="md">
                    <item.icon size={20} stroke={1.5} />
                  </ThemeIcon>
                  <Title order={3} size="lg" fw={500} mb="xs">
                    {item.title}
                  </Title>
                  <Text size="sm" c="dimmed" lh={1.5}>
                    {item.description}
                  </Text>
                </Card.Section>
                <Card.Section p="lg" pt="xs">
                  <Button 
                    component="a"
                    href={item.link}
                    variant="light" 
                    color="blue" 
                    fullWidth 
                    rightSection={<IconArrowRight size={16} />}
                    radius="md"
                  >
                    {item.action}
                  </Button>
                </Card.Section>
              </Card>
            ))}
          </SimpleGrid>
        </Box>

        {/* Core Topics */}
        <Box>
          <Title order={2} size={32} fw={500} mb="lg">
            Core topics and advanced concepts
          </Title>
          <Text size="lg" c="dimmed" mb="xl" lh={1.6}>
            Deep dive into specialized areas of network state theory and practice. These topics
            are created and maintained by our community of experts, researchers, and practitioners.
          </Text>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
            {coreTopics.map((item, index) => (
              <Card key={index} withBorder shadow="sm" padding="lg" radius="md" h="100%">
                <Group justify="space-between" mb="xs">
                  <ThemeIcon size={40} radius="xl" variant="light" color="green">
                    <item.icon size={20} stroke={1.5} />
                  </ThemeIcon>
                  <Badge variant="light" color="blue" size="sm">
                    {item.badge}
                  </Badge>
                </Group>
                <Title order={3} size="lg" fw={500} mb="xs">
                  {item.title}
                </Title>
                <Text size="sm" c="dimmed" lh={1.5}>
                  {item.description}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </Box>

        {/* Knowledge Areas Guide */}
        <Box>
          <Title order={2} size={32} fw={500} mb="lg">
            Knowledge areas guide
          </Title>
          <Text size="lg" c="dimmed" mb="xl" lh={1.6}>
            Choose your learning path based on your role and interests. Each area provides
            tailored content and resources for specific audiences and use cases.
          </Text>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
            {knowledgeAreas.slice(0, 2).map((area, index) => (
              <Paper key={index} withBorder p="xl" radius="md" style={{ 
                border: area.recommended ? '2px solid var(--mantine-color-blue-4)' : undefined 
              }}>
                {area.recommended && (
                  <Badge 
                    variant="filled" 
                    color="blue" 
                    size="sm" 
                    mb="md"
                    leftSection={<IconStar size={12} />}
                  >
                    Recommended
                  </Badge>
                )}
                <Title order={3} size="lg" fw={500} mb="xs">
                  {area.title}
                </Title>
                <Text size="sm" c="dimmed" mb="md" lh={1.5}>
                  {area.description}
                </Text>
                <Group gap="xs" mb="md">
                  {area.topics.map((topic, i) => (
                    <Badge key={i} variant="light" size="xs">{topic}</Badge>
                  ))}
                </Group>
                <Button 
                  component="a"
                  href={area.title === "For Citizens" ? "/about" : 
                        area.title === "For Developers" ? "/blockchain" :
                        area.title === "For Researchers" ? "/socio-political" :
                        area.title === "For Policymakers" ? "/governance" : "/about"}
                  variant="outline" 
                  size="sm" 
                  fullWidth 
                  radius="md"
                >
                  Start Learning
                </Button>
              </Paper>
            ))}
          </SimpleGrid>

          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg" mt="lg">
            {knowledgeAreas.slice(2).map((area, index) => (
              <Paper key={index} withBorder p="lg" radius="md">
                <Title order={4} size="md" fw={500} mb="xs">
                  {area.title}
                </Title>
                <Text size="sm" c="dimmed" mb="md" lh={1.5}>
                  {area.description}
                </Text>
                <Group gap="xs" mb="md">
                  {area.topics.slice(0, 2).map((topic, i) => (
                    <Badge key={i} variant="light" size="xs">{topic}</Badge>
                  ))}
                </Group>
                <Button 
                  component="a"
                  href={area.title === "For Researchers" ? "/socio-political" : 
                        area.title === "For Policymakers" ? "/governance" :
                        area.title === "For Entrepreneurs" ? "/blockchain" : "/about"}
                  variant="outline" 
                  size="sm" 
                  fullWidth 
                  radius="md"
                >
                  Start Learning
                </Button>
              </Paper>
            ))}
          </SimpleGrid>
        </Box>

        {/* Key Topics Table */}
        <Box>
          <Title order={2} size={32} fw={500} mb="lg">
            Choose topics that you will study
          </Title>
          <Text size="lg" c="dimmed" mb="xl" lh={1.6}>
            Our knowledge base covers all aspects of network states, from theoretical foundations
            to practical implementation. Select topics based on your interests and goals.
          </Text>

          <Paper withBorder radius="md" p={0}>
            <Table striped highlightOnHover>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Topic</Table.Th>
                  <Table.Th>Description</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {keyTopics.map((topic, index) => (
                  <Table.Tr key={index}>
                    <Table.Td>
                      <Text fw={500} size="sm">{topic.name}</Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" c="dimmed">{topic.description}</Text>
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Paper>
        </Box>

        {/* Learning Path */}
        <Box>
          <Title order={2} size={32} fw={500} mb="lg">
            Start your learning journey
          </Title>
          <Text size="lg" c="dimmed" mb="xl" lh={1.6}>
            Follow this structured learning path to build comprehensive understanding of 
            network states and digital governance.
          </Text>

          <Stack gap="lg">
            <Paper withBorder p="lg" radius="md">
              <Text fw={500} size="lg" mb="md">Step 1: Foundation Knowledge</Text>
              <Code block p="md" style={{ backgroundColor: '#f8f9fa' }}>
                {`1. Read the Network State Whitepaper
2. Understand Digital Sovereignty concepts  
3. Learn about Blockchain Governance basics
4. Explore Digital Citizenship models`}
              </Code>
            </Paper>

            <Paper withBorder p="lg" radius="md">
              <Text fw={500} size="lg" mb="md">Step 2: Core Concepts</Text>
              <Code block p="md" style={{ backgroundColor: '#f8f9fa' }}>
                {`1. Study Constitutional Framework
2. Understand Token Economics
3. Learn Smart Contract Governance
4. Explore DAO Formation principles`}
              </Code>
            </Paper>

            <Paper withBorder p="lg" radius="md">
              <Text fw={500} size="lg" mb="md">Step 3: Practical Application</Text>
              <Code block p="md" style={{ backgroundColor: '#f8f9fa' }}>
                {`1. Participate in Community Governance
2. Engage with Voting Mechanisms
3. Build or join DAOs
4. Contribute to Policy Development`}
              </Code>
            </Paper>
          </Stack>
        </Box>

        {/* Resources */}
        <Box>
          <Title order={2} size={32} fw={500} mb="lg">
            Essential resources and documentation
          </Title>
          <Text size="lg" c="dimmed" mb="xl" lh={1.6}>
            Access our comprehensive library of documentation, guides, and research materials.
            All resources are created by experts and updated regularly.
          </Text>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
            {resources.map((resource, index) => (
              <Paper key={index} withBorder p="lg" radius="md" component="a" href={resource.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Group justify="space-between" mb="xs">
                  <ThemeIcon size={40} radius="xl" variant="light" color="blue">
                    <IconBook size={20} stroke={1.5} />
                  </ThemeIcon>
                  <IconExternalLink size={16} color="var(--mantine-color-dimmed)" />
                </Group>
                <Title order={4} size="md" fw={500} mb="xs">
                  {resource.title}
                </Title>
                <Text size="sm" c="dimmed" lh={1.5}>
                  {resource.description}
                </Text>
              </Paper>
            ))}
          </SimpleGrid>
        </Box>

        {/* Community Contribution */}
        <Box>
          <Paper withBorder p="xl" radius="md" style={{ backgroundColor: '#f8f9fa' }}>
            <Title order={2} size={32} fw={500} mb="lg" ta="center">
              Contribute to network state knowledge
            </Title>
            <Text size="lg" c="dimmed" mb="xl" ta="center" maw={800} mx="auto" lh={1.6}>
              All contributions to our knowledge base are welcome and appreciated.
              Help build the future of digital governance by sharing your expertise,
              research, and practical insights.
            </Text>

            <Group justify="center" gap="lg">
              <Button 
                component="a"
                href="/about"
                size="lg" 
                leftSection={<IconHeart size={16} />}
                radius="xl"
                variant="filled"
                color="blue"
              >
                Contribute Knowledge
              </Button>
              <Button 
                component="a"
                href="https://github.com/liberland"
                target="_blank"
                rel="noopener noreferrer"
                size="lg" 
                leftSection={<IconBrandGithub size={16} />}
                radius="xl"
                variant="outline"
                color="blue"
              >
                GitHub Repository
              </Button>
            </Group>

            <Text size="md" c="dimmed" mt="xl" ta="center">
              Other ways to contribute: Share feedback • Help community members • 
              Review content • Translate resources • Write guides
            </Text>
          </Paper>
        </Box>
      </Stack>
    </Container>
  );
}