import { Container, Title, Text, Group, Button, Avatar, Menu, ActionIcon } from '@mantine/core';
import { IconLogout, IconUser, IconSettings } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
// import { useAuth } from '@/hooks';
import { APP_CONFIG } from '@/lib/constants';

interface HeaderProps {
  onDecryptClick: () => void;
}

export function Header({ onDecryptClick }: HeaderProps) {
  const router = useRouter();
  // const { isAuthenticated, user, logout } = useAuth();

  const handleLogin = () => {
    router.push('/login');
  };

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  return (
    <Container size="lg" py="xl">
      <Group justify="space-between" align="center">
        <div>
          <Title order={1} size="2rem" c="blue">
            {APP_CONFIG.name}
          </Title>
          <Text c="dimmed" size="sm">
            {APP_CONFIG.description}
          </Text>
        </div>
        
        <Group>
          <Button size="md" onClick={onDecryptClick}>
            Start Decrypting
          </Button>
          
          <Button variant="outline" size="md" onClick={handleLogin}>
            Sign In
          </Button>
        </Group>
      </Group>
    </Container>
  );
}
