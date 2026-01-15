import { Container, Typography, Box, Button, Grid, Paper } from '@mui/material';
import { Brain, MessageSquare, Shield, Users, Star, Activity } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 12, borderBottom: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 2, color: 'text.primary' }}>
                Cuidado Integral para a <Box component="span" sx={{ color: 'primary.main' }}>Sua Saúde</Box>
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, color: 'text.secondary', fontWeight: 400 }}>
                Clínica multidisciplinar com especialistas em Psicologia, Fonoaudiologia, Neuropedagogia e muito mais. Atendimento humanizado para todas as fases da vida.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button variant="contained" color="primary" size="large" sx={{ px: 4 }}>
                  Agendar Consulta
                </Button>
                <Link href="/servicos" style={{ textDecoration: 'none' }}>
                  <Button variant="outlined" color="primary" size="large" sx={{ px: 4 }}>
                    Nossos Serviços
                  </Button>
                </Link>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box 
                sx={{ 
                  width: '100%', 
                  height: 400, 
                  bgcolor: 'primary.main', 
                  borderRadius: 8, // Mais arredondado para o herói
                  opacity: 0.1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Typography variant="h4" color="primary">Espaço para Imagem</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Specialties Preview */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
            Especialidades Multidisciplinares
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400 }}>
            Uma equipe completa trabalhando de forma integrada pelo seu desenvolvimento.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {[
            { icon: <Brain size={40} />, title: 'Psicologia', desc: 'Apoio emocional e desenvolvimento comportamental para todas as idades.' },
            { icon: <MessageSquare size={40} />, title: 'Fonoaudiologia', desc: 'Especialistas em fala, linguagem e comunicação humana.' },
            { icon: <Star size={40} />, title: 'Neuropedagogia', desc: 'Intervenção nos processos de aprendizagem e neurociência.' },
            { icon: <Activity size={40} />, title: 'Terapia Ocupacional', desc: 'Promovendo autonomia e independência nas atividades diárias.' },
          ].map((feature, index) => (
            <Grid size={{ xs: 12, md: 3 }} key={index}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 4, 
                  textAlign: 'center', 
                  height: '100%', 
                  border: '1px solid', 
                  borderColor: 'divider',
                  borderRadius: 8, // Card mais arredondado
                  '&:hover': { 
                    borderColor: 'primary.main', 
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px -10px rgba(46, 125, 50, 0.2)'
                  },
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 2, display: 'flex', justifyContent: 'center' }}>
                  {feature.icon}
                </Box>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Link href="/servicos" style={{ textDecoration: 'none' }}>
            <Button variant="text" color="primary" size="large" sx={{ fontWeight: 600 }}>
              Ver todas as especialidades →
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
