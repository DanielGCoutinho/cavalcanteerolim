import * as React from 'react';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Logo from './Images/brasão5.png'
import './Meucla.css'
import CardMedia from '@mui/material/CardMedia';

import Slider from '@mui/material/Slider';

const marks = [
    {
      value: 0,
      label: '0 pontos',
    },
    
  
    {
      value: 10,
      label: '1',
    },
    {
        value: 8,
        label: '2',
      },
      {
        value: 7,
        label: '3',
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
                Pergunta 1 - Selecione a resposta correta:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Qual é a proposta estratégica da marca Cavalcante e Rolim?
                </Typography>
              </CardContent>
            </Card>
                <br />
                <Button onClick={()=>{props.handlePaginas(6)}} sx={{ backgroundColor: '#26a69a', }} size="large" variant="contained">Luxo e Natureza</Button>
                <Button onClick={()=>{props.handlePaginas(6)}} sx={{ backgroundColor: '#26a69a', }} size="large" variant="contained">Sofisticação e Exclusividade</Button>
                <Button onClick={()=>{props.handlePaginas(6)}} sx={{ backgroundColor: '#26a69a', }} size="large" variant="contained">Vendas e Marketing</Button>
                <Button onClick={()=>{props.handlePaginas(6)}} sx={{ backgroundColor: '#26a69a', }} size="large" variant="contained">Operações e Finanças</Button>
              </Stack>
              <br />
               <Box sx={{ width: 300 }}>
               <br/>
     
    </Box>
            </Box>
            <Card sx={{ backgroundColor: '#e0f2f1', }}>
 <Box sx={{ width: '30%', }}>
  
       </Box>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
             Mensagem
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Faltam 3 pontos para a liderança do seu Clã
                </Typography>
              </CardContent>
              <br/>
              <Slider sx={{ width: '100%', }}
              
        aria-label="Always visible"
        defaultValue={3}
        getAriaValueText={valuetext}
        step={1}
        marks={marks}
        valueLabelDisplay="on"
        max={11} disabled
      />  <br/>
            </Card>
            <Card sx={{ backgroundColor: '#e0f2f1', }}>
            <Box sx={{ width: '100%', }}>
          
      </Box>
</Card>
            
          </Container>
        </React.Fragment>
      </header>
    </div>
  );
}

export default Home;
