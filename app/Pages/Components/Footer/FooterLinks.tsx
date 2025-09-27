'use client';

import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { ActionIcon, Anchor, Group, Text } from '@mantine/core';
import classes from './FooterLinks.module.css';

const links = [
  { link: '/contact', label: 'Contact' },
  { link: '/about', label: 'About' },
  { link: '/knowledge', label: 'Knowledge' },
  { link: '/blockchain', label: 'Blockchain' },
  { link: '/dashboard', label: 'Dashboard' },
];

export function FooterLinks() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Text size="xl" fw={700} className={classes.logo}>
          Decrypt
        </Text>

        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}

export default FooterLinks;