// Importa o hook useState da biblioteca React
import { useState } from 'react';

// Define o componente funcional Form2
function Form2() {
    // Declara um estado 'address' usando useState
    // 'address' é um objeto que contém 'street', 'city', e 'postalCode'
    const [address, setAddress] = useState({
        street: '',
        city: '',
        postalCode: ''
    });

    // Função para lidar com mudanças nos campos de entrada
    const handleChange = (event) => {
        // Desestrutura 'name' e 'value' do target do evento
        const { name, value } = event.target;

        // Atualiza o estado 'address' mantendo o estado anterior
        setAddress(prevState => ({
            ...prevState, // Mantém os outros campos inalterados
            [name]: value // Atualiza apenas o campo que foi modificado
        }));
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (event) => {
        // Previne o comportamento padrão do formulário (recarregar a página)
        event.preventDefault();

        // Verifica se todos os campos foram preenchidos
        if (!address.street || !address.city || !address.postalCode) {
            // Exibe um alerta se algum campo estiver vazio
            alert('Por favor, preencha todos os campos antes de submeter.');
        } else {
            // Exibe um alerta com os dados do endereço se todos os campos estiverem preenchidos
            alert(`Endereço submetido: \nRua: ${address.street}\nCidade: ${address.city}\nCEP: ${address.postalCode}`);
        }
    };

    // Retorna o JSX do componente, que é o formulário
    return (
        <form onSubmit={handleSubmit}>
            {/* Campo de entrada para Rua */}
            <label>
                Rua:
                <input
                    type="text"
                    name='street' // Define o nome do campo, usado no estado
                    value={address.street} // Controla o valor do campo
                    onChange={handleChange} // Chama handleChange quando o valor muda
                />
            </label>
            <br />

            {/* Campo de entrada para Cidade */}
            <label>
                Cidade:
                <input
                    type="text"
                    name='city'
                    value={address.city}
                    onChange={handleChange}
                />
            </label>
            <br />

            {/* Campo de entrada para CEP */}
            <label>
                CEP:
                <input
                    type="text"
                    name='postalCode'
                    value={address.postalCode}
                    onChange={handleChange}
                />
            </label>
            <br />

            {/* Botão de envio do formulário */}
            <button type='submit'>Submeter</button>
        </form>
    );
}

// Exporta o componente Form2 como padrão
export default Form2;