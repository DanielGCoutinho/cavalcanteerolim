import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import './Home.css'

const card = (
  <React.Fragment >
    <CardContent sx={{ backgroundColor: '#e0f2f1', }}>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Olá! 🎉
      </Typography>
      <Typography variant="h5" component="div">
        Bem-vindo ao nosso espaço de desafios!
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">

      </Typography>
      <Typography variant="body2">
        Estamos super empolgados em ter você aqui e mal podemos esperar para que você mergulhe na nossa aventura. Preparado para um desafio? Temos certeza de que sim! 😎
        <br />
        { }
      </Typography>
    </CardContent >
    <CardActions sx={{ backgroundColor: '#e0f2f1', }}>
      <Button size="small">Repassar manual da marca</Button>
    </CardActions>
  </React.Fragment>
);


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
                <Box sx={{ minWidth: 275 }}>
                  <Card variant="outlined">{card}</Card>
                </Box>
                <br />
                <Button onClick={()=>{props.handlePaginas(3)}} sx={{ backgroundColor: '#26a69a', }} size="large" variant="contained">Meu clã</Button>
                <Button onClick={()=>{props.handlePaginas(4)}} sx={{ backgroundColor: '#00897b', }} size="large" variant="contained">Clãs</Button>
                <Stack direction="row" spacing={2} justifyContent="space-around">
                  <Button onClick={()=>{props.handlePaginas(5)}} sx={{ width: 900, backgroundColor: '#00695c', }} size="large" variant="contained">Ranking</Button>
                  <Button onClick={()=>{props.handlePaginas(7)}} sx={{ width: 900, backgroundColor: '#00695c', }} size="large" variant="contained">Premio</Button>
                </Stack>
                <Button onClick={()=>{props.handlePaginas(8)}} sx={{ backgroundColor: '#004d40', }} size="large" variant="contained">Jogar</Button>
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
