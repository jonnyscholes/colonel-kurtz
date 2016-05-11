import DefaultComponent from '../components/default-component'

const DEFAULTS = {
  component   : DefaultComponent,
  group       : null,
  maxChildren : Infinity,
  root        : true,
  types       : []
}

class Schema {

  constructor(config) {
    Object.assign(this, DEFAULTS, config)
  }

  valueOf() {
    return this.id
  }

}

export default Schema
