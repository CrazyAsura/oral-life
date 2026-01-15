'use client';

import React from 'react';
import { Container, Typography, Box, Breadcrumbs } from '@mui/material';
import Link from 'next/link';

export default function TermosUso() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Início</Link>
        <Typography color="text.primary">Termos de Uso</Typography>
      </Breadcrumbs>

      <Typography variant="h3" component="h1" sx={{ mb: 4, fontWeight: 800 }}>
        Termos de Uso
      </Typography>

      <Box sx={{ color: 'text.secondary', '& p': { mb: 2 } }}>
        <Typography variant="h6" sx={{ color: 'text.primary', mt: 4, mb: 2 }}>1. Aceitação dos Termos</Typography>
        <Typography variant="body1">
          Ao acessar e utilizar este site, você concorda em cumprir estes Termos de Uso e todas as leis e regulamentos aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site.
        </Typography>

        <Typography variant="h6" sx={{ color: 'text.primary', mt: 4, mb: 2 }}>2. Uso de Licença</Typography>
        <Typography variant="body1">
          É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site da Oral Life apenas para visualização transitória pessoal e não comercial.
        </Typography>

        <Typography variant="h6" sx={{ color: 'text.primary', mt: 4, mb: 2 }}>3. Isenção de Responsabilidade</Typography>
        <Typography variant="body1">
          Os materiais no site da Oral Life são fornecidos 'como estão'. A clínica não oferece garantias, expressas ou implícitas, e por este meio isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização.
        </Typography>

        <Typography variant="h6" sx={{ color: 'text.primary', mt: 4, mb: 2 }}>4. Limitações</Typography>
        <Typography variant="body1">
          Em nenhum caso a Oral Life ou seus fornecedores serão responsáveis por quaisquer danos decorrentes do uso ou da incapacidade de usar os materiais em seu site.
        </Typography>

        <Typography variant="h6" sx={{ color: 'text.primary', mt: 4, mb: 2 }}>5. Revisões e Errata</Typography>
        <Typography variant="body1">
          Os materiais exibidos no site da Oral Life podem incluir erros técnicos, tipográficos ou fotográficos. A clínica não garante que qualquer material em seu site seja preciso, completo ou atual.
        </Typography>
      </Box>
    </Container>
  );
}
