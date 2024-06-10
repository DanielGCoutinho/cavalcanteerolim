import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Logo from './Images/LogoCV.png';
import './Barra.css'



export default function ButtonAppBar(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


    
function funcao_MeuCla() {
  props.handlePaginas(3);
  handleClose()
    }
    function funcao_Cla() {
      props.handlePaginas(4);
      handleClose()
        }

        function funcao_Logout() {
          props.handlePaginas(0);
          handleClose()
            }
            function Funcao_Ranking() {
              props.handlePaginas(5);
              handleClose()
                }
                function Funcao_Premio() {
                  props.handlePaginas(7);
                  handleClose()
                    }
   
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{backgroundColor: '#4ea183',}}>
        <img src={Logo} alt='' className="Barra-logo"/>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cavalcante & Rolim
          </Typography>
          <Button color="inherit"
           id="basic-button"
           aria-controls={open ? 'basic-menu' : undefined}
           aria-haspopup="true"
           aria-expanded={open ? 'true' : undefined}
           onClick={handleClick}
         >Menu</Button>
           <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      
      
        <MenuItem  onClick={()=>{funcao_MeuCla()}}>Meu clã</MenuItem>
        <Divider/>
        <MenuItem onClick={()=>{funcao_Cla()}} >Clãs</MenuItem>
        <Divider/>
        <MenuItem onClick={()=>{Funcao_Ranking()}}>Ranking</MenuItem>
        <Divider/>
        <MenuItem onClick={()=>{Funcao_Premio()}}>Premio</MenuItem>
        <Divider/>
        <MenuItem onClick={()=>{funcao_Logout()}}>Logout</MenuItem>
  
      </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
