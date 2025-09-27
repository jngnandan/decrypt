'use client';

import {
  IconChevronDown,
  IconHeart,
  IconBuilding,
  IconCoins,
  IconUsers,
} from '@tabler/icons-react';
import {
  Anchor,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import Link from 'next/link';
import { useDisclosure } from '@mantine/hooks';
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
  const theme = useMantineTheme();

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
            <Link href="/mentors" className={classes.link}>
              Mentors
            </Link>
            <Link href="/knowledge" className={classes.link}>
              Knowledge
            </Link>
            <Link href="/about" className={classes.link}>
              About
            </Link>
          </Group>

          <Group visibleFrom="sm">
            <ColorSchemeToggle />
            <Link href="/login">
              <Button variant="default" radius="xs">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button radius="xs">Sign up</Button>
            </Link>
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
          <Link href="/mentors" className={classes.link}>
            Mentors
          </Link>
          <Link href="/knowledge" className={classes.link}>
            Knowledge
          </Link>
          <Link href="/about" className={classes.link}>
            About
          </Link>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <ColorSchemeToggle />
            <Link href="/login">
              <Button variant="default" radius="xs">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button radius="xs">Sign up</Button>
            </Link>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

export default HeaderMegaMenu;