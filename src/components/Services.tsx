import { useTranslation } from 'next-i18next';
import { Box, Container, Typography, Grid, Card, CardContent, CardHeader, Icon } from '@mui/material';

interface Service {
  title: string;
  description: string;
  icon: string;
}

const Services = () => {
  const { t } = useTranslation('common');

  const services: Service[] = [
    {
      title: t('services.facial.title'),
      description: t('services.facial.description'),
      icon: '✨'
    },
    {
      title: t('services.massage.title'),
      description: t('services.massage.description'),
      icon: '💆‍♀️'
    },
    {
      title: t('services.laser.title'),
      description: t('services.laser.description'),
      icon: '⚡'
    },
    {
      title: t('services.spa.title'),
      description: t('services.spa.description'),
      icon: '🧖‍♀️'
    },
    {
      title: t('services.waxing.title'),
      description: t('services.waxing.description'),
      icon: '✂️'
    },
    {
      title: t('services.makeup.title'),
      description: t('services.makeup.description'),
      icon: '💄'
    }
  ];

  return (
    <Box id="services" sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          {t('services.title')}
        </Typography>
        <Typography variant="subtitle1" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
          {t('services.subtitle')}
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: 6
                  }
                }}
              >
                <CardHeader
                  avatar={
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        backgroundColor: 'primary.light',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2rem'
                      }}
                    >
                      {service.icon}
                    </Box>
                  }
                  title={service.title}
                  titleTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;