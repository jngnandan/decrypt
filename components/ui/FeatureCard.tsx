import { Card, Stack, Text, Title, ThemeIcon } from '@mantine/core';
import type { Feature } from '@/lib/types';

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const { icon: Icon, title, description } = feature;

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
      <Stack align="center" gap="md">
        <ThemeIcon size="xl" variant="light" color="blue">
          <Icon size={24} />
        </ThemeIcon>
        <Title order={4} ta="center">
          {title}
        </Title>
        <Text size="sm" c="dimmed" ta="center">
          {description}
        </Text>
      </Stack>
    </Card>
  );
}
