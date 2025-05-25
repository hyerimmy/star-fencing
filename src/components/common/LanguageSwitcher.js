import React, { useState } from 'react';
import { Button, Menu, MenuItem, Box } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { useLanguage } from '../../hooks/useLanguage';

const LanguageSwitcher = ({ isScrolled }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
  ];

  const currentLang = languages.find(lang => lang.code === language);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    handleClose();
  };

  return (
    <Box>
      <Button
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
        sx={{
          color: isScrolled ? 'black' : 'white',
          fontSize: '0.9rem',
          fontWeight: 500,
          minWidth: 'auto',
          '&:hover': {
            bgcolor: 'rgba(0,0,0,0.1)',
          },
        }}
      >
        {currentLang?.flag} {currentLang?.name}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            mt: 1,
            borderRadius: 2,
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          },
        }}
      >
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            selected={lang.code === language}
            sx={{ fontSize: '0.9rem', py: 1 }}
          >
            {lang.flag} {lang.name}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default LanguageSwitcher;
