let siblingsOf = require('../utils/siblingsOf')
let { destroy, move } = require('../actions/blocks')

module.exports = [
  {
    id : 'moveBefore',
    label : 'Move Up',
    onClick(repo, block) {
      return repo.push(move, block, -1)
    },
    isDisabled(repo, block) {
      return siblingsOf(repo.state.blocks, block)[0] === block
    }
  },
  {
    id : 'moveAfter',
    label : 'Move Down',
    onClick(repo, block) {
      return repo.push(move, block, 1)
    },
    isDisabled(repo, block) {
      return siblingsOf(repo.state.blocks, block).pop() === block
    }
  },
  {
    id : 'destroy',
    label : 'Remove',
    onClick(repo, block) {
      return repo.push(destroy, block.id)
    }
  }
]
