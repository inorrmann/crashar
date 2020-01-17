const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Facilities collection and inserts the entries below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/tentcrashingDB"
);

const facilitiesSeed = [{
	name: "Steel Creek Campground",
	park: "Buffalo National River",
	state: ""
},{
	name: "Camp 4",
	park: "Yosemite National Park",
	state: "CA"
},{
	name: "Station Camp Campground",
	park: "Big South Fork National River & Recreation Area",
	state: "TENNESSEE"
},{
	name: "Bay View House",
	park: "Cape Cod National Seashore",
	state: "MA"
},{
	name: "Beach View House",
	park: "Cape Cod National Seashore",
	state: "MA"
},{
	name: "Le Count Beach  House",
	park: "Cape Cod National Seashore",
	state: "MA"
},{
	name: "Ocean View House",
	park: "Cape Cod National Seashore",
	state: "MA"
},{
	name: "Seashore Modern House",
	park: "Cape Cod National Seashore",
	state: "MA"
},{
	name: "Sunrise House",
	park: "Cape Cod National Seashore",
	state: "MA"
},{
	name: "Gorge Lake Campground",
	park: "North Cascades National Park",
	state: "WASHINGTON"
},{
	name: "Joe Thompson Cabin",
	park: "Lake Clark National Park & Preserve",
	state: ""
},{
	name: "Chellberg Farm Picnic Shelters",
	park: "Indiana Dunes National Park",
	state: "IN"
},{
	name: "Cabin Camp 3",
	park: "Prince William Forest Park",
	state: "VA"
},{
	name: "West Beach Picnic Shelters",
	park: "Indiana Dunes National Park",
	state: "IN"
},{
	name: "Saguaro National Park Wilderness Permits",
	park: "Saguaro National Park",
	state: "ARIZONA"
},{
	name: "MATHEWS ARM CAMPGROUND",
	park: "Shenandoah National Park",
	state: "VA"
},{
	name: "Loft Mountain Campground",
	park: "Shenandoah National Park",
	state: "VA"
},{
	name: "CATALOOCHEE GROUP CAMP",
	park: "Great Smoky Mountains National Park",
	state: "NC"
},{
	name: "DEEP CREEK PICNIC PAVILION",
	park: "Great Smoky Mountains National Park",
	state: "NC"
},{
	name: "ELKMONT GROUP CAMP",
	park: "Great Smoky Mountains National Park",
	state: "TN"
},{
	name: "BIG CREEK GROUP CAMP",
	park: "Great Smoky Mountains National Park",
	state: "NC"
},{
	name: "COSBY GROUP CAMP",
	park: "Great Smoky Mountains National Park",
	state: "TN"
},{
	name: "CADES COVE GROUP",
	park: "Great Smoky Mountains National Park",
	state: "TN"
},{
	name: "COSBY PICNIC PAVILION",
	park: "Great Smoky Mountains National Park",
	state: "TN"
},{
	name: "SMOKEMONT GROUP CAMP",
	park: "Great Smoky Mountains National Park",
	state: "NC"
},{
	name: "WATCHMAN CAMPGROUND",
	park: "Zion National Park",
	state: "UT"
},{
	name: "MAMMOTH PICNIC SHELTERS",
	park: "Mammoth Cave National Park",
	state: "KY"
},{
	name: "UPPER PINES",
	park: "Yosemite National Park",
	state: "CA"
},{
	name: "WAWONA",
	park: "Yosemite National Park",
	state: "CA"
},{
	name: "TUOLUMNE MEADOWS",
	park: "Yosemite National Park",
	state: "CA"
},{
	name: "NORTH PINES",
	park: "Yosemite National Park",
	state: "CA"
},{
	name: "LOWER PINES",
	park: "Yosemite National Park",
	state: "CA"
},{
	name: "HODGDON MEADOW",
	park: "Yosemite National Park",
	state: "CA"
},{
	name: "CRANE FLAT",
	park: "Yosemite National Park",
	state: "CA"
},{
	name: "BRIDALVEIL CREEK GROUP AND HORSE CAMP",
	park: "Yosemite National Park",
	state: "CA"
},{
	name: "Whiskey Creek Group Picnic Area (Whiskeytown NRA)",
	park: "Whiskeytown National Recreation Area",
	state: "CA"
},{
	name: "DRY CREEK GROUP CAMPGROUND (Whiskeytown NRA)",
	park: "Whiskeytown National Recreation Area",
	state: "CA"
},{
	name: "SOUTH MANITOU GROUP",
	park: "Sleeping Bear Dunes National Lakeshore",
	state: "MI"
},{
	name: "D.H. DAY GROUP",
	park: "Sleeping Bear Dunes National Lakeshore",
	state: "MI"
},{
	name: "PLATTE RIVER CAMPGROUND",
	park: "Sleeping Bear Dunes National Lakeshore",
	state: "MI"
},{
	name: "BIG MEADOWS",
	park: "Shenandoah National Park",
	state: "VA"
},{
	name: "Dorst Creek Campground-Sequoia and Kings Canyon National Park",
	park: "Sequoia & Kings Canyon National Parks",
	state: "CA"
},{
	name: "Lodgepole Campground-Sequoia and Kings Canyon National Park",
	park: "Sequoia & Kings Canyon National Parks",
	state: "CA"
},{
	name: "GLACIER BASIN CAMPGROUND",
	park: "Rocky Mountain National Park",
	state: "CO"
},{
	name: "MORAINE PARK CAMPGROUND",
	park: "Rocky Mountain National Park",
	state: "CO"
},{
	name: "KALALOCH",
	park: "Olympic National Park",
	state: "WA"
},{
	name: "COUGAR ROCK CAMPGROUND",
	park: "Mount Rainier National Park",
	state: "WA"
},{
	name: "OHANAPECOSH CAMPGROUND",
	park: "Mount Rainier National Park",
	state: "WA"
},{
	name: "MAPLE SPRINGS",
	park: "Mammoth Cave National Park",
	state: "KY"
},{
	name: "MAMMOTH CAVE CAMPGROUND",
	park: "Mammoth Cave National Park",
	state: "KY"
},{
	name: "Fure's Cabin",
	park: "Katmai National Park & Preserve",
	state: "AK"
},{
	name: "SHEEP PASS GROUP",
	park: "Joshua Tree National Park",
	state: "CA"
},{
	name: "INDIAN COVE CAMPGROUND",
	park: "Joshua Tree National Park",
	state: "CA"
},{
	name: "COTTONWOOD GROUP",
	park: "Joshua Tree National Park",
	state: "CA"
},{
	name: "BLACK ROCK CAMPGROUND",
	park: "Joshua Tree National Park",
	state: "CA"
},{
	name: "GREENBELT CAMPGROUND",
	park: "Greenbelt Park",
	state: "MD"
},{
	name: "GREENBRIER PICNIC PAVILION",
	park: "Great Smoky Mountains National Park",
	state: "TN"
},{
	name: "TWIN CREEKS PICNIC PAVILION",
	park: "Great Smoky Mountains National Park",
	state: "TN"
},{
	name: "METCALF BOTTOMS PICNIC PAVILION",
	park: "Great Smoky Mountains National Park",
	state: "TN"
},{
	name: "DEEP CREEK GROUP CAMP",
	park: "Great Smoky Mountains National Park",
	state: "NC"
},{
	name: "COLLINS CREEK PICNIC PAVILION",
	park: "Great Smoky Mountains National Park",
	state: "NC"
},{
	name: "COSBY CAMPGROUND",
	park: "Great Smoky Mountains National Park",
	state: "TN"
},{
	name: "TOW STRING HORSE CAMP",
	park: "Great Smoky Mountains National Park",
	state: "NC"
},{
	name: "CATALOOCHEE HORSE CAMP",
	park: "Great Smoky Mountains National Park",
	state: "NC"
},{
	name: "ROUND BOTTOM HORSE CAMP",
	park: "Great Smoky Mountains National Park",
	state: "NC"
},{
	name: "BIG CREEK HORSE CAMP",
	park: "Great Smoky Mountains National Park",
	state: "NC"
},{
	name: "ANTHONY CREEK HORSE CAMP",
	park: "Great Smoky Mountains National Park",
	state: "TN"
},{
	name: "SMOKEMONT CAMPGROUND",
	park: "Great Smoky Mountains National Park",
	state: "NC"
},{
	name: "ELKMONT CAMPGROUND",
	park: "Great Smoky Mountains National Park",
	state: "TN"
},{
	name: "CADES COVE CAMPGROUND",
	park: "Great Smoky Mountains National Park",
	state: "TN"
},{
	name: "NORTH RIM CAMPGROUND",
	park: "Grand Canyon National Park",
	state: "AZ"
},{
	name: "MATHER CAMPGROUND",
	park: "Grand Canyon National Park",
	state: "AZ"
},{
	name: "KIRBY COVE CAMPGROUND",
	park: "Golden Gate National Recreation Area",
	state: "CA"
},{
	name: "ST. MARY CAMPGROUND",
	park: "Glacier National Park",
	state: "MT"
},{
	name: "FISH CREEK CAMPGROUND",
	park: "Glacier National Park",
	state: "MT"
},{
	name: "Fort Hunt",
	park: "George Washington Memorial Parkway",
	state: "VA"
},{
	name: "FURNACE CREEK",
	park: "Death Valley National Park",
	state: "CA"
},{
	name: "SANTA ROSA ISLAND",
	park: "Channel Islands National Park",
	state: "CA"
},{
	name: "SANTA CRUZ SCORPION",
	park: "Channel Islands National Park",
	state: "CA"
},{
	name: "SANTA CRUZ DEL NORTE BACKCOUNTRY",
	park: "Channel Islands National Park",
	state: "CA"
},{
	name: "SANTA BARBARA ISLAND",
	park: "Channel Islands National Park",
	state: "CA"
},{
	name: "SAN MIGUEL ISLAND",
	park: "Channel Islands National Park",
	state: "CA"
},{
	name: "ANACAPA ISLAND",
	park: "Channel Islands National Park",
	state: "CA"
},{
	name: "POPLAR GROVE YOUTH GROUP CAMPGROUND",
	park: "Catoctin Mountain Park",
	state: "MD"
},{
	name: "OCRACOKE CAMPGROUND",
	park: "Cape Hatteras National Seashore",
	state: "NC"
},{
	name: "BLUE HERON CAMPGROUND",
	park: "Big South Fork National River & Recreation Area",
	state: "TN"
},{
	name: "BANDY CREEK",
	park: "Big South Fork National River & Recreation Area",
	state: "TN"
},{
	name: "BLACKWOODS CAMPGROUND",
	park: "Acadia National Park",
	state: ""
},{
	name: "ASSATEAGUE ISLAND NATIONAL SEASHORE CAMPGROUND",
	park: "Assateague Island National Seashore",
	state: "MD"
},{
	name: "OHANAPECOSH GROUP CAMPGROUND",
	park: "Mount Rainier National Park",
	state: "WA"
},{
	name: "COUGAR ROCK GROUP CAMPGROUND",
	park: "Mount Rainier National Park",
	state: "WA"
},{
	name: "TYLER BEND CAMPGROUND",
	park: "Buffalo National River",
	state: "AR"
},{
	name: "OZARK PAVILION",
	park: "Buffalo National River",
	state: "AR"
},{
	name: "ASPENGLEN CAMPGROUND",
	park: "Rocky Mountain National Park",
	state: "CO"
},{
	name: "CAMP MISTY MOUNT",
	park: "Catoctin Mountain Park",
	state: "MD"
},{
	name: "MANZANITA LAKE CAMPING CABINS",
	park: "Lassen Volcanic National Park",
	state: "CA"
},{
	name: "BUCKHORN PAVILION",
	park: "Chickasaw National Recreation Area",
	state: "OK"
},{
	name: "VETERANS LAKE PAVILION",
	park: "Chickasaw National Recreation Area",
	state: "OK"
},{
	name: "CATALOOCHEE CAMPGROUND",
	park: "Great Smoky Mountains National Park",
	state: "NC"
},{
	name: "APPALACHIAN CLUBHOUSE",
	park: "Great Smoky Mountains National Park",
	state: "TN"
},{
	name: "CAMP GATEWAY- BROOKLYN NY",
	park: "Gateway National Recreation Area",
	state: "NY"
},{
	name: "Adirondack Shelters",
	park: "Catoctin Mountain Park",
	state: "MD"
},{
	name: "Rocky Knob Campground",
	park: "Blue Ridge Parkway",
	state: "VA"
},{
	name: "GREAT ISLAND CABIN CAMP",
	park: "Cape Lookout National Seashore",
	state: "NC"
},{
	name: "LONG POINT CABIN CAMP",
	park: "Cape Lookout National Seashore",
	state: "NC"
},{
	name: "Fort Washington Park Day Use Facilities",
	park: "Fort Washington Park",
	state: "MD"
},{
	name: "BUTTE LAKE STOCK CORRAL",
	park: "Lassen Volcanic National Park",
	state: "CA"
},{
	name: "JUNIPER LAKE STOCK CORRAL",
	park: "Lassen Volcanic National Park",
	state: "CA"
},{
	name: "SUMMIT LAKE STOCK CORRAL",
	park: "Lassen Volcanic National Park",
	state: "CA"
},{
	name: "Point Reyes National Seashore Campground",
	park: "Point Reyes National Seashore",
	state: "CA"
},{
	name: "CUYAHOGA VALLEY NATIONAL PARK PICNIC SHELTERS",
	park: "Cuyahoga Valley National Park",
	state: "OH"
},{
	name: "Doughton Park Campground",
	park: "Blue Ridge Parkway",
	state: "NC"
},{
	name: "MANZANITA LAKE GROUP CAMPGROUND",
	park: "Lassen Volcanic National Park",
	state: "CA"
},{
	name: "OAK RIDGE CAMPGROUND",
	park: "Prince William Forest Park",
	state: "VA"
},{
	name: "CIRCLE X RANCH GROUP CAMPGROUND",
	park: "Santa Monica Mountains National Recreation Area",
	state: "CA"
},{
	name: "POINT SUPREME CAMPGROUND",
	park: "Cedar Breaks National Monument",
	state: "UT"
},{
	name: "PONDEROSA CAMPGROUND (NM)",
	park: "Bandelier National Monument",
	state: "NM"
},{
	name: "JUNIPER CAMPGROUND",
	park: "Bandelier National Monument",
	state: "NM"
},{
	name: "PEAKS OF OTTER CAMPGROUND",
	park: "Blue Ridge Parkway",
	state: "VA"
},{
	name: "CHISOS BASIN GROUP CAMPGROUND",
	park: "Big Bend National Park",
	state: "TX"
},{
	name: "RIO GRANDE VILLAGE GROUP CAMPGROUND",
	park: "Big Bend National Park",
	state: "TX"
},{
	name: "PINNACLES CAMPGROUND",
	park: "Pinnacles National Park",
	state: "CA"
},{
	name: "RIO GRANDE VILLAGE (BIG BEND)",
	park: "Big Bend National Park",
	state: "TX"
},{
	name: "Linville Falls Campground",
	park: "Blue Ridge Parkway",
	state: "NC"
},{
	name: "Julian Price Campground",
	park: "Blue Ridge Parkway",
	state: "NC"
},{
	name: "CHISOS BASIN (BIG BEND)",
	park: "Big Bend National Park",
	state: "TX"
},{
	name: "MANZANITA LAKE",
	park: "Lassen Volcanic National Park",
	state: "CA"
},{
	name: "SUMMIT LAKE SOUTH",
	park: "Lassen Volcanic National Park",
	state: "CA"
},{
	name: "SUMMIT LAKE NORTH",
	park: "Lassen Volcanic National Park",
	state: "CA"
},{
	name: "LOST CREEK GROUP",
	park: "Lassen Volcanic National Park",
	state: "CA"
},{
	name: "BUFFALO POINT",
	park: "Buffalo National River",
	state: "AR"
},{
	name: "BIG SPRING",
	park: "Ozark National Scenic Riverways",
	state: "MO"
},{
	name: "ROUND SPRING",
	park: "Ozark National Scenic Riverways",
	state: "MO"
},{
	name: "ALLEY SPRING",
	park: "Ozark National Scenic Riverways",
	state: "MO"
},{
	name: "BUCKHORN CAMPGROUND (OK) CHICKASAW NRA",
	park: "Chickasaw National Recreation Area",
	state: "OK"
},{
	name: "THE POINT CAMPGROUND (OK) CHICKASAW NRA",
	park: "Chickasaw National Recreation Area",
	state: "OK"
},{
	name: "CENTRAL GROUP CAMP (OK) CHICKASAW NRA",
	park: "Chickasaw National Recreation Area",
	state: "OK"
},{
	name: "COLD SPRINGS GROUP CAMP (OK) CHICKASAW NRA",
	park: "Chickasaw National Recreation Area",
	state: "OK"
},{
	name: "ROCK CREEK GROUP CAMP (OK) CHICKASAW NRA",
	park: "Chickasaw National Recreation Area",
	state: "OK"
},{
	name: "Black Canyon of the Gunnison NP South Rim Campground",
	park: "Black Canyon Of The Gunnison National Park",
	state: "CO"
},{
	name: "ELK CREEK CAMPGROUND",
	park: "Curecanti National Recreation Area",
	state: "CO"
},{
	name: "LAKE FORK CAMPGROUND",
	park: "Curecanti National Recreation Area",
	state: "CO"
},{
	name: "STEVENS CREEK CAMPGROUND",
	park: "Curecanti National Recreation Area",
	state: "CO"
},{
	name: "RED CREEK GROUP SITE",
	park: "Curecanti National Recreation Area",
	state: "CO"
},{
	name: "EAST ELK CREEK GROUP CAMPSITE",
	park: "Curecanti National Recreation Area",
	state: "CO"
},{
	name: "NORTH CAMPGROUND",
	park: "Bryce Canyon National Park",
	state: "UT"
},{
	name: "NEWHALEM CAMPGROUND",
	park: "North Cascades National Park",
	state: "WA"
},{
	name: "DEVILS GARDEN CAMPGROUND",
	park: "Arches National Park",
	state: "UT"
},{
	name: "FORT SPOKANE",
	park: "Lake Roosevelt National Recreation Area",
	state: "WA"
},{
	name: "KETTLE FALLS CAMPGROUND",
	park: "Lake Roosevelt National Recreation Area",
	state: "WA"
},{
	name: "SPRING CANYON",
	park: "Lake Roosevelt National Recreation Area",
	state: "WA"
},{
	name: "EVANS GROUP CAMP",
	park: "Lake Roosevelt National Recreation Area",
	state: "WA"
},{
	name: "KETTLE FALLS LOCUST GROVE GROUP SITE",
	park: "Lake Roosevelt National Recreation Area",
	state: "WA"
},{
	name: "GIFFORD GROUP SITE",
	park: "Lake Roosevelt National Recreation Area",
	state: "WA"
},{
	name: "HUNTERS GROUP SITE",
	park: "Lake Roosevelt National Recreation Area",
	state: "WA"
},{
	name: "FORT SPOKANE GROUP SITE",
	park: "Lake Roosevelt National Recreation Area",
	state: "WA"
},{
	name: "SPRING CANYON GROUP SITE",
	park: "Lake Roosevelt National Recreation Area",
	state: "WA"
},{
	name: "COTTONWOOD (TX)",
	park: "Big Bend National Park",
	state: "TX"
},{
	name: "LOWER GOODELL GROUP CAMPGROUND",
	park: "North Cascades National Park",
	state: "WA"
},{
	name: "SUNSET CAMPGROUND ",
	park: "Bryce Canyon National Park",
	state: "UT"
},{
	name: "UPPER GOODELL GROUP CAMPGROUND",
	park: "North Cascades National Park",
	state: "WA"
},{
	name: "BUTTE LAKE",
	park: "Lassen Volcanic National Park",
	state: "CA"
},{
	name: "BUTTE LAKE GROUP",
	park: "Lassen Volcanic National Park",
	state: "CA"
},{
	name: "MOUNT PISGAH CAMPGROUND",
	park: "Blue Ridge Parkway",
	state: "NC"
},{
	name: "PULLTITE",
	park: "Ozark National Scenic Riverways",
	state: "MO"
},{
	name: "TWO RIVERS",
	park: "Ozark National Scenic Riverways",
	state: "MO"
},{
	name: "AKERS",
	park: "Ozark National Scenic Riverways",
	state: "MO"
},{
	name: "JUNIPER LAKE GROUP",
	park: "Lassen Volcanic National Park",
	state: "CA"
},{
	name: "APGAR GROUP SITES",
	park: "Glacier National Park",
	state: "MT"
},{
	name: "SEAWALL CAMPGROUND",
	park: "Acadia National Park",
	state: ""
},{
	name: "FORT PICKENS CAMPGROUND",
	park: "Gulf Islands National Seashore",
	state: "FL"
},{
	name: "Pinon Flats Campground",
	park: "Great Sand Dunes National Park & Preserve",
	state: "CO"
},{
	name: "SPENCE CABIN",
	park: "Great Smoky Mountains National Park",
	state: "TN"
},{
	name: "CAMP GATEWAY - SANDY HOOK",
	park: "Gateway National Recreation Area",
	state: "NJ"
},{
	name: "CAMP GATEWAY - STATEN ISLAND",
	park: "Gateway National Recreation Area",
	state: "NY"
},{
	name: "TELEGRAPH PICNIC PAVILION",
	park: "Prince William Forest Park",
	state: "VA"
},{
	name: "TURKEY RUN RIDGE GROUP",
	park: "Prince William Forest Park",
	state: "VA"
},{
	name: "BLACK ROCK EQUESTRIAN CAMPGROUND",
	park: "Joshua Tree National Park",
	state: "CA"
},{
	name: "SPLIT MOUNTAIN GROUP CAMPGROUND",
	park: "Dinosaur National Monument",
	state: "UT"
},{
	name: "SUNSET CAMPGROUND (CA)",
	park: "Sequoia & Kings Canyon National Parks",
	state: "CA"
},{
	name: "CANYON VIEW GROUP SITES",
	park: "Sequoia & Kings Canyon National Parks",
	state: "CA"
},{
	name: "George Washington Birthplace National Monument Picnic Pavilion",
	park: "George Washington Birthplace National Monument",
	state: "VA"
},{
	name: "GREEN RIVER CAMPGROUND",
	park: "Dinosaur National Monument",
	state: "UT"
},{
	name: "SADDLEHORN CAMPGROUND",
	park: "Colorado National Monument",
	state: "CO"
},{
	name: "Haleakala National Park (Cabin Permits)",
	park: "Haleakal&#257; National Park",
	state: "HI"
},{
	name: "Little Beaver Campground",
	park: "Pictured Rocks National Lakeshore",
	state: ""
},{
	name: "Burns Lake Campground",
	park: "Big Cypress National Preserve",
	state: "FL"
},{
	name: "Midway Campground (FL)",
	park: "Big Cypress National Preserve",
	state: "FL"
},{
	name: "Monument Lake Campground",
	park: "Big Cypress National Preserve",
	state: "FL"
},{
	name: "Pinecrest Group Campground",
	park: "Big Cypress National Preserve",
	state: "FL"
},{
	name: "Twelvemile Beach Campground",
	park: "Pictured Rocks National Lakeshore",
	state: "MI"
},{
	name: "Hurricane River Campground",
	park: "Pictured Rocks National Lakeshore",
	state: ""
},{
	name: "OWENS CREEK CAMPGROUND",
	park: "Catoctin Mountain Park",
	state: "MD"
},{
	name: "POTWISHA CAMPGROUND",
	park: "Sequoia & Kings Canyon National Parks",
	state: "CA"
},{
	name: "Voyageurs National Park Camping Permits",
	park: "Voyageurs National Park",
	state: "MN"
},{
	name: "BUCKEYE FLAT CAMPGROUND",
	park: "Sequoia & Kings Canyon National Parks",
	state: "CA"
},{
	name: "Rock Creek Park Group Picnic Areas",
	park: "Rock Creek Park",
	state: "DC"
},{
	name: "GALLO CAMPGROUND",
	park: "Chaco Culture National Historical Park",
	state: "NM"
},{
	name: "HAINS POINT PICNIC AREA (East Potomac Park)",
	park: "National Mall and Memorial Parks",
	state: "DC"
},{
	name: "Davis Bayou Campground",
	park: "Gulf Islands National Seashore",
	state: "MS"
},{
	name: "Fort Dupont Park Picnic Areas",
	park: "Fort Dupont Park",
	state: "DC"
},{
	name: "Bonita Canyon Campground",
	park: "Chiricahua National Monument",
	state: "AZ"
},{
	name: "Crystal Springs Campground Mid-Sized Group Sites",
	park: "Sequoia & Kings Canyon National Parks",
	state: "CA"
},{
	name: "Roundup Group Horse Camp",
	park: "Theodore Roosevelt National Park",
	state: "ND"
},{
	name: "Cottonwood Campground",
	park: "Theodore Roosevelt National Park",
	state: "ND"
},{
	name: "Parkway Drive-Volleyball Courts",
	park: "National Mall and Memorial Parks",
	state: "DC"
},{
	name: "Rohrbach Group Campground",
	park: "Antietam National Battlefield",
	state: "MD"
},{
	name: "Frisco Campground",
	park: "Cape Hatteras National Seashore",
	state: "NC"
},{
	name: "CAMP ROUND MEADOW",
	park: "Catoctin Mountain Park",
	state: "MD"
},{
	name: "Oregon Inlet Campground",
	park: "Cape Hatteras National Seashore",
	state: "NC"
},{
	name: "Bear Creek Horse Camp",
	park: "Big South Fork National River & Recreation Area",
	state: "TN"
},{
	name: "Otter Creek Campground",
	park: "Blue Ridge Parkway",
	state: "VA"
},{
	name: "Canyonlands National Park Needles District Campground",
	park: "Canyonlands National Park",
	state: "UT"
},{
	name: "Marsden Tract Group Campsite",
	park: "Chesapeake & Ohio Canal National Historical Park",
	state: ""
},{
	name: "Carderock Recreation Area Pavilion",
	park: "Chesapeake & Ohio Canal National Historical Park",
	state: ""
},{
	name: "Alosa Campsites",
	park: "Delaware Water Gap National Recreation Area",
	state: "PA"
},{
	name: "GREENBELT PARK PICNIC AREAS",
	park: "Greenbelt Park",
	state: "MD"
},{
	name: "Capitol Reef NP Group Campsite",
	park: "Capitol Reef National Park",
	state: "UT"
},{
	name: "MCMILLAN WOODS SCOUT AND YOUTH GROUP CAMPGROUND",
	park: "Gettysburg National Military Park",
	state: "PA"
},{
	name: "Grandview Playground Shelter",
	park: "New River Gorge National River",
	state: "WV"
},{
	name: "Grandview Shelter 1",
	park: "New River Gorge National River",
	state: "WV"
},{
	name: "Grandview Shelter 4",
	park: "New River Gorge National River",
	state: "WV"
},{
	name: "Grandview Shelter 3",
	park: "New River Gorge National River",
	state: "WV"
},{
	name: "Grandview Shelter 2",
	park: "New River Gorge National River",
	state: "WV"
},{
	name: "Schoodic Woods Campground",
	park: "Acadia National Park",
	state: "ME"
},{
	name: "Canaveral National Seashore Permits",
	park: "Canaveral National Seashore",
	state: "FL"
},{
	name: "Kenai Fjords National Park Cabins",
	park: "Kenai Fjords National Park",
	state: "AK"
},{
	name: "Apostle Islands National Lakeshore Camping Permits",
	park: "Apostle Islands National Lakeshore",
	state: "WI"
},{
	name: "MANY GLACIER CAMPGROUND",
	park: "Glacier National Park",
	state: "MT"
},{
	name: "CONGAREE NATIONAL PARK CAMPING",
	park: "Congaree National Park",
	state: "SC"
},{
	name: "SOL DUC HOT SPRINGS RESORT CAMPGROUND",
	park: "Olympic National Park",
	state: "WA"
},{
	name: "Cape Point Campground",
	park: "Cape Hatteras National Seashore",
	state: "NC"
},{
	name: "Grey Cliffs Campground",
	park: "Great Basin National Park",
	state: "NV"
},{
	name: "Dundo Group Campground",
	park: "Shenandoah National Park",
	state: "VA"
},{
	name: "Spring Gap Campground",
	park: "Chesapeake & Ohio Canal National Historical Park",
	state: ""
},{
	name: "Fifteen Mile Creek Campsite",
	park: "Chesapeake & Ohio Canal National Historical Park",
	state: "MD"
},{
	name: "McCoy's Ferry Campground",
	park: "Chesapeake & Ohio Canal National Historical Park",
	state: ""
},{
	name: "Antietam Creek Campsite",
	park: "Chesapeake & Ohio Canal National Historical Park",
	state: ""
},{
	name: "Paw Paw Tunnel Campsite",
	park: "Chesapeake & Ohio Canal National Historical Park",
	state: ""
},{
	name: "Rock Creek Campground (TN)",
	park: "Obed Wild & Scenic River",
	state: "TN"
},{
	name: "Cumberland Island National Seashore Camping Permits",
	park: "Cumberland Island National Seashore",
	state: "GA"
},{
	name: "Sentinel Campground",
	park: "Sequoia & Kings Canyon National Parks",
	state: "CA"
},{
	name: "Craters of the Moon Group Campground",
	park: "Craters Of The Moon National Monument & Preserve",
	state: "ID"
},{
	name: "Colonial Creek South Campground",
	park: "North Cascades National Park",
	state: "WA"
},{
	name: "Pictured Rocks National Lakeshore Backcountry Camping Permit",
	park: "Pictured Rocks National Lakeshore",
	state: "MI"
},{
	name: "Dunewood Campground",
	park: "Indiana Dunes National Park",
	state: "IN "
},{
	name: "D.H. Day Campground",
	park: "Sleeping Bear Dunes National Lakeshore",
	state: "MI"
},{
	name: "Priest Rock Cabin",
	park: "Lake Clark National Park & Preserve",
	state: "AK"
},{
	name: "Echo Park Campground Group Site",
	park: "Dinosaur National Monument",
	state: "UT"
},{
	name: "Historic Bushman House (Gettysburg)",
	park: "Gettysburg National Military Park",
	state: "PA"
},{
	name: "SANTA ROSA ISLAND BACKCOUNTRY BEACH CAMPING",
	park: "Channel Islands National Park",
	state: "CA"
},{
	name: "TWIN PEAKS CAMPGROUND",
	park: "Organ Pipe Cactus National Monument",
	state: "AZ"
},{
	name: "DUCK HARBOR CAMPGROUND",
	park: "Acadia National Park",
	state: "ME"
},{
	name: "BICENTENNIAL CAMPGROUND",
	park: "Golden Gate National Recreation Area",
	state: "CA"
},{
	name: "SHEEP CAMP PRIMITIVE CAMPGROUND",
	park: "Whiskeytown National Recreation Area",
	state: "CA"
},{
	name: "HORSE CAMP PRIMITIVE CAMPGROUND",
	park: "Whiskeytown National Recreation Area",
	state: "CA"
},{
	name: "FRUITA CAMPGROUND",
	park: "Capitol Reef National Park",
	state: "UT"
},{
	name: "CRYSTAL CREEK PRIMITIVE CAMPGROUND",
	park: "Whiskeytown National Recreation Area",
	state: "CA"
},{
	name: "PELTIER BRIDGE PRIMITIVE CAMPGROUND",
	park: "Whiskeytown National Recreation Area",
	state: "CA"
},{
	name: "BRANDY CREEK PRIMITIVE CAMPGROUND",
	park: "Whiskeytown National Recreation Area",
	state: "CA"
},{
	name: "SOUTH CAMPGROUND (UT)",
	park: "Zion National Park",
	state: "UT"
},{
	name: "COTTONWOOD CAMPGROUND (CA)",
	park: "Joshua Tree National Park",
	state: "CA"
},{
	name: "JUMBO ROCKS CAMPGROUND",
	park: "Joshua Tree National Park",
	state: "CA"
},{
	name: "Aquatic Park Cove San Francisco Maritime NHP",
	park: "San Francisco Maritime National Historical Park",
	state: "CA"
},{
	name: "BIG CREEK CAMPGROUND (GREAT SMOKY MOUNTAINS NATIONAL PARK)",
	park: "Great Smoky Mountains National Park",
	state: "TN"
},{
	name: "ABRAM'S CREEK CAMPGROUND",
	park: "Great Smoky Mountains National Park",
	state: "TN"
},{
	name: "BALSAM MOUNTAIN CAMPGROUND",
	park: "Great Smoky Mountains National Park",
	state: "NC"
},{
	name: "Juniper Campground Group Site",
	park: "Theodore Roosevelt National Park",
	state: "ND"
}
];

db.Facility
  .remove({})
  .then(() => db.Facility.collection.insertMany(facilitiesSeed.map(cleanStates)))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  function cleanStates(facility) {
	// if state is not two letters
	// lookup the two letter code

	// if unable to find state
	// ...
	
	// return object with state code
  }

  function lookupStateCode(state) {
	  // this function should return two letter state code for given state name
  }
