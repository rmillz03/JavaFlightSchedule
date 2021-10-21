const User = require('../models/userModel');


// *****************************
//         LOGIN
// *****************************
exports.login = (req, res) => {
    res.render('users/login.ejs', { layout: 'layouts/loginLayout' });
}

exports.submitLogin = async (req, res, next) => {
    try {
        let id = req.body.email;    
        let [user, _] = await User.findOne(id);         //omits field data

        //check password match
        if (req.body.password == user[0].password)
        {
            res.render('users/dashboard.ejs', { firstName: user[0].first_name });
        }
        else
        {
            res.send("Incorrect login. Correct: ${user.password}. Entered: ${req.body.passowrd}");
        }
    } catch (error) {
        console.log(error);
        next(error);
    }


}

// *****************************
//         REGISTRATION
// *****************************
exports.reg = async (req, res, next) => {
    res.render('users/register.ejs');
}

exports.submitReg = async (req, res, next) => {
    const body = req.body;

    let newUser = new User(
        body.firstName,
        body.lastName,
        body.email,
        body.password  
    );

    newUser = await newUser.save();

    //console.log(newUser);        //debugging

    res.redirect('/userRoute/login');
}

// *****************************
//         DASHBOARD
// *****************************
exports.dashboard = (req, res) => {
    let name = "User";
    
    res.render('users/dashboard.ejs', { firstName: name });
}

