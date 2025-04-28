const notasDisponiveis = [100, 50, 20, 10, 5, 2, 1];

function calcularNotas(valor) {
  const distribuicao = {};
  let valorRestante = valor;

  for (const nota of notasDisponiveis) {
    if (valorRestante >= nota) {
      const quantidade = Math.floor(valorRestante / nota);
      distribuicao[nota] = quantidade;
      valorRestante -= quantidade * nota;
    }
  }

  return distribuicao;
}

module.exports = { calcularNotas };