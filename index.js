'use strict';

(function() {
    var root = this;
    var has_require = typeof require !== 'undefined';
    
    if (typeof _ === 'undefined') {
        if (has_require) {
            // Require module here
        } else {
        // Error here
        }
    }

    function TextCleaner(text, lower) {
        var lower = lower || true;

        var resultText = text.replace(/(^[\\("']+)|([,:;.?!#)"'|\\]+$)/, '');
        if (lower) resultText = resultText.toLowerCase();

        return resultText;
    }

    // Exports
    if( typeof exports !== 'undefined' ) {
        if( typeof module !== 'undefined' && module.exports ) {
            exports = module.exports = TextCleaner;
        }
        exports.textcleaner = TextCleaner;
    } else {
        root.textcleaner = TextCleaner;
    }
}).call(this);