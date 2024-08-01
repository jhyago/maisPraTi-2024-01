// Importa o hook useState da biblioteca React
import { useState } from 'react';

// Define o componente funcional RegistrationForm
const RegistrationForm = () => {
    // Declara um estado formData para armazenar os dados do formulário
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // Declara um estado errors para armazenar mensagens de erro
    const [errors, setErrors] = useState({});

    // Declara um estado submitted para verificar se o formulário foi enviado com sucesso
    const [submitted, setSubmitted] = useState(false);

    // Função para validar os dados do formulário
    const validate = () => {
        // Objeto para armazenar novos erros
        const newErrors = {};

        // Verifica se o campo 'name' está vazio
        if (!formData.name) newErrors.name = 'Nome é obrigatório';

        // Valida o campo 'email'
        if (!formData.email) {
            newErrors.email = 'Email é obrigatório';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            // Verifica se o email tem um formato válido
            newErrors.email = 'Email Inválido';
        }

        // Valida o campo 'password'
        if (!formData.password) {
            newErrors.password = "O campo de senha é obrigatório";
        } else if (formData.password.length < 8) {
            // Verifica se a senha tem pelo menos 8 caracteres
            newErrors.password = "O campo de senha precisa de ao menos 8 caracteres";
        }

        // Valida o campo 'confirmPassword'
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "O campo de senha é obrigatório";
        } else if (formData.confirmPassword !== formData.password) {
            // Verifica se a senha de confirmação coincide com a senha original
            newErrors.confirmPassword = "O campo de senha precisa coincidir";
        }

        // Retorna o objeto de erros
        return newErrors;
    };

    // Função para lidar com mudanças nos campos de entrada
    const handleChange = (event) => {
        // Atualiza o estado formData com o valor do campo modificado
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (event) => {
        // Previne o comportamento padrão do formulário (recarregar a página)
        event.preventDefault();

        // Chama a função validate para validar os dados do formulário
        const validationErrors = validate();

        // Verifica se não há erros de validação
        if (Object.keys(validationErrors).length === 0) {
            // Define submitted como verdadeiro se não houver erros
            setSubmitted(true);
            // Limpa os erros, caso existam
            setErrors({});
        } else {
            // Define os erros de validação no estado errors
            setErrors(validationErrors);
        }
    };

    // Retorna o JSX do componente
    return (
        <div>
            <h2>Registre-se</h2>
            {/* Exibe uma mensagem de sucesso se o formulário for enviado */}
            {submitted && <p>Registrado com sucesso!</p>}
            <form onSubmit={handleSubmit}>
                {/* Campo de entrada para Nome */}
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {/* Exibe a mensagem de erro se houver erro no campo 'name' */}
                    {errors.name && <p>{errors.name}</p>}
                </div>

                {/* Campo de entrada para E-mail */}
                <div>
                    <label>E-mail:</label>
                    <input
                        type="text"
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {/* Exibe a mensagem de erro se houver erro no campo 'email' */}
                    {errors.email && <p>{errors.email}</p>}
                </div>

                {/* Campo de entrada para Senha */}
                <div>
                    <label>Senha:</label>
                    <input
                        type="password"
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {/* Exibe a mensagem de erro se houver erro no campo 'password' */}
                    {errors.password && <p>{errors.password}</p>}
                </div>

                {/* Campo de entrada para Confirmar Senha */}
                <div>
                    <label>Repita sua senha:</label>
                    <input
                        type="password"
                        name='confirmPassword'
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {/* Exibe a mensagem de erro se houver erro no campo 'confirmPassword' */}
                    {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                </div>

                {/* Botão para submeter o formulário */}
                <button type='submit'>Registrar</button>
            </form>
        </div>
    );
};

// Exporta o componente RegistrationForm como padrão
export default RegistrationForm;