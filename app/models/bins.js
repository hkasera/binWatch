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
          "type":true
    		},function(err, docs) {
          if(!err){
            res.send(docs);  
          }else{
            res.send({});
          }
	       	
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
          "type":true
        },function(err, docs) {
          if(!err){
            res.send(docs);  
          }else{
            res.send({});
          }
          
      }); 
  }
}

