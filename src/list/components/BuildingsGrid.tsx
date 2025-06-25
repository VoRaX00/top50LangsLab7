import languages from "../table";
import {DataGrid, GridRowsProp, GridColDef} from "@mui/x-data-grid";
import {ruRU} from '@mui/x-data-grid/locales';
import Container from '@mui/material/Container';

function BuildingsGrid() {
    const rows: GridRowsProp = languages
    const columns: GridColDef[] = [
        {field: 'Место', headerName: 'Место', flex: 0.5},
        {field: 'Название языка', flex: 0.7},
        {field: 'Год создания', flex: 0.7},
        {field: 'Создатели', flex: 1},
        {field: 'Тип исполнения', flex: 1},
        {field: 'Кол-во пользователей', flex: 1},
        {field: 'Скорость работы, с', flex: 1},
    ];

    return (
        <Container maxWidth="lg" sx={{height: '700px', mt: '20px'}}>
            <DataGrid
                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                rows={rows}
                columns={columns}
                showToolbar={true}
            />
        </Container>
    );
}

export default BuildingsGrid;