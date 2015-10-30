var xssFilters = require('xss-filters');
module.exports = {
    getRandomNumber: function(low, high) {
        return parseInt(Math.random() * (high - low) + low,10);
    },
    getRandomFloat: function(low, high) {
        return Math.round((Math.random() * (high - low) + low)*100)/100;
    },
    getTimestamp: function() {
        if (!Date.now) {
            return new Date().getTime();
        } else {
            return Date.now()
        }
    },
    getDefaultPageSize: function() {
        return 15;
    },
    getDefaultActivityPageSize: function() {
        return 100;
    },
    validateXSS: function(param) {
        return xssFilters.inHTMLData(param);
    },
    invalidInput: function() {
        return {
            "errorCode": 102,
            "errorText": "Invalid Input"
        };
    },
    invalidDateRange: function() {
        return {
            "errorCode": 103,
            "errorText": "Date range too long or invalid"
        };
    },
    checkForHexRegExp: function(id) {
    	return (new RegExp("^[0-9a-fA-F]{24}$")).test(id);
    },
    isValidDateFormat: function(dateString){
    	var re = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/;
    	return re.exec(dateString);
    },
    HTTP_STATUS_CODE:{
    	"BAD_REQUEST" : 400,
        "SERVER_ERROR" : 500,
    },
    validBinAttrs:["humidity","fill","temperature","timestamp"]
}