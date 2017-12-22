//bring in dependencies
const express = require( 'express' );
// without require there is no file path 
const app = express();
const bodyParser = require('body-parser');

let gifts = ['hat', 'skates',];//gifts array
//define middleware
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded());//end bodyParser
//define routes 
// app.get, app.post........
//app.use -> all request methods 
app.get('/gifts', function(req, res) {
    res.send(gifts);
});//end app.get gifts 

app.post('/gifts', function(req, res){
    console.log('body:', req.body);
    gifts.push(req.body.newGiftProperty);//pushing new gift to the array 
    console.log('gifts:', gifts);
    //data object in client.js becomes req.body using the body parser 
    res.sendStatus(201);//created a new resource
    
})//end app.post gifts
app.get('/santa', function(req, res){
    red.send('santa can fly');
});//end app.get santa
const port = 5000;//assigning port
app.listen( port, function(){
    console.log( 'server up on:', port );
}); //end listen statement for server to run on specified port  
