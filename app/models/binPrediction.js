var db = require("../../db.js");
var mongojs = require('mongojs');
var Utils = require("../common/utils.js");

var ObjectId = mongojs.ObjectId;
var binPrediction = db.collection('binPrediction');

module.exports = {
	getBinPrediction: function(sanitized_params,callback) {
        db.binPrediction.findOne({
            "binId": ObjectId(sanitized_params.id)
        }, function(err, docs) {
            callback(err,docs);
        });
    }
}