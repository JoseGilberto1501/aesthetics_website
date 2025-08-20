import { Button, Stack } from '@mui/material';
import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
  const router = useRouter();

  const changeLanguage = (lng: string) => {
    router.push(router.pathname, router.asPath, { locale: lng });
  };

  return (
    <Stack direction="row" spacing={1}>
      <Button
        size="small"
        variant={router.locale === 'es' ? 'contained' : 'outlined'}
        onClick={() => changeLanguage('es')}
      >
        ES
      </Button>
      <Button
        size="small"
        variant={router.locale === 'en' ? 'contained' : 'outlined'}
        onClick={() => changeLanguage('en')}
      >
        EN
      </Button>
    </Stack>
  );
}
