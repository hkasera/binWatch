var Bins = require("../models/bins.js");
var BinsActivity = require("../models/binsActivity.js"); 

module.exports = function(self){

    /** Bin API **/
	self.app.get('/get/bins' , function(req, res) {
        Bins.getAllBins(req,res);
    });

    self.app.get('/get/bins/page/:page' , function(req, res) {
        Bins.getAllBins(req,res);
    });

    self.app.get('/get/bins/page/:page/:limit' , function(req, res) {
        Bins.getAllBins(req,res);
    });
    self.app.get('/get/bins/:lati/:longi' , function(req, res) {
        Bins.getBinInLocation(req,res);
    });

    self.app.get('/get/bins/:lati/:longi/page/:page' , function(req, res) {
        Bins.getBinInLocation(req,res);
    });

    self.app.get('/get/bins/:lati/:longi/page/:page/:limit' , function(req, res) {
        Bins.getBinInLocation(req,res);
    });

    self.app.get('/get/bins/:lati/:longi/:radius/page/:page' , function(req, res) {
        Bins.getBinInLocation(req,res);
    });

    self.app.get('/get/bins/:lati/:longi/:radius/page/:page/:limit' , function(req, res) {
        Bins.getBinInLocation(req,res);
    });

    self.app.get('/get/bin/:id' , function(req, res) {
        Bins.getBinDetails(req,res);
    });


    /** Bin activity API **/

    self.app.get('/get/bin/:id/activity' , function(req, res) {
        BinsActivity.getBinLatestActivity(req,res);
    });

    self.app.get('/get/bin/:id/activity/page/:page' , function(req, res) {
        BinsActivity.getBinLatestActivity(req,res);
    });

    self.app.get('/get/bin/:id/activity/page/:page/:limit' , function(req, res) {
        BinsActivity.getBinLatestActivity(req,res);
    });

    self.app.post('/get/bin/:id/activity' , function(req, res) {
        BinsActivity.getBinActivityForRange(req,res);
    });

    /*self.app.post('/add/bin/:id/activity' , function(req, res) {
        BinsActivity.insertBinActivityForBin(req,res);
    });*/

 
}
