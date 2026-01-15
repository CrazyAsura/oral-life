'use client';

import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Divider, useTheme } from '@mui/material';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: isLight ? '#f8f9fa' : '#0a0a0a',
        color: 'text.primary',
        pt: 8,
        pb: 4,
        borderTop: '1px solid',
        borderColor: 'divider',
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand and Description */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                color: 'primary.main',
                mb: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              <Box component="span" sx={{ color: isLight ? 'black' : 'white' }}>ORAL</Box>
              LIFE
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, maxWidth: 300 }}>
              Cuidando do seu sorriso com excelência e tecnologia de ponta. Sua saúde bucal é nossa prioridade.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton size="small" sx={{ color: 'primary.main', '&:hover': { bgcolor: 'primary.main', color: 'white' } }}>
                <Facebook size={20} />
              </IconButton>
              <IconButton size="small" sx={{ color: 'primary.main', '&:hover': { bgcolor: 'primary.main', color: 'white' } }}>
                <Instagram size={20} />
              </IconButton>
              <IconButton size="small" sx={{ color: 'primary.main', '&:hover': { bgcolor: 'primary.main', color: 'white' } }}>
                <Twitter size={20} />
              </IconButton>
              <IconButton size="small" sx={{ color: 'primary.main', '&:hover': { bgcolor: 'primary.main', color: 'white' } }}>
                <Linkedin size={20} />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {[
                { label: 'Início', href: '/' },
                { label: 'Quem Somos', href: '/quem-somos' },
                { label: 'Serviços', href: '/servicos' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Política de Privacidade', href: '/politica-privacidade' },
                { label: 'Termos de Uso', href: '/termos-uso' }
              ].map((item) => (
                <Link key={item.label} href={item.href} style={{ textDecoration: 'none' }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      '&:hover': { color: 'primary.main' },
                      transition: 'color 0.2s'
                    }}
                  >
                    {item.label}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Services */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Serviços
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['Implantes', 'Ortodontia', 'Clareamento', 'Estética Dental'].map((item) => (
                <Typography
                  key={item}
                  variant="body2"
                  sx={{ color: 'text.secondary' }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Contato
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                <MapPin size={20} className="text-primary" style={{ color: theme.palette.primary.main }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <Phone size={20} style={{ color: theme.palette.primary.main }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  (11) 99999-9999
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <Mail size={20} style={{ color: theme.palette.primary.main }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  contato@oral-life.com.br
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            © {new Date().getFullYear()} Oral Life. Todos os direitos reservados.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link href="/politica-privacidade" style={{ textDecoration: 'none' }}>
              <Typography variant="caption" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                Política de Privacidade
              </Typography>
            </Link>
            <Link href="/termos-uso" style={{ textDecoration: 'none' }}>
              <Typography variant="caption" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                Termos de Uso
              </Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
