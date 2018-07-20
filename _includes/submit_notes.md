## Notes

Teams may use any hosting platform that is publicly accessible (a personal or
institutional web server, Dropbox, Google Drive, etc.).

Teams may submit multiple times during the contest (using either a new or the
same URL, but different SHA256 checksum), but are limited to one submission
every 15 minutes; early submissions may be evaluated during the contest for live
standings, but only the last submissions for the lightning division and full
contest will be considered for prizes.  The last submissions for the lightning
division and full contest should remain available for up to two weeks after the
end of the contest.  (Note: Be sure to use **distinct URLs** for the final
lightning division submission and the final full contest submission.)

During the contest, the contest organizers will periodically attempt to download
and check submissions and report [submission
acknowledgements](/submission-acks.html).  Checking of a submission for
acknowledgement is limited to: downloading success; SHA256 checksum matching
success; zip archive testing success; expected file listing success.  Checking
of a submission for acknowledgement **does not** check that trace files
successfully decode to sequences of commands or that the traces are correct for
the corresponding problems.  (Note: Make sure that the submission available at
the URL **before** submitting the URL and SHA; otherwise, the download may fail
and the submission be rejected.)

Downloading and checking of submissions during and after the contest will be
automated.  Please make sure that submission URL can be downloaded without user
interaction.  If a [submission acknowledgement](/submission-acks.html) shows
failure, then investigate the behavior of the following approximation of the
download-and-check script:

<pre>
curl -L -f -o submission.zip ${submissionURL} && \
echo "${submissionSHA}  submission.zip" | shasum -c && \
unzip -P ${privateID} -qt submission.zip
</pre>

### Google Drive

A special note for contestants using Google Drive.  The "_Get shareable link_"
feature of Google Drive does provide publicly accessible URLs, but the URLs are
meant to be used in a web browser with JavaScript (and not suitable for use as a
submission URL, due to the need for user interaction).  However, it is
straightforward to convert a "_Get shareable link_" URL of the form
`https://drive.google.com/open?id=1d4p8B6BhDOL-bpNlXzc2d0Yij55nPu-a` to a
direct-download link of the form
`https://drive.google.com/uc?id=1d4p8B6BhDOL-bpNlXzc2d0Yij55nPu-a`, which is
suitable for use as a submission URL.
