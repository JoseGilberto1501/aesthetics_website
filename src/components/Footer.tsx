import { useTranslation } from 'next-i18next';
import { Box, Container, Typography, Grid, Link, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <Box component="footer" sx={{ py: 6, backgroundColor: 'grey.900', color: 'white' }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              {t('title')}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {t('footer.description')}
            </Typography>
            <Box>
              <IconButton aria-label="Facebook" sx={{ color: 'white' }}>
                <Facebook />
              </IconButton>
              <IconButton aria-label="Instagram" sx={{ color: 'white' }}>
                <Instagram />
              </IconButton>
              <IconButton aria-label="Twitter" sx={{ color: 'white' }}>
                <Twitter />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              {t('footer.links.title')}
            </Typography>
            <Link href="#services" color="inherit" display="block" sx={{ mb: 1 }}>
              {t('navbar.services')}
            </Link>
            <Link href="#pricing" color="inherit" display="block" sx={{ mb: 1 }}>
              {t('navbar.pricing')}
            </Link>
            <Link href="#about" color="inherit" display="block" sx={{ mb: 1 }}>
              {t('navbar.about')}
            </Link>
            <Link href="#contact" color="inherit" display="block" sx={{ mb: 1 }}>
              {t('navbar.contact')}
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              {t('footer.contact.title')}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              {t('footer.contact.address')}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              {t('footer.contact.phone')}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              {t('footer.contact.email')}
            </Typography>
            <Typography variant="body2">
              {t('footer.contact.hours')}
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ borderTop: 1, borderColor: 'grey.800', pt: 3, mt: 3, textAlign: 'center' }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} {t('title')}. {t('footer.copyright')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;