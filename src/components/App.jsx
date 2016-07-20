/**
 * This is the root component that contains sections for
 * toggling between viewing modes and viewing managed content
 */

import React       from 'react'
import Actions     from '../actions/blocks'
import Presenter   from 'microcosm/addons/presenter'
import Animator    from './Animator'
import EditorBlock from './EditorBlock'
import Switch      from './Switch'

export default class App extends Presenter {

  viewModel() {
    return {
      parents : state => state.blocks.filter(block => !block.parent)
    }
  }

  getBlock(block) {
    return (<EditorBlock key={ block } block={ block } />)
  }

  createBlock(app, id, position, parent) {
    return app.push(Actions.create, id, position, parent)
  }

  render() {
    return (
      <div className="colonel">
        <Switch app={ this.app } />
        <Animator className="col-block-children">
          { this.state.parents.map(this.getBlock, this) }
        </Animator>
      </div>
    )
  }

}
