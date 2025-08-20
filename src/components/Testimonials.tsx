import { useTranslation } from 'next-i18next';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Rating } from '@mui/material';

interface Testimonial {
  name: string;
  comment: string;
  rating: number;
  avatar: string;
}

const Testimonials = () => {
  const { t } = useTranslation('common');

  const testimonials: Testimonial[] = [
    {
      name: t('testimonials.1.name'),
      comment: t('testimonials.1.comment'),
      rating: 5,
      avatar: '👩'
    },
    {
      name: t('testimonials.2.name'),
      comment: t('testimonials.2.comment'),
      rating: 5,
      avatar: '👸'
    },
    {
      name: t('navbar.services'),
      comment: t('testimonials.3.comment'),
      rating: 4,
      avatar: '💃'
    }
  ];

  return (
    <Box id="testimonials" sx={{ py: 10 }}>
      <Container>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          {t('testimonials.title')}
        </Typography>
        <Typography variant="subtitle1" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
          {t('testimonials.subtitle')}
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Avatar sx={{ width: 60, height: 60, mx: 'auto', mb: 2, fontSize: '2rem' }}>
                    {testimonial.avatar}
                  </Avatar>
                  <Typography variant="h6" gutterBottom>
                    {testimonial.name}
                  </Typography>
                  <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                  <Typography variant="body2" color="text.secondary" fontStyle="italic">
                    "{testimonial.comment}"
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

export default Testimonials;