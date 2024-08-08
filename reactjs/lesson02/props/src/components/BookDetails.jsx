/* eslint-disable react/prop-types */

// Define um componente funcional chamado DisplayProps que recebe um objeto props como argumento e o desestrutura. 
// Lembrando que as chaves são utilizadas para que seja permitido inserir expressões JS em arquivos JSX
function DisplayProps({ author, favoriteBook }) {
    return (
        <div>
            {/* Renderiza um parágrafo com o autor recebido via props */}
            <p>{author}</p>
            
            {/* Renderiza um parágrafo com o livro favorito recebido via props */}
            <p>{favoriteBook}</p>
        </div>
    )
}

// Exporta o componente DisplayProps para ser usado em outros arquivos
export default DisplayProps
