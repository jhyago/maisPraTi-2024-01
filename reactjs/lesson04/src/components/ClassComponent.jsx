import { Component } from 'react' // Importa a classe Component da biblioteca React

// Define uma classe chamada MyComponent que estende a classe Component
class MyComponent extends Component {
    // Define o construtor da classe, que inicializa o estado e recebe props
    constructor(props) {
        super(props) // Chama o construtor da classe pai (Component)

        // Define o estado inicial do componente
        this.state = {
            contador: 0 // Inicializa a variável de estado 'contador' com 0
        }
    }

    // Define um método chamado 'add' que incrementa o valor de 'contador' no estado
    add = () => {
        // Atualiza o estado, incrementando 'contador' em 1
        this.setState({ contador: this.state.contador + 1 })
    }

    // Define o método render que especifica o que será exibido na interface do usuário
    render() {
        return (
            <div> {/* Define um contêiner div para agrupar os elementos */}
                <h1>Contador: {this.state.contador}</h1> {/* Exibe o valor de 'contador' */}
                <button onClick={this.add}>Incrementar</button> {/* Botão que chama o método 'add' ao ser clicado */}
            </div>
        )
    }
}

// Exporta a classe MyComponent como o export padrão deste módulo
export default MyComponent

// constructor(props): Este método é chamado quando uma instância do componente é criada. É usado para inicializar o estado e vincular métodos. 
// O super(props) é necessário para chamar o construtor da classe pai, que é Component, para que o componente tenha acesso a this.props.

// add: É um método que atualiza o estado do componente usando this.setState(). Isso informa ao React que o componente e seus filhos precisam ser renderizados novamente com o novo estado.

// render(): Este é o método mais importante em um componente de classe. Ele retorna o JSX (ou outro componente) que descreve como a UI deve aparecer. 
//O método render() é chamado automaticamente sempre que o estado ou as props do componente são atualizados.
