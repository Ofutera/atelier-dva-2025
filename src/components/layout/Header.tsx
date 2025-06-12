import React, { useState, useEffect } from 'react';
import { AppBar, Box, Container, Link, IconButton } from '@mui/material';
import { Facebook, Instagram, Pinterest } from '@mui/icons-material';

interface MenuItem {
  id: string;
  label: string;
  href: string;
}

const MENU_ITEMS: MenuItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'Studio DVA', href: '#about' },
  { id: 'projects', label: 'Projekty', href: '#projects' },
  { id: 'publications', label: 'Publikace', href: '#publikace' },
  { id: 'contact', label: 'Kontakt', href: '#contact' }
];

const SOCIAL_LINKS = [
  { icon: Pinterest, href: 'https://pinterest.com', label: 'Pinterest' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' }
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(MENU_ITEMS[0].id);

  useEffect(() => {
    const scrollContainer = document.getElementById('main-container');
    if (!scrollContainer) return;

    const handleScroll = () => {
      const containerRect = scrollContainer.getBoundingClientRect();
      const viewportCenter = containerRect.top + (containerRect.height / 2);
      const scrollTop = scrollContainer.scrollTop;

      // Special handling for the home section when at the top
      if (scrollTop < 100) {
        setActiveSection('home');
        return;
      }

      // Find the section that contains the viewport center
      let currentSection = MENU_ITEMS[0].id;
      let lastSectionBeforeCenter = MENU_ITEMS[0].id;
      
      for (const { id } of MENU_ITEMS) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If section contains the center point
          if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
            currentSection = id;
            break;
          }
          // Keep track of the last section that starts before the center point
          if (rect.top <= viewportCenter) {
            lastSectionBeforeCenter = id;
          }
        }
      }

      // If no section contains the center point, use the last section before it
      if (currentSection === MENU_ITEMS[0].id && lastSectionBeforeCenter !== MENU_ITEMS[0].id) {
        currentSection = lastSectionBeforeCenter;
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    // Add scroll event listener with throttling
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    scrollContainer.addEventListener('scroll', throttledScroll);
    handleScroll(); // Initial check

    // Handle direct navigation through menu clicks
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || MENU_ITEMS[0].id;
      if (MENU_ITEMS.some(item => item.id === hash)) {
        setActiveSection(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Initial check for hash on load
    if (window.location.hash) {
      handleHashChange();
    }

    return () => {
      scrollContainer.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []); // Empty dependency array since we don't need to recreate the listener

  return (
    <AppBar
      position="fixed"
      elevation={2}
      sx={{
        top: 'auto',
        bottom: 0,
        bgcolor: '#fff',
      }}
    >
      <Container maxWidth={false}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 2,
            px: { xs: 2, md: 4 },
          }}
        >
          <Box sx={{ display: 'flex', gap: 1 }}>
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <IconButton
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  color: '#000',
                  '&:hover': {
                    color: 'rgb(52, 207, 161)',
                  },
                }}
                aria-label={label}
              >
                <Icon />
              </IconButton>
            ))}
          </Box>
          <Box sx={{ display: 'flex', gap: 4 }}>
            {MENU_ITEMS.map(item => (
              <Link
                key={item.id}
                href={item.href}
                underline="none"
                onClick={(e) => {
                  const element = document.getElementById(item.id);
                  if (element) {
                    e.preventDefault();
                    element.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState(null, '', item.href);
                    setActiveSection(item.id);
                  }
                }}
                sx={{
                  color: activeSection === item.id ? 'rgb(52, 207, 161)' : '#000',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'capitalize',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                  position: 'relative',
                  textDecoration: 'none',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'rgb(52, 207, 161)',
                    transform: activeSection === item.id ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.3s ease',
                  },
                  '&:hover': {
                    color: 'rgb(52, 207, 161)',
                    '&::after': {
                      transform: 'scaleX(1)',
                    }
                  },
                }}
              >
                {item.label}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header; 