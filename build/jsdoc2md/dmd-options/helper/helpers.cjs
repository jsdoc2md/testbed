const overrides = {
  inlineLinks: function (text, options) {
    return 'A link'
  },

  orphans: function () {
    return 'whatever'
  }
}

module.exports = overrides
