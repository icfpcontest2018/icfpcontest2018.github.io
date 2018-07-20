---
title: "Submission Acknowledgements"
layout: wide
---

{% assign pubidToName = site.data.pubid_to_name %}
{% assign data = site.data.submission_acks %}
{% assign ts = data | map: "timestamp" | uniq | sort | last %}
{% if ts %}
{% assign ts_YYYY = ts | slice: 0, 4 %}
{% assign ts_MM = ts | slice: 4, 2 %}
{% assign ts_DD = ts | slice: 6, 2 %}
{% assign ts_hh = ts | slice: 8, 2 %}
{% assign ts_mm = ts | slice: 10, 2 %}
{% assign ts_ss = ts | slice: 12, 2 %}
{% assign date_time = ts_YYYY | append: "-" | append: ts_MM | append: "-" | append: ts_DD | append: " " | append: ts_hh | append: ":" | append: ts_mm | append: ":" | append: ts_ss | append: " UTC" %}
{% assign iso = ts_YYYY | append: "-" | append: ts_MM | append: "-" | append: ts_DD | append: "T" | append: ts_hh | append: ":" | append: ts_mm | append: ":" | append: ts_ss | append: "Z" %}

# {{page.title}} at [{{date_time}}](https://www.timeanddate.com/worldclock/fixedtime.html?iso={{iso}})
{% else %}
# {{page.title}}
{% endif %}

During the contest, the contest organizers will periodically attempt to download
and check submissions, reporting submission acknowledgements here.  Checking of
a submission for acknowledgement is limited to: downloading success; SHA256
checksum matching success; zip archive testing success; expected file listing
success.  Checking of a submission for acknowledgement **does not** check that
trace files successfully decode to sequences of commands or that the traces are
correct for the corresponding problems.  (Note: Make sure that the submission
available at the URL **before** submitting the URL and SHA; otherwise, the
download may fail and the submission rejected.)

Downloading and checking of submissions during and after the contest will be
automated.  Be sure that submission URL can be downloaded without user
interaction.  If a submission acknowledgement shows failure, then investigate
the behavior of the following approximation of the download-and-check script:

<pre>
curl -L -s -S -f -o submission.zip ${submissionURL} && \
echo "${submissionSHA}  submission.zip" | shasum -c && \
unzip -P ${privateID} -qt submission.zip
</pre>

****

{% assign publicIDs = data | map: "publicID" | uniq | sort %}

## By Team

{% for publicID in publicIDs %}[Team&nbsp;{{pubidToName[publicID]}}](#team-{{publicID}})&emsp;&emsp;{% endfor %}

{% for publicID in publicIDs %}

<h3 id="team-{{publicID}}">Team {{pubidToName[publicID]}}</h3>

<table>
    <thead>
        <th>Timestamp</th>
        <th>Submission SHA</th>
        <th style="width:60%;">Acknowledgement</th>
    </thead>
    <tbody>
    {% assign data_ = data | where:"publicID",publicID %}
    {% for row in data_ %}
        <tr>
            <td><pre>{{ row["timestamp"] }}</pre></td>
            <td><pre>{{ row["submissionSHA"] }}</pre></td>
            <td style="text-align:left"><pre>{{ row["ack"] }}</pre></td>
        </tr>
    {% endfor %}
    </tbody>
</table>

{% endfor %}
