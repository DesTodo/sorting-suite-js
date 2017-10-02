var pry = require('pryjs')

function insertSort(list){
  var len = list.length;
  for (var i = 1; i < len; i++){
    var beGreater = list[i];
      for (var beSmaller = i - 1; beSmaller >= 0 && beGreater < list[beSmaller]; beSmaller--){
        list[beSmaller + 1] = list[beSmaller];
      };
    list[beSmaller+1] = beGreater;
  };
  return list;
};

var list = [20, 14, 5, 9, 1];
var animalList = ["fish", "dog", "cat", "kangaroo","rabbit", "duck"];
insertSort(list);
insertSort(animalList);

module.exports = insertSort;
