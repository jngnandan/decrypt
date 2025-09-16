'use client';

import { Container, Box } from '@mantine/core';
import SignupForm from '../Pages/Authentication/Signup/SignupForm';

export default function SignupPage() {
  return (
    <Box bg="gray.0" mih="100vh">
      <Container size="sm" py="xl">
        <SignupForm />
      </Container>
    </Box>
  );
}
