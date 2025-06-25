import { Box, Typography } from '@mui/material';
import structures from '../../data'



const languages = [structures[0], structures[5], structures[6]];

function LanguageDescription() {
    return (
        <Box sx={{
            mt: 5,
            px: 2,
            mx: 'auto',
            maxWidth: '1200px',
        }}>
            {languages.map((lang, idx) => (
                <Box
                    key={idx}
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        mb: 4,
                    }}
                >
                    <Box
                        sx={{
                            flex: lang.img ? '1 1 0' : '1 1 100%',
                            maxWidth: lang.img ? { md: '80%' } : '100%',
                            textAlign: 'center',
                            px: 2,
                        }}
                    >
                        <Typography variant="h4" gutterBottom>
                            {lang.title}
                        </Typography>
                        <Typography
                            sx ={{
                                mb: 3,
                                textAlign: 'left'
                            }}
                        >{lang.description}</Typography>
                    </Box>

                    {lang.img && (
                        <Box
                            component="img"
                            src={lang.img}
                            alt={lang.title}
                            sx={{
                                maxWidth: { xs: '100%', md: '150px' },
                                height: 'auto',
                                mt: { xs: 2, md: 0 },
                                ml: { md: 2 },
                                borderRadius: 1,
                            }}
                        />
                    )}
                </Box>
            ))}
        </Box>
    );
}

export default LanguageDescription;