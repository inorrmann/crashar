// const axios = require("axios");
const router = require("express").Router();
const { findSite } = require("../routes/campsites")


// SHARE A SITE ROUTE
router.post('/api/sites', (req, res) => {
    console.log(req.body)

    findSite(req.params)
        .then(({ data: { results } }) => res.json(results))
        .then(db.Site.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.status(400).json(err)))
        .catch(err => res.status(422).json(err))
});

module.exports = router