// Importa os hooks useState e useEffect do React
import { useState, useEffect } from "react";

// Define um componente funcional chamado UserProfile
function UserProfile() {
  // Declara uma variável de estado 'user' e uma função para atualizá-la 'setUser'
  // Inicialmente, 'user' é null
  const [user, setUser] = useState(null);

// useEffect configura um efeito que busca dados do usuário de uma API.
// Dentro do useEffect, é definida uma função assíncrona fetchUserData que faz uma requisição fetch para obter dados do usuário e 
//atualiza o estado user com os dados recebidos.
// A função fetchUserData é chamada imediatamente após sua definição.
// Retorna uma função de limpeza que será executada quando o componente for desmontado, limpando o estado user com setUser(null).
// O array vazio [] como segundo argumento indica que o efeito só deve ser executado uma vez, após a montagem do componente.
  useEffect(() => {
    // Define uma função assíncrona para buscar dados do usuário
    const fetchUserData = async () => {
      // Faz uma requisição para a API e espera pela resposta
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/1`
      );
      // Converte a resposta em JSON
      const userData = await response.json();
      // Atualiza o estado 'user' com os dados recebidos
      setUser(userData);
    };

    // Chama a função para buscar dados do usuário
    fetchUserData();

    // A função de limpeza é retornada e será chamada quando o componente for desmontado
    return () => setUser(null);
  }, []); // O array vazio como segundo argumento garante que o efeito só será executado uma vez, após a montagem do componente

  // Renderiza o conteúdo do componente
  return (
    <div>
      {/* Se 'user' não for null, exibe os dados do usuário */}
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <h1>{user.email}</h1>
        </div>
      ) : (
        // Caso contrário, exibe uma mensagem de carregamento
        <p>Carregando perfil de Usuário</p>
      )}
    </div>
  );
}

// Exporta o componente UserProfile como padrão para que possa ser importado em outros arquivos
export default UserProfile;

//
