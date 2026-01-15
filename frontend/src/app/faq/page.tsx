'use client';

import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails 
} from '@mui/material';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Quais são as especialidades atendidas na clínica?',
    answer: 'Nossa clínica é multidisciplinar e conta com especialistas em Psicologia, Fonoaudiologia, Neuropedagogia, Psicopedagogia, Terapia Ocupacional e Fisioterapia.'
  },
  {
    question: 'Como faço para agendar uma primeira avaliação?',
    answer: 'Você pode agendar sua avaliação através do nosso WhatsApp (disponível no site), por telefone ou presencialmente na nossa unidade. Nossa equipe de recepção irá orientar sobre qual profissional é o mais indicado para o seu caso inicial.'
  },
  {
    question: 'A clínica atende convênios médicos?',
    answer: 'Atendemos diversos convênios e também realizamos atendimentos particulares. Recomendamos entrar em contato com nossa equipe para verificar se o seu plano específico possui cobertura para a especialidade desejada.'
  },
  {
    question: 'A partir de qual idade as crianças podem ser atendidas?',
    answer: 'Atendemos desde a intervenção precoce (bebês) até adolescentes e adultos. Cada especialidade possui protocolos específicos para cada faixa etária.'
  },
  {
    question: 'O que é um atendimento multidisciplinar?',
    answer: 'É uma abordagem onde profissionais de diferentes áreas (como psicólogos e fonoaudiólogos) trabalham em conjunto, trocando informações e alinhando estratégias para que o tratamento do paciente seja mais eficaz e completo.'
  },
  {
    question: 'Quanto tempo dura cada sessão de terapia?',
    answer: 'Geralmente, as sessões duram entre 40 a 50 minutos, dependendo da especialidade e da necessidade específica do paciente definida na avaliação inicial.'
  },
  {
    question: 'A clínica realiza avaliações neuropsicológicas?',
    answer: 'Sim, realizamos avaliações completas para diagnóstico de TDAH, TEA, dificuldades de aprendizagem e outros transtornos do desenvolvimento.'
  }
];

export default function FAQ() {
  return (
    <Box sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" sx={{ fontWeight: 800, mb: 3, color: 'text.primary' }}>
            Perguntas Frequentes
          </Typography>
          <Typography variant="h5" sx={{ color: 'text.secondary', fontWeight: 400 }}>
            Tire suas dúvidas sobre nossos atendimentos, agendamentos e funcionamento da clínica.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {faqs.map((faq, index) => (
            <Accordion 
              key={index} 
              elevation={0}
              sx={{ 
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '16px !important',
                overflow: 'hidden',
                '&:before': { display: 'none' },
                transition: 'all 0.2s ease',
                '&:hover': { borderColor: 'primary.main' }
              }}
            >
              <AccordionSummary
                expandIcon={<ChevronDown color="#2e7d32" />}
                sx={{ 
                  px: 4, 
                  py: 1,
                  '& .MuiAccordionSummary-content': { my: 2 }
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1.1rem' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 4, pb: 3, pt: 0 }}>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Support Section */}
        <Box sx={{ mt: 10, textAlign: 'center', p: 6, bgcolor: 'primary.main', color: 'white', borderRadius: 10 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            Ainda tem dúvidas?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
            Nossa equipe está pronta para te ajudar. Entre em contato diretamente conosco.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Box 
              component="a" 
              href="#" 
              sx={{ 
                bgcolor: 'white', 
                color: 'primary.main', 
                px: 4, 
                py: 1.5, 
                borderRadius: 4, 
                textDecoration: 'none', 
                fontWeight: 600,
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.05)' }
              }}
            >
              WhatsApp
            </Box>
            <Box 
              component="a" 
              href="#" 
              sx={{ 
                border: '1px solid white', 
                color: 'white', 
                px: 4, 
                py: 1.5, 
                borderRadius: 4, 
                textDecoration: 'none', 
                fontWeight: 600,
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.05)', bgcolor: 'rgba(255,255,255,0.1)' }
              }}
            >
              E-mail
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
