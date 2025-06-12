import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/600.css';

const Logo: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 32,
        left: 32,
        zIndex: 9999,
        padding: '16px',
      }}
    >
      <Link
        href="#home"
        sx={{
          textDecoration: 'none',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '0.25rem',
            '&:hover': {
              '& .hidden-text, & .dash': {
                opacity: 1,
              },
            },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '2.2rem', md: '3rem' },
              fontWeight: 700,
              color: 'rgb(52, 207, 161)',
              lineHeight: 0.8,
              letterSpacing: '0.02em',
              fontFamily: '"IBM Plex Sans", sans-serif',
              whiteSpace: 'nowrap',
              mb: 0.5,
            }}
          >
            A
            <Box
              component="span"
              className="hidden-text"
              sx={{
                opacity: 0,
                transition: 'opacity 0.3s ease-in-out',
              }}
            >
              telier
            </Box>
            &nbsp;D
            <Box
              component="span"
              className="hidden-text"
              sx={{
                opacity: 0,
                transition: 'opacity 0.3s ease-in-out',
              }}
            >
              .V.A.
            </Box>
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '2.2rem', md: '3rem' },
              fontWeight: 700,
              color: 'rgb(52, 207, 161)',
              lineHeight: 0.8,
              letterSpacing: '0.02em',
              fontFamily: '"IBM Plex Sans", sans-serif',
              whiteSpace: 'nowrap',
              mb: 0.5,
              display: 'flex',
              alignItems: 'center',
              gap: '0.25em',
            }}
          >
            <Box
              component="span"
              className="dash"
              sx={{
                display: 'inline-block',
                width: '1em',
                height: '2px',
                backgroundColor: 'rgb(52, 207, 161)',
                verticalAlign: 'middle',
                opacity: 0,
                transition: 'opacity 0.3s ease-in-out',
              }}
            />
            <Box component="span" sx={{ display: 'inline-flex' }}>
              L
              <Box
                component="span"
                className="hidden-text"
                sx={{
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out',
                }}
              >
                andscape
              </Box>
            </Box>
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '2.2rem', md: '3rem' },
              fontWeight: 700,
              color: 'rgb(52, 207, 161)',
              lineHeight: 0.8,
              letterSpacing: '0.02em',
              fontFamily: '"IBM Plex Sans", sans-serif',
              whiteSpace: 'nowrap',
            }}
          >
            A
            <Box
              component="span"
              className="hidden-text"
              sx={{
                opacity: 0,
                transition: 'opacity 0.3s ease-in-out',
              }}
            >
              rchitecture
            </Box>
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};

export default Logo; 