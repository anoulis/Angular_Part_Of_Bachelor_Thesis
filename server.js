//Install express server
/*const express = require('express');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + 'dist'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
*/
const express = require('express');
const http = require('http')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'dist')));

// const port = process.env.PORT || 3000;
const port = 9393;
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log('running'));
