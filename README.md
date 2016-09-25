
<h1 align="center">:pencil2: canvas</h1>
<h3 align="center">Small canvas wrapper</h3>

<div align="center">
  <!-- License -->
  <a href="https://raw.githubusercontent.com/pqml/midibus.js/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="License" />
  </a>
  <!-- Standard -->
  <a href="http://standardjs.com/">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard" />
  </a>
</div>

<br>

### Features
This is basically the same as [the watsondg canvas wrapper](https://github.com/watsondg/canvas) in a factory function pattern. <br>
I also added the `el` option to use existing canvas and the ability to chain methods

### Installation

```sh
npm install --save pqml/canvas
```

### Usage

```javascript
var canvas = require('canvas')

var scene = canvas({
    el: document.getElementById('my-canvas')
}).resize(200,200)

var ctx = scene.context
```


### License
MIT.
