/*import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../theme'; // ruta relativa
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import '../styles/variables.css';
import '../styles/globals.css';

// Configura Font Awesome
config.autoAddCss = false


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);*/
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../theme';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { useEffect } from 'react';

import '../styles/variables.css';
import '../styles/globals.css';

config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Limpiar cualquier elemento inyectado por Next.js
    const nextElements = document.querySelectorAll('[class*="next"]');
    nextElements.forEach(el => {
      if (el.innerHTML.includes('N') || el.textContent === 'N') {
        el.remove();
      }
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);