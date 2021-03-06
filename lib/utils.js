// Generated by CoffeeScript 1.5.0
(function() {
  var deepExtend, getParentFolderName, path,
    __slice = [].slice,
    __hasProp = {}.hasOwnProperty,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  path = require('path');

  module.exports.uniqueId = function(length) {
    var id;
    if (length == null) {
      length = 8;
    }
    id = "";
    while (id.length < length) {
      id += Math.random().toString(36).substr(2);
    }
    return id.substr(0, length);
  };

  module.exports.deepExtend = deepExtend = function() {
    var extenders, key, object, other, val, _i, _len;
    object = arguments[0], extenders = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    if (object == null) {
      return {};
    }
    for (_i = 0, _len = extenders.length; _i < _len; _i++) {
      other = extenders[_i];
      for (key in other) {
        if (!__hasProp.call(other, key)) continue;
        val = other[key];
        if (object[key] == null) {
          object[key] = val;
        } else {
          object[key] = deepExtend(object[key], val);
        }
      }
    }
    return object;
  };

  module.exports.getParentFolderName = getParentFolderName = function(pathname, exclude) {
    var basename;
    if (exclude == null) {
      exclude = [];
    }
    basename = path.basename(pathname);
    if (__indexOf.call(exclude, basename) >= 0) {
      return getParentFolderName(path.dirname(pathname));
    } else {
      return basename;
    }
  };

}).call(this);
