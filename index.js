const express = require ('express');
const routes = require ('./routes/api');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');


//set up express app 
const app= express();


// connect to mongoDB
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise ; 




app.use(express.static('public'));


app.use(bodyParser.json());


//initialize routes
app.use('/api' , routes );


//error handing middleware

app.use(function(err , rep ,res , next){
	res.status(422).send({error:err.message});
});






// listen 

app.listen(process.env.port || 3500, function(){
	console.log ("now you can start");
});