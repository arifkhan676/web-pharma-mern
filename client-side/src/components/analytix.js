import React from 'react'
import Sidenav from '../Navbar/Sidenav';
import Box from '@mui/material/Box';
import Appbar from '../Navbar/Appbar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './Bghome.css';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GeoChart from '../chart/GeoChart';
import Pie from '../chart/PieChart';
import Barchart from '../chart/Barchat';
import CountUp from 'react-countup';

const Analytics = () => {
    return (
        <div>
            <div className='bgHome' >
                <Appbar />
                <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <Sidenav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={5}>
                                <Stack direction="row" spacing={2}>
                                    <Card sx={{ width: 100 + '%', height: 15 + 'vh', color: '#DDE6ED', backgroundColor: '#1d4f75' }} >
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                <Stack spacing={2}>
                                                    <span className='visit' >   Visitors</span>
                                                    <h5> $ <CountUp start={1} end={3200} delay={0.2} /> </h5>
                                                </Stack>
                                            </Typography>
                                            <Typography variant="body2" color="text.white">
                                                Total Earnings
                                            </Typography>
                                        </CardContent>
                                    </Card>
                            </Grid>
                    </Box>
                </Box>
            </div>
        </div>

    )
}

export default Analytics
