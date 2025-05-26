import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Box } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

const BackButton = ({ color = 'white' }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <Box sx={{ position: 'absolute', top: 100, left: 24, zIndex: 10 }}>
      <IconButton
        onClick={handleBack}
        sx={{
          color: color,
          bgcolor: color === 'white' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          '&:hover': {
            bgcolor: color === 'white' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.2)',
          },
        }}
      >
        <ArrowBack />
      </IconButton>
    </Box>
  );
};

export default BackButton;
