import * as React from 'react';
import { Box, Grid, Link, Typography, Container } from '@mui/material';
import { Facebook, Instagram, Search, Twitter } from '@mui/icons-material';
import {
  FooterInputBase,
  FooterSearchBar,
  FooterSearchIconWrapper,
} from './footer.component.style';

const Footer: React.FC<{}> = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          textDecoration: 'none',
          py: 8,
        }}
      >
        <Container maxWidth={'xl'}>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs={12} md={6} lg={4}>
              <Box>
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    color: 'white',
                    textDecoration: 'none',
                  }}
                >
                  VENDITION
                </Typography>
              </Box>
              <Typography variant="caption" color="white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi rem porro, amet
                laudantium provident voluptatem
              </Typography>
              <FooterSearchBar>
                <FooterSearchIconWrapper>
                  <Search />
                </FooterSearchIconWrapper>
                <FooterInputBase placeholder="Search…" />
              </FooterSearchBar>
            </Grid>
            <Grid item xs={12} md={6} lg={2} />
            <Grid item xs={12} md={4} lg={2}>
              <Typography variant="subtitle1" fontWeight="bold" color="white" gutterBottom>
                PRODUCT
              </Typography>
              <Link href="#" color="inherit" display="block">
                Features
              </Link>
              <Link href="#" color="inherit" display="block">
                Integrations
              </Link>
              <Link href="#" color="inherit" display="block">
                Pricing
              </Link>
              <Link href="#" color="inherit" display="block">
                FAQ
              </Link>
            </Grid>
            <Grid item xs={12} md={4} lg={2}>
              <Typography variant="subtitle1" fontWeight="bold" color="white" gutterBottom>
                COMPANY
              </Typography>
              <Link href="#" color="inherit" display="block">
                About Us
              </Link>
              <Link href="#" color="inherit" display="block">
                Careers
              </Link>
              <Link href="#" color="inherit" display="block">
                Privacy Policy
              </Link>
              <Link href="#" color="inherit" display="block">
                Terms of Service
              </Link>
            </Grid>
            <Grid item xs={12} md={4} lg={2}>
              <Typography variant="subtitle1" fontWeight="bold" color="white" gutterBottom>
                DEVELOPERS
              </Typography>
              <Link href="#" color="inherit" display="block">
                Public API
              </Link>
              <Link href="#" color="inherit" display="block">
                Documentation
              </Link>
              <Link href="#" color="inherit" display="block">
                Guides
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          backgroundColor: 'white',
          py: '1px',
        }}
      ></Box>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          textDecoration: 'none',
          py: 1,
        }}
      >
        <Container maxWidth={'xl'}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4} display="flex" justifyContent="center">
              <Typography variant="h6" color="white">
                contact@mail.com
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} display="flex" justifyContent="center">
              <Typography variant="h6" color="white">
                +00 123 456 78 90
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} display="flex" justifyContent="center">
              <Typography variant="h6" color="white" mx={1}>
                <Instagram />
              </Typography>
              <Typography variant="h6" color="white" mx={1}>
                <Facebook />
              </Typography>
              <Typography variant="h6" color="white" mx={1}>
                <Twitter />
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
