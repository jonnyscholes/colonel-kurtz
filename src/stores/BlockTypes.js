/**
 * Block Type Store
 *
 * A Block Type describes the editing experience for a Block. Whenever
 * an action associated with block type the system, this module tells
 * Colonel Kurtz how that action manipulates block type data.
 */

import Schema from '../models/schema'

module.exports = {
  getInitialState() {
    return []
  },

  deserialize(blockTypes=[]) {
    return blockTypes.map(options => new Schema(options))
  },

  serialize() {
    return undefined
  }
}
