import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../utils/auth';
import CardColumns from "react-bootstrap/CardColumns";
import Navbar from "../components/Navbar/Navbar";
import NavLink from "../components/NavLink/index";
import Cards from "../components/Card";
import CardBody from "../components/CardBody";
import CardText from "../components/CardText";
import Forms from "../components/Form/index";
import Loading from "../components/Loading";
import Button from "../components/ButtonSubmit/index";


function Message() {
  const { user } = useAuth();
  const userID = user.id

  // const [isLoading, setIsLoading] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const [messages, setMessages] = useState({});
  const [campsiteInfo, setCampsiteInfo] = useState({});
  const [newMessage, setNewMessage] = useState({
    author: userID,
    text: ""
  })

  const { pathname } = useLocation();
    let id = pathname.split("/")[2]
    console.log(id)

  useEffect(() => {
    API.findMessageById(id)
      .then(res => {
        console.log(res.data)
        setMessages(res.data);
        setIsLoading(false)
      })
      .catch(err => console.log(err))

  }, []);


  const handleChange = event => {
    setNewMessage({
      ...newMessage,
      text: event.target.value
    });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    // setIsLoading(true)

    // let extraInfo = {
    //     state: "",
    //     image: "",
    //     accessible: false
    // }
    // // find the state of the facility 
    // extraInfo.state = facilities.find(element => element.park === createSite.park).state
    // // find the image of the campsite
    // extraInfo.image = campsites.find(element => element.campgroundID === campsiteID && element.number === createSite.campsite && element.loop === createSite.loop).image
    // // find the accessibility status of the campsite
    // extraInfo.accessible = campsites.find(element => element.campgroundID === campsiteID && element.number === createSite.campsite && element.loop === createSite.loop).accessible
    // // this posts the data from the campground to the DB˜
    // API.shareNewSite(createSite.campground, createSite.park, extraInfo.state, createSite.campsite, createSite.loop, createSite.people, createSite.tents, createSite.cars, createSite.arrival, createSite.departure, createSite.cost, createSite.about, createSite.children, createSite.party, createSite.pets, createSite.smokers, createSite.drinkers, extraInfo.image, extraInfo.accessible, createSite.createdBy)
    //     .then(res => {
    //         console.log(res.data._id);
    //         history.push(`/sites/preview/${res.data._id}`)
    //         setIsLoading(false)
    //     })
    //     .catch(err => alert(err));
  }


  const styleLink = { color: "#EBC023", fontSize: "1.2rem", paddingLeft: ".5rem", paddingRight: ".5rem", textShadow: "0 0 10px #302C26" }
  const styleNavbar = { fontFamily: "Roboto", fontSize: "1.2rem", textShadow: "0 0 10px #302C26", backgroundColor: "rgba(15, 14, 12, .1)" }
  const textshadow = { color: "#EBC023", textShadow: "0 0 10px #0F0E0C" }
  const textYellow = { color: "#EBC023", textShadow: "0 0 10px #302C26" }
  const styleSent = { backgroundColor: "#C7C7C7", padding: "0.5rem" }
  const styleReceived = { padding: "0.5rem" }
  const styleText = { fontFamily: "Barlow", fontSize: "1.1rem", color: "#302C26" }
  const styleButton = { backgroundColor: "#EBC023", color: "#302C26", fontWeight: "bold" }


  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="message overflow-auto">
      <Navbar class="py-3" style={styleNavbar}>
        <NavLink link="/signup" styleLink={styleLink} name="Main Menu" />
        <div className="ml-auto">
          <NavLink link={`/messages/all/${userID}`} styleLink={styleLink} name="See All Messages" />
        </div>
      </Navbar>
      <br />
      <h3 className="text-center text-wrap fint-weight-bold mx-3" style={textshadow}>Campground Name Goes Here</h3>

      <div className="d-flex flex-row justify-content-between mx-4 mt-3" style={textYellow}>
        <h5 className="text-justify d-inline" style={{ fontSize: "1.2rem" }}>From: 01/01/2020</h5>
        <h5 className="text-justify d-inline" style={{ fontSize: "1.2rem" }}>Until: 01/02/2020</h5>
      </div>

      <div className="d-flex flex-row justify-content-between px-5 mx-5" style={textYellow}>
        <h4 className="text-justify d-inline">2 <i className="fas fa-user"></i></h4>
        <h4 className="text-justify d-inline">1 <i className="fas fa-campground"></i></h4>
        <h4 className="text-justify d-inline">0 <i className="fas fa-car-alt"></i></h4>
      </div>
      <hr />

      {/* ******************** MESSAGES BETWEEN CAMPERS ******************** */}
      <div className="d-flex justify-content-center">
        <CardColumns>
          {/* {messages.map(msg => ( */}
          {/* if condition to determine who sent the message and the color of the background */}
          <p className="text-light py-0 mb-0 text-right">Me - Send 01/01/01 3pm</p>
          <Cards className="mb-3 shadow">
            <CardBody styleBody={styleSent}>
              <CardText styleText={styleText} text="Message from sender will go here!" />
            </CardBody>
          </Cards>

          <p className="text-light py-0 mb-0">Other Camper - Send 01/01/01 4pm</p>
          <Cards className="mb-3 shadow">
            <CardBody styleBody={styleReceived}>
              <CardText styleText={styleText} text="Message from the other person will go here!" />
            </CardBody>
          </Cards>
          {/* ))} */}
        </CardColumns>
      </div>
      <br />
      {/* ******************** FORM TO SEND MESSAGE ******************** */}
      <Forms className="m-5" onSubmit={handleFormSubmit}>
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
  );
}

export default Message;
