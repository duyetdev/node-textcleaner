var util = require('util');
var fs = require('fs');
var _ = require('lodash');


function cleanup(text) {
    return text.replace(/(^[\\("']+)|([,:;.?!)"'|\\]+$)/, '').toLowerCase();
}

var Ngrams = function(options) {
    var options = options || {};

    this.n = options.n || 2;

    this.keys = [];
};

/**
 * build ngrams from a sentences, an array of words
 */
Ngrams.prototype.ngram = function(sentences, n) {
    if (typeof sentences === 'string')
        words = sentences.tokens();
    else if (typeof sentences === 'array')
        words = sentences; // Is array
    else 
        throw new Error("Input must be String or Array");

    var g = this;

    var ngramNumber = n || this.n || 2;
    var ngrams = [];
    var l = words.length;

    for (var i = 0; i < l; i++) {
        var ngram = _.slice(words, i, Math.min(i+ngramNumber, l));
        ngrams.push(ngram);
    }

    return ngrams;
};

/**
 * Short code for ngram(2)
 */
Ngrams.prototype.bigram = function(sentences) {
    return this.ngram(sentences, 2);
}

/**
 * Short code for ngram(3)
 */
Ngrams.prototype.trigram = function(sentences) {
    return this.ngram(sentences, 2);
}


module.exports = Ngrams;

String.prototype.tokens = function(filter) {
    var s = this;
    return this.split(/\s+/).map(function(word) {
        if (filter !== undefined) {
            return filter.call(s, word);
        }
        return cleanup(word).toLowerCase();
    });
};
