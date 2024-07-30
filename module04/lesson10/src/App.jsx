import Home from './components/Home'
import IpAddressFinder from './components/IpAddressFinder'
import LanguageTranslator from './components/LanguageTranslator'
import Login from './components/Login'
import MovieSearchEngine from './components/MovieSearchEngine'
import PageNotFound from './components/PageNotFound'
import QRCodeGenerator from './components/QRCodeGeneretor'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from './context/AuthContext'
import QuizApp from './components/QuizApp'

function App() {

  return (
    <>
    <Router>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="IpAddressFinder" element={<IpAddressFinder />} />
        <Route path="LanguageTranslator" element={<LanguageTranslator />} />
        <Route path="MovieSearchEngine" element={<MovieSearchEngine />} />
        <Route path="QRCodeGenerator" element={<QRCodeGenerator />} />
        <Route path="QuizApp" element={<QuizApp />} />
        <Route path="Login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </AuthProvider>
    </Router>
    
    </>
  )
}

export default App
