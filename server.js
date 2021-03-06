require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan'); // used to see requests
const db = require('./models');
const PORT = process.env.PORT || 3001;

const isAuthenticated = require("./config/isAuthenticated");
const auth = require("./config/auth");

// Setting CORS so that any website can
// Access our API
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});

//log all requests to the console
app.use(morgan('dev'));

// Setting up express to use json and set it to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dbOptions = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/tentcrashingDB', dbOptions)
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.error(err));


// LOGIN ROUTE
app.post('/api/login', (req, res) => {
  auth
    .logUserIn(req.body.email, req.body.password)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(400).json(err));
});

// SIGNUP ROUTE
app.post('/api/signup', (req, res) => {
  db.User.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

// SHARE A SITE ROUTE
app.post('/api/sites', (req, res) => {
  db.Site.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

// // SEED FACILITIES ROUTE
// app.post('/api/facilities', (req, res) => {
//   db.Facility.create(req.body)
//      .then(data => res.json(data))
//      .catch(err => res.status(400).json(err));
// });

// GET ALL FACILITIES
app.get('/api/facilities', (req, res) => {
  db.Facility.find()
    .then(data => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: "No campgrounds found" });
      }
    }).catch(err => res.status(400).send(err))
});

// GET ALL CAMPSITES
app.get('/api/campsites', (req, res) => {
  db.Campsite.find()
    .then(data => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: "No campsites found" });
      }
    }).catch(err => res.status(400).send(err))
});

// GET A SHARED SITE BY ID
app.get("/api/sites/:id", (req, res) => {
  db.Site.findById(req.params.id)
    .then(data => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: "Shared campsite not found" });
      }
    })
    .catch(err => res.status(400).send(err))
});

// GET ALL SITES BY USER ID
app.get("/api/sites/user/:id", (req, res) => {
  db.Site.find({ "createdBy": req.params.id })
    .then(data => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: "No shared campsites found" });
      }
    })
    .catch(err => res.status(400).send(err))
})

// DELETE A SITE BY ID
app.delete("/api/sites/:id", (req, res) => {
  db.Site.findById(req.params.id)
    .then(data => data.remove())
    .then(data => res.json(data))
    .catch(err => res.status(422).json(err))
})

// GET ALL OPEN SITES BY QUERY
app.get("/api/sites", (req, res) => {
  db.Site.find({
    "state": req.query.state,
    "park": req.query.park,
    "arrival": { $lte: req.query.arrival },
    "departure": { $gte: req.query.departure },
    "people": { $gte: parseInt(req.query.people) }
  })
    .then(data => {
      if (data.length > 0) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: "No open campsites found" });
      }
    })
    .catch(err => res.status(400).send(err))
})

// CREATE A NEW MESSAGE
app.post('/api/messages', (req, res) => {
  console.log(req.body)
  const { message, ...rest } = req.body
  db.Message.create({ ...rest, messages: [message] })
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

// FIND MESSAGE BY SITEOWNER, SITEGUEST, AND SITE
app.get("/api/messages", (req, res) => {
  db.Message.find({
    "siteOwner": req.query.siteOwner,
    "siteGuest": req.query.siteGuest,
    "siteId": req.query.siteId
  })
    .then(data => {
      if (data.length > 0) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: "No messages found" });
      }
    })
    .catch(err => res.status(400).send(err))
});

// FIND MESSAGE BY ID
app.get("/api/messages/id/:id", (req, res) => {
  db.Message.findById(req.params.id)
    .then(data => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: "Message not found" });
      }
    })
    .catch(err => res.status(400).send(err))
});

// // FIND ALL SHARE MESSAGES BY USERID
app.get("/api/messages/owner/:id", (req, res) => {
  db.Message.find({ "siteOwner": req.params.id })
    .then(data => {
      if (data) {
        res.json(data)
      } else {
        res.status(404).send(err)
      }
    })
    .catch(err => res.status(400).send(err))
})

// FIND ALL CRASH MESSAGES BY USERID
app.get("/api/messages/guest/:id", (req, res) => {
  console.log(req.params.id)
  db.Message.find({ "siteGuest": req.params.id })
    .then(data => {
      if (data) {
        res.json(data)
      } else {
        res.status(404).send(err)
      }
    })
    .catch(err => res.status(400).send(err))
})

// ADD A MESSAGE TO AN EXISTING CONVERSATION
app.put("/api/messages/", (req, res) => {
  const { _id, message } = req.body
  db.Message.findByIdAndUpdate(
    _id,
    { $push: { "messages": [message] } }
  )
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
})



// Any route with isAuthenticated is protected and you need a valid token
// to access
app.get('/api/user/:id', isAuthenticated, (req, res) => {
  // to make sure the user only access its own data, 
  // query the id from the database and compare with the params.id
  req.user.id === req.params.id

  db.User.findById(req.params.id).then(data => {
    if (data) {
      res.json(data);
    } else {
      res.status(404).send({ success: false, message: 'No user found' });
    }
  }).catch(err => res.status(400).send(err));
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('/', isAuthenticated /* Using the express jwt MW here */, (req, res) => {
  res.send('You are authenticated'); //Sending some response when authenticated
});

// Error handling
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') { // Send the error rather than to show it on the console
    res.status(401).send(err);
  }
  else {
    next(err);
  }
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
