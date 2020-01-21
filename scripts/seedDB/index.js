const seedFacilities = require('./seedFacilities');
const seedSites = require('./seedSites')

seedFacilities()
.then(seedSites)
.then(() => {
    console.log("done seeding")
    process.exit(0)
})
.catch(err => {
    console.log(err)
    process.exit(1)
})