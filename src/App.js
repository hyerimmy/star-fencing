import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LanguageProvider } from './hooks/useLanguage';
import Header from './components/common/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import FencingIntro from './components/sections/FencingIntro';
import Instructors from './components/sections/Instructors';
import Programs from './components/sections/Programs';
import Footer from './components/common/Footer';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a1a1a',
      light: '#333333',
      dark: '#000000',
    },
    secondary: {
      main: '#f5f5f5',
      light: '#ffffff',
      dark: '#e0e0e0',
    },
    background: {
      default: '#ffffff',
      paper: '#f8f9fa',
    },
  },
  typography: {
    fontFamily: "'Noto Sans KR', 'Inter', sans-serif",
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.8rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '12px',
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: 500,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LanguageProvider>
        <div className="App">
          <Header />
          <main>
            <Hero />
            <About />
            <FencingIntro />
            <Instructors />
            <Programs />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
