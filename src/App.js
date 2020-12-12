import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import contact from './components/pages/contact';
import degree from './components/pages/degree';
import register from './components/pages/register';
import login from './components/pages/login';
import Application from './components/pages/Application';

function App() {
  return ( 
    <>
    <Router>
      < Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={contact} />
        <Route path="/degree" exact component={degree} />
        <Route path="/register" exact component={register} />
        <Route path="/login" exact component={login} />
        <Route path="/application" exact component={Application} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
