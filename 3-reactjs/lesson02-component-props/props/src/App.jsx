// Importa o componente BookDetails do arquivo ./components/BookDetails
import BookDetails from "./components/BookDetails"

// Define um objeto com os detalhes do autor e seu livro favorito
const item = {
    author: "Jaques",
    favoriteBook: "Teste"
}

// Define o componente App que utiliza o componente BookDetails
function App() {
    return (
        <div>
            {/* Passa o objeto item desestruturado como props para o componente BookDetails */}
            <BookDetails author={item.author} favoriteBook={item.favoriteBook} />
        </div>
    )
}

// Exporta o componente App para ser usado em outros arquivos
export default App
