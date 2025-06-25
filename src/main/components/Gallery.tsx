import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import structures from "../../data";
import {Link} from 'react-router-dom';

function Gallery() {
    const images = [structures[0], structures[1], structures[2], structures[3]];

    return (
        <Container maxWidth="lg" sx={{py: 4}}>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(4, 1fr)',
                    },
                    gap: 3,
                    width: '100%',
                }}
            >
                {images.map((item, index) => (
                    <Link key={index} to={`/languages/${index}`} style={{textDecoration: 'none'}}>
                        <Box
                            key={`img-${index}`}
                            sx={{
                                position: 'relative',
                                overflow: 'hidden',
                                borderRadius: 2,
                                boxShadow: 1,
                                aspectRatio: '1', // Сохраняем квадратную форму
                            }}
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                loading="lazy"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.3s ease',
                                }}
                            />
                        </Box>
                    </Link>
                ))}
            </Box>
        </Container>
    );
}

export default Gallery;