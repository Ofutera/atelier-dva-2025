import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme/theme';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';
import SplashScreen from './components/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
