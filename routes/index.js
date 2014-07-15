
/*
 * GET home page.
 */

var UserDB=require('../public/javascripts/userdb.js');
var MyUserDB=new UserDB();

exports.login = function(req, res){
  res.send('Login page');
};


exports.allUser = function(req, res){
    MyUserDB.readDataAll(function(err,data){
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
    console.log(req.body);
    MyUserDB.writeData(req.body, function (err, data) {
        if (err) res.send('Some Error' + err);
        else res.send('Record inserted');
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


