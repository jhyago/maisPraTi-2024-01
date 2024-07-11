import React, { useEffect, useState } from 'react';

// Exemplo 1: useEffect sem dependências
function Example1() {
    useEffect(() => {
        // Este efeito será executado após cada renderização, tanto na montagem quanto nas atualizações do componente.
        console.log('Efeito sem dependências: montado ou atualizado');
    });

    return <h1>Exemplo 1</h1>;
}

// Exemplo 2: useEffect com dependências
function Example2({ dependencia1, dependencia2 }) {
    useEffect(() => {
        // Este efeito será executado apenas na montagem inicial e sempre que 'dependencia1' ou 'dependencia2' mudarem.
        console.log('Efeito com dependências: montado ou dependência mudou');
    }, [dependencia1, dependencia2]);

    return <h1>Exemplo 2</h1>;
}

// Exemplo 3: useEffect que executa apenas na montagem
function Example3() {
    useEffect(() => {
        // Este efeito será executado apenas uma vez, após a montagem do componente,
        // pois a lista de dependências está vazia e nunca mudará.
        console.log('Efeito uma vez na montagem');
    }, []);

    return <h1>Exemplo 3</h1>;
}

// Exemplo 4: useEffect com função de limpeza
function Example4({ dependencia }) {
    useEffect(() => {
        // Este efeito será executado na montagem inicial e sempre que 'dependencia' mudar.
        console.log('Efeito com função de limpeza: montado ou dependência mudou');
        
        // A função de limpeza retornada será executada antes da próxima execução do efeito
        // ou na desmontagem do componente.
        return () => {
            console.log('Função de limpeza: antes da próxima execução ou desmontagem');
        };
    }, [dependencia]);

    return <h1>Exemplo 4</h1>;
}

// Componente principal para demonstrar todos os exemplos
function App() {
    const [dep1, setDep1] = useState(0);
    const [dep2, setDep2] = useState(0);
    const [dep, setDep] = useState(0);

    return (
        <div>
            <h1>Demonstrando useEffect</h1>
            <Example1 />
            <Example2 dependencia1={dep1} dependencia2={dep2} />
            <Example3 />
            <Example4 dependencia={dep} />

            <button onClick={() => setDep1(dep1 + 1)}>Incrementar Dep1</button>
            <button onClick={() => setDep2(dep2 + 1)}>Incrementar Dep2</button>
            <button onClick={() => setDep(dep + 1)}>Incrementar Dep</button>
        </div>
    );
}

export default App;
