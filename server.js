if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');                 //server
const morgan = require('morgan');                   //logs requests directed to backend
const dotenv = require('dotenv');                   //environmental vars
const session = require('express-session');         //user sessions
const expressLayouts = require('express-ejs-layouts');


dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(morgan('dev'))

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/mainLayout')
app.use(expressLayouts)
app.use(express.static('public')) 
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => { 
   res.sendFile(path.join(__dirname + '/public')) 
});
app.use(express.urlencoded({ extended: false })) //need to allow pages to access form data

app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        //store: sessionStore,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24
        }
    }));

//----------- Routes -----------
const userRoute = require('./routes/userRoute');
app.use('/userRoute', userRoute);
const flightRoute = require('./routes/flightRoute');
app.use('/flightRoute', flightRoute);
const crewRoute = require('./routes/crewRoute');
app.use('/crewRoute', crewRoute);
const planeRoute = require('./routes/planeRoute');
app.use('/planeRoute', planeRoute);


//----------- Get the Party Started! -----------
app.get('/', (req, res) => {
    res.redirect('/userRoute/login');
});


app.listen(port, () => console.log(`Server listening on port ${port}`));
