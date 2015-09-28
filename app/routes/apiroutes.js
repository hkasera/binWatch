var Bins = require("../models/bins.js");
var BinsActivity = require("../models/binsActivity.js"); 

module.exports = function(self){
	self.app.get('/get/bins' , function(req, res) {
        Bins.getAllBins(req,res);
    });

    self.app.get('/get/bin/:id' , function(req, res) {
        Bins.getBinDetails(req,res);
    });

    self.app.get('/get/bin/:id/activity' , function(req, res) {
        BinsActivity.getBinLatestActivity(req,res);
    });

 
}
