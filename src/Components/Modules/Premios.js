import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import './Meucla.css'
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

function Home(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
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
              
                <br/>
            </Card>
            
              <Button variant="contained" sx={{ backgroundColor: '#26a69a', }} onClick={handleClickOpen}>
        Primeiro colocado
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Jogador Daniel Coutinho
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
       Descrição do Premio
          </Typography>
          <Typography gutterBottom>
            
          </Typography>
          <Typography gutterBottom>
           
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Fechar
          </Button>
        </DialogActions>
      </BootstrapDialog>
             
            <Card sx={{ backgroundColor: '#e0f2f1', }}>
            <Box sx={{ width: '100%', }}>
          
      </Box>
</Card>
   
<Button variant="contained" sx={{ backgroundColor: '#26a69a', }} onClick={handleClickOpen}>
        Segundo colocado
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Jogador Carlos Leonardo
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
       Descrição do Premio
          </Typography>
          <Typography gutterBottom>
            
          </Typography>
          <Typography gutterBottom>
           
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Fechar
          </Button>
        </DialogActions>
      </BootstrapDialog>
             
            <Card sx={{ backgroundColor: '#e0f2f1', }}>
            <Box sx={{ width: '100%', }}>
          
      </Box>
</Card>

<Button variant="contained" sx={{ backgroundColor: '#26a69a', }} onClick={handleClickOpen}>
        Terceiro colocado
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 10, p: 2 }} id="customized-dialog-title">
          Jogador Fulano de tal
        </DialogTitle>
        
    
        <DialogContent dividers>
          <Typography gutterBottom>
       Descrição do Premio
          </Typography>
          <Typography gutterBottom>
            
          </Typography>
          <Typography gutterBottom>
           
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Fechar
          </Button>
        </DialogActions>
      </BootstrapDialog>
             
            <Card sx={{ backgroundColor: '#e0f2f1', }}>
            <Box sx={{ width: '100%', }}>
          
      </Box>
</Card>
  
        
                <Button onClick={()=>{props.handlePaginas(4)}} sx={{ backgroundColor: '#26a69a', }} size="large" variant="contained">Clãs</Button>
                
                <Button onClick={()=>{props.handlePaginas(5)}} sx={{ backgroundColor: '#00695c', }} size="large" variant="contained">Ranking</Button>
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
