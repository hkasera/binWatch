var Bins = require("../models/bins.js");
var BinsActivity = require("../models/binsActivity.js");
var BinsPrediction = require("../models/binPrediction.js");
var Utils = require("../common/utils.js");
var json2csv = require('json2csv');
var moment = require('moment');
module.exports = function(self){

    /** Bin API **/
	self.app.get('/get/bins' , function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        Bins.getAllBins({},function(err,docs){
            if(!err){
                res.send(docs);
            }else{
                res.status(Utils.HTTP_STATUS_CODE.SERVER_ERROR).send(err);
            }
        });
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
            Bins.getAllBins(params,function(err,docs){
                if(!err){
                    res.send(docs);
                }else{
                    res.status(Utils.HTTP_STATUS_CODE.SERVER_ERROR).send(err);
                }
            });
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
            Bins.getAllBins(params,function(err,docs){
                if(!err){
                    res.send(docs);
                }else{
                    res.status(Utils.HTTP_STATUS_CODE.SERVER_ERROR).send(err);
                }
            });
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
            Bins.getBinInLocation(params,function(err,docs){
                if(!err){
                    res.send(docs);
                }else{
                    res.status(Utils.HTTP_STATUS_CODE.SERVER_ERROR).send(err);
                }
            });
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
            Bins.getBinInLocation(params,function(err,docs){
                if(!err){
                    res.send(docs);
                }else{
                    res.status(Utils.HTTP_STATUS_CODE.SERVER_ERROR).send(err);
                }
            });
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
            Bins.getBinInLocation(params,function(err,docs){
                if(!err){
                    res.send(docs);
                }else{
                    res.status(Utils.HTTP_STATUS_CODE.SERVER_ERROR).send(err);
                }
            });
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
            Bins.getBinInLocation(params,function(err,docs){
                if(!err){
                    res.send(docs);
                }else{
                    res.status(Utils.HTTP_STATUS_CODE.SERVER_ERROR).send(err);
                }
            });
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
            Bins.getBinInLocation(params,function(err,docs){
                if(!err){
                    res.send(docs);
                }else{
                    res.status(Utils.HTTP_STATUS_CODE.SERVER_ERROR).send(err);
                }
            });
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
            Bins.getBinInLocation(params,function(err,docs){
                if(!err){
                    res.send(docs);
                }else{
                    res.status(Utils.HTTP_STATUS_CODE.SERVER_ERROR).send(err);
                }
            });
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
            Bins.getBinDetails(params,function(err,docs){
                if(!err){
                    res.send(docs);
                }else{
                    res.status(Utils.HTTP_STATUS_CODE.SERVER_ERROR).send(err);
                }
            });          
        }
    });

    self.app.get('/get/bin/:id/prediction' , function(req, res) {
        res.setHeader('Content-Type', 'application/json');

        /* XSS Validation */
        var oid = Utils.validateXSS(req.params.id);
        var params = {};

        if(!Utils.checkForHexRegExp(oid)){
            res.status(Utils.HTTP_STATUS_CODE.BAD_REQUEST).send(Utils.invalidInput());
        }else{
            params.id = oid;
            BinsPrediction.getBinPrediction(params,function(err,docs){
                if(!err){
                    res.send(docs);
                }else{
                    res.status(Utils.HTTP_STATUS_CODE.SERVER_ERROR).send(err);
                }
            });           
        }
    });

    self.app.post('/add/bin/:lati/:longi' , function(req, res) {

         /* XSS Validation */
        var lati = parseFloat(Utils.validateXSS(req.params.lati),10),
            longi = parseFloat(Utils.validateXSS(req.params.longi),10);
        var params = {};

        if(req.body.key && req.body.key === process.env.GMAPP_BROWSER_KEY){
            params.lati = lati;
            params.longi = longi;
            Bins.createBin(params,function(err,docs){
                if(!err){
                    res.send(docs);
                }else{
                    res.status(Utils.HTTP_STATUS_CODE.SERVER_ERROR).send(err);
                }
            });
        }else{
            res.status(Utils.HTTP_STATUS_CODE.BAD_REQUEST).send(Utils.invalidInput());
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
            BinsActivity.getBinLatestActivity(params,function(err,docs){
                if(!err){
                    res.send(docs);
                }else{
                    res.status(Utils.HTTP_STATUS_CODE.SERVER_ERROR).send(err);
                }
            });
        } 
        
    });

    self.app.get('/get/bin/ids/:ids/activity' , function(req, res) {
        res.setHeader('Content-Type', 'application/json');

        /* XSS Validation */
        var oids = Utils.validateXSS(req.params.ids);
        var oids = oids.split(',');
        var params = {};

        if(!oids.every(Utils.checkForHexRegExp)){
            res.status(Utils.HTTP_STATUS_CODE.BAD_REQUEST).send(Utils.invalidInput());
        }else{
            params.ids = oids;
            BinsActivity.getMultipleBinActivity(params,function(err,docs){
                if(!err){
                    res.send(docs);
                }else{
                    res.status(Utils.HTTP_STATUS_CODE.SERVER_ERROR).send(err);
                }
            });
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
            BinsActivity.getBinLatestActivity(params,function(err,docs){
                if(!err){
                    res.send(docs);
                }else{
                    res.status(Utils.HTTP_STATUS_CODE.SERVER_ERROR).send(err);
                }
            });
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
            BinsActivity.getBinLatestActivity(params,function(err,docs){
                if(!err){
                    res.send(docs);
                }else{
                    res.status(Utils.HTTP_STATUS_CODE.SERVER_ERROR).send(err);
                }
            });
        }  
    });

    self.app.get('/get/bin/:id/activity/:start/:end/:attr/:csv' , function(req, res) {
        /* XSS Validation */
        var oid = Utils.validateXSS(req.params.id);
        var startDate = Utils.validateXSS(req.params.start);
        var endDate = Utils.validateXSS(req.params.end);
        var attr = Utils.validateXSS(req.params.attr);
        var params = {};

        if(!Utils.checkForHexRegExp(oid) || !Utils.isValidDateFormat(startDate) || !Utils.isValidDateFormat(endDate) || (Utils.validBinAttrs.indexOf(attr) == -1)){
            res.status(Utils.HTTP_STATUS_CODE.BAD_REQUEST).send(Utils.invalidInput());
        }else{

            var month_diff = moment(endDate).diff(moment(startDate),'month');
            if(month_diff > 6){
                res.status(Utils.HTTP_STATUS_CODE.BAD_REQUEST).send(Utils.invalidDateRange());
                return;
            }


            params.id = oid;
            params.start = startDate;
            params.end = endDate;
            params.attr = attr;
            BinsActivity.getBinActivityForRange(params,function(err,docs){
                if(!err){
                    if(req.params.csv){
                        var fields = ['timestamp', params.attr ];
                        res.setHeader('Content-disposition', 'attachment; filename=activity.csv');
                        res.setHeader('Content-Type', 'text/csv');
                        json2csv({ data: docs, fields: fields }, function(err, csv) {
                            if (err){
                                res.status(Utils.HTTP_STATUS_CODE.SERVER_ERROR).send(err);
                            }else{
                                res.send(csv);
                            }
                        });
                    }
                    else{
                       res.send(docs);
                    }            
                }else{
                    res.status(Utils.HTTP_STATUS_CODE.SERVER_ERROR).send(err);
                }
            });
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
            BinsActivity.getBinActivityForRange(params,function(err,docs){
                if(!err){
                    res.send(docs);            
                }else{
                    res.status(Utils.HTTP_STATUS_CODE.SERVER_ERROR).send(err);
                }
            });
        }
    });

    self.app.get('/get/bin/:id/activity/:csv' , function(req, res) {
        res.setHeader('Content-Type', 'application/json');

        /* XSS Validation */
        var oid = Utils.validateXSS(req.params.id);
        var params = {};

        if(!Utils.checkForHexRegExp(oid)){
            res.status(Utils.HTTP_STATUS_CODE.BAD_REQUEST).send(Utils.invalidInput());
        }else{
            params.id = oid;
            BinsActivity.getBinLatestActivity(params,function(err,docs){
                if(!err){
                    if(req.params.csv){
                        var fields = Utils.validBinAttrs;
                        res.setHeader('Content-disposition', 'attachment; filename=activity.csv');
                        res.setHeader('Content-Type', 'text/csv');
                        json2csv({ data: docs, fields: fields }, function(err, csv) {
                            if (err){
                                res.status(Utils.HTTP_STATUS_CODE.SERVER_ERROR).send(err);
                            }else{
                                res.send(csv);
                            }
                        });
                    }
                    else{
                        res.send(docs);
                    }            
                }else{
                    res.status(Utils.HTTP_STATUS_CODE.SERVER_ERROR).send(err);
                }
            });
        }
    });

    self.app.get('/get/bin/:id/activity/:attr' , function(req, res) {
        res.setHeader('Content-Type', 'application/json');

        /* XSS Validation */
        var oid = Utils.validateXSS(req.params.id);       
        var attr = Utils.validateXSS(req.params.attr);
        var params = {};

        if(!Utils.checkForHexRegExp(oid) || (Utils.validBinAttrs.indexOf(attr) == -1)){
            res.status(Utils.HTTP_STATUS_CODE.BAD_REQUEST).send(Utils.invalidInput());
        }else{
            params.id = oid;
            params.attr = attr;
            BinsActivity.getBinLatestActivity(params,function(err,docs){
                if(!err){
                    res.send(docs);            
                }else{
                    res.status(Utils.HTTP_STATUS_CODE.SERVER_ERROR).send(err);
                }
            });
        }
    });

    self.app.post('/bin/predict/:id' , function(req, res) {
         /* XSS Validation */
        var oid = Utils.validateXSS(req.params.id);
        var params = {};

        if(Utils.checkForHexRegExp(oid) && req.body.key && req.body.key === process.env.GMAPP_BROWSER_KEY){
            params.id = oid;
            BinsActivity.binPredictionCalc(params,function(err,docs){
                if(!err){
                    res.send(docs);
                }else{
                    res.status(Utils.HTTP_STATUS_CODE.SERVER_ERROR).send(err);
                }
            });
        }else{
            res.status(Utils.HTTP_STATUS_CODE.BAD_REQUEST).send(Utils.invalidInput());
        }

    });

    self.app.post('/add/bin/:id/activity' , function(req, res) {
        /* XSS Validation */
        var oid = Utils.validateXSS(req.params.id);
        var params = {};
        if(Utils.checkForHexRegExp(oid) && req.body.key && req.body.key === process.env.GMAPP_BROWSER_KEY){
            params.id = oid;
            BinsActivity.insertBinActivityForBin(params,function(err,docs){
                if(!err){
                    res.send(docs);
                }else{
                    res.status(Utils.HTTP_STATUS_CODE.SERVER_ERROR).send(err);
                }
            });
        }else{
            res.status(Utils.HTTP_STATUS_CODE.BAD_REQUEST).send(Utils.invalidInput());
        }
    });

 
}
