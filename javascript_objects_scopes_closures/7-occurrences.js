#!/usr/bin/node

exports.nbOccurences = function (list, searchElement) { // ✅ Function as required by the prototype
  return list.filter(item => item === searchElement).length; // ✅ Count occurrences using `filter()`
};
