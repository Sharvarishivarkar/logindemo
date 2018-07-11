import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './login/login.js';
import HomePage from './home/home.js';
import RegisterPage from './register/register.js';
//import { Router, Route, Link } from 'react-router-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';
 
class App extends Component {
  render() {
    return (
      
      // <div className="App">
      // <Router> 
      // <div> <Route exact path="./login" component={LoginPage}/> 
      // <Route path="/news" component={NewsFeed}/> 
      // </div> </Router>
      //   <LoginPage/>
      //   <RegisterPage/>
        <Router>
        <div className="App">
        <Route path="/" component={HomePage}/> 
        <Route exact path="/login" component={LoginPage}/>
       <Route path="/Register" component={RegisterPage}/>

       {/* <LoginPage/> */}
        {/* <RegisterPage/> */}

        </div>
        </Router>

      // </div>
    );
  }
}

export default App;
