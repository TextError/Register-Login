import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Home from './components/home/Home';
import SignIn from './components/authentication/signIn/SignIn';
import Register from './components/authentication/register/Register';
import Dashboard from './components/dashboard/Dashboard';
import NotFound from './components/common/components/Not_Found';

// Redux
import store from './store';
import { Provider } from 'react-redux';

// Layout
import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';

// Common
import PrivateRoute from './components/common/privateRoute';

// Css
import './css/app.css';
import './css/responsive.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='app-container'>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/Sign-In' component={SignIn} />
              <Route exact path='/register' component={Register} />
              <Route component={NotFound} />
            </Switch>

            <Switch>
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
            </Switch>
            
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
