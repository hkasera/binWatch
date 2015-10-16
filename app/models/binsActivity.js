var db = require("../../db.js"); 
var mongojs = require('mongojs');
var ObjectId = mongojs.ObjectId; 
module.exports = {
	getBinLatestActivity: function(req, res){   
   	  var binActivity = db.collection('binActivity'); 
   		db.binActivity.find(
   			{"binId": ObjectId(req.params.id)  },
   			function(err, docs) {
          if(!err){
            res.send(docs);  
          }else{
            res.send({});
          }
	       	
	    });   
	}
}