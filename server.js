// This is the Express module and create a new instance of the express object.
import express from 'express';
const app = express();

// This is the HTTP server and create a new instance of the http server object.
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// This is the HTTP server and create a new instance of the http server object.
app.get('/about', (req, res) => {
    res.send('About Page!');
});


// Start your server by calling app.listen and passing in a port number.
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
