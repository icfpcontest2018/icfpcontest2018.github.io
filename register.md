---
title: "Register"
layout: default
---

# {{page.title}}

{% include register_preamble.md %}

<form id="form">

<input type="hidden" id="action" value="register" required/>

<p>
<label for="name">Team Name:</label><br/>
<input type="text" autocomplete="organization" pattern='[ ]*[^\s"]([^\s"]|[ ])*' id="name" value="" required/>
</p>

<p>
<label for="email">Team E-mail Address:</label><br/>
<input type="email" autocomplete="email" id="email" value="" required/>
</p>

<p style="display:none; font-size: 20px;">
<label for="publicID">Team Public ID:</label><br/>
<input type="text" id="publicID" readonly/>
</p>

<p style="display:none; font-size: 20px;">
<label for="privateID">Team Private ID:</label><br/>
<input type="text" id="privateID" readonly/>
</p>

<p style="display:none;">
<label for="timestamp">Timestamp:</label><br/>
<input type="text" id="timestamp" readonly/>
</p>

<p style="font-size: 20px;">
<button type="submit" id="submit">Submit</button>
<span id="stdout"></span>
<span id="stderr" style="color:red; display:none"></span>
</p>

</form>

<div style="display:none;" id="success_div" markdown="1">

Thank you for registering a team for the ICFP Programming Contest 2018.  **Record the team public and private identifiers.**

</div>

****

## Alternative Method

For teams wishing to automate registration, the following `curl` command
template can be used:

<pre id="curl_alt"></pre>

The response will be a JSON object with a `"result"` key having the value
`"success"` or `"failure"`.  If the `"result"` key has the value `"failure"`,
then the JSON object will have a `"msg"` key having a string value describing
the error.  If the `"result"` key has the value `"success"`, then the JSON
object will have `"name"`, `"email"`, `"publicID"`, `"privateID"`, and
`"timestamp"` keys, each with string values.

<script src="/assets/js/form-utils.js"></script>
