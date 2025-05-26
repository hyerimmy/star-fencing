import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Chip, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LocationOn, Phone, Schedule, LocalParking } from '@mui/icons-material';
import { useLanguage } from '../hooks/useLanguage';
import BackButton from '../components/common/BackButton';

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
      title: '위치',
      description: t('address'),
    },
    {
      icon: <Phone sx={{ fontSize: 30, color: '#1a1a1a' }} />,
      title: '연락처',
      description: t('phone'),
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

  const handleContactClick = () => {
    window.open('tel:02-2088-5358', '_self');
  };

  return (
    <Box>
      <BackButton />
      
      {/* Hero Section */}
      <Box
        ref={ref}
        sx={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          background: 'linear-gradient(135deg, #1a1a1a 0%, #333333 100%)',
          color: 'white',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("/images/about/academy-interior.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3,
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Box sx={{ maxWidth: 800, textAlign: 'center', mx: 'auto' }}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    fontWeight: 700,
                    mb: 2,
                    background: 'linear-gradient(135deg, #ffffff 0%, #cccccc 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {t('aboutDetailTitle')}
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 500,
                    mb: 3,
                    color: '#f5f5f5',
                  }}
                >
                  {t('aboutDetailSubtitle')}
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                    fontWeight: 400,
                    mb: 4,
                    color: '#cccccc',
                    lineHeight: 1.6,
                  }}
                >
                  {t('aboutDetailDescription')}
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleContactClick}
                  sx={{
                    bgcolor: 'white',
                    color: '#1a1a1a',
                    py: 2,
                    px: 4,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: '50px',
                    '&:hover': {
                      bgcolor: '#f5f5f5',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {t('contactUs')}
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Information Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
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
              아카데미 정보
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
              완벽한 시설과 체계적인 교육 환경을 제공합니다
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {infoCards.map((card, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
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
                          <Typography
                            variant="body1"
                            sx={{
                              color: '#666666',
                              lineHeight: 1.6,
                              whiteSpace: 'pre-line',
                            }}
                          >
                            {card.description}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: '#1a1a1a' }}>
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
                  fontSize: '1rem',
                  py: 2,
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
                  fontSize: '1rem',
                  py: 2,
                  '&:hover': {
                    bgcolor: '#1a1a1a',
                    color: 'white',
                  },
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
