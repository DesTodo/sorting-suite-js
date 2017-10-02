const assert = require('chai').assert
const bubbleSort = require('../lib/bubbleSort')

describe ('bubbleSort function', function(){
  context ('lowest value will bubble to the left', function(){
    it ('it can bubbleSort an unordered list', function(){
      var list = [15,10,1,30,6];
      assert.equal(bubbleSort(list)[0], 1);
      assert.equal(bubbleSort(list)[1], 6);
      assert.equal(bubbleSort(list)[2], 10);
      assert.equal(bubbleSort(list)[3], 15);
      assert.equal(bubbleSort(list)[4], 30);
      assert.isArray(bubbleSort(list));
    });
  });
});
