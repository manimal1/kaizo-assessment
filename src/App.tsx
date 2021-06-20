import React, { FC } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import { theme } from '@utils';
import { ScreensizeProvider } from '@providers';
import { Home } from '@containers';

import './App.css';

export const App: FC = () => {
  return (
    <div className="App">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <ScreensizeProvider>
          <Home />
        </ScreensizeProvider>
      </ThemeProvider>
    </div>
  );
};
