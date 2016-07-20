/**
 * Render
 * Handles updating the browser UI
 */

import App   from '../components/App'
import DOM   from 'react-dom'
import React from 'react'

export default function register (app, { el }) {
  DOM.render(<App app={ app } />, el)
}
