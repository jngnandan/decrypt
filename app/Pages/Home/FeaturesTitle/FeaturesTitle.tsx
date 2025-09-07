'use client';

import { IconGauge, IconUser, IconCookie, IconLock, IconMessage2 } from '@tabler/icons-react';
import { Button, Grid, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import classes from './FeaturesTitle.module.css';

const features = [
  // {
  //   icon: IconGauge,
  //   title: 'Extreme performance',
  //   description: 'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
  // },
  // {
  //   icon: IconUser,
  //   title: 'Privacy focused',
  //   description: 'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
  // },
  // {
  //   icon: IconCookie,
  //   title: 'No third parties',
  //   description: 'They\'re popular, but they\'re rare. Trainers who show them off recklessly may be targeted by thieves',
  // },
  // {
  //   icon: IconLock,
  //   title: 'Secure by default',
  //   description: 'Although it still can\'t fly, its jumping power is outstanding, in Alola the mushrooms on Paras don\'t grow up quite right',
  // },
  // {
  //   icon: IconMessage2,
  //   title: '24/7 Support',
  //   description: 'Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail',
  // },
];

export function FeaturesTitle() {
  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ from: 'blue', to: 'cyan' }}
      >
        <feature.icon size={26} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <Title className={classes.title} order={2}>
          Blockchain Governance
        </Title>
        <Text c="dimmed" size="md" style={{ marginTop: 'var(--mantine-spacing-lg)', marginBottom: 'var(--mantine-spacing-xl)' }}>
        Decrypt is growing as a community built on freedom, where governance is open-source and powered by the blockchain. Its constitution lives on-chain, making laws transparent and participation easy for anyone who shares its values. Citizens are free to start businesses, join institutions, and shape the future together under Decrypt’s digital-first legal system.
        </Text>

        <Button
          variant="outline"
          size="lg"
          radius="sm"
        >
          Get started
        </Button>
      </div>
    </div>
  );
}