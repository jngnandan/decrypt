'use client';

import { IconShield, IconLeaf, IconUsers, IconLock, IconChartBar } from '@tabler/icons-react';
import { Container, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import classes from './FeaturesGrid.module.css';

export const MOCKDATA = [
  {
    icon: IconShield,
    title: 'Transparent Governance',
    description:
      'All decisions are made through decentralized voting mechanisms, ensuring complete transparency and community-driven governance for sustainable resource allocation.',
  },
  {
    icon: IconLeaf,
    title: 'Environmental Impact',
    description:
      'Track and verify environmental contributions through blockchain technology, creating accountability for sustainable living practices and carbon footprint reduction.',
  },
  {
    icon: IconUsers,
    title: 'Community Driven',
    description:
      'Citizens actively participate in resource allocation decisions through DAO voting, fostering a sense of belonging and collective responsibility.',
  },
  {
    icon: IconLock,
    title: 'Secure & Immutable',
    description:
      'All transactions and votes are recorded on the blockchain, providing permanent, tamper-proof records of community decisions and resource distribution.',
  },
  {
    icon: IconChartBar,
    title: 'Real-time Analytics',
    description:
      'Monitor resource allocation, environmental impact, and community participation through comprehensive dashboards and transparent reporting systems.',
  },
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon size={18} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" c="dimmed" lh={1.6}>
        {description}
      </Text>
    </div>
  );
}

export function FeaturesGrid() {
  const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>Building a Sustainable Future Through Technology</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          Our platform combines blockchain technology with community governance to create transparent, 
          accountable systems for sustainable resource allocation and environmental stewardship.
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 'xl', md: 50 }}
        verticalSpacing={{ base: 'xl', md: 50 }}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
