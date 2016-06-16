import Colonel from '../src/Colonel'

import './example.scss'

let editor = new Colonel({
  el: document.getElementById('app'),

  schema: [{
    "id": "hero",
    "title": "Hero",

    "properties": {
      "title": {
        "type": "string",
        "description": "The main heading."
      },
      "subtitle": {
        "type": "string",
        "description": "Secondary text below the heading."
      },
      "image": {
        "description": "A background image behind the text",
        "type": "image"
      }
    },
    "required": ["title", "image"]
  }]

})

editor.addPlugin(require('./plugins/storage'))

editor.start()
