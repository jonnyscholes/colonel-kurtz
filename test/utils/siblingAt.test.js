let Block     = require('../../src/models/block')
let siblingAt = require('../../src/utils/siblingAt')

describe('Utils - siblingAt', function() {

  it ('returns null if a block is not within the given list', function() {
    let blocks = [ new Block({}) ]
    let result = siblingAt(blocks, new Block({}))

    expect(result).to.eql(null)
  })

})
