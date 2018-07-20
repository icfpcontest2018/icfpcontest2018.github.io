---
title: "Check Trace (Lightning)"
layout: wide
tags: full
---

# {{page.title}}

<form>

<p>
<label for="traceFileIn">Trace:</label>
<input type="file" accept=".nbt" id="traceFileIn"/>
<input style="display: none;" type='button' id='chkTrace' value='Check Trace'/>
</p>

</form>

****

<pre id="stdout"></pre>

<script src="{{ '/assets/js/load-file-utils.js' | relative_url }}"></script>
<script>
var traceBData = null;
(function () {
  mkLoadBDataFromFile
  ('trace',
   function () { traceBData = null;
                 document.getElementById('stdout').innerHTML = ""; },
   function () { },
   function () { document.getElementById('chkTrace').click(); },
   function(data) { traceBData = data; });
})();
</script>
<script src="{{ '/assets/js/chk-trace.js' | relative_url }}"></script>
