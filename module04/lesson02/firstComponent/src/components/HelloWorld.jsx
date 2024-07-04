// Importa os estilos do arquivo HelloWorld.module.css
import classes from './HelloWorld.module.css'

// Define um array com uma lista de livros
const books = ['O Hobbit', 'Harry Potter', 'Nárnia']

// Define um componente funcional chamado HelloWorld
function HelloWorld(){

    // Escolhe aleatoriamente entre 'O Hobbit' e 'Harry Potter'
    const chosenBook = Math.random() > 0.5 ? books[0] : books[1]

    // Retorna o JSX que será renderizado na tela
    return (
        <div>
            {/* Renderiza um título h1 com a classe HelloWorld aplicada */}
            <h1 className= {classes.HelloWorld}>Hello world, sou o Edu</h1>
            
            {/* Renderiza um parágrafo com o livro escolhido */}
            <p>{chosenBook}</p>
        </div>
    )
}

// Exporta o componente HelloWorld para ser usado em outros arquivos
export default HelloWorld
