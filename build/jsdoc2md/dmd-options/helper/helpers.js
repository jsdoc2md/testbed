const overrides = {
  inlineLinks: function (text, options) {
    return 'A link'
  },

  orphans: function () {
    console.log(this)
    return 'whatever'
  }
}

module.exports = overrides
