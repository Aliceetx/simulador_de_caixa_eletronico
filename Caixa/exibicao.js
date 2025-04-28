function exibirResultado(distribuicao) {
    console.log('\nNotas entregues:');
    for (const nota in distribuicao) {
      if (distribuicao.hasOwnProperty(nota)) {
        const quantidade = distribuicao[nota];
        console.log(`${quantidade} nota(s) de R$ ${nota}`);
      }
    }
  }
  
  module.exports = { exibirResultado };