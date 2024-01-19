function generate() {
  // Capturando os valores mínimo e máximo dos inputs e armazenando-os em variáveis.
  // Estas variáveis apontam diretamente para os elementos no HTML.
  let minInput = document.getElementById("min");
  let maxInput = document.getElementById("max");

  // Pega os valores dos inputs como strings e os armazena.
  let minStr = minInput.value;
  let maxStr = maxInput.value;

  // Armazena e converte os valores para números inteiros.
  let numMin = Math.floor(parseFloat(minStr));
  let numMax = Math.floor(parseFloat(maxStr));

  // Tratamento de um comportamento anômalo: caso o usuário insira um mínimo maior que o máximo, ele ajusta para valores possíveis. (Talvez eu deveria separar isso em uma função?)
  if (numMin > numMax) {
    numMin = 0;
    numMax = 1;
  }

  // Atualiza os valores dos inputs com as versões arredondadas no frontEnd.
  minInput.value = numMin;
  maxInput.value = numMax;

  // Define um array "range" onde vão ficar todos os numeros do menor ao maior.
  let range = [];

  // For vai iterar sobre valor minimo até valor máximo.
  for (let i = numMin; i <= numMax; i++) {
    // A cada iteração, esta linha de código faz com que o número que estiver sendo iterado vá para dentro do array.
    range.push(i);
  }
  
  console.log("array: " + range);

  // Função dedicada á gerar um número aleatório dentro do range.
  function getRandomNumber() {
    // O "return" serve para que toda vez que a função for chamada, mostrar o cálculo feito no código a seguir da palavra-chave.
    return Math.floor(Math.random() * range.length);
  }

  // Armazena na variável "result" o item selecionado com a classe declarada como "result" no HTML.
  // O elemento com a classe "result" é um <span> dedicado para mostrar o resultado aleatório.
  let result = document.querySelector(".result");
  // Acessa o valor correspondente no array usando o índice retornado por getRandomNumber().
  result.textContent = range[getRandomNumber()];
}
