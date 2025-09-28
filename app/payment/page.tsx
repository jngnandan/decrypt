'use client';

import PaymentPage from '../Pages/PaymentPage';

// Disable static generation to prevent build-time environment variable issues
export const dynamic = 'force-dynamic';

export default function Payment() {
  return <PaymentPage />;
}
