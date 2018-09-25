
var express = require('express');
var app = express();

// --> 7)  Mount the Logger middleware here


// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */
console.log('Hello World');

/** 2) A first working Express Server */
// app.get('/', function(req, res) {
//  res.send('Hello Express')
// });


/** 3) Serve an HTML file */
let absolutePathIndex = __dirname + '/views/index.html'
app.get('/', function(req, res) {
  res.sendFile(absolutePathIndex);
});
        
/** 4) Serve static assets  */
let absolutePathStatic = __dirname + '/public'
app.use(express.static(absolutePathStatic));

/** 5) serve JSON on a specific route */
/** 6) Use the .env file to configure the app */
// 


/** 7) Root-level Middleware - A lo// gger */
//  place it before all the routes !


/** // 8) Chaining middleware. A Time server */
// 

/** 9)  G// et input from client - Route parameters *// /


// /**
let messageObject = {"message": "Hello json"};

app.get("/json", jsonHandler);

function jsonHandler(req, res){
  if(process.env.MESSAGE_STYLE==='uppercase') {
    messageObject.message = messageObject.message.toUpperCase()
  }
  return res.json(messageObject);
};
//}10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>


/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
// app.listen(process.env.PORT || 3000 );

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
app.get('/json', function(req, res) {
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    res.json({"message": "HELLO JSON"});
  } else {
    res.json({"message": "Hello json"});
  }
});