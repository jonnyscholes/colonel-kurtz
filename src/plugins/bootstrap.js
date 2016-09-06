/**
 * Bootstrap
 * This plugin is responsible for injecting data into the system
 */

let parseElement = function (element) {
  let data = []

  try {
    data = JSON.parse(element.value)
  } catch(x) {}

  return data
}

function filter (blockTypes, acceptable) {
  if (!acceptable) return blockTypes

  return blockTypes.filter(type => acceptable.indexOf(type.id) > -1)
}

export default function register (repo, { allow, maxChildren = Infinity, blocks, blockTypes }) {
  if (blocks instanceof HTMLElement) {
    blocks = parseElement(blocks)
  }

  repo.replace({ maxChildren, blocks, blockTypes: filter(blockTypes, allow) })
}
