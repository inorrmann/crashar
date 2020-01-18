const fs = require("fs");
const campgrounds = require("./campgroundsNPS").campgrounds

fs.readFile("./Campsites_API_v1.json", "utf8", function (err, data) {
    if (err) throw err;
    let importedCampsites = JSON.parse(data);
    let campsites = importedCampsites.RECDATA

    let campsitesNPS = [];
    // extract only campsites from campgrounds in NPS
    campsites.map(campsite => {
        campgrounds.map(campground => {
            if (campsite.FacilityID === campground.campgroundID) {
                campsitesNPS.push(campsite)
            }
        })
    });

    fs.readFile("./Media_API_v1.json", "utf8", function (err, data) {
        if (err) throw err;

        let importedMedia = JSON.parse(data);
        let media = importedMedia.RECDATA
        // incorporate a key for the image
        campsitesNPS.map(campsite => {
            var link = "";
            const photo = media.filter(image => {
                if (campsite.CampsiteID === image.EntityID && image.IsPreview == true) {
                    link = image.URL;
                    return link;
                }
                campsite.image = link;
            })
        })
        console.log(campsitesNPS[0]);

        campsitesNPS.map(camp => {
            let campsite = {
                campgroundID: camp.FacilityID,
                number: camp.CampsiteName,
                loop: camp.Loop,
                accessible: camp.CampsiteAccessible,
                image: camp.image
            }
            fs.appendFile("campsitesNPS.json", JSON.stringify(campsite, null, "\t") + ",", (err) => {
                if (err) throw err;
            })
        })
    })
})