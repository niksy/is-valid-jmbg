/* jshint mocha:true */

var assert = require('assert');
var valid = require('../');

it('should validate input', function () {
	assert.ok(valid('1304005111059'));
	assert.ok(valid('0702960330212'));
	assert.ok(valid('0602963300034'));
	assert.ok(valid('2702947383908'));
	assert.ok(!valid('2607973392147'));
	assert.ok(!valid('0211003513024'));
	assert.ok(!valid('06029633000341'));
	assert.ok(!valid('27029473839082'));
});
