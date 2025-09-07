// Global styles
import './globals.css';
import './components-enhanced.css';

// Mantine component styles
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/spotlight/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';
import HeaderMegaMenu from './Pages/Components/Header/Header';
import { FooterLinks } from './Pages/Components/Footer/FooterLinks';
import { ContentProvider } from './context/ContentContext';
// import { AuthProvider } from '@/hooks';
import { theme } from './theme';
import { APP_CONFIG } from '@/lib/constants';

export const metadata = {
  title: APP_CONFIG.name,
  description: APP_CONFIG.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <ModalsProvider>
            <ErrorBoundary>
              <ContentProvider>
                <Notifications />
                <HeaderMegaMenu />
                {children}
                <FooterLinks />
              </ContentProvider>
            </ErrorBoundary>
          </ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
