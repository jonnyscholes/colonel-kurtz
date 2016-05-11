/**
 * Bootstrap
 * This plugin is responsible for injecting data into the system.
 */

export default {

  register(app, { allow, maxChildren=Infinity, blocks, schema }, next) {
    app.replace({ maxChildren, blocks, blockTypes: schema }, next)
  }

}
