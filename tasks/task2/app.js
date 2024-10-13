// ---------------------------------------------
// 11. Progressão aritmética (PA)
// ---------------------------------------------
function pa(primeiroTermo, razao) {
  let soma = 0;
  for (let i = 0; i < 10; i++) {
    let termo = primeiroTermo + i * razao;
    console.log(termo);
    soma += termo;
  }
  console.log(`Soma dos 10 primeiros termos: ${soma}`);
}

pa(1, 3);

// ---------------------------------------------
// 12. Sequência de Fibonacci (10 primeiros elementos)
// ---------------------------------------------
function fibonacci() {
  let a = 0,
    b = 1;
  console.log(b);
  for (let i = 1; i < 10; i++) {
    let proximo = a + b;
    console.log(proximo);
    a = b;
    b = proximo;
  }
}

fibonacci();

// ---------------------------------------------
// 13. Vetor de Fibonacci com 15 elementos
// ---------------------------------------------
function vetorFibonacci() {
  let fib = [1, 1];
  for (let i = 2; i < 15; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  console.log(fib);
}

vetorFibonacci();

// ---------------------------------------------
// 14. Ler 7 nomes e exibir na ordem inversa
// ---------------------------------------------
function nomesInvertidos() {
  let nomes = [];
  for (let i = 0; i < 7; i++) {
    let nome = prompt("Digite um nome: ");
    nomes.push(nome);
  }
  console.log(nomes.reverse());
}

nomesInvertidos();

// ---------------------------------------------
// 15. Vetor com números inteiros e mostrar pares
// ---------------------------------------------
function numerosPares() {
  let numeros = [];
  let pares = [];
  for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt("Digite um número: "), 10);
    numeros.push(num);
    if (num % 2 === 0) {
      pares.push(num);
    }
  }
  console.log("Pares: ", pares);
}

numerosPares();

// ---------------------------------------------
// 16. Preencher vetor com 20 números aleatórios
// ---------------------------------------------
function preencheAleatorio() {
  let vetor = [];
  for (let i = 0; i < 20; i++) {
    vetor.push(Math.floor(Math.random() * 100));
  }
  console.log("Vetor aleatório: ", vetor);
  vetor.sort((a, b) => a - b);
  console.log("Vetor ordenado: ", vetor);
}

preencheAleatorio();

// ---------------------------------------------
// 17. Listagem de menores de idade
// ---------------------------------------------
function menoresDeIdade() {
  let nomes = [];
  let idades = [];
  for (let i = 0; i < 9; i++) {
    let nome = prompt("Digite o nome: ");
    let idade = parseInt(prompt("Digite a idade: "), 10);
    nomes.push(nome);
    idades.push(idade);
  }
  console.log("Menores de idade:");
  for (let i = 0; i < 9; i++) {
    if (idades[i] < 18) {
      console.log(`${nomes[i]} (${idades[i]} anos)`);
    }
  }
}

menoresDeIdade();

// ---------------------------------------------
// 18. Registro de funcionário
// ---------------------------------------------
function registroFuncionario() {
  let funcionario = {
    nome: prompt("Digite o nome do funcionário: "),
    cargo: prompt("Digite o cargo do funcionário: "),
    salario: parseFloat(prompt("Digite o salário do funcionário: ")),
  };
  console.log(funcionario);
}

registroFuncionario();

// ---------------------------------------------
// 19. Validar e escrever horários no formato HH.MM.SS
// ---------------------------------------------
function validaHorario() {
  for (let i = 0; i < 5; i++) {
    let hora, minuto, segundo;
    do {
      hora = parseInt(prompt("Digite a hora (0-23): "), 10);
    } while (hora < 0 || hora > 23);
    do {
      minuto = parseInt(prompt("Digite o minuto (0-59): "), 10);
    } while (minuto < 0 || minuto > 59);
    do {
      segundo = parseInt(prompt("Digite o segundo (0-59): "), 10);
    } while (segundo < 0 || segundo > 59);
    console.log(
      `Horário: ${hora.toString().padStart(2, "0")}.${minuto
        .toString()
        .padStart(2, "0")}.${segundo.toString().padStart(2, "0")}`
    );
  }
}

validaHorario();

// ---------------------------------------------
// 20. Folha de pagamento de 80 funcionários
// ---------------------------------------------
function folhaDePagamento() {
  for (let i = 0; i < 80; i++) {
    let matricula = prompt("Digite a matrícula do funcionário: ");
    let nome = prompt("Digite o nome do funcionário: ");
    let salarioBruto = parseFloat(prompt("Digite o salário bruto: "));
    let deducaoINSS = salarioBruto * 0.12;
    let salarioLiquido = salarioBruto - deducaoINSS;

    console.log(`Matrícula: ${matricula}`);
    console.log(`Nome: ${nome}`);
    console.log(`Salário Bruto: R$${salarioBruto.toFixed(2)}`);
    console.log(`Dedução INSS: R$${deducaoINSS.toFixed(2)}`);
    console.log(`Salário Líquido: R$${salarioLiquido.toFixed(2)}`);
  }
}

folhaDePagamento();

// ---------------------------------------------
// 21. Função para calcular o peso ideal
// ---------------------------------------------
function calculaPesoIdeal(altura, sexo) {
  let pesoIdeal;
  if (sexo === "M") {
    pesoIdeal = 72.7 * altura - 58;
  } else if (sexo === "F") {
    pesoIdeal = 62.1 * altura - 44.7;
  }
  console.log(`O peso ideal é ${pesoIdeal.toFixed(2)} kg.`);
}

calculaPesoIdeal(1.75, "M");

// ---------------------------------------------
// 22. Pesquisa de salário e número de filhos
// ---------------------------------------------
function pesquisaPopulacao() {
  let totalSalario = 0,
    totalFilhos = 0,
    totalPessoas = 0;
  let maiorSalario = 0,
    salariosAte350 = 0;
  let continuar = true;

  while (continuar) {
    const salario = parseFloat(prompt("Digite o salário: "));
    const numFilhos = parseInt(prompt("Digite o número de filhos: "), 10);

    totalSalario += salario;
    totalFilhos += numFilhos;
    totalPessoas++;

    if (salario > maiorSalario) {
      maiorSalario = salario;
    }

    if (salario <= 350) {
      salariosAte350++;
    }

    continuar = prompt("Deseja continuar? (S/N): ").toUpperCase() === "S";
  }

  const mediaSalario = totalSalario / totalPessoas;
  const mediaFilhos = totalFilhos / totalPessoas;
  const percentualSalariosBaixos = (salariosAte350 / totalPessoas) * 100;

  console.log(`Média de salário: R$${mediaSalario.toFixed(2)}`);
  console.log(`Média de número de filhos: ${mediaFilhos.toFixed(2)}`);
  console.log(`Maior salário: R$${maiorSalario.toFixed(2)}`);
  console.log(
    `Percentual com salário até R$350,00: ${percentualSalariosBaixos.toFixed(
      2
    )}%`
  );
}

pesquisaPopulacao();

// ---------------------------------------------
// 23. Criar e imprimir matriz identidade 7x7
// ---------------------------------------------
function matrizIdentidade() {
  const matriz = [];
  for (let i = 0; i < 7; i++) {
    matriz[i] = [];
    for (let j = 0; j < 7; j++) {
      matriz[i][j] = i === j ? 1 : 0;
    }
  }
  console.log("Matriz Identidade:");
  matriz.forEach((linha) => console.log(linha.join(" ")));
}

matrizIdentidade();

// ---------------------------------------------
// 24. Vetor com quantidade de negativos em cada linha de matriz
// ---------------------------------------------
function contaNegativos() {
  const matriz = [
    [-1, -3, 4, 5, 6, -9, 7, 8],
    [0, -5, 6, 1, 3, -6, 9, 2],
    [-1, 4, -3, -2, -6, 0, 5, -8],
    [1, 6, 7, 8, 9, 0, -3, -2],
    [-9, -6, -5, -4, -7, 8, 7, 6],
    [0, 2, 3, -9, -8, 4, 5, 1],
  ];

  const vetorNegativos = matriz.map(
    (linha) => linha.filter((num) => num < 0).length
  );
  console.log(
    "Vetor com a quantidade de números negativos por linha: ",
    vetorNegativos
  );
}

contaNegativos();

// ---------------------------------------------
// 25. Soma dos elementos de cada coluna de uma matriz 15x20
// ---------------------------------------------
function somaColunasMatriz() {
  const matriz = Array(15)
    .fill(0)
    .map(() =>
      Array(20)
        .fill(0)
        .map(() => Math.random() * 100)
    );
  const somaColunas = Array(20).fill(0);

  for (let j = 0; j < 20; j++) {
    for (let i = 0; i < 15; i++) {
      somaColunas[j] += matriz[i][j];
    }
  }

  console.log("Soma das colunas da matriz: ", somaColunas);
}

somaColunasMatriz();

// ---------------------------------------------
// 26. Produto de duas matrizes 3x5
// ---------------------------------------------
function produtoMatrizes() {
  const A = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
  ];

  const B = [
    [2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16],
  ];

  const produto = [];
  for (let i = 0; i < 3; i++) {
    produto[i] = [];
    for (let j = 0; j < 5; j++) {
      produto[i][j] = A[i][j] * B[i][j];
    }
  }

  console.log("Matriz produto:");
  produto.forEach((linha) => console.log(linha.join(" ")));
}

produtoMatrizes();

// ---------------------------------------------
// 27. Multiplicação de matriz por valor A e armazenar em vetor
// ---------------------------------------------
function multiplicaMatrizPorValor() {
  const M = Array(6)
    .fill(0)
    .map(() =>
      Array(6)
        .fill(0)
        .map(() => Math.random() * 100)
    );
  const A = parseFloat(prompt("Digite o valor de A: "));
  const vetor = [];

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      vetor.push(M[i][j] * A);
    }
  }

  console.log("Vetor resultante da multiplicação: ", vetor);
}

multiplicaMatrizPorValor();

// ---------------------------------------------
// 28. Soma de elementos acima e abaixo da diagonal principal de uma matriz 10x10
// ---------------------------------------------
function somaAcimaAbaixoDiagonal() {
  const M = Array(10)
    .fill(0)
    .map(() =>
      Array(10)
        .fill(0)
        .map(() => Math.random() * 100)
    );
  let somaAcima = 0,
    somaAbaixo = 0;

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (i < j) {
        somaAcima += M[i][j];
      } else if (i > j) {
        somaAbaixo += M[i][j];
      }
    }
  }

  console.log(`Soma acima da diagonal principal: ${somaAcima}`);
  console.log(`Soma abaixo da diagonal principal: ${somaAbaixo}`);
}

somaAcimaAbaixoDiagonal();

// ---------------------------------------------
// 29. Soma de linha, coluna, diagonal principal e total de matriz 5x5
// ---------------------------------------------
function somaMatriz() {
  const M = Array(5)
    .fill(0)
    .map(() =>
      Array(5)
        .fill(0)
        .map(() => Math.random() * 100)
    );
  let somaLinha4 = 0,
    somaColuna2 = 0,
    somaDiagonal = 0,
    somaTotal = 0;

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (i === 4) somaLinha4 += M[i][j];
      if (j === 2) somaColuna2 += M[i][j];
      if (i === j) somaDiagonal += M[i][j];
      somaTotal += M[i][j];
    }
  }

  console.log(`Soma da linha 4: ${somaLinha4}`);
  console.log(`Soma da coluna 2: ${somaColuna2}`);
  console.log(`Soma da diagonal principal: ${somaDiagonal}`);
  console.log(`Soma total da matriz: ${somaTotal}`);
}

somaMatriz();

// ---------------------------------------------
// 30. Criar vetores SL e SC com somas das linhas e colunas de uma matriz 5x5
// ---------------------------------------------
function somasLinhasColunas() {
  const M = Array(5)
    .fill(0)
    .map(() =>
      Array(5)
        .fill(0)
        .map(() => Math.random() * 100)
    );
  const SL = Array(5).fill(0);
  const SC = Array(5).fill(0);

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      SL[i] += M[i][j];
      SC[j] += M[i][j];
    }
  }

  console.log("Matriz:");
  M.forEach((linha) => console.log(linha.join(" ")));
  console.log("Soma das linhas (SL): ", SL);
  console.log("Soma das colunas (SC): ", SC);
}

somasLinhasColunas();

// ---------------------------------------------
// 31. Contar valores iguais a A em matriz e criar matriz sem A
// ---------------------------------------------
function contarValores(matriz, A) {
  let contador = 0;
  const novaMatriz = [];

  for (let i = 0; i < matriz.length; i++) {
    novaMatriz[i] = [];
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] === A) {
        contador++;
      } else {
        novaMatriz[i].push(matriz[i][j]);
      }
    }
  }

  console.log(`O valor ${A} aparece ${contador} vezes.`);
  console.log("Nova matriz sem o valor A: ", novaMatriz);
}

const matriz = Array(3)
  .fill(0)
  .map(() =>
    Array(3)
      .fill(0)
      .map(() => Math.floor(Math.random() * 10))
  );
contarValores(matriz, 5);

// ---------------------------------------------
// 32. Dividir elementos da matriz por maior valor da linha
// ---------------------------------------------
function dividePorMaior() {
  const M = Array(12)
    .fill(0)
    .map(() =>
      Array(13)
        .fill(0)
        .map(() => Math.random() * 100)
    );

  M.forEach((linha, i) => {
    const maior = Math.max(...linha);
    M[i] = linha.map((valor) => (valor / maior).toFixed(2));
  });

  console.log("Matriz modificada:");
  M.forEach((linha) => console.log(linha.join(" ")));
}

dividePorMaior();

// ---------------------------------------------
// 33. Multiplicar elementos da diagonal principal por média da diagonal secundária
// ---------------------------------------------
function multiplicaDiagonal() {
  const M = Array(3)
    .fill(0)
    .map(() =>
      Array(3)
        .fill(0)
        .map(() => Math.random() * 10)
    );
  let somaSecundaria = 0;

  for (let i = 0; i < 3; i++) {
    somaSecundaria += M[i][2 - i];
  }

  const mediaSecundaria = somaSecundaria / 3;

  for (let i = 0; i < 3; i++) {
    M[i][i] *= mediaSecundaria;
  }

  console.log(
    "Matriz com diagonal principal multiplicada pela média da secundária:"
  );
  M.forEach((linha) => console.log(linha.join(" ")));
}

multiplicaDiagonal();

// ---------------------------------------------
// 34. Multiplicar cada linha da matriz pelo elemento da diagonal principal
// ---------------------------------------------
function multiplicaPorDiagonalPrincipal() {
  const M = Array(50)
    .fill(0)
    .map(() =>
      Array(50)
        .fill(0)
        .map(() => Math.random() * 100)
    );

  for (let i = 0; i < 50; i++) {
    const multiplicador = M[i][i];
    M[i] = M[i].map((valor) => valor * multiplicador);
  }

  console.log("Matriz modificada:");
  M.forEach((linha) => console.log(linha.join(" ")));
}

multiplicaPorDiagonalPrincipal();

// ---------------------------------------------
// 35. Preencher dois vetores com números pares e ímpares
// ---------------------------------------------
function separarParesImpares() {
  const valores = Array(30)
    .fill(0)
    .map(() => Math.floor(Math.random() * 100));
  let pares = [],
    impares = [];

  valores.forEach((valor) => {
    if (valor % 2 === 0) {
      pares.push(valor);
    } else {
      impares.push(valor);
    }

    if (pares.length === 5) {
      console.log("Vetor de pares cheio: ", pares);
      pares = [];
    }

    if (impares.length === 5) {
      console.log("Vetor de ímpares cheio: ", impares);
      impares = [];
    }
  });

  console.log("Valores restantes - Pares: ", pares);
  console.log("Valores restantes - Ímpares: ", impares);
}

separarParesImpares();

// ---------------------------------------------
// 36. Loteria esportiva - comparar respostas com gabarito
// ---------------------------------------------
function loteriaEsportiva() {
  const gabarito = Array(13)
    .fill(0)
    .map(() => Math.floor(Math.random() * 3 + 1));
  const apostadores = Array(100)
    .fill(0)
    .map(() => ({
      numero: Math.floor(Math.random() * 1000),
      respostas: Array(13)
        .fill(0)
        .map(() => Math.floor(Math.random() * 3 + 1)),
    }));

  apostadores.forEach((apostador) => {
    let acertos = 0;
    for (let i = 0; i < 13; i++) {
      if (apostador.respostas[i] === gabarito[i]) {
        acertos++;
      }
    }
    console.log(`Apostador ${apostador.numero} teve ${acertos} acertos.`);
    if (acertos === 13) {
      console.log("Parabéns! Você foi o GANHADOR!");
    }
  });
}

loteriaEsportiva();

// ---------------------------------------------
// 37. Gabarito de prova - contar acertos e aprovar ou reprovar alunos
// ---------------------------------------------
function gabaritoProva() {
  const gabarito = Array(20)
    .fill(0)
    .map(() => (Math.random() > 0.5 ? "C" : "E"));
  const alunos = Array(50)
    .fill(0)
    .map(() => ({
      numero: Math.floor(Math.random() * 1000),
      respostas: Array(20)
        .fill(0)
        .map(() => (Math.random() > 0.5 ? "C" : "E")),
    }));

  alunos.forEach((aluno) => {
    let acertos = 0;
    aluno.respostas.forEach((resposta, i) => {
      if (resposta === gabarito[i]) {
        acertos++;
      }
    });

    console.log(`Aluno ${aluno.numero} teve ${acertos} acertos.`);
    if (acertos >= 12) {
      console.log("APROVADO!");
    } else {
      console.log("REPROVADO!");
    }
  });
}

gabaritoProva();

// ---------------------------------------------
// 38. Operações sobre um vetor com base na escolha do usuário
// ---------------------------------------------
function operacoesVetor() {
  const vetor = Array(6)
    .fill(0)
    .map(() => Math.floor(Math.random() * 100));
  const operacao = parseInt(
    prompt(
      "Escolha uma operação (1- Soma, 2- Produto, 3- Média, 4- Ordenar, 5- Mostrar vetor): "
    ),
    10
  );

  switch (operacao) {
    case 1:
      const soma = vetor.reduce((acc, val) => acc + val, 0);
      console.log(`Soma dos elementos: ${soma}`);
      break;
    case 2:
      const produto = vetor.reduce((acc, val) => acc * val, 1);
      console.log(`Produto dos elementos: ${produto}`);
      break;
    case 3:
      const media = vetor.reduce((acc, val) => acc + val, 0) / vetor.length;
      console.log(`Média dos elementos: ${media}`);
      break;
    case 4:
      console.log(
        "Vetor ordenado: ",
        vetor.sort((a, b) => a - b)
      );
      break;
    case 5:
      console.log("Vetor: ", vetor);
      break;
    default:
      console.log("Operação inválida.");
  }
}

operacoesVetor();

// ---------------------------------------------
// 39. Compactar vetor removendo nulos e negativos
// ---------------------------------------------
function compactarVetor() {
  const A = Array(100)
    .fill(0)
    .map(() => Math.floor(Math.random() * 200) - 100);
  const B = A.filter((num) => num > 0);

  console.log("Vetor original: ", A);
  console.log("Vetor compactado (sem negativos e nulos): ", B);
}

compactarVetor();

// ---------------------------------------------
// 40. Loto - verificar ganhador
// ---------------------------------------------
function loto() {
  const resultado = Array(5)
    .fill(0)
    .map(() => Math.floor(Math.random() * 100) + 1);
  const apostas = Array(50)
    .fill(0)
    .map(() => ({
      numero: Math.floor(Math.random() * 1000),
      numeros: Array(5)
        .fill(0)
        .map(() => Math.floor(Math.random() * 100) + 1),
    }));

  apostas.forEach((aposta) => {
    if (aposta.numeros.every((num, i) => num === resultado[i])) {
      console.log(`Apostador ${aposta.numero} é o GANHADOR!`);
    }
  });

  console.log("Resultado oficial: ", resultado);
}

loto();
// ---------------------------------------------
// 41. Acessar propriedade de objeto e adicionar nova
// ---------------------------------------------
const pessoa = {
  nome: "João",
  idade: 25,
};

console.log(`Idade: ${pessoa.idade}`);
pessoa.email = "joao@example.com";
console.log("Objeto atualizado: ", pessoa);

// ---------------------------------------------
// 42. Função que retorna propriedades que são arrays
// ---------------------------------------------
const dados = {
  nome: "Ana",
  idade: 28,
  hobbies: ["ler", "viajar"],
  notas: [10, 8, 9],
  endereco: { cidade: "Rio" },
};

function retornaArrays(obj) {
  const novoObjeto = {};
  for (const chave in obj) {
    if (Array.isArray(obj[chave])) {
      novoObjeto[chave] = obj[chave];
    }
  }
  return novoObjeto;
}

console.log(retornaArrays(dados));

// ---------------------------------------------
// 43. Combinar dois objetos, dando precedência ao segundo
// ---------------------------------------------
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 20, c: 30, d: 40 };

function combinarObjetos(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

console.log(combinarObjetos(obj1, obj2));

// ---------------------------------------------
// 44. Contar quantas propriedades do tipo string existem em um objeto
// ---------------------------------------------
function contarStrings(obj) {
  let contador = 0;
  for (const chave in obj) {
    if (typeof obj[chave] === "string") {
      contador++;
    }
  }
  return contador;
}

console.log(contarStrings(dados));

// ---------------------------------------------
// 45. Criar um objeto com a contagem de strings em um array
// ---------------------------------------------
const palavras = ["banana", "maçã", "banana", "laranja", "maçã", "banana"];

function contarFrequencia(array) {
  const frequencia = {};
  array.forEach((item) => {
    frequencia[item] = (frequencia[item] || 0) + 1;
  });
  return frequencia;
}

console.log(contarFrequencia(palavras));

// ---------------------------------------------
// 46. Sumarizar vendas por vendedor
// ---------------------------------------------
const vendas = [
  { vendedor: "Ana", valor: 200 },
  { vendedor: "Carlos", valor: 300 },
  { vendedor: "Ana", valor: 150 },
  { vendedor: "Carlos", valor: 100 },
];

function totalVendas(vendas) {
  return vendas.reduce((acumulador, venda) => {
    acumulador[venda.vendedor] =
      (acumulador[venda.vendedor] || 0) + venda.valor;
    return acumulador;
  }, {});
}

console.log(totalVendas(vendas));

// ---------------------------------------------
// 47. Aplicar função a cada propriedade de um objeto
// ---------------------------------------------
const objeto = { a: 1, b: 2, c: 3 };

function transformaObjeto(obj, func) {
  const novoObjeto = {};
  for (const chave in obj) {
    novoObjeto[chave] = func(obj[chave]);
  }
  return novoObjeto;
}

console.log(transformaObjeto(objeto, (valor) => valor * 2));

// ---------------------------------------------
// 48. Combinar inventários de lojas
// ---------------------------------------------
const inventarioLojaA = { arroz: 10, feijão: 20 };
const inventarioLojaB = { arroz: 5, feijão: 15, açúcar: 30 };

function combinarInventarios(lojaA, lojaB) {
  const inventarioFinal = { ...lojaA };
  for (const item in lojaB) {
    inventarioFinal[item] = (inventarioFinal[item] || 0) + lojaB[item];
  }
  return inventarioFinal;
}

console.log(combinarInventarios(inventarioLojaA, inventarioLojaB));

// ---------------------------------------------
// 49. Agrupar transações por categoria e calcular subtotal
// ---------------------------------------------
const transacoes = [
  { id: 1, valor: 100, categoria: "Alimentação" },
  { id: 2, valor: 50, categoria: "Transporte" },
  { id: 3, valor: 200, categoria: "Alimentação" },
  { id: 4, valor: 150, categoria: "Educação" },
];

function agruparTransacoes(transacoes) {
  return transacoes.reduce((acumulador, transacao) => {
    const { categoria, valor } = transacao;
    if (!acumulador[categoria]) {
      acumulador[categoria] = { transacoes: [], subtotal: 0 };
    }
    acumulador[categoria].transacoes.push(transacao);
    acumulador[categoria].subtotal += valor;
    return acumulador;
  }, {});
}

console.log(agruparTransacoes(transacoes));

// ---------------------------------------------
// 50. Sistema de reserva de hotéis
// ---------------------------------------------
const hoteis = [];
const reservas = [];
let reservaId = 1;

function adicionarHotel(id, nome, cidade, quartosTotais) {
  hoteis.push({
    id,
    nome,
    cidade,
    quartosTotais,
    quartosDisponiveis: quartosTotais,
  });
}

function buscarHoteisPorCidade(cidade) {
  return hoteis.filter((hotel) => hotel.cidade === cidade);
}

function fazerReserva(idHotel, nomeCliente) {
  const hotel = hoteis.find((h) => h.id === idHotel);
  if (hotel && hotel.quartosDisponiveis > 0) {
    hotel.quartosDisponiveis--;
    reservas.push({ idReserva: reservaId++, idHotel, nomeCliente });
    console.log(
      `Reserva realizada para ${nomeCliente} no hotel ${hotel.nome}.`
    );
  } else {
    console.log("Não há quartos disponíveis.");
  }
}

function cancelarReserva(idReserva) {
  const reserva = reservas.find((r) => r.idReserva === idReserva);
  if (reserva) {
    const hotel = hoteis.find((h) => h.id === reserva.idHotel);
    hotel.quartosDisponiveis++;
    reservas.splice(reservas.indexOf(reserva), 1);
    console.log("Reserva cancelada com sucesso.");
  }
}

function listarReservas() {
  reservas.forEach((reserva) => {
    const hotel = hoteis.find((h) => h.id === reserva.idHotel);
    console.log(
      `Reserva ${reserva.idReserva}: Cliente ${reserva.nomeCliente} no hotel ${hotel.nome}`
    );
  });
}

// Adicionando hotéis para teste
adicionarHotel(1, "Hotel A", "Rio", 10);
adicionarHotel(2, "Hotel B", "São Paulo", 20);

// Testando o sistema
fazerReserva(1, "Carlos");
fazerReserva(2, "Ana");
listarReservas();
cancelarReserva(1);
listarReservas();