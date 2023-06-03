// This is the Express module and create a new instance of the express object.
import express from 'express';
const app = express();

// define a route handler for the default home page
app.use(express.static('public'));


// Define your server's routes using app.get, app.post, etc.
app.get('/', (req, res) => {
    res.sendFile("index.html");
  });

// Define a route to respond to a GET request for "about" page
app.get('/about', (req, res) => {
    res.send('About page!');
})

// Start your server by calling app.listen and passing in a port number.
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})
