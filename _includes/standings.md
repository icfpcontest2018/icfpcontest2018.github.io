{% assign pubidToName = site.data.pubid_to_name %}

{% if page.tags contains 'lgtn' %}
{% if page.tags contains 'live' %}
{% assign data = site.data.lgtn_standings_live %}
{% endif %}
{% if page.tags contains 'final' %}
{% assign data = site.data.lgtn_standings_final %}
{% endif %}
{% endif %}
{% if page.tags contains 'full' %}
{% if page.tags contains 'live' %}
{% assign data = site.data.full_standings_live %}
{% endif %}
{% if page.tags contains 'final' %}
{% assign data = site.data.full_standings_final %}
{% endif %}
{% endif %}

{% if page.tags contains 'live' %}
{% assign ts = data | map: "timestamp" | uniq | sort | last %}
{% assign ts_YYYY = ts | slice: 0, 4 %}
{% assign ts_MM = ts | slice: 4, 2 %}
{% assign ts_DD = ts | slice: 6, 2 %}
{% assign ts_hh = ts | slice: 8, 2 %}
{% assign ts_mm = ts | slice: 10, 2 %}
{% assign ts_ss = ts | slice: 12, 2 %}
{% assign date_time = ts_YYYY | append: "-" | append: ts_MM | append: "-" | append: ts_DD | append: " " | append: ts_hh | append: ":" | append: ts_mm | append: ":" | append: ts_ss | append: " UTC" %}
{% assign iso = ts_YYYY | append: "-" | append: ts_MM | append: "-" | append: ts_DD | append: "T" | append: ts_hh | append: ":" | append: ts_mm | append: ":" | append: ts_ss | append: "Z" %}

# {{page.title}} at [{{date_time}}](https://www.timeanddate.com/worldclock/fixedtime.html?iso={{iso}})

**Note**: Live standings may be calculated using only a (random) subset of the problems.  
**Note**: Live standings will be frozen 6 hours before the end of the
{% if page.tags contains 'lgtn' %}Lightning Division.{% endif %}{% if page.tags contains 'full' %}Full Contest.{% endif %}

{% endif %}
{% if page.tags contains 'final' %}
# {{page.title}}
{% endif %}

<p style="text-align: center; font-size: 2.4em;">
<a href="#totals">Totals</a>
&mid;
<a href="#by-problem">By Problem</a>
&mid;
<a href="#by-team">By Team</a>
</p>


****

## Totals

<table style="width:700px">
    <thead>
        <th style="width:50%">Team</th>
        <th style="width:30%">Total Energy</th>
        <th style="width:20%">Total Score</th>
    </thead>
    <tbody>
    {% assign data_ = data | where:"probNum",'total' %}
    {% for row in data_ %}
        {% if row["score"] != "0" %}
        <tr>
            <td style="text-align:left"><pre>{{ pubidToName[row["publicID"]] }}</pre></td>
            <td style="text-align:right"><pre>{{ row["energy"] }}</pre></td>
            <td style="text-align:right"><pre>{{ row["score"] }}</pre></td>
        </tr>
        {% endif %}
    {% endfor %}
    </tbody>
</table>

****

## By Problem

**Note**: Scores for each problem are limited to the top 5 high scores.

{% assign problemNums = data | map: "probNum" | uniq | sort | where_exp:"pn","pn != 'total'" %}

{% for problemNum in problemNums %}[Problem&nbsp;{{problemNum}}](#problem-{{problemNum | downcase}})&emsp;&emsp;{% endfor %}

{% for problemNum in problemNums %}

### Problem {{problemNum}}

<table style="width:700px">
    <thead>
        <th style="width:50%">Team</th>
        <th style="width:30%">Total Energy</th>
        <th style="width:20%">Total Score</th>
    </thead>
    <tbody>
    {% assign data_ = data | where:"probNum",problemNum %}
    {% for row in data_ limit:5 %}
        <tr>
            <td style="text-align:left"><pre>{{ pubidToName[row["publicID"]] }}</pre></td>
            <td style="text-align:right"><pre>{{ row["energy"] }}</pre></td>
            <td style="text-align:right"><pre>{{ row["score"] }}</pre></td>
        </tr>
    {% endfor %}
    </tbody>
</table>

{% endfor %}

****

## By Team

{% assign publicIDs = data | map: "publicID" | uniq | sort %}

{% for publicID in publicIDs %}[Team&nbsp;{{pubidToName[publicID]}}](#team-{{publicID}})&emsp;&emsp;{% endfor %}

{% for publicID in publicIDs %}

<h3 id="team-{{publicID}}">Team {{pubidToName[publicID]}}</h3>

<table style="width:560px">
    <thead>
        <th style="width:37.5%">Problem</th>
        <th style="width:37.5%">Team Energy</th>
        <th style="width:25%">Team Score</th>
    </thead>
    <tbody>
    {% assign data_ = data | where:"publicID",publicID %}
    {% for row in data_ %}
        <tr>
            <td style="text-align:left"><pre>{{ row["probNum"] }}</pre></td>
            <td style="text-align:right"><pre>{{ row["energy"] }}</pre></td>
            <td style="text-align:right"><pre>{{ row["score"] }}</pre></td>
        </tr>
    {% endfor %}
    </tbody>
</table>

{% endfor %}
