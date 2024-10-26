const emailService = require('./emailService');

function enviarEmail(usuario, mensagem) {
  if (!usuario.email) {
    throw new Error('Usuário deve ter um e-mail');
  }
  return emailService.send(usuario.email, mensagem);
}

module.exports = enviarEmail;
