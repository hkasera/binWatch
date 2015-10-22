var db = require("../../db.js");
var mongojs = require('mongojs');
var Utils = require("../common/utils.js");

var ObjectId = mongojs.ObjectId;
var binActivity = db.collection('binActivity');
var defaultPageSize = Utils.getDefaultPageSize();
var pageNumber = 1;

module.exports = {
    getBinLatestActivity: function(req, res, sanitized_params) {
        if (sanitized_params.page) {
            pageNumber = sanitized_params.page;
        }
        if (sanitized_params.limit) {
            defaultPageSize = (defaultPageSize > sanitized_params.limit) ? parseInt(sanitized_params.limit, 10) : defaultPageSize;
        }
        db.binActivity.find({
            "binId": ObjectId(sanitized_params.id)
        }).sort({
            timestamp: -1
        }).skip(defaultPageSize * (pageNumber - 1)).limit(defaultPageSize,
            function(err, docs) {
                if (!err) {
                    res.send(docs);
                } else {
                    res.send({});
                }

            });
    },
    getBinActivityForRange: function(req, res, sanitized_params) {
        if (sanitized_params.page) {
            pageNumber = sanitized_params.page;
        }
        if (sanitized_params.limit) {
            defaultPageSize = (defaultPageSize > sanitized_params.limit) ? parseInt(sanitized_params.limit, 10) : defaultPageSize;
        }
        db.binActivity.find({
            "binId": ObjectId(sanitized_params.id),
            "timestamp": {
                '$gte': new Date(req.body.start).getTime(),
                '$lte': new Date(req.body.end).getTime()
            }
        }).sort({
            timestamp: -1
        }).skip(defaultPageSize * (pageNumber - 1)).limit(defaultPageSize,
            function(err, docs) {
                if (!err) {
                    if (req.body.attr) {
                        res.send(docs.map(function(a) {
                            return a[req.body.attr];
                        }));
                    }
                    res.send(docs);
                } else {
                    res.send({});
                }

            });
    },
    insertBinActivityForBin: function(req, res, sanitized_params) {
        var randomTemp = Utils.getRandomNumber(40, 80),
            humidity = Utils.getRandomNumber(0, 30),
            fill = Utils.getRandomNumber(0, 100),
            timestamp = Utils.getTimestamp(),
            binActivityDoc = {};
        binActivityDoc['temperature'] = parseFloat(randomTemp).toFixed(2);
        binActivityDoc['humidity'] = parseFloat(humidity).toFixed(2);;
        binActivityDoc['fill'] = parseInt(fill, 10);
        binActivityDoc['timestamp'] = timestamp;
        binActivityDoc['binId'] = ObjectId(sanitized_params.id);

        db.binActivity.insert(binActivityDoc, function(err, docs) {
            if (!err) {
                res.send(docs);
            } else {
                res.send(err);
            }
        });

    }
}