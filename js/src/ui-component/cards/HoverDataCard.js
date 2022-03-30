// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project imports
import MainCard from './MainCard';

const HoverDataCard = ({ title, iconPrimary, primary, secondary, color }) => {
    const IconPrimary = iconPrimary;
    const primaryIcon = iconPrimary !== undefined ? <IconPrimary fontSize="large" sx={{ width: 20, height: 20, color }} /> : null;

    return (
        <MainCard>
            <Grid container justifyContent="space-between" direction="column" alignItems="center">
                <Grid item sm={12}>
                    <Typography variant="h5" color="inherit">
                        {title}
                    </Typography>
                </Grid>
                <Grid item sm={12}>
                    <Stack direction="row" alignItems="center" spacing={0.5} sx={{ my: 1.75, mx: 'auto' }}>
                        {primaryIcon}
                        <Typography variant="h3">{primary}</Typography>
                    </Stack>
                </Grid>
                <Grid item sm={12}>
                    <Typography variant="body2" color="textSecondary">
                        {secondary}
                    </Typography>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default HoverDataCard;