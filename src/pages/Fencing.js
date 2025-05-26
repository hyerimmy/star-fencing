import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Speed, Psychology, EmojiEvents, Groups, Sports } from '@mui/icons-material';
import { useLanguage } from '../hooks/useLanguage';
import BackButton from '../components/common/BackButton';

const Fencing = () => {
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

  const techniques = [
    {
      name: '공격 기술',
      description: '직접 공격, 복합 공격 등 다양한 공격 패턴을 익힙니다.',
      icon: '⚔️'
    },
    {
      name: '방어 기술', 
      description: '패리, 회피 등 상대의 공격을 막는 기술을 배웁니다.',
      icon: '🛡️'
    },
    {
      name: '반격 기술',
      description: '상대의 공격을 막은 후 즉시 반격하는 기술을 연마합니다.',
      icon: '⚡'
    },
    {
      name: '발놀림',
      description: '전진, 후진, 런지 등 효과적인 이동 기술을 습득합니다.',
      icon: '👟'
    }
  ];

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
            backgroundImage: 'url("/images/fencing/sabre-action.jpg")',
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
                  {t('fencingDetailTitle')}
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
                  {t('fencingSubtitle')}
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
                  펜싱은 '검의 예술'이라 불리며, 순간적인 판단력과 전략적 사고, 그리고 정확한 기술이 요구되는 스포츠입니다.
                </Typography>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Benefits Section */}
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
              펜싱의 장점
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
              펜싱을 통해 얻을 수 있는 다양한 이점들을 확인해보세요
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
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
        </Container>
      </Box>

      {/* Sabre Characteristics */}
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
              {t('sabreCharacteristics')}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                color: '#666666',
                maxWidth: 800,
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              {t('sabreDescription')}
            </Typography>
          </Box>

          <Box
            sx={{
              p: 6,
              bgcolor: 'white',
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              mb: 6,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: '#666666',
                lineHeight: 1.8,
                fontSize: { xs: '1rem', md: '1.1rem' },
                textAlign: 'center',
              }}
            >
              사브르는 펜싱의 세 종목 중 하나로, 가장 역동적이고 공격적인 특성을 가지고 있습니다. 
              빠른 공격과 방어가 연속으로 이어지며, 순간적인 판단력과 민첩성이 요구됩니다. 
              상체 전체가 유효 부위이며, 칼날과 칼등 모두로 공격할 수 있어 다양한 기술을 구사할 수 있습니다.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {techniques.map((technique, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
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
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                      border: '1px solid rgba(0,0,0,0.05)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                      <Typography
                        variant="h2"
                        sx={{
                          fontSize: '3rem',
                          mb: 2,
                        }}
                      >
                        {technique.icon}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 2,
                          color: '#1a1a1a',
                        }}
                      >
                        {technique.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#666666',
                          lineHeight: 1.6,
                        }}
                      >
                        {technique.description}
                      </Typography>
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

export default Fencing;
