import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Logo from './Images/foguete.gif'
import './Meucla.css'
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import { deepOrange, green } from '@mui/material/colors';

import Slider from '@mui/material/Slider';

const marks = [
    {
      value: 0,
      label: '0 pontos',
    },
    
  
    {
      value: 10,
      label: '1º',
    },
    {
        value: 8,
        label: '2º',
      },
      {
        value: 7,
        label: '3º',
      },
  ];
  
  function valuetext(value) {
    return {value};
  }


function Home(props) {
   
  
  
  return (

    <div>
      <header className='Background'>
      
        <br />
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="sm" >
            <Box sx={{ width: '100%', }}>
              <Stack spacing={2}>
          
    <Card sx={{ backgroundColor: '#e0f2f1', }}>
 <Box sx={{ width: '30%', }}>
      <CardMedia
        component="img"
        image={Logo}
        alt="Cavalcante & Rolim"
        />
       </Box>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                4 Pontos
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Faltam 3 pontos para a liderança
                </Typography>
              </CardContent>
            </Card>
            <Slider
        aria-label="Always visible"
        defaultValue={3}
        getAriaValueText={valuetext}
        step={1}
        marks={marks}
        valueLabelDisplay="on"
        max={11} disabled
      />
                <br />
                <Stack direction="row" spacing={17}>
      <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
        1º
      </Avatar>
      <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
        2º
      </Avatar>
      <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
        3º
      </Avatar>
    </Stack>
    <Stack direction="row" spacing={10}>
      <p>10 Pontos</p>
      <p>8 Pontos</p>
      <p>7 Pontos</p>
    </Stack>
                <Button sx={{ backgroundColor: '#26a69a', }} size="large" variant="contained">Ver Respostas</Button>
                <Button onClick={()=>{props.handlePaginas(2)}} sx={{ backgroundColor: '#00897b', }} size="large" variant="contained">Voltar</Button>
           
              </Stack>
              <br />
               <Box sx={{ width: 300 }}>
               <br/>
      
    </Box>
            </Box>
          </Container>
        </React.Fragment>
      </header>
    </div>
  );
}

export default Home;
