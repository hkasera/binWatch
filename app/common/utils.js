var xssFilters = require('xss-filters');
module.exports = {
    getRandomNumber: function(low, high) {
        return Math.random() * (high - low) + low;
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
    validateXSS: function(param) {
        return xssFilters.inHTMLData(param);
    },
    invalidInput: function() {
        return {
            "errorCode": 102,
            "errorText": "Invalid Input"
        };
    },
    checkForHexRegExp: function(id) {
    	return (new RegExp("^[0-9a-fA-F]{24}$")).test(id);
    }
}