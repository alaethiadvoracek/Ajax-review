//bring in dependencies
const express = require( 'express' );
// without require there is no file path 
const app = express();

//define middleware
app.use(express.static('server/public'));

//define routes 
// app.get, app.post........
//app.use -> all request methods 
app.get('/gifts', function(req, res) {
    let gifts = ['hat', 'skates',];
    res.send(gifts);
});
app.get('/santa', function(req, res){
    red.send('santa can fly');
});
const port = 5000;
app.listen( port, function(){
    console.log( 'server up on:', port );
}); //end listen statement 
