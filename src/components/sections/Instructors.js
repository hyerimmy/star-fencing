import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Avatar, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { EmojiEvents, School, Person } from '@mui/icons-material';
import { useLanguage } from '../../hooks/useLanguage';

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
        '아시안게임 및 올림픽메달리스트 다수배출'
      ],
      education: [
        '홍익사범대학교 부속고등학교 졸업',
        '한국체육대학교 체육교육과 졸업',
        '국군체육부대 제대'
      ],
      experience: [
        '前 청소년 국가대표',
        '前 국가대표',
        '前 서울시펜싱협회 부회장 (2019~2024)',
        '前 국가대표상비군 코치',
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
    <Box
      id="instructors"
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
                {t('instructorsTitle')}
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
                최고의 전문성과 경험을 갖춘 강사진이 여러분을 지도합니다
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {instructors.map((instructor, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
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
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                        <Avatar
                          src={instructor.image}
                          sx={{
                            width: 100,
                            height: 100,
                            mb: 2,
                            border: '4px solid white',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                          }}
                        >
                          <Person sx={{ fontSize: 50 }} />
                        </Avatar>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            color: '#1a1a1a',
                            mb: 0.5,
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
                          }}
                        />
                      </Box>

                      <Box sx={{ mb: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <EmojiEvents sx={{ fontSize: 20, color: '#1a1a1a', mr: 1 }} />
                          <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a' }}>
                            주요 성과
                          </Typography>
                        </Box>
                        {instructor.achievements.map((achievement, idx) => (
                          <Typography
                            key={idx}
                            variant="body2"
                            sx={{
                              color: '#666666',
                              mb: 0.5,
                              pl: 3,
                              position: 'relative',
                              '&::before': {
                                content: '"•"',
                                position: 'absolute',
                                left: 0,
                                color: '#1a1a1a',
                              },
                            }}
                          >
                            {achievement}
                          </Typography>
                        ))}
                      </Box>

                      <Box sx={{ mb: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <School sx={{ fontSize: 20, color: '#1a1a1a', mr: 1 }} />
                          <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a' }}>
                            학력
                          </Typography>
                        </Box>
                        {instructor.education.map((edu, idx) => (
                          <Typography
                            key={idx}
                            variant="body2"
                            sx={{
                              color: '#666666',
                              mb: 0.5,
                              pl: 3,
                              position: 'relative',
                              '&::before': {
                                content: '"•"',
                                position: 'absolute',
                                left: 0,
                                color: '#1a1a1a',
                              },
                            }}
                          >
                            {edu}
                          </Typography>
                        ))}
                      </Box>

                      <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Person sx={{ fontSize: 20, color: '#1a1a1a', mr: 1 }} />
                          <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a' }}>
                            경력
                          </Typography>
                        </Box>
                        {instructor.experience.map((exp, idx) => (
                          <Typography
                            key={idx}
                            variant="body2"
                            sx={{
                              color: '#666666',
                              mb: 0.5,
                              pl: 3,
                              position: 'relative',
                              '&::before': {
                                content: '"•"',
                                position: 'absolute',
                                left: 0,
                                color: '#1a1a1a',
                              },
                            }}
                          >
                            {exp}
                          </Typography>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Instructors;
