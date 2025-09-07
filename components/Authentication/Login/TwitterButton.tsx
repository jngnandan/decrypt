'use client';

import React, { useState } from 'react';
import { Button, ButtonProps } from '@mantine/core';
import { IconBrandTwitter } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
// import { signInWithPopup, TwitterAuthProvider } from 'firebase/auth'; // Temporarily disabled
// import { getAuth } from 'firebase/auth'; // Temporarily disabled

export default function TwitterButton(props: ButtonProps & React.ComponentPropsWithoutRef<'button'>) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const auth = null; // Temporarily disabled

  const handleClick = async () => {
    setLoading(true);
    try {
      if (auth) {
        // const provider = new TwitterAuthProvider();
        // await signInWithPopup(auth, provider);
        router.push('/'); // Redirect to the home page after successful sign-in
      } else {
        // Mock Twitter sign-in for demo purposes
        console.log('Mock Twitter sign-in');
        router.push('/');
      }
    } catch (error) {
      console.error("Error signing in with Twitter:", error);
      // Handle errors, show notifications, etc.
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      leftSection={<IconBrandTwitter style={{ width: '1rem', height: '1rem' }} color="#00ACEE" />}
      variant="default"
      onClick={handleClick}
      loading={loading}
      {...props}
    />
  );
}
