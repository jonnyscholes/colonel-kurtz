import ActionButton  from './ActionButton'
import Blocks        from '../stores/Blocks'
import React         from 'react'
import SwitchNav     from './SwitchNav'
import classNames    from 'classnames'
import typesForBlock from '../utils/typesForBlock'

module.exports = React.createClass({

  contextTypes: {
    send: React.PropTypes.func
  },

  propTypes: {
    repo : React.PropTypes.object.isRequired
  },

  getInitialState() {
    return { open: false }
  },

  componentWillReceiveProps() {
    this.setState({ open: false })
  },

  open() {
    this.setState({ open: true })
  },

  close() {
    this.setState({ open: false }, () => {
      this.refs.toggle.focus()
    })
  },

  getToggle() {
    if (this.state.open) return null

    return (<ActionButton ref="toggle"
                          disabled={ this.hasMaxChildren() }
                          label="Open the block menu and create a block"
                          onClick={ this._onToggle } />)
  },

  getNav(blockTypes) {
    if (!this.state.open) return null

    return (<SwitchNav ref="nav"
                       blockTypes={ blockTypes }
                       onAdd={ this._onAdd }
                       onExit={ this.close } />)
  },

  hasMaxChildren() {
    let { repo, parent } = this.props

    if (!parent) {
      return repo.state.blocks.filter(b => b.parent).length >= repo.state.maxChildren
    }

    let children = repo.state.blocks.filter(b => b.parent === parent)
    let type     = repo.state.blockTypes.filter(t => t.id === parent.type)[0]

    return children.length >= type.maxChildren
  },

  render() {
    let { repo, parent, position } = this.props
    let types = typesForBlock(repo.state.blockTypes, parent)

    let className = classNames('col-switch', {
      'col-switch-disabled': this.hasMaxChildren()
    })

    return types.length ? (
      <div className={ className } onKeyUp={ this._onKeyUp }>
        { this.getToggle() }
        { this.getNav(types) }
      </div>
    ) : null
  },

  _onAdd(type) {
    let { position, parent } = this.props
    this.context.send('createBlock', type.id, position, parent)
  },

  _onToggle() {
    let { repo, position, parent } = this.props

    let types = typesForBlock(repo.state.blockTypes, parent)

    // If only one type exists, instead of opening the nav, just
    // create that element
    if (types.length === 1) {
      return this.context.send('createBlock', types[0].id, position, parent)
    }

    this.open()
  },

  _onKeyUp(e) {
    if (e.key === 'Escape') {
      this.close()
    }
  }

})
