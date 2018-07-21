---
title: ""
---

<div id="glcanvas_container" style="position: relative; width: 480px; height: 480px; margin-bottom: 30px;">
  <canvas id="glcanvas" />
</div>

# Links

* Lightning Division (ends [Saturday 21 July 2018 16:00 UTC](https://www.timeanddate.com/worldclock/fixedtime.html?msg=ICFP+Programming+Contest+2018+%28end+of+lightning+division%29&iso=20180721T16))
  * [Live Standings](/lgtn/live-standings.html)
  * [Task Description](/lgtn/task-description.html) &ensp; \| &ensp; [`problemsL.zip`](/assets/problemsL.zip) &ensp; \| &ensp; [`dfltTracesL.zip`](/assets/dfltTracesL.zip)
  * [View Model](/view-model.html) &ensp; \| &ensp; [Check Trace](/lgtn/chk-trace.html) &ensp; \| &ensp; [Exec Trace](/lgtn/exec-trace.html) &ensp; \| &ensp; [Exec Trace (no visualizer)](/lgtn/exec-trace-novis.html)
* [Register](/register.html) &ensp; \| &ensp; [Profile](/profile.html) &ensp; \| &ensp; [Submit](/submit.html) &ensp; \| &ensp; [Submission Acks](/submission-acks.html)
* [FAQ](./FAQ.html) &ensp; \| &ensp; [Rules](./rules.html) &ensp; \| &ensp; [Acknowlegements](/acknowledgements.html)

# News

* 2018-07-21T03:20Z: [Submission acknowledgments](/submission-acks.html) and [live standings](/lgtn/live-standings.html) should be updating once every 15 minutes.
* 2018-07-20T20:20Z: Initial [submission acknowledgments](/submission-acks.html) and [live standings](/lgtn/live-standings.html) for the Lightning Division have been posted.
* 2018-07-20T16:00Z: The ICFP Programming Contest 2018 has started!  The Lightning Division [Task Description](/lgtn/task-description.html) has been posted.
* 2018-07-18: There is an unofficial [ICFPC Meeting Point](https://icfpc-meeting-point.github.io/) app for finding teams and contestants by location, [announced](https://twitter.com/sannysanoff/status/1019618988949692416) on Twitter.
* 2018-07-13: Posted [FAQ](./FAQ.html) and [Rules](./rules.html).

# Contest Announcement

The ICFP Programming Contest 2018 is the 21st instance of the annual programming
contest series sponsored by the [ACM SIGPLAN International Conference on
Functional Programming](https://www.icfpconference.org).

The contest will start at
[Friday 20 July 2018 16:00 UTC](https://www.timeanddate.com/worldclock/fixedtime.html?msg=ICFP+Programming+Contest+2018&iso=20180720T16).
The 24hr lightning division will end at
[Saturday 21 July 2018 16:00 UTC](https://www.timeanddate.com/worldclock/fixedtime.html?msg=ICFP+Programming+Contest+2018+%28end+of+lightning+division%29&iso=20180721T16)
and the 72hr full contest will end at
[Monday 23 July 2018 16:00 UTC](https://www.timeanddate.com/worldclock/fixedtime.html?msg=ICFP+Programming+Contest+2018+%28end+of+full+contest%29&iso=20180723T16).

The task description will be published on this website when the contest starts.
Details of the submission procedure will be announced along with the contest
task.

This is an open contest.  Anyone may participate except for the contest
organizers and members of their research groups.  No advance registration or
entry fee is required.  Contestants are free to organize themselves into teams
of any size.

Any programming language(s) on any platform(s) may be used.

There will be cash prizes for the first and second place teams, the team winning
the lightning division, and a discretionary judges' prize. The winners will be
announced at [ICFP 2018](https://icfp18.sigplan.org) (St. Louis, Missouri,
United States; Monday 24 -- Wednesday 26 September 2018).

In addition, the organizers will declare during the conference that:
* the first place team's language is "the programming language of choice for discriminating hackers",
* the second place team's language is "a fine tool for many applications",
* the winning lightning division team's language is "very suitable for rapid prototyping", and
* the team winning the judges' prize is "an extremely cool bunch of hackers".

## Contest Organizers

The ICFP Programming Contest 2018 is organized by [Matthew Fluet](https://www.cs.rit.edu/~mtf) and colleagues at the [Rochester Institute of Technology](https://www.rit.edu).



<script>
var vis = null;
</script>
<script src="{{ '/assets/js/three.min.js' | relative_url }}"></script>
<script src="{{ '/assets/js/Detector.js' | relative_url }}"></script>
<script src="{{ '/assets/js/stats.min.js' | relative_url }}"></script>
<script src="{{ '/assets/js/visualizer.js' | relative_url }}"></script>
<script>
(function () {
  if (! Detector.webgl) {
    const glcanvasContainer = document.getElementById('glcanvas_container');
    const glcanvas = document.getElementById('glcanvas');
    glcanvasContainer.removeChild(glcanvas);
    var demoScreenshot = document.createElement("IMG");
    demoScreenshot.src="{{ '/assets/images/demo.png' | relative_url }}";
    glcanvasContainer.appendChild(demoScreenshot);
  } else {
    vis = initVisualizer({stats: false, screenshot: false, controls: false});
  }
})();
</script>
<script src="{{ '/assets/js/demo.js' | relative_url }}"></script>
