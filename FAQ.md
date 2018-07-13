---
title: "Frequently Asked Questions"
layout: default
---

# {{page.title}}

## 2018-07-13

* Q: How can teams stay informed of updates during the contest?
* A: The contest website is the authoritative source of contest information.
  Noteworthy updates will be added to the [News section of the
  homepage](./index.html#news), tweeted from
  [@icfpcontest2018](https://twitter.com/icfpcontest2018), and chatted on the
  [`#icfp-contest` IRC channel on
  Freenode.net](irc://irc.freenode.net/icfp-contest).  In truly extraordinary
  circumstances, the contest organizers may e-mail teams at their registered
  e-mail addresses.

* Q: How can teams contact the contest organizers during the contest?
* A: General questions and clarifications about the contest task description may
  be raised as [GitHub
  issues](https://github.com/icfpcontest2018/icfpcontest2018.github.io/issues);
  please check if the question/clarification has already been raised among all
  (open and closed) [GitHub
  issues](https://github.com/icfpcontest2018/icfpcontest2018.github.io/issues?q=is%3Aissue).
  Team specific concerns (or general questions and clarifications from those
  without a GitHub account) may be sent to <icfpcontest2018@gmail.com>.  The
  contest organizers will also monitor tweets
  [@icfpcontest2018](https://twitter.com/icfpcontest2018) and the
  [`#icfp-contest` IRC channel on
  Freenode.net](irc://irc.freenode.net/icfp-contest), but with a lower priority.

* Q: Will teams be required to submit executables during or after the contest?
* A: No.

* Q: Will teams be required to submit source code during or after the contest?
* A: Yes.  All teams wishing to be considered for prizes must submit source code
  at the end of the contest.  Teams will be asked to submit the URL and SHA256
  checksum of single `.zip` archive with their source code, a `README.txt` file,
  and any other supporting materials.  Teams may use any hosting platform that
  is publicly accessible (a personal or institutional web server, Dropbox,
  Google Drive, etc.).  The source code should remain available for up to two
  weeks after the end of the contest.

* Q: What will teams be required to submit during the contest?
* A: The exact details of contest submissions will be announced at the start of
  the contest.  However, as with source code, teams will be asked to submit the
  URL and SHA256 checksum of single `.zip` archive with their lightning division
  and full contest submissions.  Teams may use any hosting platform that is
  publicly accessible (a personal or institutional web server, Dropbox, Google
  Drive, etc.).  Teams may submit multiple times during the contest (using
  either a new or the same URL, but different SHA256 checksum); early
  submissions may be evaluated during the contest for live standings, but only
  the last submissions for the lightning division and the full contest will be
  considered for prizes.  The last submissions for the lightning division and
  the full contest should remain available for up to two weeks after the end of
  the contest.  Teams may optionally encrypt their submissions with a team
  specific private identifier, if they are concerned about posting submissions
  to a publicly accessible location during the contest.

* Q: How should teams encrypt their `.zip` archives?
* A: `zip --encrypt` (Unix); 7-Zip `Encryption method: ZipCrypto` (Windows)

* Q: How should teams compute SHA256 checksums of their `.zip` archives?
* A: `shasum -a 256` (Unix); 7-Zip `File -> CRC -> SHA-256` (Windows); `certutil -hashfile submission.zip SHA256` (Windows; [info](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/certutil#BKMK_hashfile)); `GetFile-Hash submission.zip -Algorithm SHA256` (Windows; [info](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-filehash?view=powershell-6))
