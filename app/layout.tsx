import DashboardIcon from '@mui/icons-material/Dashboard';
import Person from '@mui/icons-material/Person2Outlined';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import LinearProgress from '@mui/material/LinearProgress';
import type { Navigation } from '@toolpad/core/AppProvider';
import { NextAppProvider } from '@toolpad/core/nextjs';
import * as React from 'react';
import theme from '../theme';
import logo from './images/KKLogoNew.png'
import { Home } from '@mui/icons-material';

import Image from 'next/image'

const NAVIGATION: Navigation = [
  {segment: '',
  title: 'About Me',
  icon: <Person/>
  },
  // {
  //   segment: '',
  //   title: 'About',
  //   icon: <DashboardIcon />,
  // },
  {
    kind: 'header',
    title: 'Applications',
  },
  
  {
    segment: 'BMI',
    title: 'BMI',
    icon: <Person/>,
  },
  {
    segment: 'mortgage',
    title: 'Mortgage',
    icon: <Home/>,
  },
  {
    segment: 'options',
    title: 'Options Pricing',
    icon: <Home/>,
  }
  
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-toolpad-color-scheme="light">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <React.Suspense fallback={<LinearProgress />}>
            <NextAppProvider theme={theme} navigation={NAVIGATION} branding={{
                logo: <Image src={logo.src} alt="KR Calculators" width={30}   // adjust as needed
                height={40}  />,
                title: 'KleverKapital',
              }}>
              {children}
            </NextAppProvider>
          </React.Suspense>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
