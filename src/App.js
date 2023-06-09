import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import NavBar from './components/layout/NavBar';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Home from './pages/Home';

function App() {
  
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
          <Route path="/" element={<Home/>}>

          </Route>
          <Route path="/empresa" element={<Empresa/>}>
              
          </Route>
          <Route path="/contato" element={<Contato/>}>
              
          </Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
