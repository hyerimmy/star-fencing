import React from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../hooks/useLanguage';
import { School, EmojiEvents, Groups, Psychology } from '@mui/icons-material';

const Home = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const handleContactClick = () => {
    window.open('tel:02-2088-5358', '_self');
  };

  const sections = [
    {
      title: t('about'),
      description: '체계적인 시설과 전문 강사진이 있는 스타펜싱 아카데미를 소개합니다.',
      icon: <School sx={{ fontSize: 40, color: '#1a1a1a' }} />,
      path: '/about'
    },
    {
      title: t('fencing'),
      description: '펜싱의 매력과 사브르 종목의 특징을 자세히 알아보세요.',
      icon: <Psychology sx={{ fontSize: 40, color: '#1a1a1a' }} />,
      path: '/fencing'
    },
    {
      title: t('instructors'),
      description: '올림픽 금메달리스트를 배출한 최고의 전문 강사진을 만나보세요.',
      icon: <EmojiEvents sx={{ fontSize: 40, color: '#1a1a1a' }} />,
      path: '/instructors'
    },
    {
      title: t('programs'),
      description: '연령과 실력에 맞는 다양한 수업 프로그램을 확인해보세요.',
      icon: <Groups sx={{ fontSize: 40, color: '#1a1a1a' }} />,
      path: '/programs'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        ref={ref}
        sx={{
          minHeight: '100vh',
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
            backgroundImage: 'url("/images/hero/fencing-bg.jpg")',
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
            <Box sx={{ maxWidth: 800, mx: { xs: 0, md: 'auto' }, textAlign: { xs: 'left', md: 'center' } }}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '4rem', lg: '4.5rem' },
                    fontWeight: 700,
                    mb: 2,
                    background: 'linear-gradient(135deg, #ffffff 0%, #cccccc 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {t('heroTitle')}
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '1.8rem', md: '2.5rem' },
                    fontWeight: 600,
                    mb: 3,
                    color: '#f5f5f5',
                  }}
                >
                  {t('heroSubtitle')}
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                    fontWeight: 400,
                    mb: 4,
                    color: '#cccccc',
                    lineHeight: 1.6,
                  }}
                >
                  {t('heroDescription')}
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
                    boxShadow: '0 8px 32px rgba(255,255,255,0.3)',
                    '&:hover': {
                      bgcolor: '#f5f5f5',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 40px rgba(255,255,255,0.4)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {t('heroButton')}
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Sections Navigation */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f8f9fa' }}>
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
              스타펜싱 아카데미
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
              전문적이고 체계적인 펜싱 교육을 제공합니다
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {sections.map((section, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 3,
                      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                      border: '1px solid rgba(0,0,0,0.05)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
                      },
                    }}
                    onClick={() => navigate(section.path)}
                  >
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                      <Box
                        sx={{
                          mb: 3,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: 80,
                          height: 80,
                          bgcolor: '#f8f9fa',
                          borderRadius: '50%',
                          mx: 'auto',
                        }}
                      >
                        {section.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          mb: 2,
                          color: '#1a1a1a',
                        }}
                      >
                        {section.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#666666',
                          lineHeight: 1.6,
                          mb: 3,
                        }}
                      >
                        {section.description}
                      </Typography>
                      <Button
                        variant="outlined"
                        sx={{
                          borderColor: '#1a1a1a',
                          color: '#1a1a1a',
                          '&:hover': {
                            bgcolor: '#1a1a1a',
                            color: 'white',
                          },
                        }}
                      >
                        {t('learnMore')}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
