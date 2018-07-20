[Register](/register.html) a contest team to obtain a team-specific private
identifier.

Prepare a single `.zip` file with exactly the generated trace files for the
lightning division or full contest (depending on the current phase of the
contest).  The `.zip` file may optionally be encrypted (`zip --encrypt` (Unix);
7-Zip `Encryption method: ZipCrypto` (Windows)) with the team-specific private
identifier (if a team is concerned about posting submissions to a publicly
accessible location during the contest).  Compute the SHA256 checksum (`shasum
-a 256` (Unix); 7-Zip `File -> CRC -> SHA-256` (Windows); `certutil -hashfile
submission.zip SHA256` (Windows;
[info](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/certutil#BKMK_hashfile));
`GetFile-Hash submission.zip -Algorithm SHA256` (Windows;
[info](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-filehash?view=powershell-6)))
of the `.zip` file.  Make the `.zip` file available at a publicly accessible
URL.  Submit the URL and SHA256 checksum of the `.zip` file before the end of
the current phase of the contest.
