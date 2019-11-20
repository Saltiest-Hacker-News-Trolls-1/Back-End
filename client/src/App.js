import React, { useEffect } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, Redirect } from "react-router-dom";
import FormikLoginForm from './components/LoginForm';
import FormikRegisterForm from "./components/RegisterForm";
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

  // const isLoggedIn = () => {
  //   axiosWithAuth()
  //     .get("/hackers/get")
  //     .then(res => {
  //       console.log("get hackers", res)
  //       // localStorage.setItem("token", res.data.payload)
  //       history.push("/protected")
  //     })
  //     .catch(err => console.log(err.response))
  // }


  const isToken = useEffect(() => {
    axiosWithAuth()
      .get("/hackers/get")
      .then(res => {
        console.log("get hackers", res)
        // localStorage.setItem("token", res.data.payload)
        history.push("/protected")
      })
      .catch(err => console.log(err.response))
  }, [history])

  return (
    <div className="App" onEnter={() => !localStorage.token === null ? { isToken } : <Redirect to="/" />}>
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route exact path="/about" render={props => <About {...props} />} />
        <PrivateRoute path="/protected">
          <UserProfile />
        </PrivateRoute>
        <Route exact path="/login" render={props => (<><Navbar {...props} /> <FormikLoginForm {...props} /></>)} />
        <Route exact path="/register" render={props => (<><Navbar {...props} /> <FormikRegisterForm {...props} /></>)} />
      </Switch>

      {/* other routes */}
    </div>
  );
}

export default App;

