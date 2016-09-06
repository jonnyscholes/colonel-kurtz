/**
 * This is the root component that contains sections for
 * toggling between viewing modes and viewing managed content
 */

import React       from 'react'
import Actions     from '../actions/blocks'
import Presenter   from 'microcosm/addons/presenter'
import Animator    from '../views/Animator'
import EditorBlock from './EditorBlock'
import Switch      from '../views/Switch'

export default class App extends Presenter {

  register() {
    return {
      'createBlock': this.createBlock
    }
  }

  viewModel() {
    return {
      parents : state => state.blocks.filter(block => !block.parent)
    }
  }
  
  createBlock(repo, id, position, parent) {

    return repo.push(Actions.create, id, position, parent)
  }

  getBlock(block) {
    return (<EditorBlock key={ block } block={ block } />)
  }

  render() {
    return (
      <div className="colonel">
        <Switch repo={ this.repo } />
        <Animator className="col-block-children">
          { this.state.parents.map(this.getBlock, this) }
        </Animator>
      </div>
    )
  }

}
