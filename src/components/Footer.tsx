import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <Box component="footer" sx={{
      py: 3,
      px: 2,
      mt: 'auto',
      backgroundColor: (theme) => theme.palette.grey[200],
      textAlign: 'center'
    }}>
      <Typography variant="body2" color="text.secondary">
        © Кержаков Н.А., группа, 2024-{new Date().getFullYear()}
      </Typography>
    </Box>
  );
}

export default Footer;
