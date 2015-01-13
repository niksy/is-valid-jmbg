var re = require('regex-jmbg');
var map = require('array-map');

/**
 * @param  {String} jmbg
 *
 * @return {Boolean}
 */
module.exports = function ( jmbg ) {

	if ( !re().test(jmbg) ) {
		return false;
	}

	var arr = map(jmbg.split(''), function ( val ) {
		return parseInt(val, 10);
	});

	var checksum = 11 - ( 7*(arr[0]+arr[6]) + 6*(arr[1]+arr[7]) + 5*(arr[2]+arr[8]) + 4*(arr[3]+arr[9]) + 3*(arr[4]+arr[10]) + 2*(arr[5]+arr[11]) ) % 11;

	return checksum === arr[12];

};
