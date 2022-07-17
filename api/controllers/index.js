module.exports = {
  inputs: {},

  exits: {},

  fn: async function () {
    return sails.inertia.render('index', {
      message: 'Hello there...',
    })
  },
}
