import React, {useEffect, useState} from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import {Step, StepLabel, Stepper, Typography} from "@material-ui/core";

// sai a props do validarCPF por validacoes
// para melhorar o código vamos alterar validacoes para context
function FormularioCadastro({aoEnviar}) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});

  useEffect(() => {
    // console.log(dadosColetados)
    if(etapaAtual === formularios.length-1){
      aoEnviar(dadosColetados);
    }
  })

  const formularios = [
    // usando uma abordagem melhor que o switch case
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant="h5">Cadastro realizado com sucesso</Typography>
  ];

  function coletarDados(dados) {
    setDados({...dadosColetados, ...dados});
    console.log(dadosColetados)
    proximo();
  }

  function proximo() {
    setEtapaAtual(etapaAtual+1);
  }

  // function formularioAtual(etapa){
  //   switch(etapa) {
  //     case 0:
  //       return <DadosUsuario aoEnviar={proximo}/>
  //     case 1:
  //       return <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF}/>
  //     case 2:
  //       return <DadosEntrega aoEnviar={aoEnviar}/>
  //     default:
  //       return <Typography>Erro ao selecionar formulário</Typography>
  //   }
  // }

  return (
    <>
    <Stepper activeStep={etapaAtual}>
      <Step><StepLabel>Login</StepLabel></Step>
      <Step><StepLabel>Pessoal</StepLabel></Step>
      <Step><StepLabel>Entrega</StepLabel></Step>
      <Step><StepLabel>Finalização</StepLabel></Step>
    </Stepper>
    {/* {formularioAtual(etapaAtual)} */}
    {formularios[etapaAtual]}

    {/* <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF}/>
    <DadosUsuario/>
    <DadosEntrega/> */}
    </>
  );
}

export default FormularioCadastro;
