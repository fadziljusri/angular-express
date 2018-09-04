const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get API routes
const api = require('./server/routes/api');

const app = express();

/*
 * Don’t use the folder ‘dist’ for your ng build result, this folder is automatically removed by ng serve command.
 * Change your server.js to look at another folder (Let’s say — ./public)
 * Change "distFolder" means need to change package.json in "scripts.build" to "ng build --output-path=<distFolder>"
 */
const distFolder = 'public';

// Parser for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Point static path to 'dist'
app.use(express.static(path.join(__dirname, distFolder)));

// Set api routes
app.use('/api', api);

// Catch all oth routes and return to index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, `${distFolder}/index.html`));
});

/*
 * Get port from env and store in Express
 * Must be same with "./proxy.conf.json"
*/
const port = process.env.PORT || '8000';
app.set('port', port);

// Create Http server
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));