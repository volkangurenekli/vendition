import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { HomePageContent, HomePageImage } from './home.page.style';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box position="relative" width="100%">
      <HomePageImage
        src="https://www.cdac.in/img/int-banner/pro-service.jpg"
        alt="product banner"
      />
      <HomePageContent>
        <Typography variant={isSmallScreen ? 'h6' : 'h3'} align="center" sx={{ marginBottom: 2 }}>
          The easiest way to access quality products
        </Typography>
        <Button variant="contained" onClick={() => navigate('/products')}>
          Explore
          <ArrowForwardIcon />
        </Button>
      </HomePageContent>
    </Box>
  );
};

export default HomePage;
