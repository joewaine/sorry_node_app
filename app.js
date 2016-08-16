/**
@example basic
 *
 * @description limited example
 * $ npm install express
 *
 */
 
var app
  , express = require('express')
  ,  path = require('path')
  , subdomain = require('subdomain')
  , router = express.Router()
  , bodyParser = require('body-parser');
  





var prompt = require('prompt');

app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
 
app.use(subdomain({ base : 'localhost', removeWWW : true }));



  function onErr(err) {
    console.log(err);
    return 1;
  }
 

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client.html'));
});


app.get('/client', function(req, res) {
    res.sendFile(path.join(__dirname + '/client.html'));
});



app.get('/endpoint', function(req, res) {
    res.sendFile(path.join(__dirname + '/endpoint.html'));
});

app.get('/subdomain/abc/', function(request, response) {
   response.sendFile(path.join(__dirname + '/abc.html'));

  });




var names = ['steven','eric','jamesie','tobey','paul']

for(i=0;i<names.length;i++){

app.get('/subdomain/'+ names[i] +'/', function(request, response) {
   response.sendFile(path.join(__dirname + '/abc.html'));
  });


}


if(1 == 1){

app.get('/subdomain/jim/', function(request, response) {
    response.end('jim');
  });

app.get('/subdomain/james/', function(request, response) {
    response.end('james');
  });

app.get('/subdomain/blog/', function(request, response) {
  response.end('BLOG.LOCALHOST: "/"');
});

}



app.post('/', function(req, res){
  var obj = {};
  console.log('body: ' + JSON.stringify(req.body));
  res.send(req.body);



app.get('/subdomain/'+ req.body['title'] +'/', function(request, response) {
   response.sendFile(path.join(__dirname + '/abcd.html'));
  });


});




app.listen(8000, function() {
  console.log('');
});
