// This is the Express module and create a new instance of the express object.
import express from 'express';
const app = express();

// This is the HTTP server and create a new instance of the http server object.
app.get('/', (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

// This is the HTTP server and create a new instance of the http server object.
app.get('/about', (req, res) => {
    res.send('My name is Ahmed Wahba and I love coding and play games');
});


// Start your server by calling app.listen and passing in a port number.
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
