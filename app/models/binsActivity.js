var db = require("../../db.js");
var mongojs = require('mongojs');
var ObjectId = mongojs.ObjectId;
var Utils = require("../common/utils.js");
var binActivity = db.collection('binActivity');
var defaultPageSize = Utils.getDefaultPageSize();
var pageNumber = 1;
module.exports = {
    getBinLatestActivity: function(req, res) {
        if (req.params.page && !isNaN(req.params.page)) {
            pageNumber = parseInt(req.params.page, 10);
        }
        if (req.params.limit && !isNaN(req.params.limit)) {
            defaultPageSize = (defaultPageSize > req.params.limit) ? parseInt(req.params.limit, 10) : defaultPageSize;
        }
        db.binActivity.find({
            "binId": ObjectId(req.params.id)
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
    getBinActivityForRange: function(req, res) {
        if (req.params.page && !isNaN(req.params.page)) {
            pageNumber = parseInt(req.params.page, 10);
        }
        if (req.params.limit && !isNaN(req.params.limit)) {
            defaultPageSize = (defaultPageSize > req.params.limit) ? parseInt(req.params.limit, 10) : defaultPageSize;
        }
        db.binActivity.find({
            "binId": ObjectId(req.params.id),
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
    insertBinActivityForBin: function(req, res) {
        var randomTemp = Utils.getRandomNumber(40, 80),
            humidity = Utils.getRandomNumber(0, 30),
            fill = Utils.getRandomNumber(0, 100),
            timestamp = Utils.getTimestamp(),
            binActivityDoc = {};
        binActivityDoc['temperature'] = parseFloat(randomTemp).toFixed(2);
        binActivityDoc['humidity'] = parseFloat(humidity).toFixed(2);;
        binActivityDoc['fill'] = parseInt(fill, 10);
        binActivityDoc['timestamp'] = timestamp;
        binActivityDoc['binId'] = ObjectId(req.params.id);

        db.binActivity.insert(binActivityDoc, function(err, docs) {
            if (!err) {
                res.send(docs);
            } else {
                res.send(err);
            }
        });

    }
}