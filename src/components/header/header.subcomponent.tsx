import { SearchOutlined } from '@mui/icons-material';
import {
  Box,
  Button,
  Grid,
  Input,
  Link,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { useState } from 'react';

export const HeaderSubMenu: React.FC<{ imgSrc: string }> = ({ imgSrc }) => {
  return (
    <Grid container p={2}>
      <Grid item xs={6} md={2}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
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
      <Grid item xs={6} md={2}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
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
      <Grid item xs={12} md={8}>
        <img src={imgSrc} alt="" style={{ width: '100%', height: 'auto' }} />
      </Grid>
    </Grid>
  );
};

export const TabPanel: React.FC<{ children?: React.ReactNode; index: number; value: number }> = (
  props,
) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export const SearchBox: React.FC<{ xs: string; sm: string; md: string; lg: string }> = (props) => {
  const [category, setCategory] = useState('');
  const { xs, sm, md, lg } = props;

  return (
    <Box width="100%" sx={{ display: { xs, sm, md, lg } }}>
      <Box width="70%">
        <Input
          placeholder="Search"
          fullWidth
          style={{ background: '#f3f3f3', paddingLeft: 10, height: 40 }}
        />
      </Box>
      <Box width="20%">
        <Select
          value={category}
          onChange={(event: SelectChangeEvent) => setCategory(event.target.value)}
          displayEmpty
          fullWidth
          input={<Input style={{ background: '#ddd', paddingLeft: 10, height: 40 }} />}
        >
          <MenuItem value="" disabled>
            Categories
          </MenuItem>
          <MenuItem value={1}>Category 1</MenuItem>
          <MenuItem value={2}>Category 2</MenuItem>
          <MenuItem value={3}>Category 3</MenuItem>
        </Select>
      </Box>
      <Box pl={1}>
        <Button size="large" variant="contained">
          <SearchOutlined color="inherit" />
        </Button>
      </Box>
    </Box>
  );
};
