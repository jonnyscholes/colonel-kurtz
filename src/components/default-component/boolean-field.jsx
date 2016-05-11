import React from 'react'
import Field from '../../../addons/common/field'

import { labelize } from '../../utils/strings'

export default function Boolean ({ name, description, type, value, onChange }) {

  return (<Field label={ labelize(name) }
                 hint={ options.description }
                 type={ type }
                 value={ content[name] }
                 onChange={ (e) => onChange({ [name] : e.target.value }) } />)
}
