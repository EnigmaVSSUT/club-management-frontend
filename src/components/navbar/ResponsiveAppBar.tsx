"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';

const pages = ['Home', 'About', 'Clubs', 'Profile'];

function ResponsiveAppBar() {
  const [activePage, setActivePage] = React.useState(pages[0]);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const isDesktop = useMediaQuery('(min-width: 900px)');


  React.useEffect(() => {
    if (isDesktop && anchorElNav) {
      handleCloseNavMenu();
    }
  }, [isDesktop, anchorElNav]);  
  const handlePageChange = (page: string) => {
    setActivePage(page);
    handleCloseNavMenu();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#252525' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo and Title */}
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
          <img
  src="/images/vssut logo.jpg"
  alt="VSSUT Logo"
  style={{ width: 40, height: 40 }}
/>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.8em',
                textTransform: 'uppercase',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginLeft: '8px',
              }}
            >
              <span style={{ fontSize: '0.9em' }}>Clubs of</span>
              <span style={{ fontSize: '1.2em' }}>VSSUT</span>
            </Typography>
          </Box>

          {/* Navigation Links for Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handlePageChange(page)}
                sx={{
                  my: 2,
                  color: activePage === page ? 'white' : '#bdbdbd',
                  position: 'relative',
                  fontSize: '18px',
                  padding: '0 16px',
                  textTransform: 'none',
                  '&:hover': {
                    color: 'white',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      left: '50%',
                      bottom: '-4px',
                      height: '2px',
                      width: '100%',
                      backgroundColor: 'white',
                      transform: 'translateX(-50%) scaleX(1)',
                      transition: 'transform 0.3s ease',
                    },
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: '50%',
                    bottom: '-4px',
                    height: '2px',
                    width: '100%',
                    backgroundColor: 'transparent',
                    transform: 'translateX(-50%) scaleX(0)',
                    transition: 'transform 0.3s ease',
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Hamburger Menu for Mobile */}
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              '& .MuiMenu-paper': {
                backgroundColor: '#252525',
                width: '250px',
              },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={() => handlePageChange(page)} sx={{ color: '#bdbdbd' }}>
                {page}
              </MenuItem>
            ))}
            <MenuItem
              onClick={() => alert('Login clicked')}
              sx={{ color: '#bdbdbd' }}
            >
              LOG IN
            </MenuItem>
          </Menu>

          {/* Login Button for Desktop */}
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: 'white',
                color: '#424242',
                border: '1px solid white',
                borderRadius: '4px',
                padding: '6px 32px',
                fontSize: '18px',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'white',
                  color: '#424242',
                },
              }}
              onClick={() => alert('Login clicked')}
            >
              LOG IN
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

