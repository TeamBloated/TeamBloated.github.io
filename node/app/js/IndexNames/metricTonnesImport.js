const YEAR = '2012';
const START = YEAR + '-01-01';
const END = YEAR + '-12-31';

var _ = require('lodash');

var metricTonnesIndices = ['BXCIIQTL', 'CLGIIQTL', 'CNGSIQTL', 'CNIVCORN'];
var params = [];

_.forEach(metricTonnesIndices, function(name) {
	params.push({
		TableName: YEAR,
	    KeyConditionExpression: '#t = :ticker and #d between :date1 and :date2',
	    ExpressionAttributeNames: {
			'#t': 'Ticker',
			'#d': 'Date'
	    },
	    ExpressionAttributeValues: {
			':ticker': name + ' Index',
			':date1': START,
			':date2': END
    	}
	});
});

module.exports = params;