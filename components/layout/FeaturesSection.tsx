import { Container, Grid, Title } from '@mantine/core';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { FEATURES } from '@/lib/constants';

export function FeaturesSection() {
  return (
    <Container size="lg" py="xl">
      <Title order={2} ta="center" mb="xl">
        Features
      </Title>
      <Grid>
        {FEATURES.map((feature, index) => (
          <Grid.Col key={index} span={{ base: 12, sm: 6, md: 3 }}>
            <FeatureCard feature={feature} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
