import React, { useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { useAuth } from '../utils/auth';
import Modal from "react-bootstrap/Modal"
import Navbar from "../components/Navbar/Navbar";
import NavBrand from "../components/NavbarBrand/index";
import Button from "../components/ButtonSubmit/index";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLoggedIn, login } = useAuth();
  const history = useHistory();

  // alert in response to error "User not found"
  const [alertModal, setAlertModal] = useState(false)
  const handleClose = () => setAlertModal(false);


  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmit = event => {
    event.preventDefault();

    login(email, password)
      // navigate to the main menu
      .then(() => history.push('/'))
      .catch(err => {
        if(err.response.data.message === "User not found") {
          setAlertModal(true)
        };
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
        <Modal.Body>User was not found</Modal.Body>
      </Modal>
    </>
    <div className="login overflow-auto">
      <Navbar style={styleNavbar}>
        <NavBrand style={styleBrand} />
        <div className="ml-auto" >
          <Link to="/signup" style={{ color: "#24211C" }}>Signup</Link>
        </div>
      </Navbar>
      <div className="mt-5">
        <br></br>
        <br></br>
        <br></br>
        <h2 className="text-center mt-3" style={{ fontFamily: "Roboto", color: "#302C26" }}>Login</h2>
      </div>
      <form className="mt-4 mx-4" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Email"
            name="email"
            type="email"
            id="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Password"
            name="password"
            type="password"
            id="pwd"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <div className="text-center mt-4">
          <Button style={styleButton} name="SUBMIT" />
        </div>
      </form>
      <p>
      </p>
    </div>
    </>
  );
}

export default Login;
