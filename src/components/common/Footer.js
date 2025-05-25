import React from 'react';
import { Box, Typography, Container, Grid, IconButton, Divider } from '@mui/material';
import { Instagram, Chat } from '@mui/icons-material';
import { useLanguage } from '../../hooks/useLanguage';

const Footer = () => {
  const { t } = useLanguage();

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/star_fencing', '_blank');
  };

  const handleKakaoClick = () => {
    window.open('https://pf.kakao.com/_xlxcxnxl', '_blank');
  };

  return (
    <Box sx={{ bgcolor: '#1a1a1a', color: 'white', py: 6, mt: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <img 
                src="/images/logo/star-fencing-logo-white.png" 
                alt="Star Fencing Academy" 
                style={{ height: 40, marginRight: 12 }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                스타펜싱 아카데미
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ mb: 3, color: '#cccccc' }}>
              {t('footerDescription')}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton 
                onClick={handleInstagramClick}
                sx={{ 
                  color: 'white', 
                  bgcolor: 'rgba(255,255,255,0.1)',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' }
                }}
              >
                <Instagram />
              </IconButton>
              <IconButton 
                onClick={handleKakaoClick}
                sx={{ 
                  color: 'white', 
                  bgcolor: 'rgba(255,255,255,0.1)',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' }
                }}
              >
                <Chat />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              {t('contact')}
            </Typography>
            <Typography variant="body2" sx={{ color: '#cccccc', mb: 1 }}>
              📍 {t('address')}
            </Typography>
            <Typography variant="body2" sx={{ color: '#cccccc', mb: 1 }}>
              📞 {t('phone')}
            </Typography>
            <Typography variant="body2" sx={{ color: '#cccccc', mb: 1 }}>
              🕒 {t('weekdayHours')}
            </Typography>
            <Typography variant="body2" sx={{ color: '#cccccc' }}>
              🕒 {t('weekendHours')}
            </Typography>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4, bgcolor: 'rgba(255,255,255,0.1)' }} />
        
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#888888' }}>
            © 2024 Star Fencing Academy. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
