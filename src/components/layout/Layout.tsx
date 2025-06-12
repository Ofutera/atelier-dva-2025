import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Logo from '../Logo';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        '& #home': {
          backgroundColor: '#e0e0e0',
          minHeight: '100vh',
        }
      }}
    >
      <Logo />
      <Header />
      <Box component="main">
        {children}
      </Box>
    </Box>
  );
};

export default Layout;