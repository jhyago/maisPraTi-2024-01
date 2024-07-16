//DESAFIO 1

// import MyChildren from "./components/Filho"
// import { MyProvider } from "./components/Contexto"
import { useState, createContext, useContext } from 'react'

const PreferencesContext = createContext()

function App() {

  const [ preferences, setPreferences ] = useState({ theme: 'light', language: 'en'})

  const toggleTheme = () => {
    setPreferences(currentTheme => ({
      theme: currentTheme.theme === 'light' ? 'dark' : 'light'}))
  }

  const changeLanguage = (language) => {
    setPreferences(currentLanguage => ({
      ...currentLanguage,
      language: language
    }))
  }

  return (
    <>
      <PreferencesContext.Provider value={{ preferences, toggleTheme, changeLanguage }}>
          <div>
            <Toolbar />
            <button onClick={toggleTheme}>Trocar o tema</button>
            <button onClick={() => changeLanguage('pt-br')}>PT-BR</button>
            <button onClick={() => changeLanguage('en')}>EN</button>
          </div>
      </PreferencesContext.Provider>

    </>
  )
}

function Toolbar() {
  const { preferences } = useContext(PreferencesContext)

  return (
    <div style={{background: preferences.theme === 'dark' ? 'grey' : 'blue', color: preferences.theme === 'dark' ? 'white' : 'white'}}>
      Tema utilizado - {preferences.theme}, Idioma: {preferences.language}
    </div>
  )
}

export default App
