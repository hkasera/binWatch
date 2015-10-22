var mongojs = require('mongojs');
var ObjectId = mongojs.ObjectId;
var dbName = 'binWatch';
var connection_string;
if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
  connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
  process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
  process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
  process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
  process.env.OPENSHIFT_APP_NAME;
}else{
    connection_string = '127.0.0.1:27017/' + dbName;
}

var db = mongojs(connection_string, ['bins','binActivity','binPrediction']);

db.bins.ensureIndex({loc: "2dsphere"});

module.exports = db;

