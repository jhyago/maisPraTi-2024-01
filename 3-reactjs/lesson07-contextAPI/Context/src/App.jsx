// Importa useState, createContext, e useContext da biblioteca React
import { useState, createContext, useContext } from 'react';

// Cria o contexto PreferencesContext
const PreferencesContext = createContext();

// Componente principal App
function App() {
    // Define o estado inicial das preferências
    const [preferences, setPreferences] = useState({ theme: 'light', language: 'en' });

    // Função para alternar o tema entre 'light' e 'dark'
    const toggleTheme = () => {
        setPreferences(currentPreferences => ({
            ...currentPreferences, // Preserva as outras propriedades do estado
            theme: currentPreferences.theme === 'light' ? 'dark' : 'light' // Alterna o valor do tema
        }));
    };

    // Função para alterar o idioma
    const changeLanguage = (language) => {
        setPreferences(currentPreferences => ({
            ...currentPreferences, // Preserva as outras propriedades do estado
            language: language // Define o novo idioma
        }));
    };

    // Retorna o JSX do componente
    return (
        <>
            {/* Provedor do contexto PreferencesContext */}
            <PreferencesContext.Provider value={{ preferences, toggleTheme, changeLanguage }}>
                <div>
                    <Toolbar />
                    <button onClick={toggleTheme}>Trocar o tema</button>
                    <button onClick={() => changeLanguage('pt-br')}>PT-BR</button>
                    <button onClick={() => changeLanguage('en')}>EN</button>
                </div>
            </PreferencesContext.Provider>
        </>
    );
}

// Componente Toolbar que utiliza o contexto
function Toolbar() {
    // Usa o hook useContext para acessar o contexto PreferencesContext
    const { preferences } = useContext(PreferencesContext);

    // Retorna o JSX do componente Toolbar
    return (
        <div style={{
            background: preferences.theme === 'dark' ? 'grey' : 'blue', // Estilo de fundo baseado no tema
            color: preferences.theme === 'dark' ? 'white' : 'white' // Cor do texto
        }}>
            Tema utilizado - {preferences.theme}, Idioma: {preferences.language}
        </div>
    );
}

// Exporta o componente App como padrão
export default App;