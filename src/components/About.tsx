import { useTranslation } from 'next-i18next';
import { Box, Container, Typography, Grid, Button } from '@mui/material';

const About = () => {
  const { t } = useTranslation('common');

  return (
    <Box id="about" sx={{ py: 10, backgroundColor: 'secondary.light', borderRadius: 4 }}>
      <Container>
        <Grid container spacing={6} alignItems="center">
          {/* Primer grid item - forma compatible */}
          <Grid item xs={12} md={6} component="div">
            <Typography variant="h3" component="h2" gutterBottom>
              {t('about.title')}
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 3 }}>
              {t('about.description1')}
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 3 }}>
              {t('about.description2')}
            </Typography>
            <Button variant="outlined" color="primary" size="large">
              {t('about.cta')}
            </Button>
          </Grid>
          
          {/* Segundo grid item - forma compatible */}
          <Grid item xs={12} md={6} component="div">
            <Box
              sx={{
                height: 400,
                backgroundColor: 'primary.light',
                borderRadius: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}
            >
              {t('about.imagePlaceholder')}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;