let Button = require('./Button')
let React  = require('react')

module.exports = React.createClass({

  propTypes: {
    repo  : React.PropTypes.object.isRequired,
    block : React.PropTypes.object.isRequired,
    label : React.PropTypes.string.isRequired,
    id    : React.PropTypes.string.isRequired
  },

  getDefaultProps() {
    return {
      className : 'col-menu-item',
      type      : 'button',
      onClick() {},
      isDisabled() {}
    }
  },

  isDisabled() {
    let { repo, block, isDisabled } = this.props
    return isDisabled(repo, block)
  },

  render() {
    let { label, ...safe } = this.props

    return (
      <Button { ...safe } onClick={ this._onClick } disabled={ this.isDisabled() }>
        { label }
      </Button>
    )
  },

  _onClick() {
    let { repo, block, onClick } = this.props
    onClick(repo, block, this)
  }

})
