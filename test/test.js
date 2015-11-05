var assert = require('assert');
Ngram = require('../index.js');

describe('Ngrams', function() {
		it ('should be tokenized', function() {
			assert.equal(5, "Lê văn Duyệt. Duyệt Developer".tokens().length);
			assert.equal(3, "Lê văn Duyệt".tokens().length);
		});


		it ('should be ngramed', function() {
			var ngram = new Ngram();
			var s = ngram.ngram('le van duyet le van duyet le van duyet');

            assert.equal(9, s.length);
		});

});