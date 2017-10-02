var pry = require('pryjs');

function bubbleSort(list) {
  var len = list.length;
  for (var index = 0; index < len; index++) {
    for (var currentIndex = 0; currentIndex < (len - index - 1); currentIndex++) {
      var nextIndex = currentIndex + 1;
      if(list[currentIndex] > list[nextIndex]) {
        var greaterValue = list[currentIndex];
        //Temporary variable to hold the current value
        list[currentIndex] = list[currentIndex+1];
        //Replace current number with next value
        list[currentIndex+1] = greaterValue;
        //Replace next value with current value
      };
    };
  };
  // eval(pry.it);
  return list;
};

var list = [5, 0, 1, 3, 4, 2, 100, 63, 13];
var animalList = ["fish", "dog", "cat", "kangaroo","rabbit", "rooster","duck", "elephant"];
bubbleSort(list);
bubbleSort(animalList);

module.exports = bubbleSort;
