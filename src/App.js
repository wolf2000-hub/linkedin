import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./Header/Header";
import Sidebar from "./sidebar/Sidebar";
import Widget from "./widget/Widget";
import Feed from "./Feed/Feed";
import { login, logout, selectUser } from "./features/userSlice";
import Content from "./Auth/Content";
import { auth } from "./firebase";

function App() {
  const userState = useSelector(selectUser);
  const { user } = userState;
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        /* user is login */
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <Router>
      {!user ? (
        <div className="app">
          <Content />
        </div>
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Route path="/">
              <Sidebar />
              <Feed />
              <Widget />
            </Route>
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
