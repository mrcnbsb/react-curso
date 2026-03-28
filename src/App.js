import './App.css';
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase';
import List from './components/List';

function App() {

  const nome = "Marcone"

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />          
      <Frase />          
      <SayMyName nome="João" />
      <SayMyName nome="Maria" />
      <SayMyName nome="Pedro" />
      <SayMyName nome="Ana" />
      <SayMyName nome="Lucas" />
      <SayMyName nome={nome} />
      <Pessoa nome="Marcone" idade={46} profissao="Desenvolvedor" foto="https://via.placeholder.com/150" />     
      <List />
    </div>
  );
}

export default App;
