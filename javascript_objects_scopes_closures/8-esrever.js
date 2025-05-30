#!/usr/bin/node

exports.esrever = function (list) { // ✅ Correct function prototype
  const reversedList = []; // ✅ Initialize an empty array

  // Iterate backwards through `list` and add elements to `reversedList`
  for (let i = list.length - 1; i >= 0; i--) {
    reversedList.push(list[i]);
  }

  return reversedList; // ✅ Return the reversed list
};
