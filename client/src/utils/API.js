import axios from 'axios';
export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (firstName, lastName, email, password) => {
    return axios.post('/api/signup', {firstName: firstName, lastName: lastName, email: email, password: password});
  },
  // share a campsite with open sites
  shareNewSite: (campground, park, state, site, loop, people, tents, cars, arrival, departure, cost, about, children, party, pets, smokers, drinkers, maxPeople, maxCars, maxCarLength, accessible) => {
    return axios.post('/api/sites', {campground, park, state, site, loop, people, tents, cars, arrival, departure, cost, about, children, party, pets, smokers, drinkers, maxPeople, maxCars, maxCarLength, accessible});
  }
};

