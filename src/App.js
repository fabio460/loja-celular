
import './App.css';
import Home from './home';
import {Switch,Link,BrowserRouter,Route} from 'react-router-dom'
import TelaDeVenda from './telaDeVenda';
import TelaDeCadastro from './telaDeCadastro';
function App() {

  return (
    <div className="meuApp">
      
      <BrowserRouter>
          <Link to="/"></Link>
          <Link to="/venda"></Link>
          <Link to="/cadastro"></Link>
          <Switch>
              <Route exact path="/"> <Home/></Route>
              <Route path="/venda"><TelaDeVenda/></Route>
              <Route path="/cadastro"><TelaDeCadastro/></Route>
          </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
