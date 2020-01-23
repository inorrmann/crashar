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
  // post a campsite with open sites
  shareNewSite: (campground, campgroundId, park, state, campsite, loop, people, tents, cars, arrival, departure, cost, about, children, party, pets, smokers, drinkers, image, accessible, createdBy) => {
    return axios.post('/api/sites', { campground, campgroundId, park, state, campsite, loop, people, tents, cars, arrival, departure, cost, about, children, party, pets, smokers, drinkers, image, accessible, createdBy });
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
    return axios.get(`/api/sites/user/${id}`)
  },
  // delete shared site by id
  deleteSite: (id) => {
    return axios.delete(`/api/sites/${id}`)
  },
  // find results of open sites by query
  findOpenSites: (query) => {
    return axios.get(`/api/sites`, { params: query })
  },
  // post a message to a camper
  createMessage: (siteOwner, siteGuest, siteId, people, tents, cars, campground, arrival, departure, authorId, authorName, text) => {
    let message = {
      authorId: authorId,
      authorName: authorName,
      text: text
    }
    console.log(message)
    return axios.post('/api/messages', { siteOwner, siteGuest, siteId, people, tents, cars, campground, arrival, departure, message });
  },
  // get a message by siteOwner, siteGuest, and siteId
  findMessage: (query) => {
    return axios.get(`/api/messages/`, { params: query })
  },
  // get a message by id
  findMessageById: (id) => {
    return axios.get(`/api/messages/id/${id}`)
  },
  // // get all share messages by user id
  findShareMessages: (id) => {
    return axios.get(`/api/messages/owner/${id}`)
  },
  // get all crash messages by user id
  findCrashMessages: (id) => {
    return axios.get(`/api/messages/guest/${id}`)
  },
  // post a message
  sendMessage: (_id, authorId, authorName, text) => {
    let message = {
      authorId: authorId,
      authorName: authorName,
      text: text
    }
    return axios.put("/api/messages/", { _id, message })
  }
};

