import React from "react";
import Nav from "react-bootstrap/Navbar";
import NavBar from "../components/Navbar/index";
import NavbarLink from "../components/NavbarLink/index";
import NavbarBrand from "../components/NavbarBrand/index";
import ButtonSubmit from "../components/ButtonSubmit/index";
import "./Pages.css";

const styleLink = { fontSize: "2rem", color: "#574F44"}
const styleBrand = { color: "#574F44" }
const styleButton = { backgroundColor: "#EBC023", color: "#574F44", fontWeight: "bold" }

function Login() {
    return (
        <div className="login">
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

            {/* <form onSubmit={handleFormSubmit}> */}
            <form className="mx-5">
                <div className="form-group shadow">
                    {/* <label htmlFor="email">Email address:</label> */}
                    <input
                        className="form-control"
                        placeholder="Username"
                        name="email"
                        type="email"
                        id="email"
                    // value={email}
                    // onChange={({ target }) => setEmail(target.value)}
                    />
                </div>
                <div className="form-group shadow">
                    {/* <label htmlFor="pwd">Password:</label> */}
                    <input
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        type="password"
                        id="pwd"
                    // value={password}
                    // onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                <div className="text-center mt-4">
                <ButtonSubmit className="shadow" style={styleButton} name="LOGIN" />
                </div>
            </form>

        </div >
    );
}

export default Login;






// import React, { useState } from 'react';
// import { Link, Redirect, useHistory } from 'react-router-dom';
// import { useAuth } from '../utils/auth';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { isLoggedIn, login } = useAuth();
//   const history = useHistory();

//   if (isLoggedIn) {
//     return <Redirect to="/" />;
//   }

//   const handleFormSubmit = event => {
//     event.preventDefault();

//     login(email, password)
//       // navigate to the profile page
//       .then(() => history.push('/profile'))
//       .catch(err => {
//         alert(err.response.data.message);
//       });
//   };

//   return (
//     <div className="container">
//       <h1>Login</h1>
//       <form onSubmit={handleFormSubmit}>
//         <div className="form-group">
//           <label htmlFor="email">Email address:</label>
//           <input
//             className="form-control"
//             placeholder="Email goes here..."
//             name="email"
//             type="email"
//             id="email"
//             value={email}
//             onChange={({ target }) => setEmail(target.value)}
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
//             value={password}
//             onChange={({ target }) => setPassword(target.value)}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//       <p>
//         <Link to="/signup">Go to Signup</Link>
//       </p>
//     </div>
//   );
// }

// export default Login;
