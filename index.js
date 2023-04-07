const express = require("express")
const app = express

const port = 4000;

// Parses Json
app.use(express.json());
// Sets up middleware to serve up static files from public directory
app.use(express.static('public'));

// Creates new router instance, basically mini express application, used to handle subrequests
const apiRouter = express.Router();
// Uses apiRouter to handle all requests that start with /api path, common convention to to distinguish API routes from others in application
app.use(`/api`, apiRouter);


//Returns Default Page if ever errors
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });

// Makes it so that express waits for incoming network connections on that port

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

