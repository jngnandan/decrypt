'use client';

import cx from 'clsx';
import { Button, Container, Overlay, Text, Title } from '@mantine/core';
import Link from 'next/link';
import classes from './HeroImageBackground.module.css';

export function HeroImageBackground() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Building Network state for{' '}
          <Text component="span" inherit className={classes.highlight}>
            Sustainable Living
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Blockchain based resource allocation with transperancy and accountability by using DAO voting.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg" radius="xs" component={Link} href="/citizenship" style={{ marginRight: '24px' }}>
            Get Citizenship
          </Button>
          <Button className={cx(classes.control, classes.secondaryControl)} size="lg" radius="xs">
            Get Tokens
          </Button>
        </div>
      </div>
    </div>
  );
}