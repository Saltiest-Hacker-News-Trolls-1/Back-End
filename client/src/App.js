import React, { useEffect } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import FormikLoginForm from './components/LoginForm';
import FormikRegisterForm from "./components/RegisterForm";
import FormikChangePassForm from "./components/User/ChangePassForm"
import PrivateRoute from "./utils/PrivateRoute";
import UserProfile from "./components/User/UserProfile";
import Navbar from './components/Navigation';
import { axiosWithAuth } from './utils/axiosWithAuth';
import { useHistory } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';


function App() {
  console.log(localStorage.token)
  const history = useHistory()

  // THis funciton should just check if there was no error, redirect to profile, which will
  // make a call to the same /hackers/get route, but actually use the hackers data to populate state
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      axiosWithAuth()
        .get("/hackers/get")
        .then(res => {
          console.log("get hackers", res)
          history.push("/profile")
        })
        .catch(err => console.log(err.response))
    }
  }, [history])

  return (
    <div className="App" /* please no more onEnter, just use the hook --igor */ /* what does this mean? --tanner */>
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route exact path="/about" render={props => <About {...props} />} />
        <PrivateRoute path="/profile">
          <UserProfile />
        </PrivateRoute>
        <Route exact path="/login" render={props => (<><Navbar {...props} /> <FormikLoginForm {...props} /></>)} />
        <Route exact path="/register" render={props => (<><Navbar {...props} /> <FormikRegisterForm {...props} /></>)} />
        <Route exact path="/change" render={props => (<><Navbar {...props} /> <FormikChangePassForm {...props} /></>)} />
      </Switch>
    </div>
  );
}

export default App;

