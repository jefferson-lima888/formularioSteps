import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario({aoEnviar}) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const validacoes = useContext(ValidacoesCadastro)
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  
  //essa função validarCampos foi passada para a pasta hooks customizados
  
  //essa função possoEnviar foi passada para a pasta hooks customizados

  return (
    <form onSubmit={(event)=> {
      event.preventDefault();
      console.log(possoEnviar())
      if(possoEnviar()){
        aoEnviar({email, senha});
      }
    }}>
      <TextField
      value={email}
      onChange={(event) => {setEmail(event.target.value)}}
        id="email"
        name="email"
        label="email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
      value={senha}
      onChange={(event) => {setSenha(event.target.value)}}
      onBlur={validarCampos}
      error={!erros.senha.valido}
      helperText={erros.senha.texto}
        id="senha"
        name="senha"
        label="senha"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button variant="contained" color="primary" type="submit">Próximo</Button>
    </form>
  );
}

export default DadosUsuario;