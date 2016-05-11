import React from 'react'
import Field from '../../../addons/common/field'

import { labelize } from '../utils/strings'

const TYPE_MAP = {
  'string'  : 'text',
  'integer' : 'number',
  'float'   : 'number'
}

export default React.createClass({

  render() {
    let { content, schema, onChange } = this.props

    let fields = Object.keys(schema.properties).map(function (name) {
      let options = schema.properties[name]
      let type    = TYPE_MAP[options.type] || 'text'

      return (<Field key={ name }
                     label={ labelize(name) }
                     hint={ options.description }
                     type={ type }
                     value={ content[name] }
                     onChange={ (e) => onChange({ [name] : e.target.value }) } />)
    })

    return (
      <div className="col-default-block">
        <p className="col-default-block__title">
          { schema.title }
        </p>

        <div className="col-default-block__fields">{ fields }</div>
      </div>
    )
  }
})
