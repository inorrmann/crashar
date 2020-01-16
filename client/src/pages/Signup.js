import React, { useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import API from './../utils/API';
import { useAuth } from '../utils/auth';
import Navbar from '../components/Navbar/Navbar';
import NavBrand from "../components/NavbarBrand/index";
import Button from "../components/ButtonSubmit/index";


function Signup() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: ''
  });

  const { isLoggedIn } = useAuth()

  const history = useHistory()

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    API.signUpUser(formState.firstName, formState.lastName, formState.email, formState.password)
      .then(res => {
        // once the user has created an account, send them to the login page
        history.replace('/login');
      })
      .catch(err => alert(err));
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };


  const styleBrand = { color: "#24211C" }
  const styleButton = { backgroundColor: "#EBC023", color: "#302C26", fontWeight: "bold" }
  const styleNavbar = { fontFamily: "Roboto", fontSize: "1.2rem" }

  return (
    <div className="signup">
      <Navbar style={styleNavbar}>
        <NavBrand style={styleBrand} />
      </Navbar>
      <div className="mt-5">
        <br></br>
        <br></br>
        <h2 className="text-center mt-3" style={{ fontFamily: "Roboto", color: "#302C26" }}>Create an Account</h2>
      </div>
      <form className="mt-4 mx-4" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <input
            className="form-control shadow"
            placeholder="First Name"
            name="firstName"
            type="text"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control shadow"
            placeholder="Last Name"
            name="lastName"
            type="text"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control shadow"
            placeholder="Email"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control shadow"
            placeholder="Password"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="text-center mt-4">
          <Button style={styleButton} name="SUBMIT" />
        </div>
      </form>
      <div className="mt-3" style={{ color: "white" }}>
        <p className="text-center">
          Already have an account? <Link to="/login" style={{ color: "white" }}>Login here.</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
