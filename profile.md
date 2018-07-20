---
title: "Profile"
layout: default
---

# {{page.title}}

{% include profile_preamble.md %}

Only the Team Private ID is required and only fields of the profile to be
added/updated need to be completed.  After submitting, the form will be updated
with the currently recorded values for all fields.  (Note: A team can view their
current profile by submitting with only the team private identifier.)

<form id="form">

<input type="hidden" id="action" value="profile" required/>

<p>
<label for="privateID">Team Private ID:</label><br/>
<input type="text" pattern="[a-fA-F0-9]{32}" title="32 hexadecimal digits" id="privateID" value="" required/>
</p>

<p>
<label for="name">Team Name:</label><br/>
<input type="text" autocomplete="organization" pattern='[ ]*[^\s"]([^\s"]|[ ])*' id="name" value=""/>
</p>

<p>
<label for="email">Team E-mail Address:</label><br/>
<input type="email" autocomplete="email" id="email" value=""/>
</p>

<p>
<label for="members">Team Member(s):</label> (Required for final profile.)<br/>
<textarea id="members"></textarea>
</p>

<p>
<label for="countries">Team Country(ies):</label> (Required for final profile; comma-separated list of <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3#Officially_assigned_code_elements">3-letter country codes</a>.)<br/>
<input type="text" pattern='[ ]*([A-Z]{3}(,[ ]*[A-Z]{3})*[ ]*)?' title="comma-separated list of 3-letter country codes" id="countries" value=""/>
</p>

<p>
<label for="languages">Team Programming Language(s):</label> (Required for final profile; comma-separated list.)<br/>
<input type="text" pattern='[ ]*([^\s",;]([^\s",;]|[ ])*(,[ ]*[^\s",;]([^\s",;]|[ ])*)*)?' title="comma-separated list of programming languages" id="languages" value=""/>
</p>

<p>
<label for="homepage">Team Homepage:</label> (Optional; homepages will be published after the end of the contest.)<br/>
<input type="url" id="homepage" value=""/>
</p>

<p>
<label for="codeURL">Source Code URL:</label> (Required for final profile.)<br/>
<input type="url" id="codeURL" value=""/>
</p>

<p>
<label for="codeSHA">Source Code SHA256 Checksum:</label> (Required for final profile.)<br/>
<input type="text" pattern="[a-fA-F0-9]{64}" title="64 hexadecimal digits" id="codeSHA" value=""/>
</p>

<p>
<label for="comments">Comments:</label><br/>
<textarea id="comments"></textarea>
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

<div style="display:none;" id="success_div"></div>

****

## Alternative Method

For teams wishing to automate profile updates, the following `curl` command
template can be used:

<pre id="curl_alt"></pre>

The response will be a JSON object with a `"result"` key having the value
`"success"` or `"failure"`.  If the `"result"` key has the value `"failure"`,
then the JSON object will have a `"msg"` key having a string value describing
the error.  If the `"result"` key has the value `"success"`, then the JSON
object will have additional keys each with string values.

<script src="/assets/js/form-utils.js"></script>
