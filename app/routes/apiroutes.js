var Bins = require("../models/bins.js");
var BinsActivity = require("../models/binsActivity.js");
var Utils = require("../common/utils.js");

module.exports = function(self){

    /** Bin API **/
	self.app.get('/get/bins' , function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        Bins.getAllBins(req,res);
    });

    self.app.get('/get/bins/page/:page' , function(req, res) {

        res.setHeader('Content-Type', 'application/json');

        /* XSS Validation */
        var pageNum = parseInt(Utils.validateXSS(req.params.page),10);

        if(isNaN(pageNum)){
            res.status(500).send(Utils.invalidInput());
        }else{
            Bins.getAllBins(req,res);
        }
    });

    self.app.get('/get/bins/page/:page/:limit' , function(req, res) {
        res.setHeader('Content-Type', 'application/json');

        /* XSS Validation */
        var pageNum = parseInt(Utils.validateXSS(req.params.page),10),
            limit = parseInt(Utils.validateXSS(req.params.limit),10);

        if(isNaN(pageNum) || isNaN(limit)){
            res.status(500).send(Utils.invalidInput());
        }else{
            Bins.getAllBins(req,res);
        }
        
    });
    self.app.get('/get/bins/:lati/:longi' , function(req, res) {
        res.setHeader('Content-Type', 'application/json');

        /* XSS Validation */
        var lati = parseFloat(Utils.validateXSS(req.params.lati),10),
            longi = parseFloat(Utils.validateXSS(req.params.longi),10);

        if(isNaN(lati) || isNaN(longi)){
            res.status(500).send(Utils.invalidInput());
        }else{
            Bins.getBinInLocation(req,res);
        }
    });

    self.app.get('/get/bins/:lati/:longi/page/:page' , function(req, res) {
        res.setHeader('Content-Type', 'application/json');

        /* XSS Validation */
        var lati = parseFloat(Utils.validateXSS(req.params.lati)),
            longi = parseFloat(Utils.validateXSS(req.params.longi)),
            page = parseInt(Utils.validateXSS(req.params.page),10);

        if(isNaN(lati) || isNaN(longi) || isNaN(page)){
            res.status(500).send(Utils.invalidInput());
        }else{
            Bins.getBinInLocation(req,res);
        }
    });

    self.app.get('/get/bins/:lati/:longi/page/:page/:limit' , function(req, res) {
        res.setHeader('Content-Type', 'application/json');

        /* XSS Validation */
        var lati = parseFloat(Utils.validateXSS(req.params.lati)),
            longi = parseFloat(Utils.validateXSS(req.params.longi)),
            page = parseInt(Utils.validateXSS(req.params.page),10),
            limit = parseInt(Utils.validateXSS(req.params.limit),10);

        if(isNaN(lati) || isNaN(longi) || isNaN(page) || isNaN(limit)){
            res.status(500).send(Utils.invalidInput());
        }else{
            Bins.getBinInLocation(req,res);
        }

    });

    self.app.get('/get/bins/:lati/:longi/:radius/page/:page' , function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        
        /* XSS Validation */
        var lati = parseFloat(Utils.validateXSS(req.params.lati)),
            longi = parseFloat(Utils.validateXSS(req.params.longi)),
            radius = parseInt(Utils.validateXSS(req.params.radius),10),
            page = parseInt(Utils.validateXSS(req.params.page),10);

        if(isNaN(lati) || isNaN(longi) || isNaN(radius) || isNaN(page)){
            res.status(500).send(Utils.invalidInput());
        }else{
            Bins.getBinInLocation(req,res);
        }

    });

    self.app.get('/get/bins/:lati/:longi/:radius/page/:page/:limit' , function(req, res) {
        res.setHeader('Content-Type', 'application/json');

        /* XSS Validation */
        var lati = parseFloat(Utils.validateXSS(req.params.lati)),
            longi = parseFloat(Utils.validateXSS(req.params.longi)),
            radius = parseInt(Utils.validateXSS(req.params.radius),10),
            page = parseInt(Utils.validateXSS(req.params.page),10),
            limit = parseInt(Utils.validateXSS(req.params.limit),10);


        if(isNaN(lati) || isNaN(longi) || isNaN(radius) || isNaN(page) || isNaN(limit)){
            res.status(500).send(Utils.invalidInput());
        }else{
            Bins.getBinInLocation(req,res);
        }
    });

    self.app.get('/get/bin/:id' , function(req, res) {
        res.setHeader('Content-Type', 'application/json');

        /* XSS Validation */
        var oid = Utils.validateXSS(req.params.id);

        if(!Utils.checkForHexRegExp(oid)){
            res.status(500).send(Utils.invalidInput());
        }else{
            Bins.getBinDetails(req,res);            
        }
    });


    /** Bin activity API **/

    self.app.get('/get/bin/:id/activity' , function(req, res) {
        res.setHeader('Content-Type', 'application/json');

        /* XSS Validation */
        var oid = Utils.validateXSS(req.params.id);

        if(!Utils.checkForHexRegExp(oid)){
            res.status(500).send(Utils.invalidInput());
        }else{
            BinsActivity.getBinLatestActivity(req,res);
        } 
        
    });

    self.app.get('/get/bin/:id/activity/page/:page' , function(req, res) {
        res.setHeader('Content-Type', 'application/json');

        /* XSS Validation */
        var oid = Utils.validateXSS(req.params.id),
            page = parseInt(Utils.validateXSS(req.params.page),10)

        if(!Utils.checkForHexRegExp(oid) || isNaN(page)){
            res.status(500).send(Utils.invalidInput());
        }else{
            BinsActivity.getBinLatestActivity(req,res);
        }    
       
    });

    self.app.get('/get/bin/:id/activity/page/:page/:limit' , function(req, res) {
        res.setHeader('Content-Type', 'application/json');

        /* XSS Validation */
        var oid = Utils.validateXSS(req.params.id),
            page = parseInt(Utils.validateXSS(req.params.page),10),
            limit = parseInt(Utils.validateXSS(req.params.limit),10);

        if(!Utils.checkForHexRegExp(oid) || isNaN(page) || isNaN(limit)){
            res.status(500).send(Utils.invalidInput());
        }else{
            BinsActivity.getBinLatestActivity(req,res);
        }  
    });

    self.app.post('/get/bin/:id/activity' , function(req, res) {
        res.setHeader('Content-Type', 'application/json');

        /* XSS Validation */
        var oid = Utils.validateXSS(req.params.id);

        if(!Utils.checkForHexRegExp(oid) || isNaN(page)){
            res.status(500).send(Utils.invalidInput());
        }else{
            BinsActivity.getBinActivityForRange(req,res);
        }
    });

    /*self.app.post('/add/bin/:id/activity' , function(req, res) {
        BinsActivity.insertBinActivityForBin(req,res);
    });*/

 
}
