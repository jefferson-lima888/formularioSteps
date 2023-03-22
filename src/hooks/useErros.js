import { useState } from "react";

function useErros(validacoes) {
  const estadoInicial = criarEstadoInicial(validacoes);
  const [erros, setErros] = useState(estadoInicial);
  function validarCampos(event) {
    console.log(event.target);
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
    console.log(novoEstado);
  }
  function possoEnviar() {
    for(let campo in erros){
      if(!erros[campo].valido){
        return false
      }
    }
    return true;
  }

  return [erros, validarCampos, possoEnviar];
}
function criarEstadoInicial(validacoes){
    const estadoInicial = {}
    for(let campo in validacoes){
        estadoInicial[campo] = { valido: true, texto: "" }
    }
    return estadoInicial
}

export default useErros;