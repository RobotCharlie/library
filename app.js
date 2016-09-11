let express = require('express');

let app = express();

let port = 5000;

let app.get('/', function(request, respond) {
    respond.send('Hello World');
})

let app.get('/books', function(request, respond) {
    respond.send('Hello Books');
})

let app.listen(port, function(err) {
    console.log('running server on port: ' + port);
});

