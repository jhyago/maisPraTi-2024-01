const enviarEmail = require('./email');
const emailService = require('./emailService');

// Criando o mock da função send do emailService
jest.mock('./emailService', () => ({
  send: jest.fn(),
}));

describe('Função enviarEmail', () => {
  test('deve chamar emailService.send com o e-mail do usuário e a mensagem', () => {
    const usuario = { email: 'teste@dominio.com' };
    const mensagem = 'Olá, teste!';
    
    enviarEmail(usuario, mensagem);

    // Verifica se emailService.send foi chamado com os parâmetros corretos
    expect(emailService.send).toHaveBeenCalledWith(usuario.email, mensagem);
  });

  // Teste para verificar se a função lança um erro caso o usuário não tenha e-mail
  test('deve lançar um erro se o usuário não tiver um e-mail', () => {
    const usuario = { nome: 'Teste' };
    const mensagem = 'Olá, teste!';
    
    expect(() => enviarEmail(usuario, mensagem)).toThrow('Usuário deve ter um e-mail');
  });
});