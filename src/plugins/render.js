/**
 * Render
 * Handles updating the browser UI
 */

import App   from '../presenters/App'
import DOM   from 'react-dom'
import React from 'react'

export default function register (repo, { el }) {
  DOM.render(<App repo={ repo } />, el)
}
