import { BarChart } from '@mui/x-charts/BarChart';
import Container from '@mui/material/Container';
import { tLanguageGroup } from '../groupdata';
import React from 'react';
import SettingChart from './SettingChart';
import { LineChart } from '@mui/x-charts/LineChart';

type GroupChartProps = {
    data: tLanguageGroup;
};

function GroupChart({ data }: GroupChartProps) {
    const [series, setSeries] = React.useState({
        'Максимальное количество пользователей': true,
        'Среднее количество пользователей': false,
        'Минимальное количество пользователей': false,
    });

    const [isBar, setIsBar] = React.useState(true);

    let seriesY = Object.entries(series)
        .filter(item => item[1] == true)
        .map(item => {
            return { "dataKey": item[0], "label": item[0] }
        });

    const chartSetting = {
        yAxis: [
            {
                label: 'Кол-во пользователей',
            }
        ],
        height: 500,
        width: 1200
    };

    const barLabel = seriesY.length === 1 ? "value" : undefined;

    return (
        <Container sx={{maxWidth: '1500px'}}>
            {isBar ? (
                <BarChart
                    dataset={data}
                    xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
                    series={seriesY}
                    slotProps={{
                        legend: {
                            position: { vertical: 'bottom', horizontal: 'center' },
                        },
                    }}
                    barLabel={barLabel}
                    {...chartSetting}
                />
            ) : (
                <LineChart
                    dataset={data}
                    xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
                    series={seriesY}
                    slotProps={{
                        legend: {
                            position: { vertical: 'bottom', horizontal: 'center' },
                        },
                    }}
                    {...chartSetting}
                />
            )}
            <SettingChart series={series} setSeries={setSeries} isBar={isBar} setIsBar={setIsBar} />
        </Container>
    );
}

export default GroupChart;