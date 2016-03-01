/**
 * This is the root component that contains sections for
 * toggling between viewing modes and viewing managed content
 */

let Animator    = require('./animator')
let Blocks      = require('../stores/blocks')
let EditorBlock = require('./editor-block')
let React       = require('react')
let Switch      = require('./switch')

module.exports = React.createClass({

  propTypes: {
    app : React.PropTypes.object.isRequired
  },

  getBlock(block, i) {
    return (<EditorBlock key={ block } app={ this.props.app } block={ block } />)
  },

  render() {
    let { app } = this.props

    let parents = Blocks.filterChildren(app.state.blocks)

    return (
      <div className="colonel">
        <Switch app={ app } />
        <Animator className="col-block-children">
          { parents.map(this.getBlock) }
        </Animator>
      </div>
    )
  }

})
