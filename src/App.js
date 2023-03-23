import logo from './logo.svg';
import './App.css';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
  

  return (
    <div className="App">
      <Frase />
      <h1>Testando CSS</h1>
      <Pessoa nome="Mali" idade="28" profissao="Programador" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
