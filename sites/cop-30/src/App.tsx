import Titulo from './componentes/Titulo';
import Descricao from './componentes/Descricao';
import Cardproblema from './componentes/Cardproblema';
import Cardssolucao from './componentes/Cardsolucao';
import Alunos from './componentes/Alunos';
import './App.css';

function App() {
  return (
    <div className="container" id="app">
      <Titulo />
      <Descricao />
      <Cardproblema />
      <Cardssolucao />
      <Alunos />
    </div>
  );
}

export default App;
