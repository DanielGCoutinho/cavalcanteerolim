import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Brasao from './Images/LogoCV.png'
import './Meucla.css'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Cadastro(props) {
    const [funcao, setFuncao] = React.useState('');

    const handleChange = (event) => {
      setFuncao(event.target.value);
    };
  return (

    <div>
      <header className='Background'>
      
        <br />
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="sm" >
            <Box sx={{ width: '100%', }}>
              <Stack spacing={2}>
          
              
      <img src={Brasao} alt='' className='Login-logo' />
                <br />
                <TextField color="success" sx={{color:'#00897b', backgroundColor: '#FFF', }} id="outlined-basic" label="Nome" variant="filled" />
                <TextField color="success" sx={{color:'#00897b', backgroundColor: '#FFF', }} id="outlined-basic" label="e-Mail" variant="filled" />
                <TextField color="success" sx={{color:'#00897b', backgroundColor: '#FFF', }} id="outlined-basic" label="Senha" variant="filled" />
                <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
        color="success" sx={{ backgroundColor: '#FFF', }}
          value={funcao}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          
        >
          <MenuItem value="">
            <em>Função</em>
          </MenuItem>
          <MenuItem  value={"Operario"}>Operário</MenuItem>
                                <MenuItem value={"Arquiteto"}>Arquiteto</MenuItem>
                                <MenuItem value={"Administrativo"}>Administrativo</MenuItem>
                                <MenuItem value={"Executivo"}>Executivo</MenuItem>
        </Select>
       
      </FormControl>
                <Button sx={{ backgroundColor: '#00897b', }} size="large" variant="contained">Cadastrar</Button>
                <Button onClick={()=>{props.handlePaginas(0)}} sx={{ backgroundColor: '#00695c', }} size="large" variant="contained">Voltar para Login</Button>
              </Stack>
              <br />
            </Box>
          </Container>
        </React.Fragment>
      </header>
    </div>
  );
}

export default Cadastro;
