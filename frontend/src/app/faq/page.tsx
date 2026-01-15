'use client';

import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Breadcrumbs,
  Button
} from '@mui/material';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function FAQ() {
  const faqs = [
    {
      question: "Quais especialidades a clínica atende?",
      answer: "A Oral Life é uma clínica multidisciplinar que oferece atendimento em Psicologia (infantil, adolescente e adulto), Fonoaudiologia, Neuropedagogia, Terapia Ocupacional e Avaliação Neuropsicológica."
    },
    {
      question: "Como posso agendar uma consulta?",
      answer: "Você pode agendar sua consulta através do nosso telefone (11) 99999-9999, pelo WhatsApp ou diretamente em nossa recepção. Em breve, teremos agendamento online disponível em nosso site."
    },
    {
      question: "A clínica aceita convênios médicos?",
      answer: "Atualmente trabalhamos com os principais convênios na modalidade de reembolso e também possuímos parcerias diretas com alguns planos. Entre em contato para verificar a cobertura do seu plano específico."
    },
    {
      question: "O que é Neuropedagogia?",
      answer: "A Neuropedagogia é uma área que une conhecimentos da neurociência com a pedagogia para entender como o cérebro aprende. É fundamental para identificar e intervir em dificuldades de aprendizagem, TDAH e outros transtornos do desenvolvimento."
    },
    {
      question: "Qual a idade mínima para atendimento psicológico?",
      answer: "Atendemos crianças a partir dos 3 anos de idade na modalidade de ludoterapia, além de adolescentes e adultos."
    },
    {
      question: "Como funciona a primeira consulta?",
      answer: "A primeira consulta é uma entrevista inicial (anamnese) onde o profissional busca entender a demanda do paciente ou da família, estabelecendo o plano terapêutico e a frequência das sessões."
    }
  ];

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Início</Link>
        <Typography color="text.primary">FAQ</Typography>
      </Breadcrumbs>

      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
          Perguntas Frequentes
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400 }}>
          Tire suas dúvidas sobre nossos atendimentos e processos.
        </Typography>
      </Box>

      <Box>
        {faqs.map((faq, index) => (
          <Accordion 
            key={index} 
            sx={{ 
              mb: 2, 
              boxShadow: 'none', 
              border: '1px solid', 
              borderColor: 'divider',
              borderRadius: '16px !important',
              '&:before': { display: 'none' },
              '&.Mui-expanded': {
                borderColor: 'primary.main',
              }
            }}
          >
            <AccordionSummary
              expandIcon={<ChevronDown size={20} />}
              sx={{ py: 1 }}
            >
              <Typography sx={{ fontWeight: 600 }}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ pb: 3 }}>
              <Typography color="text.secondary">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Box sx={{ mt: 8, p: 4, bgcolor: 'rgba(46, 125, 50, 0.05)', borderRadius: 8, textAlign: 'center' }}>
        <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
          Ainda tem dúvidas?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Nossa equipe está pronta para te ajudar.
        </Typography>
        <Button variant="contained" color="primary" sx={{ borderRadius: 4 }}>
          Entre em contato conosco
        </Button>
      </Box>
    </Container>
  );
}
