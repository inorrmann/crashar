import React from "react";
import Nav from "react-bootstrap/Navbar";
import NavBar from "../components/Navbar/index";
import NavbarLink from "../components/NavbarLink/index";
import NavbarBrand from "../components/NavbarBrand/index";
import ButtonSubmit from "../components/ButtonSubmit/index";
import "./Pages.css";

const styleLink = { fontSize: "2rem", color: "#EBC023" }
const styleBrand = { color: "#EBC023" }
const styleButton = { backgroundColor: "#EBC023", color: "#574F44", fontWeight: "bold" }

function Signup() {
    return (
        <div className="signup">
            <NavBar>
                <Nav>
                    <NavbarBrand style={styleBrand} />
                </Nav>
                <Nav className="ml-auto">
                    <NavbarLink className="ml-5" link="/home" navTag={<i className="fas fa-campground"></i>} style={styleLink} />
                </Nav>
            </NavBar>
            <div className="my-5">
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>
    )
}










// import React, { useState } from 'react';
// import { Link, Redirect, useHistory } from 'react-router-dom';
// import API from './../utils/API';
// import {useAuth} from '../utils/auth'


// function Signup() {
//   const [formState, setFormState] = useState({
//     username: '',
//     email: '',
//     password: ''
//   });

//   const { isLoggedIn } = useAuth()

//   const history = useHistory()

//   if (isLoggedIn) {
//     return <Redirect to="/" />;
//   }

//   const handleFormSubmit = event => {
//     event.preventDefault();
//     API.signUpUser(formState.username, formState.email, formState.password)
//       .then(res => {
//         // once the user has signed up
//         // send them to the login page
//         history.replace('/login');
//       })
//       .catch(err => alert(err));
//   };

//   const handleChange = event => {
//     const { name, value } = event.target;
//     setFormState({
//       ...formState,
//       [name]: value
//     });
//   };

//   return (
//     <div className="container">
//       <h1>Signup</h1>
//       <form onSubmit={handleFormSubmit}>
//         <div className="form-group">
//           <label htmlFor="username">Username:</label>
//           <input
//             className="form-control"
//             placeholder="Username goes here..."
//             name="username"
//             type="text"
//             id="username"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email address:</label>
//           <input
//             className="form-control"
//             placeholder="Email goes here..."
//             name="email"
//             type="email"
//             id="email"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="pwd">Password:</label>
//           <input
//             className="form-control"
//             placeholder="Password goes here..."
//             name="password"
//             type="password"
//             id="pwd"
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//       <p>
//         <Link to="/login">Go to Login</Link>
//       </p>
//     </div>
//   );
// }

export default Signup;
