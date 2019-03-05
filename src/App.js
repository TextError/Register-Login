import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Landing from './components/landing/Landing';
import Home from './components/home/Home';
import About from './components/about/About';
import Login from './components/authentication/Login/Login';
import Register from './components/authentication/register/Register';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Router>
            <div className='container-fluid'>
              <Navbar />
              <Route exact path='/home' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              
              <Footer />
            </div>
          </Router>
        </Switch>
      </Router>
    );
  }
}

export default App;
