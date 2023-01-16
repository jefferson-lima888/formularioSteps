import React, {Component} from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import {Container, Typography} from '@material-ui/core';
import '@fontsource/roboto';
import { validarCPF, validarSenha} from './models/cadastro';
import ValidacoesCadastro from './contexts/ValidacoesCadastro';

class App extends Component {
  
  render() { 
    return ( 
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulário de cadastro</Typography>
        {/* <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF}/> */}
        <ValidacoesCadastro.Provider value={{cpf: validarCPF, senha: validarSenha, nome: validarSenha}}>
        <FormularioCadastro aoEnviar={aoEnviarForm}/>
        </ValidacoesCadastro.Provider>
      </Container>
     );
  }
}

function aoEnviarForm(dados){
  console.log(dados);
}
 
// a função de validar cpf foi passada para a models em cadastro.js

export default App;
