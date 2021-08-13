import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Auth/login";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Header from "./Header/Header";
import Sidebar from "./sidebar/Sidebar";
import Widget from "./widget/Widget";
import Feed from "./Feed/Feed";
import { selectUser } from "./features/userSlice";
import Content from "./Auth/Content";

function App() {
  const userState = useSelector(selectUser);
  const { user } = userState;
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Content />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      )}
    </div>
  );
}

export default App;
