'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Menu as MenuIcon, Sun, Moon, LogOut, LogIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { toggleTheme } from '../../store/slices/uiSlice';
import { logout } from '../../store/slices/authSlice';
import Link from 'next/link';

const navItems = [
  { label: 'Início', href: '/' },
  { label: 'Quem Somos', href: '/about-us' },
  { label: 'Serviços', href: '/services' },
  { label: 'FAQ', href: '/faq' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector((state) => state.ui.themeMode);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 2 }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold', color: 'primary.main' }}>
        ORAL LIFE
      </Typography>
      <List>
        {navItems.map((item) => (
          <Link key={item.label} href={item.href} style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItem>
              <ListItemText primary={item.label} />
            </ListItem>
          </Link>
        ))}
        <ListItem>
          {isAuthenticated ? (
            <Button fullWidth variant="outlined" color="primary" onClick={handleLogout} startIcon={<LogOut size={18} />}>
              Logout
            </Button>
          ) : (
            <Link href="/login" style={{ width: '100%' }}>
              <Button fullWidth variant="contained" color="primary" startIcon={<LogIn size={18} />}>
                Login
              </Button>
            </Link>
          )}
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'background.default', borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Typography
              variant="h5"
              noWrap
              sx={{
                fontWeight: 800,
                letterSpacing: '.1rem',
                color: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              <Box component="span" sx={{ color: theme.palette.mode === 'light' ? 'black' : 'white' }}>ORAL</Box>
              LIFE
            </Typography>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {navItems.map((item) => (
                <Link key={item.label} href={item.href} style={{ textDecoration: 'none' }}>
                  <Button
                    sx={{
                      color: 'text.primary',
                      '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
                      fontWeight: 500
                    }}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </Box>
          )}

          {/* Actions */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* Theme Toggle */}
            <IconButton onClick={() => dispatch(toggleTheme())} color="inherit" sx={{ overflow: 'hidden' }}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={themeMode}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {themeMode === 'light' ? <Moon size={20} color={theme.palette.text.primary} /> : <Sun size={20} color={theme.palette.text.primary} />}
                </motion.div>
              </AnimatePresence>
            </IconButton>

            {!isMobile && (
              isAuthenticated ? (
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleLogout}
                  startIcon={<LogOut size={18} />}
                  sx={{ ml: 1 }}
                >
                  Logout
                </Button>
              ) : (
                <Link href="/login" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<LogIn size={18} />}
                    sx={{ ml: 1 }}
                  >
                    Login
                  </Button>
                </Link>
              )
            )}

            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 1, color: 'text.primary' }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}
