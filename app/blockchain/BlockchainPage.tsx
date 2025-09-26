'use client';

import React from 'react';
import { Container, Title, Text, Group, Stack, Card, SimpleGrid, Button, ThemeIcon, Box, Avatar, Rating, Badge, Divider, Image, BackgroundImage, Anchor, List, Paper, Space, rem } from '@mantine/core';
import { IconUsers, IconBuildingBank, IconChecklist, IconGavel, IconShield, IconCoin, IconTrendingUp, IconWorld, IconChartBar, IconCheck, IconClipboardCheck, IconCurrencyDollar, IconScale, IconLock, IconEPassport, IconBrandX, IconBrandLinkedin, IconStar, IconArrowRight } from '@tabler/icons-react';

// Hero Section with Real Liberland Statistics
function HeroSection() {
  const stats = [
    { value: '1,200', label: 'Registered citizens', icon: IconUsers },
    { value: '796,336', label: 'Citizenship requests', icon: IconWorld },
    { value: '91', label: 'Companies registered', icon: IconBuildingBank },
    { value: '0', label: 'Votes cast', icon: IconChecklist }
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

        {/* Real Liberland Statistics */}
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

// About Section - Building the freest nation
function AboutSection() {
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
            We are building the freest nation in the world…
          </Title>
        </div>

        <Text 
          size="lg" 
          style={{ 
            color: '#666', 
            maxWidth: '900px', 
            margin: '0 auto 60px',
            fontSize: '18px',
            lineHeight: 1.7,
            textAlign: 'center'
          }}
        >
          The Free Republic of Liberland is a sovereign state located between Croatia and Serbia on the west bank of the Danube River. Its motto, "To live and let live", is the foundation that emphasizes personal and economic freedom by limiting government power to its minimum.
        </Text>

        <Text 
          size="lg" 
          style={{ 
            color: '#666', 
            maxWidth: '900px', 
            margin: '0 auto 60px',
            fontSize: '18px',
            lineHeight: 1.7,
            textAlign: 'center'
          }}
        >
          As a nation-state whose entire governance is managed on chain, Liberlanders can start businesses under Liberland law and the jurisdiction of Liberland courts—complete with insurance, enforcement of smart and traditional contracts, and direct democracy available anywhere at any time.
        </Text>

        {/* Press mentions */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <Text size="md" style={{ color: '#666', marginBottom: '30px', fontWeight: 600 }}>
            As featured in
          </Text>
          
          <Group justify="center" gap="xl">
            <Text size="lg" style={{ color: '#666', fontWeight: 600 }}>The Verge</Text>
            <Text size="lg" style={{ color: '#666', fontWeight: 600 }}>Vice</Text>
            <Text size="lg" style={{ color: '#666', fontWeight: 600 }}>The Guardian</Text>
            <Text size="lg" style={{ color: '#666', fontWeight: 600 }}>The New York Times</Text>
            <Text size="lg" style={{ color: '#666', fontWeight: 600 }}>Fast Company</Text>
          </Group>
        </div>
      </Container>
    </div>
  );
}

// Blockchain Features Section - Real Liberland Content
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
      description: 'Companies can start blockchain-related businesses in a regulated environment. Bitcoin and the Liberland dollar (LLD) are the preferred currencies used by the government.',
      color: '#ff6b35'
    },
    {
      icon: IconBuildingBank,
      title: 'Start on-chain companies',
      description: 'Companies can be managed fully on chain: shares, contracts, and governance can all be run on the Liberland Blockchain, easily accessible through the dApp.',
      color: '#7c4dff'
    },
    {
      icon: IconShield,
      title: 'NFT land, vehicle, and asset registries',
      description: 'NFTs are used to represent digital and physical land, vehicles, and other high-value assets. Soulbound NFTs represent citizenship and other government functions, enabling transition of power through smart contracts.',
      color: '#00c851'
    },
    {
      icon: IconGavel,
      title: 'On-chain courts for traditional contracts',
      description: 'Both hybrid and smart contracts are legal in Liberland, and can be adjudicated through Liberland courts. A system that is efficient, fair, and transparent provides smart contracts full legal status.',
      color: '#2bbbad'
    },
    {
      icon: IconEPassport,
      title: 'Passport connected to chain identity',
      description: 'The Liberland passport is connected to your on-chain identity, making it easier to verify yourself and participate in all private and government-related matters.',
      color: '#ff5722'
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
            …on the Liberland Blockchain
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
            The Liberland Blockchain uses a nominated proof-of-citizenship consensus mechanism. Anyone in the world can participate as a nominator, while only citizens can run validators, providing a layer of security against malicious actors.
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

// Real Liberland Tokens Section
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
              maxWidth: '800px', 
              margin: '0 auto'
            }}
          >
            The Liberland dollar (LLD) powers the economy, while the Liberland merit (LLM) powers the governance of Liberland. With 200 companies operating in Liberland and on its blockchain, Liberland is the fastest growing economy in the world. LLD is bridged to ETH, SOL, TRON and SORA for trading.
          </Text>
        </div>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" style={{ marginBottom: '60px' }}>
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
                  Liberland dollar
                </Title>
                <Badge style={{ backgroundColor: '#ff6b3515', color: '#ff6b35' }}>
                  LLD
                </Badge>
              </div>
            </div>
            
            <Text style={{ color: '#666', lineHeight: 1.6, marginBottom: '24px' }}>
              LLD, or the Liberland dollar, is the operational token of the Liberland Blockchain similar to DOT or ETH. It is required to pay gas fees, run contracts, operate companies, and engage with courts. As an NPoS chain, validators are selected based on their staked LLD. LLD cannot be used for voting in elections or referenda, providing a separation of power: those who count the votes are different from the ones that cast the votes.
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
                  Liberland merit
                </Title>
                <Badge style={{ backgroundColor: '#00aff015', color: '#00aff0' }}>
                  LLM
                </Badge>
              </div>
            </div>
            
            <Text style={{ color: '#666', lineHeight: 1.6, marginBottom: '24px' }}>
              LLM, or the Liberland merit, is the political token of Liberland, awarded for contributions to the nation's development. 5000 staked merits and passing a KYC-based E-Residency process allows one to claim citizenship. Citizens use LLM to vote in elections and referenda and participate in "citizen headcount vetos" of passed legislation. There will never be more than 70 million merits.
            </Text>
            
            <Button 
              style={{
                backgroundColor: '#00aff0',
                borderRadius: '8px',
                border: 'none'
              }}
            >
              Make a contribution in return for LLM
            </Button>
          </Card>
        </SimpleGrid>

        {/* Exchanges and Partners */}
        <div style={{ textAlign: 'center' }}>
          <Text size="md" style={{ color: '#666', marginBottom: '30px', fontWeight: 600 }}>
            Available on leading exchanges and wallets
          </Text>
          
          <SimpleGrid cols={{ base: 2, sm: 4, md: 8 }} spacing="lg">
            <Text size="sm" style={{ color: '#666', fontWeight: 600 }}>Uniswap</Text>
            <Text size="sm" style={{ color: '#666', fontWeight: 600 }}>Sora</Text>
            <Text size="sm" style={{ color: '#666', fontWeight: 600 }}>MEXC</Text>
            <Text size="sm" style={{ color: '#666', fontWeight: 600 }}>Coinstore</Text>
            <Text size="sm" style={{ color: '#666', fontWeight: 600 }}>Emirex</Text>
            <Text size="sm" style={{ color: '#666', fontWeight: 600 }}>Subwallet</Text>
            <Text size="sm" style={{ color: '#666', fontWeight: 600 }}>Talisman</Text>
            <Text size="sm" style={{ color: '#666', fontWeight: 600 }}>Fearless</Text>
          </SimpleGrid>
        </div>
      </Container>
    </div>
  );
}

// Governance Section
function GovernanceSection() {
  const governanceFeatures = [
    {
      icon: IconClipboardCheck,
      title: 'PolitiPooling',
      description: 'Political power of the citizens of Liberland is proportional to the amount of tax they pay. The process of paying tax by staking LLM is called "political pooling"—or PolitiPooling—and is required for citizenship and to cast votes. Citizens who unpool their LLM are able to unstake 10% per year.'
    },
    {
      icon: IconCurrencyDollar,
      title: 'Voluntary taxes you control',
      description: 'Taxes in Liberland are voluntary. In addition to paying taxes to cover the general expenses of the state, it is also possible to fund specific projects with tax contributions. All taxes paid are directed to the Treasury. The Cabinet, formed by the Prime Minister and four other Ministers, must ask citizens to provide funding voluntarily on a per-project basis.'
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
            Governance in the hands of the citizens
          </Title>
          <Text 
            size="lg" 
            style={{ 
              color: '#666', 
              maxWidth: '900px', 
              margin: '0 auto'
            }}
          >
            Citizens can directly participate in the democratic process by voting on referenda and proposals using their LLM. All new legislation must be confirmed by a citizen referendum. As a nation built on libertarian principles, for any one way to pass legislation (token voting), there are two ways to repeal it (either token or headcount veto), ensuring the legal code doesn't get bloated. The blockchain ensures the voting process is secure, tamper-proof, and easily auditable by all participants.
          </Text>
        </div>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          {governanceFeatures.map((feature, index) => (
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

// Business Section with Real Statistics
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
      description: 'Liberland does not have a "legal tender", so our chain supports various wrapped tokens, such as BTC, ETH, USDT, and many others. Alongside LLM and LLD, you can trade and pay with them on the Liberland goods, services, and tokens free market, all through a Liberland app.'
    },
    {
      icon: IconChartBar,
      title: 'You run the chain',
      description: 'Liberland\'s citizens manage the blockchain nodes needed to operate and secure the Liberland Blockchain. Anyone in the world, including E-Residents and others, nominate the validators they feel will best operate the blockchain. Both validators and nominators earn LLD for providing this service to the nation and the blockchain\'s users.'
    }
  ];

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
            Business in Liberland
          </Title>
          <Text 
            size="lg" 
            style={{ 
              color: '#666', 
              maxWidth: '900px', 
              margin: '0 auto 40px'
            }}
          >
            You can run a company like any other using cryptocurrency under Liberland's voluntary tax system, jurisdiction, and law. Coupled with on-chain insurance services, and the ability for courts to act as oracles and interpret traditional, human-worded contracts, it is finally possible to use blockchain technology for any and all kinds of business transactions, such as hybrid contracts to build a house, with full confidence that the legal system will handle any disputes in a fair and just manner.
          </Text>
        </div>

        {/* Real Business Stats */}
        <SimpleGrid cols={{ base: 2, md: 4 }} spacing="lg" style={{ marginBottom: '60px' }}>
          {businessStats.map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <ThemeIcon
                size={48}
                radius="md"
                style={{ backgroundColor: '#f0f9ff', color: '#00aff0', margin: '0 auto 16px' }}
              >
                <IconTrendingUp size={24} stroke={1.8} />
              </ThemeIcon>
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
                padding: '32px',
                backgroundColor: '#fff'
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

// Asset Registration Section
function AssetRegistrationSection() {
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
            Registering assets
          </Title>
          <Text 
            size="lg" 
            style={{ 
              color: '#666', 
              maxWidth: '900px', 
              margin: '0 auto'
            }}
          >
            Companies, assets, vehicles, and land can be registered on the Liberland Blockchain, allowing you to do business with, insure, and do all the other things that require registration or transactions. Want to register a Liberland company? Sail under the Liberland flag? Get insurance for your property? With Liberland, you can! The Liberland Blockchain enables secure, fast transactions that cannot be tampered with, backed by fair and accessible public & private courts.
          </Text>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Badge 
            size="lg" 
            radius="lg" 
            style={{ 
              backgroundColor: '#fff3e0', 
              color: '#ff6b35',
              fontSize: '14px',
              fontWeight: 600
            }}
          >
            Asset registries coming soon
          </Badge>
        </div>
      </Container>
    </div>
  );
}

// Justice Section
function JusticeSection() {
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
            On-chain justice
          </Title>
          <Text 
            size="lg" 
            style={{ 
              color: '#666', 
              maxWidth: '900px', 
              margin: '0 auto'
            }}
          >
            The judicial system is a pillar of any democratic nation and a necessary guarantor of mutual trust in a society. Liberland is no different—only, enhanced—being able to handle both traditional court cases as well as act as an oracle for hybrid smart-wordy contracts on chain in case of disputes.
          </Text>
        </div>

        <Text 
          size="md" 
          style={{ 
            color: '#666', 
            maxWidth: '900px', 
            margin: '0 auto 40px',
            fontSize: '16px',
            lineHeight: 1.7,
            textAlign: 'center'
          }}
        >
          While trustless and smart contract technologies have advanced considerably since their inception, many business applications still need wordy contracts and a trusted third party to interpret, verify, adjudicate in case of a dispute, and ultimately, punish the dishonest offending party, if it comes to that. While Liberland operates official courts, the same technology is used by private courts operating on the Liberland Blockchain that compete on reputation, thoroughness, speed, and price.
        </Text>

        <div style={{ textAlign: 'center' }}>
          <Badge 
            size="lg" 
            radius="lg" 
            style={{ 
              backgroundColor: '#fff3e0', 
              color: '#ff6b35',
              fontSize: '14px',
              fontWeight: 600
            }}
          >
            Judiciary coming soon
          </Badge>
        </div>
      </Container>
    </div>
  );
}

// Community Section
function CommunitySection() {
  return (
    <div style={{ backgroundColor: '#fff', paddingTop: '80px', paddingBottom: '80px' }}>
      <Container size="lg">
        <div style={{ textAlign: 'center' }}>
          <Title 
            order={2} 
            style={{ 
              fontSize: '36px', 
              fontWeight: 700, 
              color: '#1c1c1c',
              marginBottom: '16px'
            }}
          >
            Community and reach
          </Title>
          <Text 
            size="lg" 
            style={{ 
              color: '#666', 
              maxWidth: '900px', 
              margin: '0 auto 40px'
            }}
          >
            With nearly 4000 E-Residents, over 1000 citizens, and over 700k supporters around the globe, the Liberland Blockchain is set to amplify and codify the needs and wants of a massive community of individuals thanks to a clear vision.
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
              Join the Community
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
              Read White Paper
            </Button>
          </Group>
        </div>
      </Container>
    </div>
  );
}

// Main BlockchainPage Component with all Real Liberland Content
export default function BlockchainPage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TokensSection />
      <GovernanceSection />
      <BusinessSection />
      <AssetRegistrationSection />
      <JusticeSection />
      <CommunitySection />
    </div>
  );
}