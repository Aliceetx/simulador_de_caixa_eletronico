const entrada = require("./Caixa/entrada");
const calculo = require('./Caixa/calculo');
const exibicao = require('./Caixa/exibicao');

function iniciarSimulador() {
  const valorSaque = entrada.obterValorSaque();

  if (valorSaque !== null) {
    const distribuicaoNotas = calculo.calcularNotas(valorSaque);
    exibicao.exibirResultado(distribuicaoNotas);
  }
}

iniciarSimulador();