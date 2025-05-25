import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'fencing', href: '#fencing' },
    { key: 'instructors', href: '#instructors' },
    { key: 'programs', href: '#programs' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 250, height: '100%', bgcolor: 'white' }}>
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          스타펜싱
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.key} disablePadding>
            <ListItemButton onClick={() => scrollToSection(item.href)}>
              <ListItemText primary={t(item.key)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 2 }}>
        <LanguageSwitcher />
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={isScrolled ? 4 : 0}
        sx={{
          bgcolor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          transition: 'all 0.3s ease',
          borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.1)' : 'none',
        }}
      >
        <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto', px: { xs: 2, md: 3 } }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => scrollToSection('#home')}>
              <img 
                src="/images/logo/star-fencing-logo.png" 
                alt="Star Fencing Academy" 
                style={{ height: 40, marginRight: 12 }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700, 
                  color: isScrolled ? 'black' : 'white',
                  fontSize: { xs: '1.1rem', md: '1.25rem' }
                }}
              >
                스타펜싱
              </Typography>
            </Box>
          </motion.div>

          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Button
                    onClick={() => scrollToSection(item.href)}
                    sx={{
                      color: isScrolled ? 'black' : 'white',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      mx: 0.5,
                      '&:hover': {
                        bgcolor: 'rgba(0,0,0,0.1)',
                      },
                    }}
                  >
                    {t(item.key)}
                  </Button>
                </motion.div>
              ))}
              <Box sx={{ ml: 2 }}>
                <LanguageSwitcher isScrolled={isScrolled} />
              </Box>
            </Box>
          )}

          {isMobile && (
            <IconButton
              onClick={handleDrawerToggle}
              sx={{ color: isScrolled ? 'black' : 'white' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
