import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Auth/login';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header/Header';
import Sidebar from './sidebar/Sidebar';
import Widget from './widget/Widget';
import Feed from './Feed/Feed';

function App() {
  return (
    <div className="app">
     
      <Header />
      <div className="app__body">
      <Sidebar />
      <Feed />
      <Widget />
      </div>

    </div>
  );
}

export default App;
