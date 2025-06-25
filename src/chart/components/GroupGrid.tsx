import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import Container from "@mui/material/Container";
import { ruRU } from "@mui/x-data-grid/locales";
import { tLanguageGroup } from "../groupdata";

type GroupProps = {
    data: tLanguageGroup;
};

function GroupGrid({ data }: GroupProps) {
    const columns: GridColDef[] = [
        { field: "Группа", headerName: "Группа", flex: 1 },
        { field: "Минимальное количество пользователей", headerName: "Минимальное количество пользователей", flex: 1 },
        { field: "Максимальное количество пользователей", headerName: "Максимальное количество пользователей", flex: 1 },
        { field: "Среднее количество пользователей", headerName: "Среднее количество пользователей", flex: 1 },
    ];

    const rows: GridRowsProp = data;

    return (
        <Container maxWidth="md" sx={{ height: '700px', mt: '20px' }}>
            <DataGrid
                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                showToolbar={true}
                rows={rows}
                columns={columns}
            />
        </Container>
    );
}

export default GroupGrid;