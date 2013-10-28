// **********************************************************************************
// Application: Mobile/Web interface template module
//
//
// Filename: server.js
//
// Modification History
// Modified by:          Date:       Comment:
// **********************************************************************************

// Bring in the express application and the http protocol
var app = require('./config/express')(),
    http = require('http')

// Read the configuration from the config class
var config = require('./config/config')();

// Bring in the routes
require('./config/routes')(app);

http.createServer(app).listen(config.port, function() {
   console.log('Web Services listening on port ' + config.port);
});
