import { MegaSenaResults } from "./megaSenaResultList.js";
const TEXTO_JOGOS_GERADOS = document.querySelector("#jogosGerados")

const GerarJogoAleatorio = (quantidadeNumeros, quantidadeJogos) => {
  let jogoGerado = []
  let todosJogosGerados = []

  for(let i = 0; i < quantidadeJogos; i++){
    for(let j = 0; j < quantidadeNumeros; j++) {
      let sortearConcurso = Math.round(Math.random() * (MegaSenaResults.length - 1))
      let sortearNumero = Math.round(Math.random() * 5)
      jogoGerado[j] = MegaSenaResults[sortearConcurso].numeros[sortearNumero]
    }
    todosJogosGerados += "Jogo Sorteado: " + jogoGerado.join(" ") + "<br>" + "<br>";
  }

  TEXTO_JOGOS_GERADOS.innerHTML = todosJogosGerados;
}

GerarJogoAleatorio(6, 100)