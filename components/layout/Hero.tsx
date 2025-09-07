import { Container, Title, Text, Group, Button, Stack } from '@mantine/core';
import { APP_CONFIG } from '@/lib/constants';

interface HeroProps {
  onDecryptClick: () => void;
  onLearnMoreClick: () => void;
}

export function Hero({ onDecryptClick, onLearnMoreClick }: HeroProps) {
  return (
    <Container size="lg" py="xl">
      <Stack align="center" gap="xl">
        <Stack align="center" gap="md">
          <Title order={1} size="3rem" ta="center" c="blue">
            {APP_CONFIG.name}
          </Title>
          <Text size="xl" c="dimmed" ta="center" maw={600}>
            {APP_CONFIG.description} built with Next.js and Mantine UI.
            Decrypt your files and messages with confidence.
          </Text>
        </Stack>

        <Group>
          <Button size="lg" onClick={onDecryptClick}>
            Start Decrypting
          </Button>
          <Button variant="outline" size="lg" onClick={onLearnMoreClick}>
            Learn More
          </Button>
        </Group>
      </Stack>
    </Container>
  );
}
