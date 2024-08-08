// Função para inserir valores no display da calculadora
function inserir(valor) {
    const tela = document.formulario.tela;
    
    // Verifica o comprimento máximo permitido da entrada
    if (tela.value.length < 14) {
        // Previne a inserção de operadores consecutivos
        if (isOperador(valor) && isOperador(tela.value[tela.value.length - 1])) {
            return; // Sai da função se dois operadores forem inseridos seguidos
        }

        tela.value += valor; // Adiciona o valor ao display
    }
}

// Função para limpar a tela da calculadora
function limparTela() {
    document.formulario.tela.value = ''; // Limpa o valor da tela
}

// Função para deletar o último caractere da entrada
function deletar() {
    const tela = document.formulario.tela;
    tela.value = tela.value.slice(0, -1); // Remove o último caractere
}

// Função para calcular o resultado da expressão inserida
function calcularTotal() {
    const tela = document.formulario.tela;
    const expressao = tela.value;

    // Verifica se há uma expressão válida para calcular
    if (expressao && !isOperador(expressao[expressao.length - 1])) {
        try {
            // Avalia a expressão usando uma função segura
            const resultado = calcularExpressao(expressao);
            tela.value = resultado; // Exibe o resultado na tela
        } catch (error) {
            alert('Expressão inválida'); // Alerta para expressões inválidas
            limparTela(); // Limpa a tela em caso de erro
        }
    }
}

// Função para verificar se um caractere é um operador
function isOperador(char) {
    return ['+', '-', '*', '/'].includes(char);
}

// Função para calcular a expressão matemática de forma segura
function calcularExpressao(expressao) {
    // Usa a função Function para calcular de forma mais segura do que eval
    return new Function('return ' + expressao)();
}