import React from 'react';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';

import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { createRoot } from 'react-dom/client';
import { StyledEngineProvider } from '@mui/styled-engine';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StyledEngineProvider injectFirst>
    <GlobalStyle />
    <ThemeProvider theme={{ ...theme }}>
      <Router />
    </ThemeProvider>
  </StyledEngineProvider>
);
