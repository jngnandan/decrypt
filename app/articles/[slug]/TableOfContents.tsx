'use client';

import { useState, useEffect } from 'react';
import { IconListSearch } from '@tabler/icons-react';
import cx from 'clsx';
import { Box, Group, Text, Paper } from '@mantine/core';
import classes from './TableOfContents.module.css';

interface TocItem {
  label: string;
  link: string;
  order: number;
}

interface TableOfContentsProps {
  data: TocItem[];
}

export default function TableOfContents({ data }: TableOfContentsProps) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-20% 0% -35% 0%' }
    );

    data.forEach((item) => {
      const element = document.querySelector(item.link);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [data]);

  const items = data.map((item) => (
    <Box<'a'>
      component="a"
      href={item.link}
      onClick={(event) => {
        event.preventDefault();
        const element = document.querySelector(item.link);
        element?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }}
      key={item.label}
      className={cx(classes.link, { [classes.linkActive]: active === item.link })}
      style={{ paddingLeft: `calc(${item.order} * var(--mantine-spacing-md))` }}
    >
      {item.label}
    </Box>
  ));

  return (
    <Box pos="sticky" top={20}>
      <Paper withBorder p="lg" radius="md">
        <Group mb="md">
          <IconListSearch size={18} stroke={1.5} />
          <Text>Table of contents</Text>
        </Group>
        {items}
      </Paper>
    </Box>
  );
}