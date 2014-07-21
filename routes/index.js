
/*
 * GET home page.
 */
var fs = require("fs")
var UserDB=require('../public/javascripts/userdb.js');
var MyUserDB=new UserDB();

exports.login = function(req, res){
   // console.log(req.session);
    //console.log(req.sessionID);
    if(req.session.name)
        res.redirect("/home");
    else
        var data= fs.readFileSync(__dirname+"/../extra/login.html")
    res.end(data);
    res.end();



  //res.redirect("/login_back.html");
    console.log(__dirname)

};

exports.auth = function(req, res){
    //console.log("1.>>>>>>>>>",req.sessionID,"<<<<<<<<<<",req.sessionStore);
 var ud=req.body.name;
    var pwd=req.body.password;
    //console.log(ud+">>>><<<<<<    "+pwd);
    MyUserDB.readData(ud, function (err, data) {
        if (err) res.send('Some Error' + err);
        else if (data) {
            //console.log(data);
            if(data.password==pwd){ req.session.name=ud; res.send("Permission Granted");} else res.send( "Wrong Password");
        }
        else res.send("User does Not exist");
        res.end();
    });

};


exports.home = function(req, res){


    //res.redirect("/home");

    console.log(__dirname)
   var data= fs.readFileSync("home.html")
    res.end(data);
};

exports.allUser = function(req, res){
   // console.log("Looking for user data......");
    MyUserDB.readDataAll(function(err,data){
       // console.log(data);
        if(err) res.send('Some Error'+err);
        else res.json(data);   //res.send(data);
        res.end();
    })
};


exports.user = function(req, res) {
    var ud = req.params.uid;
    MyUserDB.readData(ud, function (err, data) {
        if (err) res.send('Some Error' + err);
        else if (data) res.json(data);
        else res.send("No record found");
        res.end();
    });
}

exports.addUser=function(req,res) {
    req.body.friends=[];
    req.body.gender=""
    req.body.education="";
    req.body.status="";
    req.body.hobby="";
  //console.log(req.body);
    MyUserDB.writeData(req.body, function (err, data) {
        if (err) res.send('Some Error' + err);
        else res.send("Registered Successfully");

    });

};

exports.updateUser=function(req,res){
    var ud=req.params.uid;
    MyUserDB.updateData(ud,req.body,function(err,data){
        if(err) res.send('Some Error'+err);
        else
        if(data==0) res.send('No record updated');
        else res.send('Record Updated');
        res.end();
    })

};

exports.deleteUser=function(req,res){
    var ud=req.params.uid;

    MyUserDB.deleteData(ud,function(err,data){
        if(err) res.send('Some Error'+err);
        else
        if(data==0) res.send('No record deleted');
        else res.send('Record deleted');
        res.end();
    })

};


