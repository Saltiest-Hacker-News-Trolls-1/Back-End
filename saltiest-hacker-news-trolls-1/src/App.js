import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import FormikLoginForm from './components/LoginForm';
import FormikRegisterForm from "./components/RegisterForm";
import PrivateRoute from "./utils/PrivateRoute";
import UserProfile from "./components/User/UserProfile";
import Navbar from './components/Navigation';
import Nav from './components/Nav'
import { axiosWithAuth } from './utils/axiosWithAuth';
import {useHistory} from "react-router-dom";
import About from './components/About';


function App() {
  console.log(localStorage.token)
  const history = useHistory()

  const isLoggedIn = () => {
    axiosWithAuth()
      .post("")
      .then(res => {
        console.log("login", res)
        localStorage.setItem("token", res.data.payload)
        history.push("/protected")
      })
      .catch(err => console.log(err.response))
  }

  return (
    <div className="App" onEnter={isLoggedIn}>
      <Switch>
        <Route exact path="/" render={props => <Nav {...props} />} />
        <Route exact path="/about" render={props => <About {...props} />} />
        <PrivateRoute path="/protected">
          <UserProfile />
        </PrivateRoute>
        <Route exact path="/login" render={props => (<><Navbar /> <FormikLoginForm {...props} /></>)} />
        <Route exact path="/register" render={props => (<><Navbar /> <FormikRegisterForm {...props} /></>)} /> 
      </Switch>

      {/* other routes */}
    </div>
  );
}

export default App;

