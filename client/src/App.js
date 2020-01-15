import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthProvider, useAuth } from './utils/auth'

import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Menu from './pages/Menu';
import Home from './pages/Home';

// Here is if we have an id_token in localStorage
if (localStorage.getItem('id_token')) {
  // then we will attach it to the headers of each request from react
  // application via axios
  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${localStorage.getItem('id_token')}`;
}

// makes it so that if users are not logged in and are 
// trying to access a protected route, then they will get 
// redirected to a specified page in this function
function ProtectedRoute({ children, ...rest }) {
  const { isLoggedIn } = useAuth();
  if (isLoggedIn) {
    return children;
  }
  return <Redirect to="/signup" />;
}


function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Switch>
          <Route exact path="/">
              <Home />
            </Route>
            <ProtectedRoute exact path="/menu">
              <Menu />
            </ProtectedRoute>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;