import Props from "./components/props"

const item = {
    author: "Jaques",
    favoriteBook: "Teste"
}

function App() {
    return (
        <div>
            <Props props={item}/>
        </div>
    )
}

export default App