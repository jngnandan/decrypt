'use client';

import { IconBrandAuth0, IconShield, IconCurrencyDollar, IconUsers, IconLayoutDistributeHorizontal, IconChartBar, IconGridGoldenratio } from '@tabler/icons-react';
import { Container, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import classes from './FeaturesGrid.module.css';

export const MOCKDATA = [
  {
    icon: IconBrandAuth0,
    title: 'Citizen Identity',
    description:
      'Each member of the Network State has a clear identity within the community. It shows who they are, what they contribute, and helps them feel like real citizens instead of just users online.',
  },
  {
    icon: IconShield,
    title: 'Transparent Governance',
    description:
      'All decisions are made through decentralized voting mechanisms, ensuring complete transparency and community-driven governance for sustainable resource allocation.',
  },
  {
    icon: IconUsers,
    title: 'Community Driven',
    description:
      'Citizens actively participate in resource allocation decisions through DAO voting, fostering a sense of belonging and collective responsibility.',
  },
  {
    icon: IconCurrencyDollar,
    title: 'Realtime Treasury System',
    description:
      'Track and verify environmental contributions through blockchain technology, creating accountability for sustainable living practices and carbon footprint reduction.',
  },

  {
    icon: IconLayoutDistributeHorizontal,
    title: 'Institutions Layer',
    description:
      'Services like education, healthcare, and justice begin online with digital schools, telemedicine, or arbitration. Later, they expand into physical labs, clinics, and hubs.',
  },
  {
    icon: IconGridGoldenratio,
    title: 'Culture & Media',
    description:
      'Culture & Media is the space where members debate, shape, and broadcast the values of the Network State, turning an online group into a living society.',
  },
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--mantine-spacing-sm)' }}>
        <ThemeIcon variant="light" size={54} radius={40}>
          <Icon size={28} stroke={1.5} />
        </ThemeIcon>
      </div>
      <Text mt="sm" mb={7} fw={500}>
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

      <Container p={0}>
        <Text size="md" mt="md" className={classes.description}>
          Our platform combines blockchain technology with community governance to create transparent, 
          accountable systems for sustainable resource allocation and environmental stewardship.
        </Text>
      </Container>

      <SimpleGrid
        mt={40}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 'lg', md: 30 }}
        verticalSpacing={{ base: 'lg', md: 30 }}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}