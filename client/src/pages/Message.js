import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../utils/auth';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Navbar from "../components/Navbar/Navbar";
import NavLink from "../components/NavLink/index";
import Cards from "../components/Card";
import CardBody from "../components/CardBody";
import CardText from "../components/CardText";
import Forms from "../components/Form/index";
import Loading from "../components/Loading";
import Button from "../components/ButtonSubmit/index";
import NavBrand from "../components/NavbarBrandDk";


function Message() {
  const { user } = useAuth();
  const userID = user.id

  const [isLoading, setIsLoading] = useState(true)
  const [conversation, setConversation] = useState({});
  const [dates, setDates] = useState({
    arrival: "",
    departure: ""
  })
  const [newMessage, setNewMessage] = useState({
    authorId: userID,
    authorName: user.name,
    text: ""
  })

  const { pathname } = useLocation();
  let id = pathname.split("/")[2]

  useEffect(() => {
    loadmessage();
  }, []);


  function loadmessage() {
    API.findMessageById(id)
      .then(res => {
        setConversation(res.data);
        // reformat dates for display on cards
        let arrival = `${res.data.arrival.slice(5, 7)}/${res.data.arrival.slice(8, 10)}/${res.data.arrival.slice(0, 4)}`
        let departure = `${res.data.departure.slice(5, 7)}/${res.data.departure.slice(8, 10)}/${res.data.departure.slice(0, 4)}`
        setDates({
          ...conversation,
          arrival: arrival,
          departure: departure
        })
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }

  const handleChange = event => {
    setNewMessage({
      ...newMessage,
      text: event.target.value
    });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    setIsLoading(true)
    API.sendMessage(conversation._id, newMessage.authorId, newMessage.authorName, newMessage.text)
      .then(res => {
        loadmessage();
      })
      .catch(err => alert(err));
  }


  const styleLink = { color: "#302C26", fontSize: "1.2rem", paddingRight: ".5rem", textShadow: "0 0 10px rgb(255, 248, 213)" }
  const styleNavbar = { fontFamily: "Roboto", fontSize: "1.2rem", textShadow: "0 0 10px #302C26", backgroundColor: "rgba(255, 248, 213, .2)" }
  const textshadow = { color: "#EBC023", textShadow: "0 0 10px #0F0E0C" }
  const textYellow = { color: "#EBC023", textShadow: "0 0 10px #302C26" }
  const textBrown = { color: "#302C26", textShadow: "0 0 10px rgb(255, 248, 213)" }
  const styleSent = { backgroundColor: "#C7C7C7", padding: "0.5rem", borderRadius: "4px" }
  const styleReceived = { padding: "0.5rem" }
  const styleText = { fontFamily: "Barlow", fontSize: "1.1rem", color: "#302C26" }
  const styleButton = { backgroundColor: "#EBC023", color: "#302C26", fontWeight: "bold" }


  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="message overflow-auto">
      <Navbar style={styleNavbar}>
        <NavBrand style={{ paddingLeft: ".5rem" }} />
        <div className="ml-auto">
          <NavLink link={`/messages/all/${userID}`} styleLink={styleLink} name="Messages" />
        </div>
      </Navbar>
      <br />

      <h3 className="text-center text-wrap font-weight-bold mx-3" style={textshadow}>{conversation.campground}</h3>
      
      <Container className="message-lg">
        <div className="d-flex justify-content-center mx-4 mt-3" style={textBrown}>
            <h5 className="d-inline mr-4" >From: {dates.arrival}</h5>
            <h5 className="d-inline mr-5" >Until: {dates.departure}</h5>
            <h5 className="d-inline ml-5">{conversation.people} <i className="fas fa-user" style={{ fontSize: "1.1rem" }}></i></h5>
            <h5 className="d-inline mx-4">{conversation.tents} <i className="fas fa-campground" style={{ fontSize: "1rem" }}></i></h5>
            <h5 className="d-inline">{conversation.cars} <i className="fas fa-car-alt"></i></h5>
        </div>
      </Container>
      
      <div className="message-sm">
        <div className="d-flex flex-row justify-content-between mx-4 mt-3" style={textBrown}>
          <h5 className="text-justify d-inline" style={{ fontSize: "1.2rem" }}>From: {dates.arrival}</h5>
          <h5 className="text-justify d-inline" style={{ fontSize: "1.2rem" }}>Until: {dates.departure}</h5>
        </div>

        <div className="d-flex flex-row justify-content-between px-5 mx-5" style={textBrown}>
          <h4 className="text-justify d-inline">{conversation.people} <i className="fas fa-user"></i></h4>
          <h4 className="text-justify d-inline">{conversation.tents} <i className="fas fa-campground"></i></h4>
          <h4 className="text-justify d-inline">{conversation.cars} <i className="fas fa-car-alt"></i></h4>
        </div>
      </div>

      <hr />

      {/* ******************** MESSAGES BETWEEN CAMPERS ******************** */}
      <div className="d-flex justify-content-center">
        <Container>

          {conversation.messages.map(msg => {
            if (msg.text !== "") {
              if (msg.authorId === userID) {
                let date = `${msg.createdAt.slice(5, 7)}/${msg.createdAt.slice(8, 10)}/${msg.createdAt.slice(0, 4)}`
                return (
                  <Row className="d-flex justify-content-end mr-1">
                    <Col className="float-right">
                      <p className="text-light py-0 mb-0 text-right">{msg.authorName} - Sent: {date}</p>

                      <Cards className="message-sm mb-3 border-0 rounded shadow float-right">
                        <CardBody styleBody={styleSent}>
                          <CardText styleText={styleText} text={msg.text} />
                        </CardBody>
                      </Cards>

                      <Cards className="message-lg mb-3 border-0 rounded shadow float-right w-50">
                        <CardBody styleBody={styleSent}>
                          <CardText styleText={styleText} text={msg.text} />
                        </CardBody>
                      </Cards>

                    </Col>
                  </Row>
                )
              } else {
                let date = `${msg.createdAt.slice(5, 7)}/${msg.createdAt.slice(8, 10)}/${msg.createdAt.slice(0, 4)}`
                return (
                  <Row className="d-flex justify-content-start ml-1">
                    <Col className="float-left">
                      <p className="text-light py-0 mb-0 text-left">{msg.authorName} - Sent: {date}</p>
                      
                      <Cards className="message-sm mb-3 border-0 shadow float-left">
                        <CardBody styleBody={styleReceived}>
                          <CardText styleText={styleText} text={msg.text} />
                        </CardBody>
                      </Cards>

                      <Cards className="message-lg mb-3 border-0 shadow float-left w-50">
                        <CardBody styleBody={styleReceived}>
                          <CardText styleText={styleText} text={msg.text} />
                        </CardBody>
                      </Cards>

                    </Col>
                  </Row>
                )
              }
            }
          })}

        </Container>
      </div>
      <br />
      {/* ******************** FORM TO SEND MESSAGE ******************** */}
      <div className="message-submit">
      <Forms className="my-5" onSubmit={handleFormSubmit}>
        <div className="input-group mb-3">
          <textarea className="form-control shadow"
            placeholder="Type your message here..."
            type="text"
            id="message"
            onChange={handleChange}
          ></textarea>

          <div className="input-group-append">
            <Button style={styleButton} name="SEND" />
          </div>
        </div>
      </Forms>
      </div>

    </div>
  );
}

export default Message;
