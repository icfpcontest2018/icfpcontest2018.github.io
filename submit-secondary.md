---
title: "Submit (Backup Method)"
layout: wide
---

# {{page.title}}

{% include submit_preamble.md %}

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd0RMj0IUNsoVmhlQotcDVMZakK921zShK8H42zQJiweRhb4g/viewform?embedded=true" style="width:100%;height:1050px;margin:0px;border:0px;">Loading...</iframe>

****

{% include submit_notes.md %}

## Alternative Method

For teams wishing to automate submission, the following `curl` command template
can be used:

<pre id="curl_alt">
curl -L \
  --data-urlencode entry.1763695394=&lt;privateID&gt; \
  --data-urlencode entry.1501594990=&lt;submissionURL&gt; \
  --data-urlencode entry.1453391049=&lt;submissionSHA&gt; \
  https://docs.google.com/forms/u/2/d/e/1FAIpQLSd0RMj0IUNsoVmhlQotcDVMZakK921zShK8H42zQJiweRhb4g/formResponse
</pre>

The response will be an HTML page.
