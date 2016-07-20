import React     from 'react'
import Presenter from 'microcosm/addons/presenter'
import Block     from './Block'

export default class EditorBlock extends Presenter {

  viewModel({ block }) {
    return {
      children : state => state.blocks.filter(block => block.parent === block)
    }
  }

  createBlock(app, id, position, parent) {
    return app.push(Actions.create, id, position, parent)
  }

  getBlock(block) {
    return (<EditorBlock key={ block } block={ block } />)
  }

  render() {
    return (
      <Block app={ this.app } block={ this.props.block }>
        { this.state.children.map(this.getBlock, this) }
      </Block>
    )
  }

}
