// String
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}

if (!String.prototype.includes) {
  String.prototype.includes = function() {
    'use strict';
    return String.prototype.indexOf.apply(this, arguments) !== -1;
  };
}


// Array
if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    if (this === null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}

if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function(predicate) {
    if (this === null) {
      throw new TypeError('Array.prototype.findIndex called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return i;
      }
    }
    return -1;
  };
}

if (!Array.prototype.includes) {
  if (!Array.prototype.includes) {
    Array.prototype.includes = function(searchElement /*, fromIndex*/ ) {
      'use strict';
      var O = Object(this);
      var len = parseInt(O.length, 10) || 0;
      if (len === 0) {
        return false;
      }
      var n = parseInt(arguments[1], 10) || 0;
      var k;
      if (n >= 0) {
        k = n;
      } else {
        k = len + n;
        if (k < 0) {k = 0;}
      }
      var currentElement;
      while (k < len) {
        currentElement = O[k];
        if (searchElement === currentElement) { // NaN !== NaN
          return true;
        }
        k++;
      }
      return false;
    };
  }
}

Promise.prototype.finally = function (callback) {
  var constructor = this.constructor;

  return this.then(function(value) {
    return constructor.resolve(callback()).then(function() {
      return value;
    });
  }, function(reason) {
    return constructor.resolve(callback()).then(function() {
      throw reason;
    });
  });
};


