const Crew = require('../models/crewModel');

// *****************************
//         ALL CREW
// *****************************
exports.allCrew = async (req,res) => {
    let [crew, _] = await Crew.findAll();

    res.render('pilots/allPilots.ejs', {aircrew: crew});
    //res.json(crew);
}

// *****************************
//         CREATE FLIGHT
// *****************************
exports.crewForm = (req,res) => {
    res.render('pilots/pilotForm.ejs');
}

exports.createCrew = async (req, res) => {
    const body = req.body;

    let aircrew = new Crew(
        body.name,
        body.callSign,
        body.isPilot,
        body.flyUH60  
    );

    aircrew = await aircrew.save();

    //console.log(aircrew);        //debugging

    res.redirect('/crewRoute/allCrew');
}