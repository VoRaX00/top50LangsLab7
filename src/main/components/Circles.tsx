import structures from "../../data";
import CircleCard from "./CircleCard";
import Box from "@mui/material/Box";

// Выбираем нужные элементы
const circles = [structures[0], structures[1], structures[2], structures[3]].filter(Boolean);

function Circles() {
    return (
        <Box
            display="grid"
            gap={4}
            justifyContent="center"
            justifyItems="center" // центрируем содержимое ячеек
            gridTemplateColumns={{
                xs: 'repeat(2, 1fr)',
                sm: 'repeat(3, 1fr)',
                md: 'repeat(4, 1fr)',
            }}
            sx={{ mt: 4 }} // немного отступ сверху
        >
            {circles.map((lang, idx) => (
                <Box key={idx}>
                    <CircleCard {...lang} />
                </Box>
            ))}
        </Box>
    );
}

export default Circles;
