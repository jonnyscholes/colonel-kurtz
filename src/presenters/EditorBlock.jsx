import React     from 'react'
import Presenter from 'microcosm/addons/presenter'
import Block     from '../views/Block'

const childOf = block => state => state.blocks.filter(child => child.parent === block)

export default class EditorBlock extends Presenter {

  viewModel({ block }) {
    return {
      children : childOf(block)
    }
  }

  getBlock(block) {
    return (<EditorBlock key={ block } block={ block } />)
  }

  render() {
    return (
      <Block repo={ this.repo } block={ this.props.block }>
        { this.state.children.map(this.getBlock, this) }
      </Block>
    )
  }

}
