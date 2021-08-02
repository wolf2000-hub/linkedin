import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Auth/login';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
          <Route exact path='/'>
             <Login />
          </Route>
          <Route exact path='/Home'>
             <Home />
          </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
