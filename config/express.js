var express = require('express'),
    path = require('path'),
    swig = require('swig'),
    useragent = require('express-useragent'),
    config = require('./config');

module.exports = function() {
var app = express();
var viewPath = path.join( __dirname, '../app/views');

console.log('view directory: ' + viewPath);

// This will wire up the swig to express
app.engine('html', swig.renderFile);

// Configure the settings for the view engine
app.set('views', viewPath );
app.set('view cache', false );
app.set('view engine', 'html');

// Other standard settings for express
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('osw-hm-mobile'));

app.use(useragent.express());

// Comment these lines out in production environment;  demonstrates the use of middleware
app.use( function( req, res, next ) { 
  console.log(JSON.stringify(req.useragent));
  console.log(req.useragent.isMobile);
  if(req.useragent.isMobile == true) {
     console.log('app is mobile');
  }
  else {
     console.log('app is not mobile');
  }
  next();
});

app.use(app.router);

// Static route path for supporting files
app.use(express.static(path.join(__dirname, '../public')));
console.log(path.join(__dirname, '../public'));

if(app.get('env') == 'development') {
   app.use(express.errorHandler());
}

swig.setDefaults( { cache: false } );

return app;
};
