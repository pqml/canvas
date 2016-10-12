'use strict'

function canvas (opts) {
  opts = opts || {}

  var el = opts.el || document.createElement('canvas')
  var api = {
    el: el,
    context: el.getContext('2d'),
    ratio: opts.ratio || window.devicePixelRatio || 1,
    width: 0,
    height: 0,
    destroy: destroy,
    resize: resize,
    clear: clear
  }

  if (opts.parent) opts.parent.appendChild(api.el)

  if (opts.el) {
    api.width = opts.el.width
    api.height = opts.el.height
  }

  function resize (w, h) {
    api.width = w
    api.height = h
    api.el.width = w
    api.el.height = h
    api.el.style.width = w + 'px'
    api.el.style.height = h + 'px'
    return api
  }

  function clear () {
    api.context.clearRect(0, 0, api.width * api.ratio, api.height * api.ratio)
    return api
  }

  function destroy () {
    api.context = null
    if (api.el.parentNode) api.el.parentNode.removeChild(api.el)
    api.el = null
  }

  return api
}

module.exports = canvas
