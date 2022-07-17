module.exports = {
  inputs: {},

  exits: {},

  fn: async function () {
    return sails.inertia.render('about', {
      title: 'about',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
    })
  },
}
