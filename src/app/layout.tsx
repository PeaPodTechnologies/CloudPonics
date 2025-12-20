'use client';

import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import theme from '@/theme';

// Import the functions you need from the SDKs you need
import AuthProvider, { useAuth } from '@/contexts/AuthContext';
import { FC, PropsWithChildren, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Loading from '@/components/atoms/Loading';

const AuthGuard: FC<PropsWithChildren> = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    // console.log('Auth State:', { user, loading });
    if (
      !loading &&
      !user &&
      !(path.startsWith('/login') || path.startsWith('/signup'))
    ) {
      router.replace('/login');
    }
  }, [user, loading, router, path]);

  return loading ? <Loading /> : <>{children}</>;
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AuthProvider>
          <InitColorSchemeScript attribute="class" />
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <AuthGuard>{props.children}</AuthGuard>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
