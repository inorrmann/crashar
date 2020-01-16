import React from 'react';
// import ReactDOM from 'react-dom';
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
import Messages from './pages/Messages';
import Signup from './pages/Signup';
import Menu from './pages/Menu';
import Landing from './pages/Landing';
// import Home from './pages/Home';

// Here is if we have an id_token in localStorage
if (localStorage.getItem('id_token')) {
  // then we will attach it to the headers of each request from react application via axios
  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${localStorage.getItem('id_token')}`;
}

// makes it so that if users are not logged in and are trying to access a protected route, then they will get redirected to a specified page in this function
function ProtectedRoute({ children, ...rest }) {
  const { isLoggedIn } = useAuth();
  if (isLoggedIn) {
    return children;
  }
  return <Redirect to="/home" />;
}


function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Switch>
            <ProtectedRoute exact path="/">
              <Menu />
            </ProtectedRoute>
            {/* <ProtectedRoute exact path="/menu">
              <Menu />
            </ProtectedRoute> */}
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <ProtectedRoute path="/messages/:id">
              <Messages />
            </ProtectedRoute>
            <ProtectedRoute exact path="/spots/new">
              {/* <ShareSpot /> */}
            </ProtectedRoute>
            <ProtectedRoute path="/spots/:id">
              {/* <SeeMySpots /> */}
            </ProtectedRoute>
            <Route exact path="/home">
              <Landing />
            </Route>
            <Route exact path="/spots/search">
              {/* <SearchSpots /> */}
            </Route>
          </Switch>
        </div>
      </Router> 
    </AuthProvider>
  );
}

export default App;