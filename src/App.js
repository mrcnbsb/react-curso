import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'

function App() {

  return (
    <Router>
     <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
