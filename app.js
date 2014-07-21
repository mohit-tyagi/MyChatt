
/**
 * Module dependencies.
 */
var fs=require('fs');
var express = require('express')
  , routes = require('./routes');
var session=require('express-session');
var bodyParser=require('body-parser');
var http = require('http');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
    app.use(session({secret:'Mohit Kumar'}));

    app.use(express.static(__dirname ));
 app.use(bodyParser());
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

app.get('/', function(req,res){
    res.redirect('/login');
});

app.get('/login', routes.login);

app.post('/auth', routes.auth);

app.get("/user",routes.allUser);

app.get("/user/:uid",routes.user);

app.post("/user",routes.addUser);

app.put("/user/:uid",routes.updateUser);

app.delete("/user/:uid",routes.deleteUser);

app.get("/home",function(req,res){

    //console.log( req.session.name);
    if(req.session.name)
    {
        var data= fs.readFileSync("home.html")
        res.end(data);
    }

    else
    res.redirect("/login");
    res.end();

});

app.get("/logout",function(req,res){
   // console.log(req.sessionID);
   req.session.name=undefined;
    res.redirect("/login");
    res.end();
} );

app.get("/session",function(req,res){
    //console.log(req.sessionID);

    res.send(req.session.name);
    res.end();
} );

/*
app.post("/session",function (req,res){
   // console.log(req.body.name);
    req.session.name=req.body.name;
    res.send('done');

});
*/








app.listen(5000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
