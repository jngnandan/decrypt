import React from 'react';
import { Container, Title, Text, ThemeIcon, Paper, Stack, Group, Button, SimpleGrid, Badge, Box, Image, Anchor } from '@mantine/core';
import { 
  IconShield, 
  IconUsers, 
  IconLock, 
  IconKey, 
  IconEye, 
  IconChartBar,
  IconNetwork,
  IconBuilding,
  IconGlobe,
  IconHeart,
  IconArrowRight,
  IconCheck,
  IconScale,
  IconCurrencyDollar,
  IconHandStop,
  IconServer,
  IconCoin,
  IconCheckbox,
  IconBriefcase,
  IconPrinter,
  IconRocket,
  IconBuildingStore,
  IconPlayerPlay,
  IconQuestionMark,
  IconMail,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandTelegram,
  IconBrandInstagram,
  IconBrandLinkedin
} from '@tabler/icons-react';

export default function AboutDecrypt() {
  const networkStateStats = [
    { number: "50,000+", label: "Digital Citizens", icon: IconUsers },
    { number: "2.5M+", label: "E-residents", icon: IconUsers },
    { number: "15,000+", label: "Digital Companies", icon: IconBuilding },
    { number: "150+", label: "Countries Represented", icon: IconGlobe },
  ];

  const networkStatePillars = [
    {
      icon: IconNetwork,
      title: "Digital Sovereignty",
      description: "A network state is a community that has achieved sufficient scale and coherence to be recognized as a legitimate political entity, but exists primarily in digital space rather than physical territory."
    },
    {
      icon: IconShield,
      title: "Cryptographic Legitimacy",
      description: "Our legitimacy comes from cryptographic proof of participation, transparent governance, and voluntary association rather than traditional territorial claims."
    },
    {
      icon: IconGlobe,
      title: "Global Citizenship",
      description: "Network state citizens can live anywhere in the world while maintaining their digital citizenship and participating in governance through blockchain technology."
    },
    {
      icon: IconScale,
      title: "Constitutional Governance",
      description: "We operate under a digital constitution that defines rights, responsibilities, and governance mechanisms, all enforced through smart contracts and community consensus."
    }
  ];

  const networkStateFeatures = [
    {
      icon: IconCheckbox,
      title: "Digital Democracy",
      description: "Every citizen has equal voting power in all decisions affecting the network state, with votes recorded immutably on the blockchain."
    },
    {
      icon: IconKey,
      title: "Self-Sovereign Identity",
      description: "Citizens control their own digital identity and personal data through cryptographic keys, ensuring privacy and autonomy."
    },
    {
      icon: IconCurrencyDollar,
      title: "Digital Economy",
      description: "A complete economic system with our own currency, banking, commerce, and financial services operating independently of traditional nation-states."
    },
    {
      icon: IconServer,
      title: "Decentralized Infrastructure",
      description: "Our governance, economy, and social systems run on decentralized networks that no single entity can control or shut down."
    }
  ];

  const networkStateTokens = [
    {
      name: "Decrypt Dollar",
      symbol: "D$",
      description: "Our primary currency for everyday transactions, pegged to the US dollar for stability. Used for all economic activities within the Decrypt network state, from paying for services to participating in our digital economy.",
      icon: IconCoin,
      color: "blue"
    },
    {
      name: "Decrypt Merit",
      symbol: "DM",
      description: "Governance tokens that represent citizenship rights and voting power. Earned through contributions to the community and required for participation in network state governance and decision-making processes.",
      icon: IconCheckbox,
      color: "green"
    }
  ];

  const governanceStructure = [
    {
      icon: IconCheckbox,
      title: "Citizen Assembly",
      description: "The primary governing body where all citizens can propose, debate, and vote on policies that affect the entire network state."
    },
    {
      icon: IconBuilding,
      title: "Digital Constitution",
      description: "Our foundational legal framework encoded in smart contracts, defining citizen rights, government structure, and the rule of law in our digital society."
    },
    {
      icon: IconEye,
      title: "Transparent Operations",
      description: "All government activities, spending, and decisions are publicly auditable on the blockchain, ensuring complete transparency and accountability."
    },
    {
      icon: IconScale,
      title: "Judicial System",
      description: "Decentralized dispute resolution and legal enforcement mechanisms that operate independently of traditional legal systems."
    }
  ];

  const networkStateServices = [
    { 
      icon: IconBriefcase, 
      title: "Digital Business Registration", 
      description: "Register companies that operate under network state law, with global reach and minimal bureaucracy." 
    },
    { 
      icon: IconPrinter, 
      title: "DAO Formation", 
      description: "Create decentralized autonomous organizations for community governance and collective decision-making." 
    },
    { 
      icon: IconRocket, 
      title: "Innovation Incubation", 
      description: "Launch startups with access to our digital economy, funding mechanisms, and global citizen base." 
    },
    { 
      icon: IconBuildingStore, 
      title: "Digital Foundations", 
      description: "Establish non-profit organizations that operate across borders under our legal framework." 
    }
  ];

  const networkStateAdvantages = [
    {
      icon: IconNetwork,
      title: "Borderless Operations",
      description: "Conduct business and governance without geographical limitations, reaching global markets and talent pools."
    },
    {
      icon: IconLock,
      title: "Enhanced Privacy",
      description: "Protect personal data and financial information through cryptographic security and decentralized systems."
    },
    {
      icon: IconGlobe,
      title: "Global Mobility",
      description: "Maintain citizenship and access to services regardless of physical location or traditional immigration status."
    },
    {
      icon: IconChartBar,
      title: "Economic Freedom",
      description: "Participate in a free market economy with minimal regulation and maximum individual economic liberty."
    }
  ];

  const globalStats = [
    { number: "2.5M+", label: "Global Citizens", icon: IconGlobe },
    { number: "150+", label: "Countries", icon: IconBuilding },
    { number: "50+", label: "Languages", icon: IconGlobe },
    { number: "24/7", label: "Governance", icon: IconCheckbox },
  ];

  const networkStateMedia = [
    {
      title: "Network State Research",
      description: "Academic papers and research on network state theory and implementation",
      icon: IconPlayerPlay,
      color: "blue"
    },
    {
      title: "Citizen Stories",
      description: "Real stories from network state citizens around the world",
      icon: IconQuestionMark,
      color: "blue"
    },
    {
      title: "Global Impact",
      description: "How our network state is changing the world",
      icon: IconGlobe,
      color: "yellow"
    }
  ];

  const footerLinks = {
    about: ["About", "Vision", "Team", "History", "Constitution", "Research"],
    citizenship: ["Apply", "E-residency", "Merit", "Dollar", "Rights"],
    governance: ["Assembly", "Voting", "Proposals", "Constitution", "Laws"],
    support: ["Contact", "FAQ", "Help Center", "Community"]
  };

  return (
    <div>
      {/* Hero Section */}
      <div style={{
        background: 'white',
        padding: '120px 0 80px',
        textAlign: 'center'
      }}>
        <Container size="lg">
          <Title order={1} size="h1" fw={900} mb="xl" style={{ 
            fontSize: '3.5rem',
            fontFamily: 'serif',
            lineHeight: 1.2
          }}>
            The World's First{' '}
            <Text component="span" c="blue" inherit>
              Network State
            </Text>
          </Title>
          
          <Text size="xl" c="dimmed" maw={800} mx="auto" lh={1.6} mb="xl" style={{ fontSize: '1.2rem' }}>
            Decrypt is a revolutionary network state—a digital nation that exists primarily in cyberspace, 
            governed by its citizens through blockchain technology. We're building a new form of political 
            organization that transcends traditional borders and creates a truly global, digital society.
          </Text>

          <Group justify="center" gap="xl" mt="xl">
            {networkStateStats.map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '8px'
                }}>
                  <ThemeIcon size={40} radius="xl" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
                    <stat.icon size={20} />
                  </ThemeIcon>
                </div>
                <Text size="xl" fw={700} c="dark">{stat.number}</Text>
                <Text size="sm" c="dimmed">{stat.label}</Text>
              </div>
            ))}
          </Group>
        </Container>
      </div>

      {/* Network State Pillars Section */}
      <div style={{ padding: '80px 0', background: 'white' }}>
        <Container size="lg">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <Title order={2} size="h2" fw={700} mb="lg" style={{ 
              fontSize: '2.5rem',
              fontFamily: 'serif'
            }}>
              What is a Network State?
            </Title>
            <Text size="lg" c="dimmed" maw={800} mx="auto" lh={1.6}>
              A network state is a community that has achieved sufficient scale and coherence to be recognized 
              as a legitimate political entity, but exists primarily in digital space rather than physical territory. 
              It's a new form of political organization for the digital age.
            </Text>
          </div>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
            {networkStatePillars.map((pillar, index) => (
              <Paper key={index} withBorder shadow="sm" p="xl" radius="md" style={{ textAlign: 'center', height: '100%' }}>
                <ThemeIcon 
                  size={60} 
                  radius="xl" 
                  variant="gradient" 
                  gradient={{ from: 'blue', to: 'cyan' }}
                  mb="md"
                >
                  <pillar.icon size={30} />
                </ThemeIcon>
                <Title order={3} size="h4" fw={600} mb="sm">
                  {pillar.title}
                </Title>
                <Text size="sm" c="dimmed" lh={1.6}>
                  {pillar.description}
                </Text>
              </Paper>
            ))}
          </SimpleGrid>

          {/* Network State Features */}
          <div style={{ marginTop: '80px' }}>
            <Title order={2} size="h2" fw={700} mb="lg" ta="center">
              How Our Network State Works
            </Title>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
              {networkStateFeatures.map((feature, index) => (
                <Paper key={index} withBorder shadow="sm" p="xl" radius="md" style={{ textAlign: 'center', height: '100%' }}>
                  <ThemeIcon 
                    size={60} 
                    radius="xl" 
                    variant="gradient" 
                    gradient={{ from: 'green', to: 'teal' }}
                    mb="md"
                  >
                    <feature.icon size={30} />
                  </ThemeIcon>
                  <Title order={3} size="h4" fw={600} mb="sm">
                    {feature.title}
                  </Title>
                  <Text size="sm" c="dimmed" lh={1.6}>
                    {feature.description}
                  </Text>
                </Paper>
              ))}
            </SimpleGrid>
          </div>
        </Container>
      </div>

      {/* Network State Economy Section */}
      <div style={{ 
        background: 'linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)',
        padding: '80px 0'
      }}>
        <Container size="lg">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <Title order={2} size="h2" fw={700} mb="lg">
              Our Digital Economy
            </Title>
            <Text size="lg" c="dimmed" maw={800} mx="auto" lh={1.6} mb="xl">
              A complete economic system operating independently of traditional nation-states, 
              with our own currency, banking, commerce, and financial services powered by blockchain technology.
            </Text>
            <Button size="lg" radius="xl" variant="filled" color="blue">
              Join the Economy
            </Button>
          </div>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
            {networkStateTokens.map((token, index) => (
              <Paper key={index} withBorder shadow="md" p="xl" radius="md" style={{ height: '100%' }}>
                <Group mb="md">
                  <ThemeIcon 
                    size={60} 
                    radius="xl" 
                    variant="gradient" 
                    gradient={{ from: token.color, to: token.color === 'blue' ? 'cyan' : 'teal' }}
                  >
                    <token.icon size={30} />
                  </ThemeIcon>
                  <div>
                    <Title order={3} size="h4" fw={600}>
                      {token.name}
                    </Title>
                    <Text size="sm" c="dimmed">
                      {token.symbol}
                    </Text>
                  </div>
                </Group>
                <Text size="sm" c="dimmed" lh={1.6} mb="md">
                  {token.description}
                </Text>
                <Button variant="outline" size="sm" radius="xl">
                  Learn more
                </Button>
              </Paper>
            ))}
          </SimpleGrid>
        </Container>
      </div>

      {/* Network State Governance Section */}
      <div style={{ padding: '80px 0', background: 'white' }}>
        <Container size="lg">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <Title order={2} size="h2" fw={700} mb="lg">
              Digital Democracy in Action
            </Title>
            <Text size="lg" c="dimmed" maw={800} mx="auto" lh={1.6}>
              Our network state operates under a digital constitution that defines rights, responsibilities, 
              and governance mechanisms. Every citizen has equal voting power in all decisions affecting 
              the network state, with votes recorded immutably on the blockchain.
            </Text>
          </div>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
            {governanceStructure.map((feature, index) => (
              <Paper key={index} withBorder shadow="sm" p="xl" radius="md" style={{ textAlign: 'center', height: '100%' }}>
                <ThemeIcon 
                  size={60} 
                  radius="xl" 
                  variant="gradient" 
                  gradient={{ from: 'blue', to: 'cyan' }}
                  mb="md"
                >
                  <feature.icon size={30} />
                </ThemeIcon>
                <Title order={3} size="h4" fw={600} mb="sm">
                  {feature.title}
                </Title>
                <Text size="sm" c="dimmed" lh={1.6}>
                  {feature.description}
                </Text>
              </Paper>
            ))}
          </SimpleGrid>
        </Container>
      </div>

      {/* Network State Services Section */}
      <div style={{ 
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
        padding: '80px 0',
        color: 'white'
      }}>
        <Container size="lg">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <Title order={2} size="h2" fw={700} mb="lg" c="white">
              Services in Our Network State
            </Title>
            <Text size="lg" c="dimmed" maw={800} mx="auto" lh={1.6} mb="xl">
              Access a complete suite of digital services that operate under our network state's legal framework. 
              From business registration to asset management, everything is designed for the digital age.
            </Text>
          </div>

          {/* Network State Services Grid */}
          <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="lg" mb="xl">
            {networkStateServices.map((service, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <ThemeIcon 
                  size={50} 
                  radius="xl" 
                  variant="gradient" 
                  gradient={{ from: 'blue', to: 'cyan' }}
                  mb="md"
                >
                  <service.icon size={25} />
                </ThemeIcon>
                <Text size="sm" fw={500} c="white" mb="xs">
                  {service.title}
                </Text>
                <Text size="xs" c="dimmed">
                  {service.description}
                </Text>
              </div>
            ))}
          </SimpleGrid>

          {/* Network State Advantages */}
          <div style={{ marginBottom: '60px' }}>
            <Title order={3} size="h3" fw={700} c="white" mb="lg" ta="center">
              Why Choose Our Network State?
            </Title>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
              {networkStateAdvantages.map((advantage, index) => (
                <Paper key={index} withBorder shadow="sm" p="xl" radius="md" style={{ 
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  textAlign: 'center',
                  height: '100%'
                }}>
                  <ThemeIcon 
                    size={50} 
                    radius="xl" 
                    variant="gradient" 
                    gradient={{ from: 'green', to: 'teal' }}
                    mb="md"
                  >
                    <advantage.icon size={25} />
                  </ThemeIcon>
                  <Title order={4} size="h5" fw={600} c="white" mb="sm">
                    {advantage.title}
                  </Title>
                  <Text size="sm" c="dimmed" lh={1.6}>
                    {advantage.description}
                  </Text>
                </Paper>
              ))}
            </SimpleGrid>
          </div>

          {/* Digital Asset Management */}
          <Paper withBorder shadow="sm" p="xl" radius="md" style={{ 
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            marginBottom: '40px'
          }}>
            <Group justify="space-between" align="flex-start">
              <div style={{ flex: 1 }}>
                <Title order={3} size="h4" fw={600} c="white" mb="md">
                  Digital Asset Management
                </Title>
                <Text size="sm" c="dimmed" lh={1.6} mb="md">
                  Register, manage, and trade any digital or physical asset on our blockchain. 
                  From intellectual property to real estate, our platform provides secure, 
                  transparent, and immutable asset registration with global recognition.
                </Text>
                <Button variant="outline" color="white" radius="xl">
                  Learn more about assets
                </Button>
              </div>
              <div style={{ width: '200px', height: '150px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}>
                {/* Placeholder for illustration */}
              </div>
            </Group>
          </Paper>

          {/* Educational Resources */}
          <Paper withBorder shadow="sm" p="xl" radius="md" style={{ 
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <Group justify="space-between" align="flex-start">
              <div style={{ width: '200px', height: '150px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}>
                {/* Placeholder for illustration */}
              </div>
              <div style={{ flex: 1 }}>
                <Title order={3} size="h4" fw={600} c="white" mb="md">
                  Educational Resources
                </Title>
                <Text size="sm" c="dimmed" lh={1.6} mb="md">
                  Access our comprehensive library of educational content about network states, 
                  blockchain technology, and digital governance. Learn from experts and 
                  connect with fellow citizens worldwide.
                </Text>
                <Button variant="outline" color="white" radius="xl">
                  Explore resources
                </Button>
              </div>
            </Group>
      </Paper>
    </Container>
      </div>

      {/* Global Network State Community Section */}
      <div style={{ padding: '80px 0', background: 'white' }}>
        <Container size="lg">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <Title order={2} size="h2" fw={700} mb="lg">
              Global Network State Community
            </Title>
            <Text size="lg" c="dimmed" maw={800} mx="auto" lh={1.6} mb="xl">
              Join a global community of digital citizens who are pioneering the future of governance, 
              economy, and society. Our network state transcends traditional borders, creating 
              a truly international community united by shared values and digital technology.
            </Text>
            <Button size="lg" radius="xl" variant="filled" color="blue">
              Become a Citizen
            </Button>
          </div>

          {/* Network State Stats */}
          <Group justify="center" gap="xl" mb="xl">
            {globalStats.map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <ThemeIcon 
                  size={50} 
                  radius="xl" 
                  variant="gradient" 
                  gradient={{ from: 'blue', to: 'cyan' }}
                  mb="md"
                >
                  <stat.icon size={25} />
                </ThemeIcon>
                <Text size="xl" fw={700} c="dark">{stat.number}</Text>
                <Text size="sm" c="dimmed">{stat.label}</Text>
              </div>
            ))}
          </Group>

          {/* Network State Media Cards */}
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
            {networkStateMedia.map((card, index) => (
              <Paper key={index} withBorder shadow="sm" p="xl" radius="md" style={{ 
                background: card.color === 'yellow' ? 'linear-gradient(135deg, #ffd700, #ffed4e)' : 'linear-gradient(135deg, #1e40af, #3b82f6)',
                color: 'white',
                textAlign: 'center',
                height: '100%'
              }}>
                <ThemeIcon 
                  size={50} 
                  radius="xl" 
                  variant="filled" 
                  color="white"
                  mb="md"
                >
                  <card.icon size={25} color={card.color === 'yellow' ? '#1e40af' : 'white'} />
                </ThemeIcon>
                <Title order={3} size="h4" fw={600} mb="sm" c="white">
                  {card.title}
                </Title>
                <Text size="sm" c="white" lh={1.6}>
                  {card.description}
                </Text>
              </Paper>
            ))}
          </SimpleGrid>
        </Container>
      </div>

      {/* Network State FAQ Section */}
      <div style={{ 
        background: 'linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)',
        padding: '80px 0'
      }}>
        <Container size="lg">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <Title order={2} size="h2" fw={700} mb="lg">
              Network State FAQ
            </Title>
            <Text size="lg" c="dimmed" maw={600} mx="auto" lh={1.6} mb="xl">
              Learn more about network states, digital citizenship, and how our revolutionary 
              form of governance is changing the world. Find answers to the most common 
              questions about our digital nation.
            </Text>
            <Group justify="center" gap="md">
              <Button size="lg" radius="xl" variant="filled" color="blue">
                View all FAQs
              </Button>
              <Button size="lg" radius="xl" variant="outline" color="blue">
                Join our community
              </Button>
            </Group>
          </div>
        </Container>
      </div>

      {/* Network State Footer */}
      <div style={{ 
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
        padding: '60px 0 40px',
        color: 'white'
      }}>
        <Container size="lg">
          <Group justify="space-between" align="flex-start" mb="xl">
            <div style={{ flex: 1 }}>
              <Group mb="md">
                <ThemeIcon size={40} radius="xl" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
                  <IconShield size={20} />
                </ThemeIcon>
                <Title order={3} size="h4" fw={600} c="white">
                  Decrypt Network State
                </Title>
              </Group>
              <Text size="sm" c="dimmed" mb="md" maw={300}>
                The world's first network state—a digital nation that exists primarily in cyberspace, 
                governed by its citizens through blockchain technology and democratic principles.
              </Text>
              <Group gap="md">
                <IconBrandFacebook size={20} style={{ cursor: 'pointer' }} />
                <IconBrandTwitter size={20} style={{ cursor: 'pointer' }} />
                <IconBrandYoutube size={20} style={{ cursor: 'pointer' }} />
                <IconBrandTelegram size={20} style={{ cursor: 'pointer' }} />
                <IconBrandInstagram size={20} style={{ cursor: 'pointer' }} />
                <IconBrandLinkedin size={20} style={{ cursor: 'pointer' }} />
              </Group>
            </div>
            
            <div style={{ display: 'flex', gap: '60px' }}>
              <div>
                <Title order={4} size="h5" fw={600} c="white" mb="md">ABOUT</Title>
                <Stack gap="xs">
                  {footerLinks.about.map((link, index) => (
                    <Anchor key={index} size="sm" c="dimmed" style={{ textDecoration: 'none' }}>
                      {link}
                    </Anchor>
                  ))}
                </Stack>
              </div>
              
              <div>
                <Title order={4} size="h5" fw={600} c="white" mb="md">CITIZENSHIP</Title>
                <Stack gap="xs">
                  {footerLinks.citizenship.map((link, index) => (
                    <Anchor key={index} size="sm" c="dimmed" style={{ textDecoration: 'none' }}>
                      {link}
                    </Anchor>
                  ))}
                </Stack>
              </div>
              
              <div>
                <Title order={4} size="h5" fw={600} c="white" mb="md">GOVERNANCE</Title>
                <Stack gap="xs">
                  {footerLinks.governance.map((link, index) => (
                    <Anchor key={index} size="sm" c="dimmed" style={{ textDecoration: 'none' }}>
                      {link}
                    </Anchor>
                  ))}
                </Stack>
              </div>
              
              <div>
                <Title order={4} size="h5" fw={600} c="white" mb="md">SUPPORT</Title>
                <Stack gap="xs">
                  {footerLinks.support.map((link, index) => (
                    <Anchor key={index} size="sm" c="dimmed" style={{ textDecoration: 'none' }}>
                      {link}
                    </Anchor>
                  ))}
                </Stack>
              </div>
            </div>
          </Group>
          
          <div style={{ 
            borderTop: '1px solid rgba(255,255,255,0.1)', 
            paddingTop: '20px', 
            textAlign: 'center' 
          }}>
            <Text size="sm" c="dimmed">
              © 2024 Decrypt Network State. All rights reserved. | Digital Nation | Blockchain Governance
            </Text>
          </div>
        </Container>
      </div>
    </div>
  );
}