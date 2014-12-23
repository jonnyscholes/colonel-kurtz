/* @flow */

var Bus        = require('../bus')
var Block      = require('../models/block')
var Dispatcher = require('../dispatcher')
var Immutable  = require('immutable')

var _blocks = Immutable.List()

var BlockStore = {

  all(): Array<Block> {
    return _blocks
  },

  last() {
    return _blocks.last()
  },

  find(id: number): Block {
    return _blocks.find(block => block.id === id )
  },

  // content: ?Object, type: string, parentBlockListId: number
  _create({ content, type, parentBlockListId } : { content: ?Object; type: string; parentBlockListId: number }): Block {
    var block = new Block({ content, type, parentBlockListId })

    _blocks = _blocks.push(block)

    Bus.publish()

    return block
  },

  _destroy(id: number) {
    _blocks = _blocks.filter(b => b.id !== id)
    Bus.publish()
  },

  _update(blockId: number, content: ?Object) {
    var block = BlockStore.find(blockId)

    if (block) {
      block.content = { ...block.content, ...content }
      Bus.publish()
    }
  },

  dispatchToken: Dispatcher.register(function(action) {
    switch (action.type) {

      case require('../actions/block/create'):
        var block = BlockStore._create(action.params)
        action.block = block
        break

      case require('../actions/block/destroy'):
        BlockStore._destroy(action.blockId)
        break

      case require('../actions/block/update'):
        BlockStore._update(action.blockId, action.content)
        break

      default:
        // do nothing
    }
  })

}

module.exports = BlockStore
