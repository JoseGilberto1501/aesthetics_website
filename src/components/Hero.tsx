import { useTranslation } from 'next-i18next';
import { Box, Typography, Button, Container } from '@mui/material';

const Hero = () => {
  const { t } = useTranslation('common');

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #E6E6FA 0%, #FADADD 100%)',
        py: 10,
        textAlign: 'center',
        borderRadius: '0 0 30px 30px',
        mb: 8
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'text.primary' }}>
          {t('hero.title')}
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, maxWidth: 700, mx: 'auto', color: 'text.secondary' }}>
          {t('hero.subtitle')}
        </Typography>
        <Button 
          variant="contained" 
          href="#services" 
          size="large"
          sx={{
            backgroundColor: 'primary.main',
            borderRadius: 8,
            px: 4,
            py: 1.5,
            fontSize: '1.1rem',
            '&:hover': {
              backgroundColor: 'primary.dark',
              transform: 'translateY(-3px)',
              boxShadow: 3
            }
          }}
        >
          {t('hero.cta')}
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;