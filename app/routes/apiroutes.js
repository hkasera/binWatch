var Bins = require("../models/bins.js");
var BinsActivity = require("../models/binsActivity.js");
var Utils = require("../common/utils.js");

module.exports = function(self){

    /** Bin API **/
	self.app.get('/get/bins' , function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        Bins.getAllBins(req,res,{});
    });

    self.app.get('/get/bins/page/:page' , function(req, res) {

        res.setHeader('Content-Type', 'application/json');

        /* XSS Validation */
        var pageNum = parseInt(Utils.validateXSS(req.params.page),10);
        var params = {};

        if(isNaN(pageNum)){
            res.status(Utils.HTTP_STATUS_CODE.BAD_REQUEST).send(Utils.invalidInput());
        }else{
            params.page = pageNum;
            Bins.getAllBins(req,res,params);
        }
    });

    self.app.get('/get/bins/page/:page/:limit' , function(req, res) {
        res.setHeader('Content-Type', 'application/json');

        /* XSS Validation */
        var pageNum = parseInt(Utils.validateXSS(req.params.page),10),
            limit = parseInt(Utils.validateXSS(req.params.limit),10);

        var params = {};

        if(isNaN(pageNum) || isNaN(limit)){
            res.status(Utils.HTTP_STATUS_CODE.BAD_REQUEST).send(Utils.invalidInput());
        }else{
            params.page = pageNum;
            params.limit = limit;
            Bins.getAllBins(req,res,params);
        }
        
    });
    self.app.get('/get/bins/:lati/:longi' , function(req, res) {
        res.setHeader('Content-Type', 'application/json');

        /* XSS Validation */
        var lati = parseFloat(Utils.validateXSS(req.params.lati),10),
            longi = parseFloat(Utils.validateXSS(req.params.longi),10);

        var params = {};

        if(isNaN(lati) || isNaN(longi)){
            res.status(Utils.HTTP_STATUS_CODE.BAD_REQUEST).send(Utils.invalidInput());
        }else{
            params.lati = lati;
            params.longi = longi;
            Bins.getBinInLocation(req,res,params);
        }
    });

    self.app.get('/get/bins/:lati/:longi/page/:page' , function(req, res) {
        res.setHeader('Content-Type', 'application/json');

        /* XSS Validation */
        var lati = parseFloat(Utils.validateXSS(req.params.lati)),
            longi = parseFloat(Utils.validateXSS(req.params.longi)),
            page = parseInt(Utils.validateXSS(req.params.page),10);

        var params = {};

        if(isNaN(lati) || isNaN(longi) || isNaN(page)){
            res.status(Utils.HTTP_STATUS_CODE.BAD_REQUEST).send(Utils.invalidInput());
        }else{
            params.lati = lati;
            params.longi = longi;
            params.page = page;
            Bins.getBinInLocation(req,res,params);
        }
    });

    self.app.get('/get/bins/:lati/:longi/page/:page/:limit' , function(req, res) {
        res.setHeader('Content-Type', 'application/json');

        /* XSS Validation */
        var lati = parseFloat(Utils.validateXSS(req.params.lati)),
            longi = parseFloat(Utils.validateXSS(req.params.longi)),
            page = parseInt(Utils.validateXSS(req.params.page),10),
            limit = parseInt(Utils.validateXSS(req.params.limit),10);

        var params = {};

        if(isNaN(lati) || isNaN(longi) || isNaN(page) || isNaN(limit)){
            res.status(Utils.HTTP_STATUS_CODE.BAD_REQUEST).send(Utils.invalidInput());
        }else{
            params.lati = lati;
            params.longi = longi;
            params.page = page;
            params.limit = limit;
            Bins.getBinInLocation(req,res,params);
        }

    });

    self.app.get('/get/bins/:lati/:longi/:radius' , function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        
        /* XSS Validation */
        var lati = parseFloat(Utils.validateXSS(req.params.lati)),
            longi = parseFloat(Utils.validateXSS(req.params.longi)),
            radius = parseInt(Utils.validateXSS(req.params.radius),10);

        var params = {};

        if(isNaN(lati) || isNaN(longi) || isNaN(radius)){
            res.status(Utils.HTTP_STATUS_CODE.BAD_REQUEST).send(Utils.invalidInput());
        }else{
            params.lati = lati;
            params.longi = longi;
            params.radius = radius;
            Bins.getBinInLocation(req,res,params);
        }

    });

    self.app.get('/get/bins/:lati/:longi/:radius/page/:page' , function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        
        /* XSS Validation */
        var lati = parseFloat(Utils.validateXSS(req.params.lati)),
            longi = parseFloat(Utils.validateXSS(req.params.longi)),
            radius = parseInt(Utils.validateXSS(req.params.radius),10),
            page = parseInt(Utils.validateXSS(req.params.page),10);

        var params = {};

        if(isNaN(lati) || isNaN(longi) || isNaN(radius) || isNaN(page)){
            res.status(Utils.HTTP_STATUS_CODE.BAD_REQUEST).send(Utils.invalidInput());
        }else{
            params.lati = lati;
            params.longi = longi;
            params.page = page;
            params.radius = radius;
            Bins.getBinInLocation(req,res,params);
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

        var params = {};

        if(isNaN(lati) || isNaN(longi) || isNaN(radius) || isNaN(page) || isNaN(limit)){
            res.status(Utils.HTTP_STATUS_CODE.BAD_REQUEST).send(Utils.invalidInput());
        }else{
            params.lati = lati;
            params.longi = longi;
            params.page = page;
            params.radius = radius;
            params.limit = limit;
            Bins.getBinInLocation(req,res,params);
        }
    });

    self.app.get('/get/bin/:id' , function(req, res) {
        res.setHeader('Content-Type', 'application/json');

        /* XSS Validation */
        var oid = Utils.validateXSS(req.params.id);
        var params = {};

        if(!Utils.checkForHexRegExp(oid)){
            res.status(Utils.HTTP_STATUS_CODE.BAD_REQUEST).send(Utils.invalidInput());
        }else{
            params.id = oid;
            Bins.getBinDetails(req,res,params);            
        }
    });


    /** Bin activity API **/

    self.app.get('/get/bin/:id/activity' , function(req, res) {
        res.setHeader('Content-Type', 'application/json');

        /* XSS Validation */
        var oid = Utils.validateXSS(req.params.id);
        var params = {};

        if(!Utils.checkForHexRegExp(oid)){
            res.status(Utils.HTTP_STATUS_CODE.BAD_REQUEST).send(Utils.invalidInput());
        }else{
            params.id = oid;
            BinsActivity.getBinLatestActivity(req,res,params);
        } 
        
    });

    self.app.get('/get/bin/:id/activity/page/:page' , function(req, res) {
        res.setHeader('Content-Type', 'application/json');

        /* XSS Validation */
        var oid = Utils.validateXSS(req.params.id),
            page = parseInt(Utils.validateXSS(req.params.page),10);

        var params = {};

        if(!Utils.checkForHexRegExp(oid) || isNaN(page)){
            res.status(Utils.HTTP_STATUS_CODE.BAD_REQUEST).send(Utils.invalidInput());
        }else{
            params.id = oid;
            params.page = page;
            BinsActivity.getBinLatestActivity(req,res,params);
        }    
       
    });

    self.app.get('/get/bin/:id/activity/page/:page/:limit' , function(req, res) {
        res.setHeader('Content-Type', 'application/json');

        /* XSS Validation */
        var oid = Utils.validateXSS(req.params.id),
            page = parseInt(Utils.validateXSS(req.params.page),10),
            limit = parseInt(Utils.validateXSS(req.params.limit),10);

        var params = {};

        if(!Utils.checkForHexRegExp(oid) || isNaN(page) || isNaN(limit)){
            res.status(Utils.HTTP_STATUS_CODE.BAD_REQUEST).send(Utils.invalidInput());
        }else{
            params.id = oid;
            params.page = page;
            params.limit = limit;
            BinsActivity.getBinLatestActivity(req,res,params);
        }  
    });

    self.app.post('/get/bin/:id/activity' , function(req, res) {
        res.setHeader('Content-Type', 'application/json');

        /* XSS Validation */
        var oid = Utils.validateXSS(req.params.id);
        var startDate = Utils.validateXSS(req.body.start);
        var endDate = Utils.validateXSS(req.body.end);
        var attr = Utils.validateXSS(req.body.attr);
        var params = {};

        if(!Utils.checkForHexRegExp(oid) || !Utils.isValidDateFormat(startDate) || !Utils.isValidDateFormat(endDate) || (Utils.validBinAttrs.indexOf(attr) == -1)){
            res.status(Utils.HTTP_STATUS_CODE.BAD_REQUEST).send(Utils.invalidInput());
        }else{
            params.id = oid;
            params.start = startDate;
            params.end = endDate;
            params.attr = attr;
            BinsActivity.getBinActivityForRange(req,res,params);
        }
    });

    self.app.post('/bin/predict' , function(req, res) {
        console.log(req.body.key);
        if(req.body.key && req.body.key === process.env.GMAPP_BROWSER_KEY){
            BinsActivity.binPredictionCalc(req,res,{});
        }else{
            res.status(Utils.HTTP_STATUS_CODE.BAD_REQUEST).send(Utils.invalidInput());
        }

    });

    /*self.app.post('/add/bin/:id/activity' , function(req, res) {
        BinsActivity.insertBinActivityForBin(req,res);
    });*/

 
}
