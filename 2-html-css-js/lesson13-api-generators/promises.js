// Criação de uma Promise que simula uma operação assíncrona
let promise = new Promise((resolve, reject) => {
  // Simulando uma operação assíncrona usando setTimeout
  setTimeout(() => {
    let resposta = {};

    // Simulando uma condição para resolver ou rejeitar a Promise
    if (false) { // Altere para true para simular um erro
      resposta = {
        codigo: 404,
        erro: "Objeto não encontrado", // Mensagem de erro simulada
      };

      // Rejeitando a Promise com uma resposta de erro
      reject(resposta);
      return; // Retorna para evitar a execução do bloco de sucesso
    }

    // Resposta de sucesso simulada
    resposta = {
      1: { id: 1, nome: "Caio" },
      2: { id: 2, nome: "Leonan" },
      3: { id: 3, nome: "Rogério" },
    };

    // Resolvendo a Promise com a resposta
    resolve(resposta);
  }, 4000); // A operação demora 4 segundos para ser concluída
})
  // Tratando a resolução da Promise
  .then((dados) => {
    console.log("Dados recebidos na primeira promise:", dados);

    // Criação de outra Promise para encadeamento
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let resposta = {};

        if (false) { // Altere para true para testar a rejeição da Promise
          resposta = {
            codigo: 1000,
            erro: "Assistir One Piece", // Mensagem de erro personalizada
          };

          // Rejeitando a Promise com uma resposta de erro
          reject(resposta);
          return; // Retorna para evitar a execução do bloco de sucesso
        }

        // Resposta de sucesso simulada
        resposta = {
          1: { id: 1, nome: "Vanessa" },
          2: { id: 2, nome: "Fernanda" },
          3: { id: 3, nome: "Guilherme" },
        };

        // Resolvendo a Promise com a resposta
        resolve(resposta);
      }, 4000); // A operação demora 4 segundos para ser concluída
    });
  })
  // Tratando a resolução da segunda Promise
  .then((dados) => {
    console.log("Dados recebidos na segunda promise:", dados);
  })
  // Tratando a rejeição da segunda Promise
  .catch((erro) => {
    console.error("Erro na segunda promise:", erro);
  })
  // Encadeando mais operações após a primeira Promise
  .then(() => {
    console.log("then 2"); // Exibe "then 2" no console
    return "then 3"; // Retorna uma string para o próximo then
  })
  // Recebendo o valor retornado pelo then anterior
  .then((param) => {
    console.log("Resultado do segundo then:", param); // Exibe "then 3" no console
  })
  // Tratando a rejeição da primeira Promise
  .catch((erro) => {
    console.error("Erro na primeira promise:", erro);
  });
