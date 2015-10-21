var db = require("../../db.js");
var mongojs = require('mongojs');
var ObjectId = mongojs.ObjectId; 
module.exports = {
	getAllBins: function(req, res){  
		var bins = db.collection('bins');
   		db.bins.find(
   			{},
   			{
   				"isActive": true,
    			"latitude": true,
    			"longitude":true,
          "humidity":true,
          "temperature":true,
          "fill":true,
          "name":true,
          "type":true,
          "address":true
    		},function(err, docs) {
          if(!err){
            res.send(docs);  
          }else{
            res.send({});
          }
	       	
	    }); 
	},
  getBinInLocation:function(req,res){
    var bins = db.collection('bins'), 
        lati = parseFloat(req.params.lati),
        longi = parseFloat(req.params.longi),
        maxDistance = 2000;

    if(req.params.radius){
      maxDistance = parseInt(req.params.radius,10);
    }
    bins.find(
      {
        loc : {
      $near : {
        $geometry : { 
          type : "Point" , 
          coordinates : [longi,lati]  
        }, 
        $maxDistance : maxDistance
      }
    }}).toArray(function(err, docs) {
      if(err) return console.dir(err)

      res.send(docs);  
    });
  },
  getBinDetails:function(req,res){
    db.bins.find(
        {"_id": ObjectId(req.params.id)  },
        {
          "isActive": true,
          "latitude": true,
          "longitude":true,
          "humidity":true,
          "temperature":true,
          "fill":true,
          "name":true,
          "type":true,
          "address":true
        },function(err, docs) {
          if(!err){
            res.send(docs);  
          }else{
            res.send({});
          }
          
      }); 
  }
}

