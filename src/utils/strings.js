/**
 * Convert a given string into a human readible label.
 *
 * @example
 *    labelize('firstName')
 *    // => "First Name"
 *
 * @param {String} text string to convert into a label
 * @return {String} labelized text
 * @api private
 */
export function labelize (text='') {

  let label = `${ text }`

  // Dashes and underscores become spaces
  label = label.replace(/[_-]/g, ' ')

  // Uppercased letters before undercased letters become new words
  label = label.replace(/([A-Z])/g, ' $1')

  // Capitalize every word
  label = label.replace(/(?:^|\s)\S/g, a => a.toUpperCase())

  return label
}
