const Plane = require('../models/planeModel');

// *****************************
//         ALL CREW
// *****************************
exports.allPlanes = async (req,res) => {
    let [aircraft, _] = await Plane.findAll();

    res.render('planes/allPlanes.ejs', {aircraft: aircraft});
    //res.json(crew);       //debugging
}

// *****************************
//         CREATE FLIGHT
// *****************************
exports.planeForm = (req,res) => {
    res.render('planes/planeForm.ejs');
}

exports.createPlane = async (req, res) => {
    const body = req.body;

    let aircraft = new Plane(
        body.tailNum,
        body.model 
    );

    aircraft = await aircraft.save();

    //console.log(aircrew);        //debugging

    res.redirect('/planeRoute/allPlanes');
}