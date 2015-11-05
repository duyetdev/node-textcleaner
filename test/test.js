var assert = require('assert');
var cleaner = require('../index.js');

describe('Node_TextCleaner', function() {
	it('should be run', function() {
		console.log(cleaner('le van duyet,,.! so do'))
	});

	it('should be blank', function() {
		assert.equal('', cleaner('....!#'));
	});

	it('should be lower after clean', function() {
		assert.equal('levanduyet', cleaner('LevanDUYET!!!!'));
	})
});