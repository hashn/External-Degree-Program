import React from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Contactus from './pages/Contactus'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
  return (
   <>
   <Router>

        <Header/>
          <Switch>
            <Route>
                  <Route  exact path='/' component={Home}/>
                  <Route  exact path='/Contactus' component={Contactus}/>
            </Route>
          </Switch>
        <Footer/>
   </Router>
   </>
  )
}

export default App;
