// Criação de uma Promise que simula uma operação assíncrona
let promise = new Promise((resolve, reject) => {
  // Simulando uma operação assíncrona usando setTimeout
  setTimeout(() => {
    let resposta = {};

    // Simulando uma condição para resolver ou rejeitar a Promise
    if (true) {
      // Troque para false para testar a resolução da Promise
      resposta = {
        codigo: 404,
        erro: "Objeto não encontrado",
      };

      // Rejeitando a Promise com uma resposta de erro
      reject(resposta);
    }

    // Resposta de sucesso
    resposta = {
      1: { id: 1, nome: "Caio" },
      2: { id: 1, nome: "Leonan" },
      3: { id: 1, nome: "Rogério" },
    };

    // Resolvendo a Promise com a resposta
    resolve(resposta);
  }, 4000); // A operação demora 4 segundos para ser concluída
})
  // Tratando a resolução da Promise
  .then((dados) => {
    console.log(dados); // Exibe os dados no console

    // Criação de outra Promise para encadeamento
    let promise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        let resposta = {};

        if (false) {
          // Troque para true para testar a rejeição da Promise
          resposta = {
            codigo: 1000,
            erro: "Assistir One Piece",
          };

          // Rejeitando a Promise com uma resposta de erro
          reject(resposta);
        }

        // Resposta de sucesso
        resposta = {
          1: { id: 1, nome: "Vanessa" },
          2: { id: 2, nome: "Fernanda" },
          3: { id: 3, nome: "Guilherme" },
        };

        // Resolvendo a Promise com a resposta
        resolve(resposta);
      }, 4000); // A operação demora 4 segundos para ser concluída
    })
      // Tratando a resolução da segunda Promise
      .then((dados) => {
        console.log(dados); // Exibe os dados no console
      })
      // Tratando a rejeição da segunda Promise
      .catch((erro) => {
        console.log(erro); // Exibe o erro no console
      });
  })
  // Encadeando mais operações após a primeira Promise
  .then(() => {
    console.log("then 2"); // Exibe "then 2" no console
    return "then 3"; // Retorna uma string para o próximo then
  })
  // Recebendo o valor retornado pelo then anterior
  .then((param) => {
    console.log(param); // Exibe "then 3" no console
  })
  // Tratando a rejeição da primeira Promise
  .catch((erro) => {
    console.log(erro); // Exibe o erro no console
  });
