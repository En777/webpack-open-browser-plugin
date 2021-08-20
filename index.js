function WebpackOpenBrowserPlugin (options) {
  this.options = options || {}
}

function once (fn) {
  var called = false
  return function () {
    if (called) return
    called = true
    fn()
  }
}

WebpackOpenBrowserPlugin.prototype.apply = function (compiler) {
  var t = this
  // Open the browser should be once
  compiler.hooks.done.tap('WebpackOpenBrowserPlugin', once(function () {
    var url = t.options.url
    if (!url) {
      console.error('please pass a url, like: new WebpackOpenBrowserPlugin({ url: "http://localhost:8080" })')
      return
    }

    // setTimeout delay is used because there is no need to make webpack wait for the browser to open
    setTimeout(function () {
      var open = require('opn')
      open(url)
    })
  }))
}

module.exports = WebpackOpenBrowserPlugin
