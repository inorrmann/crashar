const campgrounds = require("./facilities-api").facilities.RECDATA;
const recAreas = require("./rec-areas-api").recAreas;
const facilityAddresses = require("./facilities-addresses-api").facilityAddresses;
const axios = require("axios");
const fs = require("fs");

// filter all facilities to extract campgrounds in National Parks (Organization Parent 128 = NPS) that are reservable
const campsNPS = campgrounds.filter((campground) => {
   return campground.ParentOrgID === "128" && campground.FacilityTypeDescription === "Campground" && campground.Reservable === true
})

// combine campground objects from NPS (campsNPS) with campground zipcodes (facilityAddresses)
const campAddressNPS = campsNPS.map(campground => {

   // add state from facilities-addresses-api.js
   var postalCode = "";
   const address = facilityAddresses.filter((facilityAddress) => {
      if (facilityAddress.FacilityID === parseInt(campground.FacilityID)) {
         return postalCode = facilityAddress.PostalCode;
      }
      campground.FacilityPostalCode = postalCode;
   });

   // add parent Rec Area from rec-areas-api.js
   var recAreaName = "";
   const parentRecArea = recAreas.filter((recArea) => {
      if (recArea.RecAreaID === campground.ParentRecAreaID) {
         return recAreaName = recArea.RecAreaName
      }
      campground.FacilityRecArea = recAreaName;
   })
   return campground
})


function seedFacilities() {
   campAddressNPS.map(camp => {
      let facility = {
         name: camp.FacilityName,
         park: camp.FacilityRecArea,
         state: camp.FacilityPostalCode
      }
      fs.appendFile("seedsDB.json", JSON.stringify(facility, null, "\t") + ",", (err) =>{
         if (err) throw err;
      })
   })
}

seedFacilities();
