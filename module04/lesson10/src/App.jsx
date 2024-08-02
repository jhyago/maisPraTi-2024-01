import Home from './pages/Home'
import IpAddressFinder from './pages/IpAddressFinder'
import LanguageTranslator from './pages/LanguageTranslator'
import Login from './pages/Login'
import MovieSearchEngine from './pages/MovieSearchEngine'
import PageNotFound from './pages/PageNotFound'
import QRCodeGenerator from './pages/QRCodeGeneretor'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from './context/AuthContext'
import QuizApp from './pages/QuizApp'
import ToDoList from './pages/ToDoList'
import GlobalCss from './global_css'
import RegisterUser from './pages/RegisterUser'

function App() {

  return (
    <>
    <Router>
      <AuthProvider>
      <GlobalCss>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="IpAddressFinder" element={<IpAddressFinder />} />
        <Route path="LanguageTranslator" element={<LanguageTranslator />} />
        <Route path="MovieSearchEngine" element={<MovieSearchEngine />} />
        <Route path="QRCodeGenerator" element={<QRCodeGenerator />} />
        <Route path="QuizApp" element={<QuizApp />} />
        <Route path="ToDoList" element={<ToDoList />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<RegisterUser />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </GlobalCss>
      </AuthProvider>
    </Router>
    
    </>
  )
}

export default App
