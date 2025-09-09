'use client';

import { Container, Box } from '@mantine/core';
import CitizenshipApplicationForm from '../Pages/Authentication/Citizenship/CitizenshipApplicationForm';

export default function CitizenshipPage() {

  return (
    <Box
      style={{
        minHeight: '100vh',
        position: 'relative',
      }}
    >

      {/* Main Content */}
      <Container size="sm" pt="xs" pb="xl">
        <CitizenshipApplicationForm />
      </Container>
    </Box>
  );
}
