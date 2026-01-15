import { Container, Typography, Box, Button, Grid, Paper } from '@mui/material';
import { Shield, Clock, Users, Star } from 'lucide-react';

export default function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 12, borderBottom: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 2, color: 'text.primary' }}>
                Seu Sorriso, <Box component="span" sx={{ color: 'primary.main' }}>Nossa Missão</Box>
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, color: 'text.secondary', fontWeight: 400 }}>
                Excelência em tratamentos odontológicos com tecnologia de ponta e uma equipe dedicada ao seu bem-estar.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button variant="contained" color="primary" size="large" sx={{ px: 4 }}>
                  Agendar Consulta
                </Button>
                <Button variant="outlined" color="primary" size="large" sx={{ px: 4 }}>
                  Nossos Serviços
                </Button>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box 
                sx={{ 
                  width: '100%', 
                  height: 400, 
                  bgcolor: 'primary.main', 
                  borderRadius: 4,
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

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={4}>
          {[
            { icon: <Shield size={40} />, title: 'Segurança', desc: 'Protocolos rigorosos de esterilização e higiene.' },
            { icon: <Clock size={40} />, title: 'Agilidade', desc: 'Sistemas modernos para otimizar seu tempo.' },
            { icon: <Users size={40} />, title: 'Equipe', desc: 'Profissionais altamente qualificados e experientes.' },
            { icon: <Star size={40} />, title: 'Qualidade', desc: 'Materiais de primeira linha em todos os procedimentos.' },
          ].map((feature, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 4, 
                  textAlign: 'center', 
                  height: '100%', 
                  border: '1px solid', 
                  borderColor: 'divider',
                  '&:hover': { borderColor: 'primary.main', transform: 'translateY(-5px)' },
                  transition: 'all 0.3s'
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
      </Container>
    </Box>
  );
}
