import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import App from './App.jsx';
import './index.css';

const theme = createTheme({
  cssVariables: { colorSchemeSelector: 'class' },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#284e79' },
        background: { default: '#eef1f5', paper: '#ffffff' },
        text: { primary: '#202c3a', secondary: '#526172' },
        divider: '#d4dde7'
      }
    },
    dark: {
      palette: {
        primary: { main: '#a2c4ed' },
        background: { default: '#12171f', paper: '#1b2330' },
        text: { primary: '#e8eef6', secondary: '#adbacb' },
        divider: '#3c4d63'
      }
    }
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
  },
  components: {
    MuiLink: { defaultProps: { underline: 'hover' } }
  }
});

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme} defaultMode='system'>
    <App />
  </ThemeProvider>
);
