import MyChildren from "./components/Filho"
import { MyProvider } from "./components/Contexto"

function App() {

  return (
    <>
      <MyProvider>
        <MyChildren/>
      </MyProvider>
    </>
  )
}

export default App
