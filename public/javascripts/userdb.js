/**
 * Created by intelligrape on 14/7/14.
 */
exports = module.exports =function(){
    var mongoose = require("mongoose");
    var UriSting = 'mongodb://localhost/MyChatt';//define database name
    console.log('Server started');
    var db = mongoose.createConnection(UriSting);


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// to create schema like a TABLE (field name:data type );
    var UserSechema = new mongoose.Schema({

        name: String,
        password: String,
        email:String,
        gender:String,
        frends:[]


});
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    var user = db.model('user', UserSechema); //collection name -to-mongooseSchema Relation

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    this.writeData=function(newData,callback){
        var MyUser = new user(newData);

        MyUser.save(function(err){
            if (err) callback(err);
            else callback(null,"Data Entered sucessfully");
        })

    }


    this.readData=function(unm,callback){
        //console.log(unm);
         user.findOne({"name":unm}).exec(function(err,result){
            if (err) callback(err);
            else callback(null,result);
        })

    }

    this.readDataAll=function(callback){
        user.find({}).limit(0).exec(function(err,result){
            if (err) callback(err);
            else callback(null,result);
        })

    }

    this.updateData=function(unm,obj, callback)
    {
        user.update({name:unm}, { $set:obj},{multi: false}, function (err, result) {
            if (err) callback(err);
            else callback(null, result);
        })
    }

    this.deleteData=function(unm ,callback){
        user.remove( { name:unm },function(err,result){
            //console.log('in delete Data function');
            if (err) callback(err);
            else callback(null, result);
        });
    }


}


/*
 var test=new MyDB();
 test.deleteData(101,function(err,res){
 if(err) console.log(err);
 else console.log(res);
 });
 */

