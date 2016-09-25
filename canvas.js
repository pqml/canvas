'use strict'

function canvas (opts) {
  opts = opts || {}
  var el = opts.el || document.createElement('canvas')
  var context = el.getContext('2d')
  var ratio = opts.ratio || window.devicePixelRatio || 1
  var width = 0
  var height = 0

  if (opts.el) {
    width = opts.el.width
    height = opts.el.height
  }

  if (opts.parent) opts.parent.appendChild(el)

  var api = {
    el: el,
    context: context,
    ctx: context,
    ratio: ratio,
    width: width,
    height: height,
    destroy: destroy,
    resize: resize,
    clear: clear
  }

  function resize (w, h) {
    width = w
    height = h
    el.width = w
    el.height = h
    el.style.width = w + 'px'
    el.style.height = h + 'px'
    return api
  }

  function clear () {
    el.context.clearRect(0, 0, width * ratio, height * ratio)
    return api
  }

  function destroy () {
    context = null
    if (el.parentNode) el.parentNode.removeChild(el)
    el = null
  }

  return api
}

module.exports = canvas
