const assert = require('chai').assert;
require('./one.js');
require('./two.js');

describe('our test bundle', function () {
  it('should work', function () {
    assert(true);
  });
});
