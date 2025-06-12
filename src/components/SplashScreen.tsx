import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showFullText, setShowFullText] = useState(false);

  useEffect(() => {
    // Show full text after 1.2 seconds
    const textTimer = setTimeout(() => {
      setShowFullText(true);
    }, 1200);

    // Start fade out after 3 seconds (reduced from 4s)
    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(fadeTimer);
    };
  }, []);

  return (
    <AnimatePresence mode="wait" onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgb(52, 207, 161)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                transform: 'scale(1.5)',
              }}
            >
              <Typography
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                sx={{
                  fontSize: { xs: '2.2rem', md: '3rem' },
                  fontWeight: 700,
                  color: '#fff',
                  lineHeight: 1,
                  letterSpacing: '0.02em',
                  mb: 1,
                  fontFamily: '"IBM Plex Sans", sans-serif',
                  whiteSpace: 'nowrap',
                }}
              >
                A
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showFullText ? 1 : 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  telier&nbsp;
                </motion.span>
                D
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showFullText ? 1 : 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  .V.A.
                </motion.span>
              </Typography>
              <Typography
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                sx={{
                  fontSize: { xs: '2.2rem', md: '3rem' },
                  fontWeight: 700,
                  color: '#fff',
                  lineHeight: 1,
                  letterSpacing: '0.02em',
                  fontFamily: '"IBM Plex Sans", sans-serif',
                  mb: 1,
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  gap: '0.5em',
                }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showFullText ? 1 : 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{
                    display: 'inline-block',
                    width: '1em',
                    height: '2px',
                    backgroundColor: '#fff',
                    verticalAlign: 'middle',
                  }}
                />
                <Box component="span" sx={{ display: 'inline-flex' }}>
                  L
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showFullText ? 1 : 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    andscape
                  </motion.span>
                </Box>
              </Typography>
              <Typography
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                sx={{
                  fontSize: { xs: '2.2rem', md: '3rem' },
                  fontWeight: 700,
                  color: '#fff',
                  lineHeight: 1,
                  letterSpacing: '0.02em',
                  fontFamily: '"IBM Plex Sans", sans-serif',
                  whiteSpace: 'nowrap',
                  width: '100%',
                }}
              >
                A
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showFullText ? 1 : 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  rchitecture
                </motion.span>
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen; 