import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Avatar, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { EmojiEvents, School, Person } from '@mui/icons-material';
import { useLanguage } from '../hooks/useLanguage';
import BackButton from '../components/common/BackButton';

const Instructors = () => {
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

  const instructors = [
    {
      name: '황광욱',
      title: t('headInstructor'),
      image: '/images/instructors/hwang-kwangwook.jpg',
      achievements: [
        '2012년 런던올림픽 금메달 오은석·구본길 지도',
        '세계청소년 및 유소년 메달리스트 다수배출',
        '전문 스포츠지도자 1급',
        '교원자격 (중등학교2급 정교사)',
        '아시안게임 및 올림픽메달리스트 다수배출',
        '대한체육회 2002펜싱부문 모범심판'
      ],
      education: [
        '홍익사범대학교 부속고등학교 졸업',
        '한국체육대학교 체육교육과 졸업',
        '국군체육부대 제대'
      ],
      experience: [
        '前 청소년 국가대표',
        '前 국가대표',
        '前 오성중/고등학교 코치',
        '前 밀양대학교 펜싱팀 감독',
        '前 서울시청 펜싱팀 코치',
        '前 국민체육진흥공단 코치',
        '前 국가대표상비군 코치',
        '前 청소년국가대표 코치',
        '前 서울펜싱협회 스포츠공정위원회 위원 (2017~2018)',
        '前 서울시펜싱협회 부회장 (2019~2024)',
        '前 일산펜싱클럽 대표',
        '現 스타펜싱아카데미 대표'
      ]
    },
    {
      name: '강철웅',
      title: t('instructor'),
      image: '/images/instructors/kang-cheolwoong.jpg',
      achievements: [
        '현역 선수로 활동 중',
        '대학부 대회 다수 입상',
        '청소년 지도 경험'
      ],
      education: [
        '체육대학교 재학 중'
      ],
      experience: [
        '現 스타펜싱아카데미 코치',
        '청소년 펜싱 지도'
      ]
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
            backgroundImage: 'url("/images/instructors/coaching-scene.jpg")',
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
                  {t('instructorsTitle')}
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
                  {t('instructorsSubtitle')}
                </Typography>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Instructors Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {instructors.map((instructor, index) => (
              <Grid item xs={12} lg={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
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
                      overflow: 'visible',
                      position: 'relative',
                      '&:hover': {
                        boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
                        <Avatar
                          src={instructor.image}
                          sx={{
                            width: 120,
                            height: 120,
                            mb: 2,
                            border: '4px solid white',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                          }}
                        >
                          <Person sx={{ fontSize: 60 }} />
                        </Avatar>
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 700,
                            color: '#1a1a1a',
                            mb: 1,
                          }}
                        >
                          {instructor.name}
                        </Typography>
                        <Chip
                          label={instructor.title}
                          color="primary"
                          variant="outlined"
                          sx={{
                            fontWeight: 600,
                            borderColor: '#1a1a1a',
                            color: '#1a1a1a',
                            fontSize: '1rem',
                            py: 1,
                          }}
                        />
                      </Box>

                      <Box sx={{ mb: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <EmojiEvents sx={{ fontSize: 24, color: '#1a1a1a', mr: 1 }} />
                          <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a' }}>
                            {t('achievements')}
                          </Typography>
                        </Box>
                        {instructor.achievements.map((achievement, idx) => (
                          <Typography
                            key={idx}
                            variant="body2"
                            sx={{
                              color: '#666666',
                              mb: 1,
                              pl: 3,
                              position: 'relative',
                              lineHeight: 1.6,
                              '&::before': {
                                content: '"•"',
                                position: 'absolute',
                                left: 0,
                                color: '#1a1a1a',
                                fontWeight: 'bold',
                              },
                            }}
                          >
                            {achievement}
                          </Typography>
                        ))}
                      </Box>

                      <Box sx={{ mb: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <School sx={{ fontSize: 24, color: '#1a1a1a', mr: 1 }} />
                          <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a' }}>
                            {t('education')}
                          </Typography>
                        </Box>
                        {instructor.education.map((edu, idx) => (
                          <Typography
                            key={idx}
                            variant="body2"
                            sx={{
                              color: '#666666',
                              mb: 1,
                              pl: 3,
                              position: 'relative',
                              lineHeight: 1.6,
                              '&::before': {
                                content: '"•"',
                                position: 'absolute',
                                left: 0,
                                color: '#1a1a1a',
                                fontWeight: 'bold',
                              },
                            }}
                          >
                            {edu}
                          </Typography>
                        ))}
                      </Box>

                      <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Person sx={{ fontSize: 24, color: '#1a1a1a', mr: 1 }} />
                          <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a' }}>
                            {t('experience')}
                          </Typography>
                        </Box>
                        <Grid container spacing={1}>
                          {instructor.experience.map((exp, idx) => (
                            <Grid item xs={12} key={idx}>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: '#666666',
                                  mb: 0.5,
                                  pl: 3,
                                  position: 'relative',
                                  lineHeight: 1.6,
                                  '&::before': {
                                    content: '"•"',
                                    position: 'absolute',
                                    left: 0,
                                    color: '#1a1a1a',
                                    fontWeight: 'bold',
                                  },
                                }}
                              >
                                {exp}
                              </Typography>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
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

export default Instructors;