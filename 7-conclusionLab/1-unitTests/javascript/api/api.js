// api.js

// Função assíncrona que simula uma chamada a uma API e retorna um objeto de usuário
async function getUserData(userId) {
    if (!userId) throw new Error('User ID is required');
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve({ id: userId, name: 'Alice', age: 25 });
      }, 1000)
    );
  }
  
  module.exports = getUserData;
  