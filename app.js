
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var http = require('http');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){

    app.use(express.static(__dirname ));
 app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static('./public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.login);

app.get('/login', routes.login);

//app.get("/user",routes.allUser);

app.get("/user/:uid",routes.user);

app.post("/user",routes.addUser);

app.put("/user/:uid",routes.updateUser);

app.delete("/user/:uid",routes.deleteUser);

app.post("/home",routes.home);

app.get("/home",routes.home);




app.listen(5000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
