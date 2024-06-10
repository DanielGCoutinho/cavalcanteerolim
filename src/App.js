import * as React from 'react';
import Meucla from './Components/Modules/Meucla'
import Clas from './Components/Modules/Clas'
import Home from './Components/Modules/Home'
import Barra from './Components/Modules/Barra'
import Login from './Components/Modules/Login'
import Cadastro from './Components/Modules/Cadastro'
import Ranking from './Components/Modules/Ranking'
import Resultado from './Components/Modules/Resultadodesafio'
import Premios from './Components/Modules/Premios'
import Desafio from './Components/Modules/Desafio1'


function App() {
  
//Controle de paginas
const [pagina, setPagina] = React.useState(0

  )
const updatePagina = p => { setPagina(p) }

function navegacao() {
  if(pagina===0){
    return<Login handlePaginas={updatePagina}/>
  }
  if(pagina===1){
    return<Cadastro handlePaginas={updatePagina}/>
  }
  if(pagina===2){
    return<Home handlePaginas={updatePagina}/>
  }
  if(pagina===3){
    return<Meucla handlePaginas={updatePagina}/>
  }
  if(pagina===4){
    return<Clas handlePaginas={updatePagina}/>
  }
  if(pagina===5){
    return<Ranking handlePaginas={updatePagina}/>
  }
  if(pagina===6){
    return<Resultado handlePaginas={updatePagina}/>
  }
  if(pagina===7){
    return<Premios handlePaginas={updatePagina}/>
  }
  if(pagina===8){
    return<Desafio handlePaginas={updatePagina}/>
  }
}

function menubar(){
  if(pagina!==0&&pagina!==1){
    return<Barra handlePaginas={updatePagina}/>}}

  return (
    
<div>
 
  {menubar()}
     {navegacao()}

      </div>
    
  );
}

export default App;
