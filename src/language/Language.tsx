import { useParams, Link } from 'react-router-dom';
import structures from '../data';
import Navbar from '../components/Navbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

function Building() {
    const { id } = useParams();
    const building = structures[Number(id)];

    if (!building) {
        return (
            <Container>
                <Navbar active="1" />
                <Typography variant="h4" sx={{ mt: 4 }}>Здание не найдено</Typography>
            </Container>
        );
    }

    return (
        <>
            <Navbar active="1" />
            <Container maxWidth="md" sx={{ mt: 3 }}>
                <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
                    <Link to="/" style={{ textDecoration: 'none', color: '#1976d2' }}>Главная</Link>
                    <Typography color="text.primary">{building.title}</Typography>
                </Breadcrumbs>

                <Box
                    sx={{
                        p: { xs: 2, md: 4 },
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 3,
                        border: 'none', // Убираем рамку на всякий случай
                    }}
                >
                    {/* Заголовок */}
                    <Typography variant="h4" gutterBottom>{building.title}</Typography>

                    {/* Изображение */}
                    <Box sx={{ width: '100%' }}>
                        <img
                            src={building.img}
                            alt={building.title}
                            style={{ width: '100%', objectFit: 'cover' }}
                        />
                    </Box>

                    {/* Описание */}
                    <Box>
                        {building.description.map((desc, i) => (
                            <Typography key={i} variant="body1" paragraph>{desc}</Typography>
                        ))}
                    </Box>
                </Box>
            </Container>
        </>
    );
}

export default Building;
