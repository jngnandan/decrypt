'use client';

import {
  IconChevronDown,
  IconHeart,
  IconBuilding,
  IconCoins,
  IconUsers,
  IconLogout,
  IconUserCircle,
  IconSettings,
} from '@tabler/icons-react';
import {
  Anchor,
  Avatar,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  Menu,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import Link from 'next/link';
import { useDisclosure } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { notifications } from '@mantine/notifications';
import ColorSchemeToggle from './Demo';
// import { MantineLogo } from '@mantinex/mantine-logo'; // Commented out - not available
import classes from './HeaderMegaMenu.module.css';

const mockdata = [
  {
    icon: IconHeart,
    title: 'Medicine',
    description: 'Advanced medical solutions and healthcare innovations for better patient care',
    href: '/medicine',
  },
  {
    icon: IconBuilding,
    title: 'Governance',
    description: 'Transparent and efficient governance systems for modern organizations',
    href: '/governance',
  },
  {
    icon: IconCoins,
    title: 'Treasury',
    description: 'Comprehensive financial management and treasury solutions for organizations',
    href: '/treasury',
  },
  {
    icon: IconUsers,
    title: 'Socio political discourse',
    description: 'Platforms for meaningful social and political dialogue and engagement',
    href: '/socio-political',
  },
];

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const [user, setUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const theme = useMantineTheme();

  // Check authentication status
  useEffect(() => {
    const checkAuth = () => {
      try {
        // Check cookie first
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
          const [name, value] = cookie.trim().split('=');
          if (name === 'user' && value) {
            try {
              const userData = JSON.parse(atob(value));
              setUser(userData);
              setIsAuthenticated(true);
              return;
            } catch (e) {
              console.log('Cookie data invalid');
            }
          }
        }
        
        // Check window property as fallback
        if ((window as any).__user) {
          const userData = (window as any).__user;
          setUser(userData);
          setIsAuthenticated(true);
          return;
        }
      } catch (error) {
        console.log('Auth check error:', error);
      }
    };

    checkAuth();
  }, []);

  // Logout function
  const handleLogout = () => {
    try {
      // Clear cookie
      document.cookie = 'user=; path=/; max-age=0';
      // Clear window property
      if ((window as any).__user) {
        delete (window as any).__user;
      }
      
      setUser(null);
      setIsAuthenticated(false);
      
      notifications.show({
        title: 'Logged Out Successfully',
        message: 'You have been logged out of your account',
        color: 'blue',
      });
      
      // Redirect to home
      window.location.href = '/';
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const links = mockdata.map((item) => (
    <Link href={item.href} key={item.title} style={{ textDecoration: 'none' }}>
      <UnstyledButton className={classes.subLink}>
        <Group wrap="nowrap" align="flex-start">
          <ThemeIcon size={40} variant="light" radius="md" color="blue">
            <item.icon size={20} stroke={1.5} />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" c="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    </Link>
  ));

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <div style={{ fontSize: '24px', fontWeight: '600' }}>Decrypt</div>

          <Group h="100%" gap={0} visibleFrom="sm">
            <Link href="/" className={classes.link}>
              Home
            </Link>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Features
                    </Box>
                    <IconChevronDown size={16} stroke={1.5} />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Features</Text>
                  <Anchor href="#" fz="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        Get started
                      </Text>
                      <Text size="xs" c="dimmed">
                        Their food sources have decreased, and their numbers
                      </Text>
                    </div>
                    <Link href="/signup">
                      <Button variant="default" radius="xs">Get started</Button>
                    </Link>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <Link href="/knowledge" className={classes.link}>
              Knowledge
            </Link>
            <Link href="/about" className={classes.link}>
              About
            </Link>
            <Link href="/dashboard" className={classes.link}>
              Dashboard
            </Link>
          </Group>

          <Group visibleFrom="sm">
            <ColorSchemeToggle />
            {isAuthenticated && user ? (
              <Menu shadow="md" width={200}>
                <Menu.Target>
                  <UnstyledButton style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', borderRadius: '8px' }}>
                    <Avatar
                      src={user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`}
                      size={32}
                      radius="xl"
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                      <Text size="sm" fw={500} style={{ lineHeight: 1.2 }}>
                        {user.displayName || user.name || 'User'}
                      </Text>
                      <Text size="xs" c="dimmed" style={{ lineHeight: 1 }}>
                        {user.email}
                      </Text>
                    </div>
                    <IconChevronDown size={14} />
                  </UnstyledButton>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Label>Account</Menu.Label>
                  <Menu.Item leftSection={<IconUserCircle size={14} />}>
                    Profile
                  </Menu.Item>
                  <Menu.Item leftSection={<IconSettings size={14} />}>
                    Settings
                  </Menu.Item>
                  
                  <Menu.Divider />
                  
                  <Menu.Item 
                    leftSection={<IconLogout size={14} />} 
                    color="red"
                    onClick={handleLogout}
                  >
                    Logout
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="default" radius="xs">Log in</Button>
                </Link>
                <Link href="/signup">
                  <Button radius="xs">Sign up</Button>
                </Link>
              </>
            )}
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />

          <Link href="/" className={classes.link}>
            Home
          </Link>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown size={16} color={theme.colors.blue[6]} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <Link href="/knowledge" className={classes.link}>
            Knowledge
          </Link>
          <Link href="/about" className={classes.link}>
            About
          </Link>
          <Link href="/dashboard" className={classes.link}>
            Dashboard
          </Link>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <ColorSchemeToggle />
            {isAuthenticated && user ? (
              <Button variant="light" color="red" onClick={handleLogout} leftSection={<IconLogout size={16} />}>
                Logout
              </Button>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="default" radius="xs">Log in</Button>
                </Link>
                <Link href="/signup">
                  <Button radius="xs">Sign up</Button>
                </Link>
              </>
            )}
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

export default HeaderMegaMenu;