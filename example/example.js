import Colonel from '../src/Colonel'

import './example.scss'

let editor = new Colonel({
  el: document.getElementById('app'),

  schema: [{
    "id": "person",
    "title": "Person",

    "properties": {
      "firstName": {
        "type": "string",
        "description": "The person's first name"
      },
      "lastName": {
        "type": "string",
        "description": "The person's last name"
      },
      "age": {
        "description": "Age in years",
        "type": "integer",
        "minimum": 0
      }
    },
    "required": ["firstName", "lastName"]
  }]

})

editor.addPlugin(require('./plugins/storage'))

editor.start()
