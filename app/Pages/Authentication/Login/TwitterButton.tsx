'use client';

// src/components/TwitterButton.tsx

import React from 'react';
import { Button, ButtonProps } from '@mantine/core';
import { IconBrandTwitter } from '@tabler/icons-react';
import { useRouter } from "next/navigation";
// import { signInWithTwitter } from '../../../firebase.js'; // Temporarily disabled

export default function TwitterButton(props: ButtonProps & React.ComponentPropsWithoutRef<'button'>) {
  const navigate = useRouter(); // Hook to programmatically navigate

  const handleClick = async () => {
    try {
      // await signInWithTwitter();
      console.log('Mock Twitter sign-in');
      navigate.push('/mentors'); // Redirect to the "mentors" page after successful sign-in
    } catch (error) {
      console.error("Error signing in with Twitter:", error);
      // Handle errors, show notifications, etc.
    }
  };

  return (
    <Button
      leftSection={<IconBrandTwitter style={{ width: '1rem', height: '1rem' }} color="#00ACEE" />}
      variant="default"
      onClick={handleClick}
      {...props}
    />
  );
}
