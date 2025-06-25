import { Box, Typography } from '@mui/material';

interface CircleCardProps {
    img: string;
    title: string;
    subtitle: string[];
}

function CircleCard({ img, title, subtitle }: CircleCardProps) {
    return (
        <Box sx={{ textAlign: 'center', maxWidth: 150 }}>
            <Box
                component="img"
                src={img}
                sx={{
                    width: { xs: 60, sm: 80 },
                    height: { xs: 60, sm: 80 },
                    borderRadius: '50%',
                    objectFit: 'cover',
                    mb: 2,
                }}
            />
            <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 0.5 }}>
                {title}
            </Typography>
            {subtitle.map((line, index) => (
                <Typography
                    key={`${title}-${index}`}
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.3 }}
                >
                    {line}
                </Typography>
            ))}
        </Box>
    );
}

export default CircleCard;