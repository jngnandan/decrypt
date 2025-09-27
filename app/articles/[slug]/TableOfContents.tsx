'use client';

import { useState, useEffect } from 'react';
import { Paper, Text, Anchor, Stack, Box } from '@mantine/core';

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
    <Anchor
      key={item.label}
      href={item.link}
      onClick={(event) => {
        event.preventDefault();
        const element = document.querySelector(item.link);
        element?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }}
      style={{
        display: 'block',
        color: active === item.link ? '#00aff0' : '#666',
        fontSize: item.order === 1 ? '14px' : '13px',
        fontWeight: item.order === 1 ? 500 : 400,
        paddingLeft: item.order === 1 ? 0 : '16px',
        paddingTop: '8px',
        paddingBottom: '8px',
        textDecoration: 'none',
        borderLeft: active === item.link ? '2px solid #00aff0' : '2px solid transparent',
        paddingRight: '12px',
        marginLeft: item.order === 1 ? 0 : '8px',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={(e) => {
        if (active !== item.link) {
          e.currentTarget.style.color = '#00aff0';
        }
      }}
      onMouseLeave={(e) => {
        if (active !== item.link) {
          e.currentTarget.style.color = '#666';
        }
      }}
    >
      {item.label}
    </Anchor>
  ));

  return (
    <Box pos="sticky" top={20}>
      <Paper withBorder p="lg" radius="md">
        <Text fw={500} mb="md" style={{ color: '#1a1a1a' }}>
          Table of Contents
        </Text>
        <Stack gap={0}>{items}</Stack>
      </Paper>
    </Box>
  );
}