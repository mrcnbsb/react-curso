import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {

  const nome = "Marcone"

  return (
    <div className="App">          
     <SayMyName nome="João" />
     <SayMyName nome="Maria" />
     <SayMyName nome="Pedro" />
     <SayMyName nome="Ana" />
     <SayMyName nome="Lucas" />
     <SayMyName nome={nome} />
     <Pessoa nome="Marcone" idade={46} profissao="Desenvolvedor" foto="https://via.placeholder.com/150" />     
    </div>
  );
}

export default App;
