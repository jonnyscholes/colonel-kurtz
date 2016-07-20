let siblingsOf = require('../utils/siblingsOf')
let { destroy, move } = require('../actions/blocks')

module.exports = [
  {
    id : 'moveBefore',
    label : 'Move Up',
    onClick(app, block) {
      return app.push(move, block, -1)
    },
    isDisabled(app, block) {
      return siblingsOf(app.state.blocks, block)[0] === block
    }
  },
  {
    id : 'moveAfter',
    label : 'Move Down',
    onClick(app, block) {
      return app.push(move, block, 1)
    },
    isDisabled(app, block) {
      return siblingsOf(app.state.blocks, block).pop() === block
    }
  },
  {
    id : 'destroy',
    label : 'Remove',
    onClick(app, block) {
      return app.push(destroy, block.id)
    }
  }
]
