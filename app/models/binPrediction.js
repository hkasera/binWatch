var db = require("../../db.js");
var mongojs = require('mongojs');
var Utils = require("../common/utils.js");

var ObjectId = mongojs.ObjectId;
var binPrediction = db.collection('binPrediction');

module.exports = {
	getBinPrediction: function(req, res,sanitized_params) {
        db.binPrediction.findOne({
            "binId": ObjectId(sanitized_params.id)
        }, function(err, docs) {
            if (!err) {
                res.send(docs);
            } else {
                res.send({});
            }

        });
    }
}