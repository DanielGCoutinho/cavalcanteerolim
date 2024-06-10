import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import BrasaoGuardioes from './Images/brasão5.png'
import BrasaoCriadores from './Images/brasão3.png'
import BrasaoProjetistas from './Images/brasão2.png'
import BrasaoContadores from './Images/brasão4.png'
import './Meucla.css'
import CardMedia from '@mui/material/CardMedia';



function Clas(props) {
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
        image={BrasaoGuardioes}
        alt="Paella dish"
        />
       </Box>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Os Guardiões da Essência
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Os Guardiões da Essência são o mais numeroso clã, sendo responsáveis por transformar as origens e essências em realidade luxuosa e natural.
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ backgroundColor: '#e0f2f1', }}>
 <Box sx={{ width: '30%', }}>
      <CardMedia
        component="img"
        image={BrasaoCriadores}
        alt="Paella dish"
        />
       </Box>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Os Criadores de Experiências
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Os Criadores de Experiências são o clã que se ocupa em manter a ordem na terra e conseguir os ingredientes que representam as origens e essências, que então serão transformados em realidade pelos Guardiões. 
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ backgroundColor: '#e0f2f1', }}>
 <Box sx={{ width: '30%', }}>
      <CardMedia
        component="img"
        image={BrasaoProjetistas}
        alt="Paella dish"
        />
       </Box>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Os Projetistas de Sonhos
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Já o clã dos Projetistas de Sonhos são os que escrevem as receitas que misturam harmoniosamente a dualidade simétrica das origens e essências.
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ backgroundColor: '#e0f2f1', }}>
 <Box sx={{ width: '30%', }}>
      <CardMedia
        component="img"
        image={BrasaoContadores}
        alt="Paella dish"
        />
       </Box>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Os Contadores de Histórias
                </Typography>
                <Typography variant="body2" color="text.secondary">
                O clã dos Contadores de Histórias é o que está em menor numero, mas o que possui a responsabilidade de aconselhar e desenvolver os integrantes dos demais clãs para que eles sejam tudo o que podem ser!
                </Typography>
              </CardContent>
            </Card>
                <br />
                <Button onClick={()=>{props.handlePaginas(3)}} sx={{ backgroundColor: '#26a69a', }} size="large" variant="contained">Meu Clã</Button>
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

export default Clas;