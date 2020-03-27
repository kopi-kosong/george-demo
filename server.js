//require('dotenv').load();

const session = require('express-session');
var express             = require('express');
var bodyParse           = require('body-parser')
var app                 = express();
app.use(bodyParse.urlencoded({extended:true})) ;
var path=require('path');
app.use(express.static(__dirname + '/public')); 
app.use(bodyParse.json());

//
const PORT = process.env.PORT || 3000
const NEXMO_API_KEY = process.env.NEXMO_API_KEY;
const NEXMO_API_SECRET = process.env.NEXMO_API_SECRET;
const NEXMO_CUST_A_NUM = process.env.NEXMO_CUST_A_NUM;
const NEXMO_BRAND_NAME = "Panda Cab";

const Nexmo = require('nexmo');
const nexmo = new Nexmo({
    apiKey: NEXMO_API_KEY,
    apiSecret: NEXMO_API_SECRET
}, {
        debug: true
    });

let verifyRequestId = null;
let verifyRequestNumber = null;

app.use(session({
    secret: 'loadsofrandomstuff',
    resave: false,
    saveUninitialized: true
}));

//app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    /*
        If there is a session for the user, the `index.html`
        page will display the number that was used to log
        in. If not, it will prompt them to log in.
    */
	console.log("method: get '/' : [param] - session.user : " + req.session.user);
	res.sendFile('/main.html', { root: __dirname }) ;

});

app.post('/login', (req, res) => {
	
console.log("method: post '/login' : [param] - login user  : " + req.body.uname + '- login password :' + req.body.psw);

 verifyRequestNumber = NEXMO_CUST_A_NUM;
   nexmo.verify.request({
        number: verifyRequestNumber,
       brand: NEXMO_BRAND_NAME
    }, (err, result) => {
        if (err) {
            console.error(err);
       } else {
            verifyRequestId = result.request_id;
            console.log(`request_id: ${verifyRequestId}`);
       }
   });
	// Display the login page
     res.render('login', {
           cust_a_number: NEXMO_CUST_A_NUM,
          
       });
	   
});

app.post('/check-code', (req, res) => {
	
	console.log("come in login check code " + req.body.code);
	
    // Check the code provided by the user
    nexmo.verify.check({
        request_id: verifyRequestId,
        code: req.body.code
    }, (err, result) => {
        if (err) {
            console.error(err);
        } else {
            if (result.status == 0) {
                /* 
                    User provided correct code,
                    so create a session for that user
                */
                req.session.user = {
                    number: verifyRequestNumber
                }
            }
        }
        // Redirect to the home page
	res.sendFile('/public/login_success.html', { root: __dirname }) ;
    });
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${server.address().port}`);
});


