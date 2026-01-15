'use client';

import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  IconButton,
  InputAdornment,
  Divider,
  Alert,
  useTheme,
} from '@mui/material';
import { Eye, EyeOff, Lock, Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useAppDispatch } from '../../hooks/store';
import { setCredentials } from '../../store/slices/authSlice';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Simulação de login para demonstração
      // Em um cenário real, aqui seria feita a chamada para a API
      if (formData.email === 'admin@oral-life.com.br' && formData.password === '123456') {
        dispatch(setCredentials({
          user: { name: 'Administrador', email: formData.email },
          token: 'fake-jwt-token'
        }));
        router.push('/');
      } else {
        setError('E-mail ou senha incorretos. Tente admin@oral-life.com.br / 123456');
      }
    } catch (err) {
      setError('Ocorreu um erro ao tentar realizar o login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 8,
              border: '1px solid',
              borderColor: 'divider',
              textAlign: 'center',
              boxShadow: theme.palette.mode === 'light' 
                ? '0 20px 40px -10px rgba(0,0,0,0.05)' 
                : '0 20px 40px -10px rgba(0,0,0,0.3)',
            }}
          >
            {/* Logo / Header */}
            <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 1, marginBottom: '2rem' }}>
              <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main' }}>
                <Box component="span" sx={{ color: theme.palette.text.primary }}>ORAL</Box> LIFE
              </Typography>
            </Link>

            <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
              Bem-vindo de volta
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Acesse sua conta para gerenciar seus agendamentos.
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 3, borderRadius: 3 }}>
                {error}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                <TextField
                  fullWidth
                  label="E-mail"
                  name="email"
                  type="email"
                  variant="outlined"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Mail size={20} color={theme.palette.text.secondary} />
                      </InputAdornment>
                    ),
                    sx: { borderRadius: 3 }
                  }}
                />

                <TextField
                  fullWidth
                  label="Senha"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  variant="outlined"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock size={20} color={theme.palette.text.secondary} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </IconButton>
                      </InputAdornment>
                    ),
                    sx: { borderRadius: 3 }
                  }}
                />

                <Box sx={{ textAlign: 'right' }}>
                  <Link href="/recuperar-senha" style={{ textDecoration: 'none' }}>
                    <Typography variant="body2" color="primary" sx={{ fontWeight: 600, '&:hover': { textDecoration: 'underline' } }}>
                      Esqueceu a senha?
                    </Typography>
                  </Link>
                </Box>

                <Button
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  disabled={loading}
                  sx={{
                    py: 1.5,
                    borderRadius: 3,
                    fontWeight: 700,
                    fontSize: '1rem',
                    boxShadow: '0 8px 16px -4px rgba(46, 125, 50, 0.3)',
                    '&:hover': {
                      boxShadow: '0 12px 20px -4px rgba(46, 125, 50, 0.4)',
                    }
                  }}
                >
                  {loading ? 'Entrando...' : 'Entrar'}
                </Button>
              </Box>
            </form>

            <Divider sx={{ my: 4 }}>
              <Typography variant="body2" color="text.secondary">ou</Typography>
            </Divider>

            <Typography variant="body2" color="text.secondary">
              Ainda não tem uma conta?{' '}
              <Link href="/cadastro" style={{ textDecoration: 'none' }}>
                <Typography component="span" variant="body2" color="primary" sx={{ fontWeight: 700, '&:hover': { textDecoration: 'underline' } }}>
                  Cadastre-se agora
                </Typography>
              </Link>
            </Typography>

            <Box sx={{ mt: 4 }}>
              <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                <ArrowLeft size={16} color={theme.palette.text.secondary} />
                <Typography variant="body2" color="text.secondary">
                  Voltar para o início
                </Typography>
              </Link>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}
