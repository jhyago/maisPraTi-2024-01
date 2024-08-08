// Importa o hook useState da biblioteca React
import { useState } from 'react';

// Define o componente funcional StdForm
function StdForm() {
    // Declara um estado chamado 'name' com o hook useState
    // 'setName' é a função para atualizar o valor de 'name'
    const [name, setName] = useState('');

    // Função para lidar com a mudança no input
    const handleChange = (event) => {
        // Atualiza o estado 'name' com o valor atual do input
        setName(event.target.value);
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (event) => {
        // Previne o comportamento padrão do formulário (recarregar a página)
        event.preventDefault();

        // Exibe um alerta com a mensagem personalizada
        alert(`Olá ${name}`);
    };

    // Retorna o JSX do componente, que é o formulário
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome:
                {/* Input controlado vinculado ao estado 'name' */}
                <input type="text" value={name} onChange={handleChange} />
            </label>
            {/* Botão de envio do formulário */}
            <button type='submit'>Enviar</button>
        </form>
    );
}

// Exporta o componente StdForm como padrão
export default StdForm;
