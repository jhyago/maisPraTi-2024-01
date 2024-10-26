// Importando a função soma que vamos testar
const soma = require('./calculadora');

describe('Função soma', () => {
  // Teste para verificar se a soma de 2 e 3 resulta em 5
  test('deve somar 2 e 3 e retornar 5', () => {
    // Chamamos a função e verificamos se o resultado é o esperado
    expect(soma(2, 3)).toBe(5);
  });

  // Teste para verificar a soma de números negativos
  test('deve somar -1 e -1 e retornar -2', () => {
    expect(soma(-1, -1)).toBe(-2);
  });

  // Teste para somar um número positivo e um número negativo
  test('deve somar 5 e -3 e retornar 2', () => {
    expect(soma(5, -3)).toBe(2);
  });
});
