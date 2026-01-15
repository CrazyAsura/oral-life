'use client';

import React from 'react';
import { Container, Typography, Box, Breadcrumbs } from '@mui/material';
import Link from 'next/link';

export default function PoliticaPrivacidade() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Início</Link>
        <Typography color="text.primary">Política de Privacidade</Typography>
      </Breadcrumbs>

      <Typography variant="h3" component="h1" sx={{ mb: 4, fontWeight: 800 }}>
        Política de Privacidade
      </Typography>

      <Box sx={{ color: 'text.secondary', '& p': { mb: 2 } }}>
        <Typography variant="h6" sx={{ color: 'text.primary', mt: 4, mb: 2 }}>1. Coleta de Informações</Typography>
        <Typography variant="body1">
          Coletamos informações que você nos fornece diretamente ao agendar uma consulta, preencher formulários de contato ou se inscrever em nossa newsletter. Isso pode incluir seu nome, e-mail, telefone e informações relacionadas à sua saúde para fins de atendimento.
        </Typography>

        <Typography variant="h6" sx={{ color: 'text.primary', mt: 4, mb: 2 }}>2. Uso das Informações</Typography>
        <Typography variant="body1">
          As informações coletadas são utilizadas exclusivamente para fornecer nossos serviços de saúde, processar agendamentos, enviar comunicações importantes e melhorar a experiência do paciente em nossa clínica.
        </Typography>

        <Typography variant="h6" sx={{ color: 'text.primary', mt: 4, mb: 2 }}>3. Proteção de Dados</Typography>
        <Typography variant="body1">
          Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Seguimos as diretrizes da LGPD (Lei Geral de Proteção de Dados).
        </Typography>

        <Typography variant="h6" sx={{ color: 'text.primary', mt: 4, mb: 2 }}>4. Compartilhamento com Terceiros</Typography>
        <Typography variant="body1">
          Não vendemos ou alugamos suas informações pessoais para terceiros. O compartilhamento ocorre apenas quando necessário para a prestação do serviço de saúde ou por exigência legal.
        </Typography>

        <Typography variant="h6" sx={{ color: 'text.primary', mt: 4, mb: 2 }}>5. Seus Direitos</Typography>
        <Typography variant="body1">
          Você tem o direito de acessar, corrigir ou excluir seus dados pessoais a qualquer momento. Para isso, entre em contato conosco através dos canais oficiais.
        </Typography>
      </Box>
    </Container>
  );
}
