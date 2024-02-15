import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Dialog,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Tab,
  Tabs,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Close } from '@mui/icons-material';
import { HeaderContent } from './header.component.style';
import { HeaderSubMenu, SearchBox, TabPanel } from './header.subcomponent';
import { HEADER_MENU_ITEMS } from '../../constants';

const Header: React.FC<{}> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [value, setValue] = useState<number>(99);
  const [show, setShow] = useState<boolean>(false);

  const handleChange = (value: number, isShow: boolean) => {
    setValue(value);
    setShow(isShow);
  };

  return (
    <>
      <AppBar position="static" color="inherit">
        <Container maxWidth="xl">
          <Toolbar>
            <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
              <Box>
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: 'flex',
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.2rem',
                    color: 'navy',
                    textDecoration: 'none',
                  }}
                >
                  VENDITION
                </Typography>
              </Box>

              <SearchBox xs="none" sm="none" md="flex" lg="flex" />

              <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-haspopup="true"
                  onClick={() => setIsMenuOpen(true)}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>

          <SearchBox xs="flex" sm="flex" md="none" lg="none" />

          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
            <Box position="relative" onMouseLeave={() => handleChange(99, false)}>
              <Box>
                <Tabs value={value} variant="scrollable" scrollButtons allowScrollButtonsMobile>
                  {HEADER_MENU_ITEMS.map((menuItem) => {
                    return (
                      <Tab
                        key={menuItem.id}
                        onMouseOver={() => handleChange(menuItem.id, true)}
                        label={menuItem.label}
                      />
                    );
                  })}
                </Tabs>
              </Box>
              <HeaderContent
                style={{
                  display: show ? 'block' : 'none',
                }}
              >
                {HEADER_MENU_ITEMS.map((menuItem) => {
                  return (
                    <TabPanel key={menuItem.id} value={value} index={menuItem.id}>
                      <HeaderSubMenu imgSrc={menuItem.imgSrc} />
                    </TabPanel>
                  );
                })}
              </HeaderContent>
            </Box>
          </Box>
        </Container>
      </AppBar>

      <Dialog fullScreen open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setIsMenuOpen(false)}
              aria-label="close"
            >
              <Close />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List>
          <ListItemButton>
            <ListItemText primary="Menu Item 1" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText primary="Menu Item 2" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText primary="Menu Item 3" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText primary="Menu Item 4" />
          </ListItemButton>
          <Divider />
        </List>
      </Dialog>
    </>
  );
};
export default Header;
