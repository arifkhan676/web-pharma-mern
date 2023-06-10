import React from 'react'
import Sidenav from '../Navbar/Sidenav'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Appbar from '../Navbar/Appbar';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import './Bghome.css';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Accordin from './Accordin';
import ChartBar from '../chart/Chart';
import CountUp from 'react-countup';


const Home = () => {
  return (
    <div>
      <div className='bgHome' >
        <Appbar />
        <Box height={70} />
        <Box sx={{ display: 'flex' }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={8}>
                <Stack direction="row" spacing={2}>
                  <Card  sx={{ width: 100 + '%' ,color:'#D2E9E9', backgroundColor:'#1d4f75' }} >
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <Stack spacing={2}>
                          <CreditCardIcon />
                          <h3> $ <CountUp start={1} end={500} delay={0.2} /> </h3>
                        </Stack>
                      </Typography>
                      <Typography variant="body2" color="text.white">
                        Total Earnings
                      </Typography>
                    </CardContent>
                  </Card>

                  <Card sx={{ width: 100 + '%' , backgroundColor:'#6bb8f2' }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <Stack spacing={2}>
                          <LocalMallIcon />
                          <h3> $ <CountUp start={1} end={300} delay={0.2} /> </h3>
                        </Stack>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Total Orders
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>


              <Grid item xs={4}>
                <Stack spacing={1}>
                  <Card sx={{ maxWidth: 345, height: 70 ,backgroundColor:'#1d4f75' }}>
                    <CardContent>
                      <div className='leftShop1' >
                        <div className="iconStore">
                        <StorefrontIcon />
                        </div>
                        <div className='deatilsShop' >
                          <h4> $250k <br /> <span className='xy' > Total orders </span> </h4>
                        </div>
                      </div>
                           
                    </CardContent>
                  </Card>

                  <Card sx={{ maxWidth: 345, height: 70 , backgroundColor:'#6bb8f2'}}>
                    <CardContent>
                    <div className='leftShop1' >
                        <div className="iconStore">
                        <StorefrontIcon />
                        </div>
                        <div className='deatilsShop' >
                          <h4> $350k <br /> <span className='xy' > Total income </span> </h4>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
            </Grid>


            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={8} marginTop={2}>
                <Stack direction="row" spacing={2}>
                  <Card sx={{ width: 100 + '%', height: 60 + 'vh' }}>
                    <CardContent>
                     <ChartBar /> 
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>


              <Grid item xs={4} marginTop={2}>
                <Stack spacing={1}>
                  <Card sx={{ maxWidth: 345, height: 60 + 'vh' }}>
                    <CardContent>
                       <Accordin/>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
            </Grid>

          </Box>
        </Box>

      </div>

    </div>
  )
}

export default Home
