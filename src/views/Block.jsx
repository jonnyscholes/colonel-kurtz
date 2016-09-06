let React             = require('react')
let Actions           = require('../actions/blocks')
let Animator          = require('./Animator')
let BlockMenu         = require('./BlockMenu')
let FallbackBlockType = require('../models/FallbackBlockType')
let Switch            = require('./Switch')
let respondsTo        = require('../utils/respondsTo')

module.exports = React.createClass({

  propTypes: {
    repo  : React.PropTypes.object.isRequired,
    block : React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      extraMenuItems : [],
      menuOpen       : false
    }
  },

  getBlockType() {
    let { repo, block } = this.props

    let blockType = repo.state.blockTypes.filter(i => i.id === block.type)[0]

    return blockType ? blockType : new FallbackBlockType({ block })
  },

  getMenuItems() {
    return this.state.extraMenuItems
  },

  setMenuItems(component) {
    if (respondsTo(component, 'getMenuItems')) {
      this.setState({ extraMenuItems: component.getMenuItems() })
    }
  },

  openMenu() {
    this.setState({ menuOpen: true })
  },

  closeMenu() {
    this.setState({ menuOpen: false })
  },

  componentDidMount() {
    this.setMenuItems(this.refs.block)
  },

  getContent(block, component) {
    let defaults = typeof component.getDefaultProps === 'function' ? component.getDefaultProps() : {}

    return { ...defaults.content, ...block.content }
  },

  render() {
    let { repo, block, children } = this.props
    let { component:Component } = this.getBlockType()
    let { menuOpen, extraMenuItems } = this.state

    // Determine content by taking the default content and extend it with
    // the current block content
    let content = this.getContent(block, Component)

    return (
      <div className="col-editor-block">
        <div className={ `col-block col-block-${ block.type }` }>
          <Component ref="block" { ...block } content={ content } onChange={ this._onChange } >
            <Switch repo={ repo } parent={ block } />
            <Animator className="col-block-children">
              { children }
            </Animator>
          </Component>

          <BlockMenu ref="menu" repo={ repo } block={ block } items={ extraMenuItems } active={ menuOpen } onOpen={ this.openMenu } onExit={ this.closeMenu } />
        </div>

        <Switch repo={ repo } position={ block } parent={ block.parent } />
      </div>
    )
  },

  _onChange(content) {
    let { repo, block } = this.props
    repo.push(Actions.update, block, content)
  }
})
