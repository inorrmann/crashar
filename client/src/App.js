import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </Router>
  );

}

export default App;







// import React from 'react';
// import { useHistory } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
// import { useAuth } from './utils/auth';

// function App() {
//   const { user, logout } = useAuth();
//   const history = useHistory();

//   const goToEditProfile = () => history.push('/profile');

//   return (
//     <div className="App">
//       <div className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h2>Welcome {user.email}</h2>
//       </div>
//       <p className="App-intro">
//         <button
//           type="button"
//           className="btn btn-primary"
//           onClick={goToEditProfile}
//         >
//           Go to Profile
//         </button>
//         <button
//           type="button"
//           className="btn btn-danger"
//           onClick={() => logout()}
//         >
//           Logout
//         </button>
//       </p>
//     </div>
//   );
// }

// export default App;
