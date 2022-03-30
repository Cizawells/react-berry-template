import React from 'react';
import { useSelector } from 'react-redux';

// next
import dynamic from 'next/dynamic';

// mui
import { ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';

// project imports
import themes from '../../src/themes';
import MainCard from '../../src/ui-component/cards/MainCard';

const MainLayout = dynamic(() => import('../../src/layout/MainLayout'), {
    ssr: false
});

export default function PageDashboard() {
    const customization = useSelector((state) => state.customization);

    return (
        <ThemeProvider theme={themes(customization)}>
            <MainLayout>
                <MainCard title="Dashboard">
                    <Typography variant="body2">This is sample dashboard</Typography>
                </MainCard>
            </MainLayout>
        </ThemeProvider>
    );
}
