import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App() {

  return (
    <>
      <Router>
        <Navigation />   
        <Routes>
          {/* <Route path='/' Component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/contact' Component={Contact} /> */}

          <Route path='/' Component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/contact' element={<Navigate to="/"/>} /> 
        </Routes>
      </Router>
    </>
  )
}

export default App
