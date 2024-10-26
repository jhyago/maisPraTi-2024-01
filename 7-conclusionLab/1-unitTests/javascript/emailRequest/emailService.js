module.exports = {
    send: (email, message) => {
      console.log(`Simulação: e-mail enviado para ${email} com a mensagem: ${message}`);
      return true;
    },
  };  