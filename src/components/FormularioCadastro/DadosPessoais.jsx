import React, {useState, useContext} from "react";
import Button from "@material-ui/core/Button";
import { TextField, Switch, FormControlLabel } from "@material-ui/core";
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

// sai a props do validarCPF por validacoes
// para melhorar o código vamos alterar validacoes para context
function DadosPessoais({aoEnviar}) {
    // let nome = '';
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);
    
    //essa função validarCampos foi passada para a pasta hooks customizados por ser repetitiva
    // const [erros, seterros] = useState({cpf:{valido:true, texto:""}, nome: {valido:true, texto:""}});
    // function validarCampos(event) {
    //   console.log(event.target)
    //   const {name, value} = event.target;
    //   const novoEstado = {...erros}
    //   novoEstado[name] = validacoes[name](value);
    //   seterros(novoEstado)
    //   console.log(novoEstado)
    // }

    //essa função possoEnviar foi passada para a pasta hooks customizados
    // function possoEnviar() {
    //   for(let campo in erros){
    //     if(!erros[campo].valido){
    //       return false
    //     }
    //   }
    //   return true;
    // }

  return (
    <form onSubmit={(event) => {
        event.preventDefault();
        // console.log(nome, sobrenome, cpf, promocoes, novidades)
        if(possoEnviar()){
          aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
        }
        }}
    >
      <TextField
      value={nome}
      onChange={(event) => {
          // nome = event.target.value;
          // let tmpNome = event.target.value;
          // if (tmpNome.length > 3) {
          //   tmpNome = tmpNome.substr(0, 3);
          // }
          // setNome(tmpNome);

          setNome(event.target.value);
      }}
      onBlur={validarCampos}
      error={!erros.nome.valido}
      helperText={erros.nome.texto}
        id="nome"
        name="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
      value={sobrenome}
      onChange={(event) => {
          setSobrenome(event.target.value);
      }}
        id="sobrenome"
        name="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
      value={cpf}
      onChange={(event) => {
          setCpf(event.target.value);
      }}
      // onBlur={(event) => {
      //     const ehValido = validarCPF(cpf);
      //     // seterros({cpf:{valido:false, texto:"O CPF deve ter 11 digitos"}})
      //     seterros({cpf:ehValido})
      //     console.log('err', ehValido)
      //     console.log('cpf', cpf.length)

      // }}
      onBlur={validarCampos}
      error={!erros.cpf.valido}
      helperText={erros.cpf.texto}
        id="cpf"
        name="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <FormControlLabel
        control={<Switch checked={promocoes} onChange={(event) => {
          setPromocoes(event.target.checked);
      }} name="promoções" color="primary" />}
        label="Promoções"
      />
      <FormControlLabel
        control={<Switch checked={novidades} onChange={(event) => {
          setNovidades(event.target.checked);
      }} name="novidades" color="primary" />}
        label="Novidades"
      />
      <Button variant="contained" color="primary" type="submit">
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
