import React from 'react';
import { Container, Typography, Box, Grid, Paper, Button } from '@mui/material';
import { Brain, MessageSquare, BookOpen, HeartPulse, Activity, UserRound } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: <Brain size={48} />,
    title: 'Psicologia',
    description: 'Atendimento clínico para crianças, adolescentes e adultos, focando no equilíbrio emocional e saúde mental.',
    specialties: ['Terapia Cognitivo-Comportamental', 'Avaliação Psicológica', 'Ludoterapia']
  },
  {
    icon: <MessageSquare size={48} />,
    title: 'Fonoaudiologia',
    description: 'Especialistas em comunicação, linguagem, fala e audição para todas as idades.',
    specialties: ['Distúrbios de Fala', 'Linguagem Escrita', 'Motricidade Orofacial']
  },
  {
    icon: <BookOpen size={48} />,
    title: 'Neuropedagogia',
    description: 'Intervenção nos processos de aprendizagem, unindo conhecimentos da neurociência e pedagogia.',
    specialties: ['Dificuldades de Aprendizagem', 'TDAH', 'Transtorno do Espectro Autista (TEA)']
  },
  {
    icon: <Activity size={48} />,
    title: 'Terapia Ocupacional',
    description: 'Auxílio na autonomia e independência em atividades do cotidiano através de intervenções especializadas.',
    specialties: ['Integração Sensorial', 'Desenvolvimento Motor', 'AVDs']
  },
  {
    icon: <UserRound size={48} />,
    title: 'Psicopedagogia',
    description: 'Investigação e tratamento de problemas relacionados ao processo de aprendizagem.',
    specialties: ['Diagnóstico Psicopedagógico', 'Intervenção Escolar', 'Orientação Parental']
  },
  {
    icon: <HeartPulse size={48} />,
    title: 'Fisioterapia',
    description: 'Reabilitação física e motora com foco na recuperação funcional e prevenção de lesões.',
    specialties: ['Fisioterapia Neurológica', 'RPG', 'Ortopedia']
  }
];

export default function Servicos() {
  return (
    <Box sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" sx={{ fontWeight: 800, mb: 3, color: 'text.primary' }}>
            Nossos Serviços
          </Typography>
          <Typography variant="h5" sx={{ color: 'text.secondary', fontWeight: 400 }}>
            Oferecemos uma gama completa de serviços especializados com foco no desenvolvimento integral do ser humano.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 4, 
                  height: '100%', 
                  border: '1px solid', 
                  borderColor: 'divider',
                  borderRadius: 8,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                    transform: 'translateY(-10px)',
                    boxShadow: '0 20px 40px -20px rgba(46, 125, 50, 0.3)'
                  }
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 3 }}>
                  {service.icon}
                </Box>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
                  {service.title}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                  {service.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {service.specialties.map((spec, i) => (
                    <Box 
                      key={i} 
                      sx={{ 
                        bgcolor: 'rgba(46, 125, 50, 0.1)', 
                        color: 'primary.main', 
                        px: 1.5, 
                        py: 0.5, 
                        borderRadius: 2,
                        fontSize: '0.85rem',
                        fontWeight: 500
                      }}
                    >
                      {spec}
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <Box 
          sx={{ 
            mt: 10, 
            p: 6, 
            bgcolor: 'background.paper', 
            borderRadius: 10, 
            textAlign: 'center',
            border: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>
            Precisa de um atendimento personalizado?
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4, fontWeight: 400 }}>
            Entre em contato conosco e agende uma avaliação com nossa equipe multidisciplinar.
          </Typography>
          <Button variant="contained" color="primary" size="large" sx={{ px: 6, py: 1.5 }}>
            Falar com um Especialista
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
