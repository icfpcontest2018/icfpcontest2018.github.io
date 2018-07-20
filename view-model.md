---
title: "View Model"
layout: wide
---

# {{page.title}}

<form>

<p>
<label for="modelFileIn">Model:</label>
<input type="file" accept=".mdl,.xmdl" id="modelFileIn"/>
<input style="display:none;" type='button' id='viewModel' value='View Model'/>
</p>

</form>

****

<pre id="stdout"></pre>

****

<div id="glcanvas_container" style="position: relative;">
  <canvas id="glcanvas" tabindex="0" />
</div>

## Controls

* `r`: Reset rotation and limits
* `s`/`w`: rotate about X axis
* `a`/`d`: rotate about Y axis
* `g`: enable/disable limit guide visibility
* `v`/`b`: decrease/increase low X limit
* `n`/`m`: decrease/increase high X limit
* `h`/`j`: decrease/increase low Y limit
* `k`/`l`: decrease/increase high Y limit
* `u`/`i`: decrease/increase low Z limit
* `o`/`p`: decrease/increase high Z limit

<script src="/assets/js/three.min.js"></script>
<script src="/assets/js/Detector.js"></script>
<script src="/assets/js/stats.min.js"></script>
<script src="/assets/js/visualizer.js"></script>
<script>
var vis;
(function () {
  if (! Detector.webgl) {
    const glcanvasContainer = document.getElementById('glcanvas_container');
    const glcanvas = document.getElementById('glcanvas');
    glcanvasContainer.removeChild(glcanvas);
    var warning = Detector.getWebGLErrorMessage();
    glcanvasContainer.appendChild(warning);
  } else {
    vis = initVisualizer({stats: true, screenshot: true, controls: true});
  }
})();
</script>
<script src="/assets/js/load-file-utils.js"></script>
<script>
var modelBData = null;
(function () {
  mkLoadBDataFromFile
  ('model',
   function () { modelBData = null;
                 document.getElementById('stdout').innerHTML = "";
                 if (vis) { vis.setSize(8, 8, 8); }; },
   function () { },
   function () { document.getElementById('viewModel').click(); },
   function(data) { modelBData = data; });
})();
</script>
<script src="/assets/js/view-model.js"></script>
