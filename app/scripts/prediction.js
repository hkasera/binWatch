if(process.env.OPENSHIFT_DATA_DIR){

	var Bins = require(process.env.OPENSHIFT_DATA_DIR+"app/models/bins.js");
	var BinsActivity = require(process.env.OPENSHIFT_DATA_DIR+"app/models/binsActivity.js");
	var Utils = require(process.env.OPENSHIFT_DATA_DIR+"app/common/utils.js");

	BinsActivity.binPredictionCalc({});
}
