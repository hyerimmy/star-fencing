import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Chip, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Schedule, EmojiEvents, Groups, School } from '@mui/icons-material';
import { useLanguage } from '../../hooks/useLanguage';

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

  const handleContactClick = () => {
    window.open('tel:02-2088-5358', '_self');
  };

  return (
    <Box
      id="programs"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'white',
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
                {t('programsTitle')}
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
                연령과 목적에 맞는 다양한 프로그램을 제공합니다
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4} sx={{ mb: 8 }}>
            {programs.map((program, index) => (
              <Grid item xs={12} md={4} key={index}>
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

          <motion.div variants={itemVariants}>
            <Box
              sx={{
                p: 6,
                bgcolor: '#1a1a1a',
                borderRadius: 3,
                color: 'white',
                textAlign: 'center',
                mb: 6,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: '1.8rem', md: '2.2rem' },
                }}
              >
                선수반 실적
              </Typography>
              <Grid container spacing={2} sx={{ mb: 4 }}>
                {achievements.map((achievement, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box
                      sx={{
                        p: 2,
                        bgcolor: 'rgba(255,255,255,0.1)',
                        borderRadius: 2,
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 500,
                          lineHeight: 1.6,
                        }}
                      >
                        🏆 {achievement}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Box
              sx={{
                p: 4,
                bgcolor: '#f8f9fa',
                borderRadius: 3,
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: '#1a1a1a',
                }}
              >
                수강 안내
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#666666',
                  mb: 3,
                  lineHeight: 1.7,
                }}
              >
                • 남녀 중등부 선수반 운영<br/>
                • 남녀 초등부 선수반 모집중<br/>
                • 초/중/고/성인/동호인 취미반 상시 모집<br/>
                • 개인 레슨 예약 가능
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={handleContactClick}
                sx={{
                  bgcolor: '#1a1a1a',
                  color: 'white',
                  py: 2,
                  px: 4,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: '50px',
                  '&:hover': {
                    bgcolor: '#333333',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                수업 문의하기
              </Button>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Programs;