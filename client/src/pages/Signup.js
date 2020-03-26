import React, { useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import API from './../utils/API';
import { useAuth } from '../utils/auth';
import Modal from "react-bootstrap/Modal"
import Navbar from '../components/Navbar/Navbar';
import NavBrand from "../components/NavbarBrand/index";
import Button from "../components/ButtonSubmit/index";
import Form from "../components/Form/index";
import FormGroup from "../components/FormGroup/index";
import FormControl from "../components/FormControl/index";


function Signup() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const { isLoggedIn } = useAuth()

  const history = useHistory()

  // alert in response to error 400 when creating an account (usually email already has an account)
  const [alertModal, setAlertModal] = useState(false)
  const handleClose = () => setAlertModal(false);

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
      .catch(err => {
        if (err.response.status === 400) {
          setAlertModal(true)
        }
      });
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
    <>
    <>
      <Modal show={alertModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Oooops!</Modal.Title>
        </Modal.Header>
        <Modal.Body>There is already an account associated with that email address</Modal.Body>
      </Modal>
    </>
    <div className="signup overflow-auto">

      <Navbar style={styleNavbar}>
        <NavBrand style={styleBrand} />
      </Navbar>

      <div className="mt-5">
        <br></br>
        <br></br>
        <h2 className="text-center mt-3" style={{ fontFamily: "Roboto", color: "#302C26" }}>Create an Account</h2>
      </div>

      <div className="d-flex justify-content-center">
        <div className="signup-form">
          <Form onSubmit={handleFormSubmit}>
            <FormGroup classname="signup-form">
              <FormControl
                placeholder="First Name"
                name="firstName"
                type="text"
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                placeholder="Last Name"
                name="lastName"
                type="text"
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                placeholder="Email"
                name="email"
                type="email"
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                placeholder="Password"
                name="password"
                type="password"
                onChange={handleChange}
                required
              />
            </FormGroup>
            <div className="text-center mt-4">
              <Button style={styleButton} name="SUBMIT" />
            </div>
          </Form>
        </div>
      </div>

      <div className="mt-3" style={{ color: "white" }}>
        <p className="text-center">
          Already have an account? <Link to="/login" style={{ color: "white" }}>Login here.</Link>
        </p>
      </div>

    </div>
    </>
  );
}

export default Signup;
