// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var morgan		   = require('morgan');
var fs 			   = require('fs');
var path 		   = require('path');
var mongojs = require('mongojs');
var db = mongojs('personnelwebsite',['personnelwebsite']);
var bodyParser = require('body-parser');
var path = require('path');
var nodemailer = require("nodemailer");
var AWS = require('aws-sdk');
var aws= new AWS.EC2();

/*
// create reusable transport method (opens pool of SMTP connections)
var smtpTransport   = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: "dev.medibox@gmail.com",
        pass: "medibox123"
    }
});
*/
var smtpTransport = require('nodemailer-smtp-transport');
var mail_details = {
    host: 'email-smtp.eu-west-1.amazonaws.com',
    port: 587,
    service: "Gmail",
    auth: {
        user: "dev.medibox@gmail.com",
        pass: "medibox123"
    }
}
var smtpTransport = nodemailer.createTransport(mail_details);


// configuration ===========================================
	


app.use(bodyParser.json());

var port = process.env.PORT || 9000; // set our port
// mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(morgan('combined', {stream: accessLogStream}));
app.use(morgan('dev'));

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.use(bodyParser.json());

app.post('/personnelwebsite',function(req,res){
    console.log('i recieved post request');
    console.log(req.body)
    db.personnelwebsite.insert(req.body,function(err,doc){
        res.json(doc)
    })
});

app.post('/sendFeedbackMail',function(req,res){
    console.log('asasasasas',req.body);
    var data = "name:  " +req.body.data.name  +   "  email:  " +req.body.data.email   +  "    phone:  "   +  req.body.data.phone + "   message:  " + req.body.data.message;
    if(req.body){
        var mailOptions = {
            to: req.body.to, // list of receivers
            subject: req.body.subject, // Subject line
            text:data
        }

        // send mail with defined transport object
        console.log("mailOptions: " +JSON.stringify(mailOptions));
        smtpTransport.sendMail(mailOptions, function(error, response){
            if(error){
                console.log(error);
            }else{
                console.log('response'+JSON.stringify(response));
                res.json(response)
            }
        });
    }

})




// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);	
console.log('Server started on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app
