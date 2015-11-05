var assert = require('assert');
ngram = require('..');

describe('Ngrams', function() {
		it ('should be tokenized', function() {
			console.log("Lê văn Duyệt. Duyệt Developer".tokens())
			assert.equal(5, "Lê văn Duyệt. Duyệt Developer".tokens().length);
			assert.equal(3, "Lê văn Duyệt".tokens().length);
		});

		/*
		it ('should be ngramed', function() {
			var n = new ngram.Ngrams();
			n.min = 3;
			n.feedAll('le van duyet le van duyet le van duyet');
			var ranks = n.ranks();
            assert.equal(63, n.keys.length);
		});
*/
});