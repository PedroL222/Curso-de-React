
import './App.css';
import HellowWorld from './components/HelloWorld';
import Frase from './components/Frase';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {

  const url = "https://via.placeholder.com/150";

  
  return (
    <div className="App">
      <Evento />
      <Form />
    </div>
  );
}

export default App;
