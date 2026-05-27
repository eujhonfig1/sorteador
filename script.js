
const botaoSortear = document.querySelector('.btn-sort');
const inputMinimo = document.querySelector('.input-min');
const inputMaximo = document.querySelector('.input-max');
const inputResultado = document.querySelector('#result'); 

// Ouvindo o clique no botão
botaoSortear.addEventListener('click', () => {
  
  // Pegamos os valores digitados (convertendo de texto para número decimal com parseFloat)
  const valorMin = parseFloat(inputMinimo.value);
  const valorMax = parseFloat(inputMaximo.value);

  // Validação para ver se os campos não estão vazios
  if (isNaN(valorMin) || isNaN(valorMax)) {
    alert('Por favor, preencha os dois campos com números!');
    return;
  }

  // Arredonda o número mínimo PARA CIMA (ex: 4.1 vira 5)
  const min = Math.ceil(valorMin);

  // Arredonda o número máximo PARA BAIXO (ex: 10.9 vira 10)
  const max = Math.floor(valorMax);

  // Validação pós-arredondamento
  if (min >= max) {
    alert('O primeiro número deve ser menor do que o segundo número!');
    return;
  }

  // FÓRMULA DO SORTEIO (Usando o Math.floor novamente para gerar o inteiro final)
  const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;

  // Mostra o número sorteado na tela
  inputResultado.value = numeroSorteado;
});