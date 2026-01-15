import React from 'react';
import { Container, Typography, Box, Grid, Paper, Avatar } from '@mui/material';
import { Heart, Target, Users } from 'lucide-react';

export default function QuemSomos() {
  return (
    <Box sx={{ py: 8 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 10 }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" sx={{ fontWeight: 800, mb: 3, color: 'text.primary' }}>
            Quem Somos
          </Typography>
          <Typography variant="h5" sx={{ color: 'text.secondary', fontWeight: 400, lineHeight: 1.6 }}>
            A Oral Life é uma clínica multidisciplinar dedicada a oferecer um atendimento humanizado e de alta qualidade. Nossa missão é integrar diversas áreas da saúde para proporcionar o melhor desenvolvimento e bem-estar para nossos pacientes.
          </Typography>
        </Container>
      </Box>

      {/* Mission, Vision, Values */}
      <Container maxWidth="lg" sx={{ mb: 12 }}>
        <Grid container spacing={4}>
          {[
            { 
              icon: <Heart size={40} />, 
              title: 'Missão', 
              desc: 'Proporcionar saúde e qualidade de vida através de um atendimento multidisciplinar integrado e humano.' 
            },
            { 
              icon: <Target size={40} />, 
              title: 'Visão', 
              desc: 'Ser referência regional em atendimentos especializados, reconhecida pela excelência técnica e acolhimento.' 
            },
            { 
              icon: <Users size={40} />, 
              title: 'Valores', 
              desc: 'Ética, empatia, inovação, compromisso com o paciente e trabalho em equipe.' 
            },
          ].map((item, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 6, 
                  textAlign: 'center', 
                  height: '100%', 
                  border: '1px solid', 
                  borderColor: 'divider',
                  borderRadius: 8,
                  bgcolor: 'background.paper'
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 3, display: 'flex', justifyContent: 'center' }}>
                  {item.icon}
                </Box>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {item.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Multidisciplinary Approach Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 12, borderRadius: { xs: 0, md: 10 }, mx: { xs: 0, md: 4 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 4 }}>
                Abordagem Integrada
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.9, mb: 4 }}>
                Acreditamos que a saúde não é isolada. Por isso, nossa equipe conta com profissionais de Psicologia, Fonoaudiologia, Neuropedagogia e outras especialidades que trabalham em conjunto para entender cada caso de forma única.
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.8 }}>
                Nossos especialistas realizam reuniões periódicas para discutir o progresso dos pacientes, garantindo que todas as terapias estejam alinhadas com os mesmos objetivos terapêuticos.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box 
                sx={{ 
                  width: '100%', 
                  height: 400, 
                  bgcolor: 'white', 
                  borderRadius: 8,
                  opacity: 0.2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Typography variant="h4" color="white">Foto da Clínica</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
