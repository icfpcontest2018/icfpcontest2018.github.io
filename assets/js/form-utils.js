(function (){
// https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Polyfill
// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {

  Array.prototype.forEach = function(callback/*, thisArg*/) {

    var T, k;

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    // 1. Let O be the result of calling toObject() passing the
    // |this| value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get() internal
    // method of O with the argument "length".
    // 3. Let len be toUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If isCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let
    // T be undefined.
    if (arguments.length > 1) {
      T = arguments[1];
    }

    // 6. Let k be 0.
    k = 0;

    // 7. Repeat while k < len.
    while (k < len) {

      var kValue;

      // a. Let Pk be ToString(k).
      //    This is implicit for LHS operands of the in operator.
      // b. Let kPresent be the result of calling the HasProperty
      //    internal method of O with argument Pk.
      //    This step can be combined with c.
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal
        // method of O with argument Pk.
        kValue = O[k];

        // ii. Call the Call internal method of callback with T as
        // the this value and argument list containing kValue, k, and O.
        callback.call(T, kValue, k, O);
      }
      // d. Increase k by 1.
      k++;
    }
    // 8. return undefined.
  };
}
var url = "https://script.google.com/macros/s/AKfycbzQ7Etsj7NXCN5thGthCvApancl5vni5SFsb1UoKgZQwTzXlrH7/exec";
function readOnlyForm(target) {
  target.querySelectorAll("button, input, textarea").forEach(function (elem) {
    elem.readOnly = true;
  });
}
function doSubmit(event) {
  event.preventDefault();
  readOnlyForm(event.target);
  event.target.querySelector("#submit").style.display = "none";
  var stdout = document.getElementById("stdout");
  stdout.innerHTML = "Sending ...";
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.responseType = "json";
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = xhr.response;
      console.log(response);
      if (typeof(response) == "string") {
        var response = JSON.parse(response);
      }
      if (response.result == "success") {
        stdout.innerHTML = "Success";
        var successDiv = document.getElementById("success_div");
        successDiv.style.display = "block";
        Object.keys(response).forEach(function (key) {
          var elem = document.getElementById(key);
          if (elem) {
            if (elem.parentElement.style.display == "none") {
              elem.parentElement.style.display = "block";
            }
            elem.value = "";
            elem.value = response[key];
          }
        });
      } else {
        stdout.innerHTML = "";
        var stderr = document.getElementById("stderr");
        stderr.style.display = "block";
        stderr.innerHTML = "Failure:: " + response.msg;
      }
    }
  };
  var args = "";
  event.target.querySelectorAll("input, textarea").forEach(function (elem) {
    if (elem.value) {
      if (args != "") { args = args + "&"; }
      args = args + elem.id + "=" + encodeURIComponent(elem.value); }
  });
  console.log(args);
  xhr.send(args);
}
function onContentLoaded() {
  var form = document.getElementById("form");
  form.addEventListener("submit", doSubmit, false);
  var curl_alt = document.getElementById("curl_alt");
  var curl_cmd = "curl -L \\\n"
  form.querySelectorAll("input, textarea").forEach(function (elem) {
    if (elem.parentElement.style.display != "none") {
      var arg;
      if (elem.id == "action") {
        arg = elem.value;
      } else {
        arg = "&lt;value&gt;";
      }
      arg = "--data-urlencode " + elem.id + "=" + arg;
      if (!elem.required) {
        arg = "[" + arg + "]";
      }
      curl_cmd = curl_cmd + "  " + arg + " \\\n";
    }
  });
  curl_cmd = curl_cmd + "  " + url;
  curl_alt.innerHTML = curl_cmd;
}
document.addEventListener("DOMContentLoaded", onContentLoaded, false);
})();
