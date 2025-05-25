import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LocationOn, Phone, Schedule, LocalParking } from '@mui/icons-material';
import { useLanguage } from '../../hooks/useLanguage';

const About = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const infoCards = [
    {
      icon: <LocationOn sx={{ fontSize: 30, color: '#1a1a1a' }} />,
      title: t('address'),
      description: '',
    },
    {
      icon: <Phone sx={{ fontSize: 30, color: '#1a1a1a' }} />,
      title: t('phone'),
      description: '',
    },
    {
      icon: <Schedule sx={{ fontSize: 30, color: '#1a1a1a' }} />,
      title: '운영시간',
      description: `${t('weekdayHours')}\n${t('weekendHours')}`,
    },
    {
      icon: <LocalParking sx={{ fontSize: 30, color: '#1a1a1a' }} />,
      title: '시설안내',
      description: t('facilities'),
    },
  ];

  return (
    <Box
      id="about"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#f8f9fa',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '3rem' },
                  fontWeight: 700,
                  mb: 2,
                  color: '#1a1a1a',
                }}
              >
                {t('aboutTitle')}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                  color: '#666666',
                  maxWidth: 600,
                  mx: 'auto',
                  lineHeight: 1.6,
                }}
              >
                {t('aboutDescription')}
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {infoCards.map((card, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 3,
                      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                      border: '1px solid rgba(0,0,0,0.05)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: 2,
                            bgcolor: '#f5f5f5',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {card.icon}
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              mb: 1,
                              color: '#1a1a1a',
                              fontSize: { xs: '1rem', md: '1.1rem' },
                            }}
                          >
                            {card.title}
                          </Typography>
                          {card.description && (
                            <Typography
                              variant="body2"
                              sx={{
                                color: '#666666',
                                lineHeight: 1.6,
                                whiteSpace: 'pre-line',
                              }}
                            >
                              {card.description}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <motion.div variants={itemVariants}>
            <Box sx={{ mt: 6, textAlign: 'center' }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a1a' }}>
                소셜 미디어
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                <Chip
                  label="Instagram @star_fencing"
                  variant="outlined"
                  clickable
                  onClick={() => window.open('https://www.instagram.com/star_fencing', '_blank')}
                  sx={{
                    borderColor: '#1a1a1a',
                    color: '#1a1a1a',
                    '&:hover': {
                      bgcolor: '#1a1a1a',
                      color: 'white',
                    },
                  }}
                />
                <Chip
                  label="카카오채널 스타펜싱아카데미"
                  variant="outlined"
                  clickable
                  onClick={() => window.open('https://pf.kakao.com/_xlxcxnxl', '_blank')}
                  sx={{
                    borderColor: '#1a1a1a',
                    color: '#1a1a1a',
                    '&:hover': {
                      bgcolor: '#1a1a1a',
                      color: 'white',
                    },
                  }}
                />
              </Box>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
