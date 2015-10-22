var db = require("../../db.js");
var mongojs = require('mongojs');
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
    "address": true
};
var bins = db.collection('bins');
var defaultPageSize = Utils.getDefaultPageSize();
var pageNumber = 1;

module.exports = {
    getAllBins: function(req, res, sanitized_params) {
        if (sanitized_params && sanitized_params.page) {
            pageNumber = sanitized_params.page;
        }
        if (sanitized_params && sanitized_params.limit) {
            defaultPageSize = (defaultPageSize > sanitized_params.limit) ? parseInt(sanitized_params.limit, 10) : defaultPageSize;
        }
        db.bins.find({}, binSchema).sort({
            timestamp: -1
        }).skip(defaultPageSize * (pageNumber - 1)).limit(defaultPageSize, function(err, docs) {
            if (!err) {
                res.send(docs);
            } else {
                res.send({});
            }

        });
    },

    getBinInLocation: function(req, res,sanitized_params) {
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
            if (err) return console.dir(err)

            res.send(docs);
        });
    },
    getBinDetails: function(req, res,sanitized_params) {
        db.bins.find({
            "_id": ObjectId(sanitized_params.id)
        }, binSchema, function(err, docs) {
            if (!err) {
                res.send(docs);
            } else {
                res.send({});
            }

        });
    }
}