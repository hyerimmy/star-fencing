import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Chip, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Schedule, EmojiEvents, Groups, School } from '@mui/icons-material';
import { useLanguage } from '../hooks/useLanguage';
import BackButton from '../components/common/BackButton';

const Programs = () => {
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

  const programs = [
    {
      category: t('elementary'),
      icon: <School sx={{ fontSize: 30, color: '#1a1a1a' }} />,
      classes: [
        {
          type: t('hobby'),
          schedule: '평일 (화/수/목/금) 14:50 ~ 15:50',
          description: '펜싱의 기본기를 재미있게 배우는 시간',
          color: '#4CAF50',
        },
        {
          type: t('athlete'),
          schedule: '평일 (화/수/목/금) 16:00 ~ 17:30',
          description: '체계적인 훈련으로 선수 육성',
          color: '#2196F3',
        },
      ],
    },
    {
      category: t('middleHigh'),
      icon: <Groups sx={{ fontSize: 30, color: '#1a1a1a' }} />,
      classes: [
        {
          type: t('hobby'),
          schedule: '평일 (화/수/목/금) 20:30 ~ 22:00\n주말 (토/일) 16:30 ~ 18:00',
          description: '학업과 병행하며 펜싱을 즐기는 시간',
          color: '#4CAF50',
        },
        {
          type: t('athlete'),
          schedule: '평일 (화/수/목/금) 18:30 ~ 20:30\n주말 (토/일) 14:00 ~ 16:00',
          description: '본격적인 선수 양성 프로그램',
          color: '#2196F3',
        },
      ],
    },
    {
      category: t('adult'),
      icon: <EmojiEvents sx={{ fontSize: 30, color: '#1a1a1a' }} />,
      classes: [
        {
          type: t('hobby'),
          schedule: '평일 (화/수/목/금) 20:30 ~ 22:00\n주말 (토/일) 16:30 ~ 18:00',
          description: '성인을 위한 펜싱 체험 및 취미 활동',
          color: '#4CAF50',
        },
      ],
    },
  ];

  const achievements = [
    "2023' 소년체전 서울시 대표 선발 (개인전 은메달)",
    "2024' 소년체전 서울시 대표 선발",
    "2025' 소년체전 서울시 대표 선발 (개인전 출전예정)",
    "2025' 대한중고펜싱연맹 대회 개인전 3위",
  ];

  const classInfo = [
    "남녀 중등부 선수반 운영",
    "남녀 초등부 선수반 모집중",
    "초/중/고/성인/동호인 취미반 상시 모집",
    "개인 레슨 예약 가능"
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
            backgroundImage: 'url("/images/programs/class-training.jpg")',
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
                  {t('programsTitle')}
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
                  {t('programsSubtitle')}
                </Typography>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Programs Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {programs.map((program, index) => (
              <Grid item xs={12} md={4} key={index}>
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
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: 2,
                            bgcolor: '#f5f5f5',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 2,
                          }}
                        >
                          {program.icon}
                        </Box>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            color: '#1a1a1a',
                          }}
                        >
                          {program.category}
                        </Typography>
                      </Box>

                      {program.classes.map((classInfo, classIndex) => (
                        <Box
                          key={classIndex}
                          sx={{
                            mb: 3,
                            p: 3,
                            bgcolor: '#f8f9fa',
                            borderRadius: 2,
                            border: `2px solid ${classInfo.color}20`,
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Chip
                              label={classInfo.type}
                              sx={{
                                bgcolor: classInfo.color,
                                color: 'white',
                                fontWeight: 600,
                                mr: 1,
                              }}
                            />
                          </Box>
                          
                          <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                            <Schedule sx={{ fontSize: 20, color: '#666666', mr: 1, mt: 0.5 }} />
                            <Typography
                              variant="body2"
                              sx={{
                                color: '#1a1a1a',
                                fontWeight: 500,
                                whiteSpace: 'pre-line',
                                lineHeight: 1.6,
                              }}
                            >
                              {classInfo.schedule}
                            </Typography>
                          </Box>
                          
                          <Typography
                            variant="body2"
                            sx={{
                              color: '#666666',
                              lineHeight: 1.6,
                            }}
                          >
                            {classInfo.description}
                          </Typography>
                        </Box>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Results Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#1a1a1a', color: 'white' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '3rem' },
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                {t('athleteResults')}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                  color: '#cccccc',
                  maxWidth: 600,
                  mx: 'auto',
                  lineHeight: 1.6,
                }}
              >
                스타펜싱 아카데미 선수반의 뛰어난 성과를 확인해보세요
              </Typography>
            </Box>

            <Grid container spacing={3} sx={{ mb: 6 }}>
              {achievements.map((achievement, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        p: 3,
                        bgcolor: 'rgba(255,255,255,0.1)',
                        borderRadius: 2,
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: 'rgba(255,255,255,0.15)',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 500,
                          lineHeight: 1.6,
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <Box component="span" sx={{ mr: 2, fontSize: '1.5rem' }}>🏆</Box>
                        {achievement}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Class Information Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                p: 6,
                bgcolor: 'white',
                borderRadius: 3,
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  mb: 4,
                  color: '#1a1a1a',
                  fontSize: { xs: '1.8rem', md: '2.2rem' },
                }}
              >
                {t('classInfo')}
              </Typography>
              
              <Grid container spacing={3} sx={{ mb: 4 }}>
                {classInfo.map((info, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Box
                        sx={{
                          p: 3,
                          bgcolor: '#f8f9fa',
                          borderRadius: 2,
                          border: '2px solid #e0e0e0',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            borderColor: '#1a1a1a',
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            color: '#1a1a1a',
                            fontWeight: 500,
                            lineHeight: 1.6,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Box component="span" sx={{ mr: 2, fontSize: '1.2rem' }}>✓</Box>
                          {info}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>

              <Button
                variant="contained"
                size="large"
                onClick={handleContactClick}
                sx={{
                  bgcolor: '#1a1a1a',
                  color: 'white',
                  py: 2,
                  px: 6,
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  borderRadius: '50px',
                  boxShadow: '0 8px 32px rgba(26,26,26,0.3)',
                  '&:hover': {
                    bgcolor: '#333333',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 40px rgba(26,26,26,0.4)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {t('contactUs')}
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Programs;