import Btn from './Button'
import React from 'react'

module.exports = React.createClass({

  propTypes: {
    label   : React.PropTypes.string.isRequired,
    onClick : React.PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      className : 'col-btn-fab',
      symbol    : '+'
    }
  },

  focus() {
    this.refs.btn.focus()
  },

  render() {
    let { className, disabled, label, onClick, symbol } = this.props

    return (
      <Btn className={ className } onClick={ onClick } disabled={ disabled } ref="btn">
        <span className="col-hidden">{ label }</span>
        <span aria-hidden="true">{ symbol }</span>
      </Btn>
    )
  }

})
