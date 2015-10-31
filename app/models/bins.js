var db = require("../../db.js");
var mongojs = require('mongojs');
var geocoder = require('geocoder');
var Utils = require("../common/utils.js");

var ObjectId = mongojs.ObjectId;
var binSchema = {
    "isActive": true,
    "latitude": true,
    "longitude": true,
    "humidity": true,
    "temperature": true,
    "fill": true,
    "name": true,
    "type": true,
    "address": true,
    "last_sensed_timestamp" : true
};
var bins = db.collection('bins');
var defaultPageSize = Utils.getDefaultPageSize();
var pageNumber = 1;



module.exports = {
    createBin: function(sanitized_params, callback){
        var lati = sanitized_params.lati,
            longi = sanitized_params.longi;
        geocoder.reverseGeocode( lati, longi, function ( err, data ) {
           
            if(!err){
                if(data.status && data.status === "OK"){
                    if (data.results[0]) {
                        var address = data.results[0].formatted_address;
                        if(address && address.length != 0){
                            var value = address.split(",");
                            if(value.length != 0){
                                var count=value.length,
                                    country=value[count-1],
                                    state=value[count-2],
                                    city=value[count-3],
                                    area = value[count-4],
                                    timeStampNow = new Date().getTime();

                                    binsDoc = {};
                                    binsDoc["fill"] = 0;
                                    binsDoc["humidity"] = 0;
                                    binsDoc["isActive"] = false;
                                    binsDoc["latitude"] = lati;
                                    binsDoc["longitude"] = longi;
                                    binsDoc["loc"] = [longi,lati]
                                    binsDoc["name"] = address;
                                    binsDoc["temperature"] = 35.01,
                                    binsDoc["type"] = Utils.validBinTypes[Math.floor(Math.random() * Utils.validBinTypes.length)];
                                    binsDoc["address"] = {};
                                    binsDoc["address"]["area"] = area;
                                    binsDoc["address"]["city"] = city;
                                    binsDoc["cleared_timestamp"] = timeStampNow;
                                    binsDoc["created_timestamp"] = timeStampNow;
                                    binsDoc["last_sensed_timestamp"] = timeStampNow;

                                    db.bins.insert(binsDoc, function(err, docs) {
                                        callback(err,docs);       
                                    });
                            }
                            
                        }
                        
                    }
                }
            }
            else{
                callback(err,data);
          }
        });
    },

    getAllBins: function(sanitized_params, callback) {
        if (sanitized_params && sanitized_params.page) {
            pageNumber = sanitized_params.page;
        }
        if (sanitized_params && sanitized_params.limit) {
            defaultPageSize = (defaultPageSize > sanitized_params.limit) ? parseInt(sanitized_params.limit, 10) : defaultPageSize;
        }
        db.bins.find({}, binSchema).sort({
            timestamp: -1
        }).skip(defaultPageSize * (pageNumber - 1)).limit(defaultPageSize, function(err, docs) {
            callback(err,docs);
        });
    },

    getBinInLocation: function(sanitized_params,callback) {
        var lati = sanitized_params.lati,
            longi = sanitized_params.longi,
            maxDistance = 2000;

        if (sanitized_params.page) {
            pageNumber = sanitized_params.page;
        }
        if (sanitized_params.limit) {
            var limit = sanitized_params.limit;
            defaultPageSize = (defaultPageSize > limit) ? parseInt(limit, 10) : defaultPageSize;
        }

        if (sanitized_params.radius) {
            maxDistance = sanitized_params.radius;
        }
        if (sanitized_params.page) {
            pageNumber = sanitized_params.page;
        }
        if (sanitized_params.limit) {
            defaultPageSize = (defaultPageSize > sanitized_params.limit) ? parseInt(sanitized_params.limit, 10) : defaultPageSize;
        }
        bins.find({
            loc: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [longi, lati]
                    },
                    $maxDistance: maxDistance
                }
            }
        }).skip(defaultPageSize * (pageNumber - 1)).limit(defaultPageSize,function(err, docs) {
            callback(err,docs);
        });
    },
    getBinDetails: function(sanitized_params,callback) {
        db.bins.findOne({
            "_id": ObjectId(sanitized_params.id)
        }, binSchema, function(err, docs) {
            callback(err,docs);
        });
    }
}