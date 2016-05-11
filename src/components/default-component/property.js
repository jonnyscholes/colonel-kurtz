import React from 'react'
import TextField from './text-field'
import BooleanField from './boolean-field'

const Property = function (props) {

  switch (type) {
    case 'string':
      return (<TextField { ...props } type="text" />)

    case 'integer':
    case 'float':
    case 'number':
      return (<TextField { ...props } type="number" />)

    case 'boolean':
      return (<TextField { ...props } type="number" />)
  }

  return (<TextField { ...props } type="text" />)
}
