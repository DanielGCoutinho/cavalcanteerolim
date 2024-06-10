import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import './Meucla.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Slider from '@mui/material/Slider';

const marks = [
    {
      value: 2,
      label: '0 Pontos',
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


function createData(Posição, Nome, Desafio, Avaliação, Média, Clã) {
    return { Posição, Nome, Desafio, Avaliação, Média, Clã };
  }
  
  const rows = [
    createData(1,'Daniel Coutinho', 10.0, 9.0, 9.5, 'Guardião'),
    createData(2,'Carlos Leonardo', 10.0, 8.0, 9.0, 'Guardião'),
    createData(3,'João silva',  9.0, 9.0, 9.0, 'Guardião'),
    createData(4,'Mateus Santos', 8.0, 8.0, 8.0, 'Guardião'),
    createData(5,'Maria Coutinho',  6.0, 6.0, 6.0, 'Guardião'),
  ];

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
              <Stack direction="row" spacing={2} justifyContent="space-around">
                  <Button disabled onClick={()=>{props.handlePaginas(5)}} sx={{ width: 900, backgroundColor: '#00695c', }} size="large" variant="contained">Meu Clã</Button>
                  <Button sx={{ width: 900, backgroundColor: '#00695c', }} size="large" variant="contained">Todos os Clãs</Button>
                </Stack>

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
   
          
    <Card  sx={{ backgroundColor: '#e0f2f1', }}>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: '#e0f2f1', }} > 
          <TableRow>
            <TableCell>Posição</TableCell>
            <TableCell align="right">Nome</TableCell>
            <TableCell align="right">Desafio</TableCell>
            <TableCell align="right">Avaliação</TableCell>
            <TableCell align="right">Média</TableCell>
            <TableCell align="right">Clã</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Posição}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                        {row.Posição}
              </TableCell>
              <TableCell align="right">{row.Nome}</TableCell>
              <TableCell align="right">{row.Desafio}</TableCell>
              <TableCell align="right">{row.Avaliação}</TableCell>
              <TableCell align="right">{row.Média}</TableCell>
              <TableCell align="right">{row.Clã}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </Card>
                <br />
                <Button onClick={()=>{props.handlePaginas(4)}} sx={{ backgroundColor: '#26a69a', }} size="large" variant="contained">Clãs</Button>
                
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
