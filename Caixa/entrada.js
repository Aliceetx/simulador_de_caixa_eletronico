const readlineSync = require('readline-sync');

function obterValorSaque() {
  const valorStr = readlineSync.question('Informe o valor que deseja sacar (inteiro e positivo): ');
  const valor = parseInt(valorStr);

  if (isNaN(valor) || valor <= 0) {
    console.log('Valor inválido. Por favor, informe um número inteiro positivo.');
    return null;
  }

  return valor;
}

module.exports = { obterValorSaque };