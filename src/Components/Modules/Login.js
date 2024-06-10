import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Brasao from './Images/LogoCV.png'
import './Meucla.css'


function Login(props) {
  return (

    <div>
      <header className='Background'>
      <br />
      <img src={Brasao} alt='' className='Login-logo' />
      
        
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="sm" >
            <Box sx={{ width: '100%', }}>
              <Stack spacing={2}>
          
    
                <br />
        
                <TextField color="success" sx={{color:'#00897b', backgroundColor: '#FFF', }} id="outlined-basic" label="e-Mail" variant="filled" />
                <TextField color="success" sx={{color:'#00897b', backgroundColor: '#FFF', }} id="outlined-basic" label="Senha" variant="filled" />
                <Button onClick={()=>{props.handlePaginas(2)}} sx={{ backgroundColor: '#00897b', }} size="large" variant="contained">Login</Button>
                <Button onClick={()=>{props.handlePaginas(1)}} sx={{ backgroundColor: '#00695c', }} size="large" variant="contained">Cadastrar Jogador</Button>
              </Stack>
              <br />
            </Box>
          </Container>
        </React.Fragment>
      </header>
    </div>
  );
}

export default Login;
