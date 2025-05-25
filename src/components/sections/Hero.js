import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../../hooks/useLanguage';

const Hero = () => {
  const { t } = useLanguage();
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

  return (
    <Box
      id="home"
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

      {/* Floating elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          opacity: 0.1,
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            width: 100,
            height: 100,
            border: '2px solid white',
            borderRadius: '50%',
            display: { xs: 'none', md: 'block' },
          }}
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          opacity: 0.1,
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            width: 60,
            height: 60,
            border: '2px solid white',
            transform: 'rotate(45deg)',
            display: { xs: 'none', md: 'block' },
          }}
        />
      </motion.div>
    </Box>
  );
};

export default Hero;
