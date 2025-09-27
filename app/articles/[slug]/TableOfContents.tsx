'use client';

import { useState, useEffect } from 'react';
import { IconListSearch } from '@tabler/icons-react';
import cx from 'clsx';
import { Box, Group, Text } from '@mantine/core';
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
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeIndex = data.findIndex(item => item.link === `#${entry.target.id}`);
            if (activeIndex !== -1) {
              console.log('Setting active to:', activeIndex, entry.target.id);
              setActive(activeIndex);
            }
          }
        });
      },
      { 
        rootMargin: '-100px 0px -66%',
        threshold: 0.1
      }
    );

    // Add delay to ensure DOM is ready
    const timer = setTimeout(() => {
      console.log('Observing headings for TOC...');
      data.forEach((item, index) => {
        const element = document.querySelector(item.link);
        if (element) {
          console.log(`Observing ${item.link} (index: ${index}):`, element);
          observer.observe(element);
        } else {
          console.warn(`Element not found for ${item.link}`);
        }
      });
    }, 1000);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [data]);

  const items = data.map((item, index) => (
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
        setActive(index);
      }}
      key={item.label}
      className={cx(classes.link, { [classes.linkActive]: active === index })}
      style={{ paddingLeft: `calc(${item.order} * var(--mantine-spacing-md))` }}
    >
      {item.label}
    </Box>
  ));

  return (
    <Box pos="sticky" top={20}>
      <div className={classes.root}>
        <Group mb="md">
          <IconListSearch size={18} stroke={1.5} />
          <Text>Table of contents</Text>
        </Group>
        <div className={classes.links}>
          <div
            className={classes.indicator}
            style={{
              transform: `translateY(calc(${active} * var(--link-height) + var(--indicator-offset)))`,
            }}
          />
          {items}
        </div>
      </div>
    </Box>
  );
}