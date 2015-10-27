var db = require("../../db.js");
var mongojs = require('mongojs');
var Utils = require("../common/utils.js");

var ObjectId = mongojs.ObjectId;
var binActivity = db.collection('binActivity');
var defaultPageSize = Utils.getDefaultPageSize();
var pageNumber = 1;

module.exports = {
    getBinLatestActivity: function(sanitized_params,callback) {
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
                if(sanitized_params.attr){
                    callback(err,docs.map(function(a) {
                            var rObj = {};
                            rObj["timestamp"] = a.timestamp;
                            rObj[sanitized_params.attr] = a[sanitized_params.attr];
                            return rObj;
                    }));
                }else{
                    callback(err,docs);
                }
                
        });
    },
    getBinActivityForRange: function(sanitized_params,callback) {
        if (sanitized_params.page) {
            pageNumber = sanitized_params.page;
        }
        if (sanitized_params.limit) {
            defaultPageSize = (defaultPageSize > sanitized_params.limit) ? parseInt(sanitized_params.limit, 10) : defaultPageSize;
        }
        db.binActivity.find({
            "binId": ObjectId(sanitized_params.id),
            "timestamp": {
                '$gte': new Date(sanitized_params.start).getTime(),
                '$lte': new Date(sanitized_params.end).getTime()
            }
        }).sort({
            timestamp: -1
        }).skip(defaultPageSize * (pageNumber - 1)).limit(defaultPageSize,
            function(err, docs) {
                if (!err) {
                    if (sanitized_params.attr) {
                        callback(err,docs.map(function(a) {
                            var rObj = {};
                            rObj["timestamp"] = a.timestamp;
                            rObj[sanitized_params.attr] = a[sanitized_params.attr];
                            return rObj;
                        }));
                    }else{
                        callback(err,docs);
                    }
                } else {
                    callback(err,docs);
                }

            });
    },
    insertBinActivityForBin: function(sanitized_params,callback) {
        var randomTemp = Utils.getRandomFloat(40, 80),
            humidity = Utils.getRandomFloat(10, 90),
            fill = Utils.getRandomNumber(0, 100),
            timestamp = Utils.getTimestamp(),
            binActivityDoc = {};
        binActivityDoc['temperature'] = randomTemp;
        binActivityDoc['humidity'] = humidity;
        binActivityDoc['fill'] = fill;
        binActivityDoc['timestamp'] = timestamp;
        binActivityDoc['binId'] = ObjectId(sanitized_params.id);

        db.binActivity.insert(binActivityDoc, function(err, docs) {
            if(!err){
                 db.bins.update({
                    "_id": ObjectId(sanitized_params.id)
                    }, {
                        $set: {
                            "last_sensed_timestamp": timestamp,
                            "humidity":humidity,
                            "fill":fill,
                            "temperature":randomTemp
                    }}, function(err, docs) {
                        callback(err,docs);
                });
            }else{
                callback(err,docs);
            }          
        });

    },
    binPredictionCalc:function(sanitized_params,callback){      
      db.binActivity.find({
            "binId": ObjectId(sanitized_params.id),
        }).sort({
            timestamp: -1
        }).limit(defaultPageSize,
            function(err, docs) {
                if (!err) {
                    if(docs.length != 0){
                        predictTime(docs,sanitized_params.id);
                        callback(err,docs);
                    }else{
                        callback(err,docs);
                    }
                } else {
                    callback(err,docs);
                }

        });
    }
}

function predictTime(bins,binId){
  var rate = 0,
      sum_weight = 0;
    for(var counter in bins){
        var bin = bins[counter];
        var fill = bin.fill;
        var timestamp = bin.timestamp;
        if(counter != 0 && (bins[counter].fill > bins[counter-1].fill)){
          rate += counter*(bins[counter].fill - bins[counter-1].fill)/ (bins[counter].timestamp - bins[counter-1].timestamp);
          sum_weight += counter;
        }
    }
  rate = rate/ sum_weight;
  var time = (100 - bins[counter-1].fill)/rate;
  var predictTime = (bins[counter-1].timestamp + time);

  db.binPrediction.update(
   {"binId": ObjectId(binId)},
   {
        $set: {
            "nextFill": predictTime
        },
        $setOnInsert: {
            "binId": ObjectId(binId)
        }
   },
   {
     upsert: true
   },function(err,docs){
    console.log(err,docs);
   }
  );

}