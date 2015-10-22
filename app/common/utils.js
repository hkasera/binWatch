module.exports = {
	getRandomNumber : function (low, high) {
    	return Math.random() * (high - low) + low;
	},
	getTimestamp : function(){
		if (!Date.now) {
		    return new Date().getTime();
		}else{
			return Date.now()
		}
	},
	getDefaultPageSize: function(){
		return 15;
	}
}