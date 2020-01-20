import axios from 'axios';
export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (firstName, lastName, email, password) => {
    return axios.post('/api/signup', { firstName: firstName, lastName: lastName, email: email, password: password });
  },
  // share a campsite with open sites
  shareNewSite: (campground, park, state, campsite, loop, people, tents, cars, arrival, departure, cost, about, children, party, pets, smokers, drinkers, image, accessible, createdBy) => {
    return axios.post('/api/sites', { campground, park, state, campsite, loop, people, tents, cars, arrival, departure, cost, about, children, party, pets, smokers, drinkers, image, accessible, createdBy });
  },
  // get all seeded facilities
  getAllFacilities: () => {
    return axios.get('/api/facilities');
  },
  // get all seeded campsites
  getAllCampsites: () => {
    return axios.get('/api/campsites');
  },
  // get a shared site by id
  getSharedSite: (id) => {
    return axios.get(`/api/sites/${id}`);
  },
  // get all shared sites by user ir
  getAllSharedSites: (id) => {
    return axios.get(`/api/sites/user/${id}`);
  },
  // delete shared site by id
  deleteSite: (id) => {
    return axios.delete(`/api/sites/${id}`)
  }
};

