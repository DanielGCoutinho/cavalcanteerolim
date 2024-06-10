import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Brasao from './Images/brasão5.png'
import './Meucla.css'
import CardMedia from '@mui/material/CardMedia';



function Home(props) {
  return (

    <div>
      <header className='Background'>
      
        <br />
        <React.Fragment>
          <CssBaseline />
          <Container  maxWidth="sm" >
            <Box sx={{ width: '100%', }}>
              <Stack spacing={2}>
          
    <Card  sx={{ backgroundColor: '#e0f2f1', }}>
 <Box sx={{ width: '30%', }}>
      <CardMedia
        component="img"
        image={Brasao}
        alt="Paella dish"
        />
       </Box>
              <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                Os Guardiões da Essência
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Os Guardiões da Essência são o mais numeroso clã, sendo responsáveis por transformar as origens e essências em realidade luxuosa e natural.
                </Typography>
              </CardContent>
            </Card>
                <br />
                <Button onClick={()=>{props.handlePaginas(4)}} sx={{ backgroundColor: '#26a69a', }} size="large" variant="contained">Clãs</Button>
                <Button onClick={()=>{props.handlePaginas(5)}} sx={{ backgroundColor: '#00897b', }} size="large" variant="contained">Ranking</Button>
                <Button onClick={()=>{props.handlePaginas(7)}} sx={{ backgroundColor: '#00695c', }} size="large" variant="contained">Premios</Button>
              </Stack>
              <br />
            </Box>
          </Container>
        </React.Fragment>
      </header>
    </div>
  );
}

export default Home;
