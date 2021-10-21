const Flight = require("../models/flightModel");

// *****************************
//         ALL FLIGHTS
// *****************************
exports.allFlights = async (req,res) => {
    let [missions, _] = await Flight.findAll();
    let julianDate = 21290;

    res.render('flights/allFlights.ejs', {
        missions: missions,
        julian: julianDate
    });
}

// *****************************
//         CREATE FLIGHT
// *****************************
exports.flightForm = (req, res) => {
    let julianDate = 21290;

    //load recordset for pilots and planes
    
    res.render('flights/flightForm.ejs', { julian: julianDate });
}

exports.createFlight = async (req, res, next) => {
    const body = req.body;

    let newFlight = new Flight(
        body.pilot1,
        body.tailNum,
        body.ETD,
        body.julianDate  
    );

    newFlight = await newFlight.save();

    console.log(newFlight);        //debugging

    res.redirect('/flightRoute/allFlights');
}
