const assert = require('chai').assert
const insertSort = require('../lib/insertionSort')

describe('insertSort function', function(){
  it('it can order an unordered list', function(){
    var list = [15,10,1,30,6];
    assert.isArray(insertSort(list));
    assert.equal(insertSort(list)[0], 1);
    assert.equal(insertSort(list)[1], 6);
    assert.equal(insertSort(list)[2], 10);
    assert.equal(insertSort(list)[3], 15);
    assert.equal(insertSort(list)[4], 30);
  });
});
