# Crashar

![language badge](https://img.shields.io/github/languages/top/inorrmann/crashar)
[![npm version](https://badge.fury.io/js/react.svg)](https://badge.fury.io/js/react)
[![npm version](https://badge.fury.io/js/react-bootstrap.svg)](https://badge.fury.io/js/react-bootstrap)
[![npm version](https://badge.fury.io/js/react-router-dom.svg)](https://badge.fury.io/js/react-router-dom)
[![npm version](https://badge.fury.io/js/use-react-router.svg)](https://badge.fury.io/js/use-react-router)
[![npm version](https://badge.fury.io/js/bootstrap.svg)](https://badge.fury.io/js/bootstrap)
[![npm version](https://badge.fury.io/js/axios.svg)](https://badge.fury.io/js/axios)
[![npm version](https://badge.fury.io/js/express.svg)](https://badge.fury.io/js/express)
[![npm version](https://badge.fury.io/js/express.svg)](https://badge.fury.io/js/express)
[![npm version](https://badge.fury.io/js/mongoose.svg)](https://badge.fury.io/js/mongoose)

Deployed site: http://www.crashar.com

## Crash or Share a campsite and enjoy camping with others!

During peak times many campgrounds at National Parks sell out, leaving those who didn't book a camping trip months in advance without the possibility of enjoying popular places. 

![sold-out-campground](./ReadMe/campground-full.jpg)

On the other hand, those who already have a campsite reservation often have room for more people in their site, which they could share with others, thus making new friends, enriching their caming experience, and saving money.

Crashar is the solution to connect those who need a campsite reservation and those who are looking to share their existing reservations.

![user-experience](./ReadMe/mobile.gif)

## Technologies used

HTML - CSS - React-Bootstrap - React - NodeJS - Express - Axios - MongoDB - Mongoose - Recreation.gov Database

## Current Features
- Users are able to post a reservation and also search for existing reservations
- Messages between users to safely connect sharers and crashers (when a crasher messages a sharer, they will not be able to see their name until they receive a response)
- Database incorporates data from RIDB.Recreation.gov to provide additional information (e.g., accurate list of campsites available in any given campground, accessibility information for every campsite, and a picture of the campsite when available)
- In order to prevent price gouging, a link to the campground is listed below the preview for each campsite posted.

## Future Features
- Users can edit their profiles and store their "About Me" blurb
- Edit posted campsites
- Sort results by price, location, number of people, number of tents, number of cars, and accessibility
- Automatization of data collection from RIDB.Recreation.gov to quickly update the database on a regular basis
- Expansion of database used beyond National Parks
