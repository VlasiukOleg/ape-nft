import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';

import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/ape-nft">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
