import React from "react" // Importa a biblioteca React
import { createRoot } from 'react-dom/client' // Importa a função createRoot do ReactDOM para criar a raiz do React
import App from './src/app.js' // Importa o componente principal do aplicativo

// Obtém o elemento HTML com o ID 'root' onde o aplicativo React será renderizado
const container = document.getElementById('root')

// Cria a raiz do React usando o contêiner obtido
const root = createRoot(container)

// Renderiza o componente App dentro do contêiner
root.render(<App/>)
