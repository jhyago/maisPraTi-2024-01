// api.test.js

const getUserData = require('./api');

describe('Função getUserData', () => {
  // Teste para verificar se a função retorna os dados corretos do usuário
  test('deve retornar os dados do usuário para um ID válido', async () => {
    const userData = await getUserData(1);
    expect(userData).toEqual({ id: 1, name: 'Alice', age: 25 });
  });

  // Teste para verificar se a função lança um erro ao não passar o ID do usuário
  test('deve lançar um erro se o ID do usuário não for fornecido', async () => {
    await expect(getUserData()).rejects.toThrow('User ID is required');
  });
});
