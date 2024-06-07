const assert = require('chai').assert;


const takeUntil = require("../takeUntil");

describe("#takeUntil", () => {
  it("returns [1,2,5,7,2] for([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0)", () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [1,2,5,7,2]);
    });
  it("returns ['we', 'been', 'to', 'Hollywood'] for(['we', 'been', 'to', 'Hollywood', ',', 'we', 'been', 'to', 'Redwood'], x => x === ',')" ,() => {
      assert.deepEqual(takeUntil(['we', 'been', 'to', 'Hollywood', ',', 'we', 'been', 'to', 'Redwood'],x => x === ',' ),['we', 'been', 'to', 'Hollywood'] );
  });
    

});







