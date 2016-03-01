let Colonel   = require('../../src/Colonel')
let bootstrap = require('../../src/plugins/bootstrap')

describe('bootstrap plugin', function() {

  it ('can serialize an input', function (done) {
    let input = document.createElement('textarea')

    input.value = JSON.stringify([{
      blocks  : [],
      content : {},
      type    : 'section'
    }])

    let app = new Colonel({
      el: document.createElement('div'),
      blockTypes: [{ id: 'section' }],
      blocks: input
    })

    app.start(function() {
      app.state.blocks[0].should.have.property('type', 'section')
      done()
    })
  })

  it ('filter block types given a list', function(done) {
    let app = new Colonel({
      el : document.createElement('div'),
      allow: [ 'list' ],
      blockTypes : [{ id: 'list' }, { id: 'text' }]
    })

    app.start(function() {
      let types = app.state.blockTypes

      types.length.should.equal(1)
      types[0].id.should.equal('list')

      done()
    })
  })

  it ('allows all block types if given no allow option', function(done) {
    let app = new Colonel({ el : document.createElement('div') }).start()

    bootstrap.register(app, {
      blockTypes : [{ id: 'list' }, { id: 'text' }]
    }, function() {
      app.state.blockTypes.length.should.equal(2)
      done()
    })
  })
})
