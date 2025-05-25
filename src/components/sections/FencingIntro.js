import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Speed, Psychology, EmojiEvents, Groups } from '@mui/icons-material';
import { useLanguage } from '../../hooks/useLanguage';

const FencingIntro = () => {
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
        staggerChildren: 0.3,
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

  const benefits = [
    {
      icon: <Speed sx={{ fontSize: 40, color: '#1a1a1a' }} />,
      title: '빠른 판단력',
      description: '순간적인 상황 판단과 빠른 대응 능력을 기릅니다.',
    },
    {
      icon: <Psychology sx={{ fontSize: 40, color: '#1a1a1a' }} />,
      title: '전략적 사고',
      description: '상대의 움직임을 읽고 전략을 세우는 능력을 개발합니다.',
    },
    {
      icon: <EmojiEvents sx={{ fontSize: 40, color: '#1a1a1a' }} />,
      title: '성취감',
      description: '기술 향상과 경기 결과를 통해 성취감을 느낄 수 있습니다.',
    },
    {
      icon: <Groups sx={{ fontSize: 40, color: '#1a1a1a' }} />,
      title: '사회성',
      description: '함께 훈련하며 동료들과의 유대감을 형성할 수 있습니다.',
    },
  ];

  return (
    <Box
      id="fencing"
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
                {t('fencingTitle')}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                  color: '#666666',
                  mb: 2,
                }}
              >
                {t('fencingSubtitle')}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  color: '#666666',
                  maxWidth: 600,
                  mx: 'auto',
                  lineHeight: 1.7,
                }}
              >
                {t('fencingDescription')}
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 3,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                      border: '1px solid rgba(0,0,0,0.05)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                        transform: 'translateY(-4px)',
                      },
                    }}
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
                        {benefit.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 2,
                          color: '#1a1a1a',
                        }}
                      >
                        {benefit.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#666666',
                          lineHeight: 1.6,
                        }}
                      >
                        {benefit.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <motion.div variants={itemVariants}>
            <Box
              sx={{
                mt: 8,
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
                사브르 펜싱의 특징
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#666666',
                  maxWidth: 800,
                  mx: 'auto',
                  lineHeight: 1.7,
                }}
              >
                사브르는 펜싱의 세 종목 중 하나로, 가장 역동적이고 공격적인 특성을 가지고 있습니다. 
                빠른 공격과 방어가 연속으로 이어지며, 순간적인 판단력과 민첩성이 요구됩니다. 
                상체 전체가 유효 부위이며, 칼날과 칼등 모두로 공격할 수 있어 다양한 기술을 구사할 수 있습니다.
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default FencingIntro;
