---
title: "Submit"
layout: default
---

# {{page.title}}

{% include submit_preamble.md %}

<form id="form">

<input type="hidden" id="action" value="submit" required/>

<p>
<label for="privateID">Team Private ID:</label><br/>
<input type="text" pattern="[a-fA-F0-9]{32}" title="32 hexadecimal digits" id="privateID" value="" required/>
</p>

<p>
<label for="submissionURL">Submission URL:</label><br/>
<input type="url" id="submissionURL" value="" required/>
</p>

<p>
<label for="submissionSHA">Submission SHA256 Checksum:</label><br/>
<input type="text" pattern="[a-fA-F0-9]{64}" title="64 hexadecimal digits" id="submissionSHA" value="" required/>
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

Thank you for submitting to the ICFP Programming Contest 2018.  You may check
the status of your submission on the [submission
acknowledgements page](/submission-acks.html).

</div>

****

{% include submit_notes.md %}

## Alternative Method

For teams wishing to automate submission, the following `curl` command template
can be used:

<pre id="curl_alt"></pre>

The response will be a JSON object with a `"result"` key having the value
`"success"` or `"failure"`.  If the `"result"` key has the value `"failure"`,
then the JSON object will have a `"msg"` key having a string value describing
the error.  If the `"result"` key has the value `"success"`, then the JSON
object will have `"privateID"`, `"submissionURL"`, `"submissionSHA"`, and
`"timestamp"` keys, each with string values.

<script src="/assets/js/form-utils.js"></script>
