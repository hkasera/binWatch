var db = require("../../db.js");
var mongojs = require('mongojs');
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
var Utils = require("../common/utils.js");
var bins = db.collection('bins');
var defaultPageSize = Utils.getDefaultPageSize();
var pageNumber = 1;

module.exports = {
    getAllBins: function(req, res) {
        if (req.params.page) {
            pageNumber = Utils.invalidInput(req.params.page);
            pageNumber = parseInt(req.params.page, 10);
        }
        if (req.params.limit && !isNaN(req.params.limit)) {
            defaultPageSize = (defaultPageSize > req.params.limit) ? parseInt(req.params.limit, 10) : defaultPageSize;
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

    getBinInLocation: function(req, res) {
        var lati = parseFloat(req.params.lati),
            longi = parseFloat(req.params.longi),
            maxDistance = 2000;

        if (req.params.radius) {
            maxDistance = parseInt(req.params.radius, 10);
        }
        if (req.params.page && !isNaN(req.params.page)) {
            pageNumber = parseInt(req.params.page, 10);
        }
        if (req.params.limit && !isNaN(req.params.limit)) {
            defaultPageSize = (defaultPageSize > req.params.limit) ? parseInt(req.params.limit, 10) : defaultPageSize;
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
    getBinDetails: function(req, res) {
        db.bins.find({
            "_id": ObjectId(req.params.id)
        }, binSchema, function(err, docs) {
            if (!err) {
                res.send(docs);
            } else {
                res.send({});
            }

        });
    }
}