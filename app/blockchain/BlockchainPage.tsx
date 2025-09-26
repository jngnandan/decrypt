'use client';

import React from 'react';
import { Container, Title, Text, Group, Stack, Card, SimpleGrid, Button, ThemeIcon, Box, Avatar, Rating, Badge, Divider } from '@mantine/core';
import { IconUsers, IconBuildingBank, IconChecklist, IconGavel, IconShield, IconCoin, IconTrendingUp, IconWorld, IconChartBar, IconCheck } from '@tabler/icons-react';

// Hero Section with Statistics
function HeroSection() {
  const stats = [
    { value: '1,200', label: 'Registered citizens', icon: IconUsers },
    { value: '796,336', label: 'Citizenship requests', icon: IconWorld },
    { value: '91', label: 'Companies registered', icon: IconBuildingBank },
    { value: '4,681', label: 'Unique active wallets', icon: IconShield }
  ];

  return (
    <div style={{ backgroundColor: '#fff', paddingTop: '80px', paddingBottom: '80px' }}>
      <Container size="lg">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Badge 
            size="lg" 
            radius="lg" 
            style={{ 
              backgroundColor: '#e7f5ff', 
              color: '#00aff0', 
              marginBottom: '24px',
              fontSize: '14px',
              fontWeight: 600
            }}
          >
            Running a physical nation state on chain
          </Badge>
          
          <Title 
            order={1} 
            style={{ 
              fontSize: '56px', 
              fontWeight: 800, 
              color: '#1c1c1c',
              marginBottom: '24px',
              lineHeight: 1.1
            }}
          >
            Liberland Blockchain
          </Title>

          <Text 
            size="xl" 
            style={{ 
              color: '#666', 
              maxWidth: '700px', 
              margin: '0 auto 40px',
              fontSize: '22px',
              lineHeight: 1.5
            }}
          >
            Governance, citizenship, business, markets, and judiciary all running on the Liberland Blockchain.
          </Text>

          <Group justify="center" gap="lg">
            <Button 
              size="xl"
              style={{
                backgroundColor: '#00aff0',
                borderRadius: '12px',
                padding: '16px 40px',
                fontSize: '18px',
                fontWeight: 600,
                border: 'none'
              }}
            >
              Go to app
            </Button>
            <Button 
              variant="outline"
              size="xl"
              style={{
                borderColor: '#00aff0',
                color: '#00aff0',
                borderRadius: '12px',
                padding: '16px 40px',
                fontSize: '18px',
                fontWeight: 600
              }}
            >
              Get LLD
            </Button>
          </Group>
        </div>

        {/* Statistics */}
        <SimpleGrid cols={{ base: 2, md: 4 }} spacing="xl">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              radius="lg" 
              style={{ 
                border: '1px solid #e9ecef', 
                textAlign: 'center', 
                padding: '32px 20px',
                backgroundColor: '#fff'
              }}
            >
              <ThemeIcon
                size={48}
                radius="md"
                style={{ backgroundColor: '#f0f9ff', color: '#00aff0', margin: '0 auto 16px' }}
              >
                <stat.icon size={24} stroke={1.8} />
              </ThemeIcon>
              <Text fw={700} size="xl" style={{ color: '#1c1c1c', marginBottom: '8px' }}>
                {stat.value}
              </Text>
              <Text size="sm" style={{ color: '#666' }}>
                {stat.label}
              </Text>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: IconChecklist,
      title: 'Decentralized hyperdemocracy',
      description: 'Citizens vote on referenda themselves or delegate their voting power to members of Congress. Citizens can also veto new legislation.',
      color: '#00aff0'
    },
    {
      icon: IconCoin,
      title: 'Crypto-friendly legislation',
      description: 'Companies can start blockchain-related businesses in a regulated environment. Bitcoin and the Liberland dollar (LLD) are the preferred currencies.',
      color: '#ff6b35'
    },
    {
      icon: IconBuildingBank,
      title: 'Start on-chain companies',
      description: 'Companies can be managed fully on chain: shares, contracts, and governance can all be run on the Liberland Blockchain.',
      color: '#7c4dff'
    },
    {
      icon: IconShield,
      title: 'NFT registries',
      description: 'NFTs represent digital and physical land, vehicles, and assets. Soulbound NFTs represent citizenship and government functions.',
      color: '#00c851'
    },
    {
      icon: IconGavel,
      title: 'On-chain courts',
      description: 'Both hybrid and smart contracts are legal in Liberland, and can be adjudicated through Liberland courts with full legal status.',
      color: '#2bbbad'
    },
    {
      icon: IconUsers,
      title: 'Passport connected to chain',
      description: 'The Liberland passport is connected to your on-chain identity, making it easier to verify yourself and participate.',
      color: '#ff5722'
    }
  ];

  return (
    <div style={{ backgroundColor: '#f8f9fa', paddingTop: '80px', paddingBottom: '80px' }}>
      <Container size="lg">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Title 
            order={2} 
            style={{ 
              fontSize: '42px', 
              fontWeight: 700, 
              color: '#1c1c1c',
              marginBottom: '16px'
            }}
          >
            Building the freest nation in the world
          </Title>
          <Text 
            size="lg" 
            style={{ 
              color: '#666', 
              maxWidth: '800px', 
              margin: '0 auto',
              fontSize: '18px',
              lineHeight: 1.6
            }}
          >
            The Free Republic of Liberland is a sovereign state where entire governance is managed on chain, 
            enabling direct democracy and complete transparency in all government operations.
          </Text>
        </div>

        <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="xl">
          {features.map((feature, index) => (
            <Card 
              key={index}
              radius="lg" 
              style={{ 
                border: '1px solid #e9ecef', 
                padding: '32px',
                height: '100%',
                backgroundColor: '#fff'
              }}
            >
              <ThemeIcon
                size={64}
                radius="md"
                style={{ backgroundColor: `${feature.color}15`, color: feature.color, marginBottom: '20px' }}
              >
                <feature.icon size={32} stroke={1.8} />
              </ThemeIcon>
              
              <Text fw={600} size="lg" style={{ color: '#1c1c1c', marginBottom: '12px' }}>
                {feature.title}
              </Text>
              <Text size="sm" style={{ color: '#666', lineHeight: 1.6 }}>
                {feature.description}
              </Text>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
}

// Testimonials Section (Wanderlog style)
function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Blockchain Developer',
      avatar: 'SC',
      rating: 5,
      text: 'Finally, a nation that understands the future of governance. The on-chain democracy is revolutionary and actually works.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Digital Nomad',
      avatar: 'MR',
      rating: 5,
      text: 'Registered my company on the Liberland Blockchain in minutes. The process is transparent and efficient.'
    },
    {
      name: 'Elena Volkov',
      role: 'Legal Tech Founder',
      avatar: 'EV',
      rating: 5,
      text: 'The hybrid contract system is game-changing. Smart contracts with legal backing - this is the future of business.'
    },
    {
      name: 'David Kim',
      role: 'Crypto Investor',
      avatar: 'DK',
      rating: 5,
      text: 'Love the voluntary tax system and direct democracy. Citizens actually have control over their government spending.'
    },
    {
      name: 'Anna Fischer',
      role: 'Tech Entrepreneur',
      avatar: 'AF',
      rating: 5,
      text: 'The NFT asset registry is brilliant. Finally, a secure way to register and transfer property ownership.'
    },
    {
      name: 'James Thompson',
      role: 'DeFi Protocol Lead',
      avatar: 'JT',
      rating: 5,
      text: 'Liberland is proving that blockchain governance isn\'t just theoretical. Real citizens, real democracy, real results.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#fff', paddingTop: '80px', paddingBottom: '80px' }}>
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
            What citizens are saying
          </Title>
          <Text 
            size="lg" 
            style={{ 
              color: '#666', 
              maxWidth: '600px', 
              margin: '0 auto'
            }}
          >
            Over 1,200 registered citizens have already experienced the future of governance
          </Text>
        </div>

        <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="xl">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              radius="lg" 
              style={{ 
                border: '1px solid #e9ecef', 
                padding: '24px'
              }}
            >
              <Group gap="md" style={{ marginBottom: '16px' }}>
                <Avatar size={48} radius="md" style={{ backgroundColor: '#00aff0', color: '#fff' }}>
                  {testimonial.avatar}
                </Avatar>
                <div style={{ flex: 1 }}>
                  <Text fw={600} size="sm" style={{ color: '#1c1c1c' }}>
                    {testimonial.name}
                  </Text>
                  <Text size="xs" style={{ color: '#666' }}>
                    {testimonial.role}
                  </Text>
                </div>
              </Group>
              
              <Rating value={testimonial.rating} readOnly size="sm" style={{ marginBottom: '12px' }} />
              
              <Text size="sm" style={{ color: '#666', lineHeight: 1.6 }}>
                {testimonial.text}
              </Text>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
}

// Tokens Section
function TokensSection() {
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
            The Liberland tokens
          </Title>
          <Text 
            size="lg" 
            style={{ 
              color: '#666', 
              maxWidth: '700px', 
              margin: '0 auto'
            }}
          >
            Two complementary tokens power Liberland's economy and governance, 
            ensuring separation of financial and political power.
          </Text>
        </div>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <Card 
            radius="lg" 
            style={{ 
              border: '1px solid #e9ecef', 
              padding: '40px',
              backgroundColor: '#fff'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                borderRadius: '50%', 
                backgroundColor: '#fff3e0', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                border: '3px solid #ff6b35'
              }}>
                <IconCoin size={40} style={{ color: '#ff6b35' }} />
              </div>
              <div>
                <Title order={3} style={{ color: '#1c1c1c', marginBottom: '4px' }}>
                  Liberland Dollar
                </Title>
                <Badge style={{ backgroundColor: '#ff6b3515', color: '#ff6b35' }}>
                  LLD
                </Badge>
              </div>
            </div>
            
            <Text style={{ color: '#666', lineHeight: 1.6, marginBottom: '24px' }}>
              The operational token required for gas fees, contracts, companies, and courts. 
              Used for staking to secure the network through nominated proof-of-citizenship consensus.
            </Text>
            
            <Group gap="md">
              <Button 
                style={{
                  backgroundColor: '#ff6b35',
                  borderRadius: '8px',
                  border: 'none'
                }}
              >
                Buy LLD
              </Button>
              <Button 
                variant="outline"
                style={{
                  borderColor: '#ff6b35',
                  color: '#ff6b35',
                  borderRadius: '8px'
                }}
              >
                Tokenomics
              </Button>
            </Group>
          </Card>

          <Card 
            radius="lg" 
            style={{ 
              border: '1px solid #e9ecef', 
              padding: '40px',
              backgroundColor: '#fff'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                borderRadius: '50%', 
                backgroundColor: '#f0f9ff', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                border: '3px solid #00aff0'
              }}>
                <IconTrendingUp size={40} style={{ color: '#00aff0' }} />
              </div>
              <div>
                <Title order={3} style={{ color: '#1c1c1c', marginBottom: '4px' }}>
                  Liberland Merit
                </Title>
                <Badge style={{ backgroundColor: '#00aff015', color: '#00aff0' }}>
                  LLM
                </Badge>
              </div>
            </div>
            
            <Text style={{ color: '#666', lineHeight: 1.6, marginBottom: '24px' }}>
              The political token awarded for contributions to Liberland. Required for citizenship 
              and voting in elections. Maximum supply of 70 million merits ever.
            </Text>
            
            <Button 
              style={{
                backgroundColor: '#00aff0',
                borderRadius: '8px',
                border: 'none'
              }}
            >
              Make a contribution for LLM
            </Button>
          </Card>
        </SimpleGrid>
      </Container>
    </div>
  );
}

// Business Section
function BusinessSection() {
  const businessStats = [
    { value: '91', label: 'Companies registered' },
    { value: '4,681', label: 'Unique active wallets' },
    { value: '6.41m', label: 'Transaction volume' },
    { value: '$4.5m', label: 'Total value locked' }
  ];

  const businessFeatures = [
    {
      icon: IconCoin,
      title: 'Currency competition',
      description: 'No legal tender means you can trade with BTC, ETH, USDT, and many other tokens alongside LLD and LLM.'
    },
    {
      icon: IconChartBar,
      title: 'You run the chain',
      description: 'Citizens manage blockchain nodes while anyone can nominate validators, earning LLD for securing the network.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#fff', paddingTop: '80px', paddingBottom: '80px' }}>
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
            Business in Liberland
          </Title>
          <Text 
            size="lg" 
            style={{ 
              color: '#666', 
              maxWidth: '700px', 
              margin: '0 auto 40px'
            }}
          >
            Run your company with cryptocurrency under voluntary tax system, 
            blockchain jurisdiction, and transparent law with on-chain insurance and courts.
          </Text>
        </div>

        {/* Business Stats */}
        <SimpleGrid cols={{ base: 2, md: 4 }} spacing="lg" style={{ marginBottom: '60px' }}>
          {businessStats.map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <Text fw={700} size="xl" style={{ color: '#00aff0', marginBottom: '8px', fontSize: '28px' }}>
                {stat.value}
              </Text>
              <Text size="sm" style={{ color: '#666' }}>
                {stat.label}
              </Text>
            </div>
          ))}
        </SimpleGrid>

        {/* Business Features */}
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          {businessFeatures.map((feature, index) => (
            <Card 
              key={index}
              radius="lg" 
              style={{ 
                border: '1px solid #e9ecef', 
                padding: '32px'
              }}
            >
              <Group gap="md" align="flex-start">
                <ThemeIcon
                  size={56}
                  radius="md"
                  style={{ backgroundColor: '#f0f9ff', color: '#00aff0' }}
                >
                  <feature.icon size={28} stroke={1.8} />
                </ThemeIcon>
                
                <div style={{ flex: 1 }}>
                  <Text fw={600} size="lg" style={{ color: '#1c1c1c', marginBottom: '12px' }}>
                    {feature.title}
                  </Text>
                  <Text size="sm" style={{ color: '#666', lineHeight: 1.6 }}>
                    {feature.description}
                  </Text>
                </div>
              </Group>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
}

// Main BlockchainPage Component
export default function BlockchainPage() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <TokensSection />
      <BusinessSection />
    </div>
  );
}