---
title: "Task Description (Full)"
layout: wide
---

# {{page.title}}

Thank you for purchasing a Deluxe Nanobot Matter Manipulation System (NMMS).
Enclosed you will find one matter subspace pad and one fission/fusion-capable
nanobot.
Simply position an optional source object on the matter space pad, load an
appropriate trace, place the nanobot at the origin of the pad, power on the
system, and watch the nanobot begin construction, deconstruction, or
reconstruction.

In comparison to the Standard Nanobot Matter Manipulation System, the Deluxe
Nanobot Matter Manipulation System:

* Supports destroying matter in addition to creating matter; thus, your Deluxe
  Nanobot Matter Manipulation System can be used to construct target objects,
  destruct source objects, and reconstruct a source object into a target object.
* Has three new nanobot commands: _**Void**_, _**GFill**_, and _**GVoid**_
  * The _**Void**_ command allows a nanobot to destroy matter in a voxel.
  * The _**GFill**_ and _**GVoid**_ commands allow a group of nanobots to create
    or destroy matter in a region.
* Initializes the nanobot with 39 seeds.

As an early adopter, please understand the shortage of freely available nanobot
traces.
Although your Deluxe Nanobot Matter Manipulation System ships with default
nanobot traces for constructing, destructing, and reconstructing target models,
they are extremely energy inefficient.
We hope that you will enjoy generating your own nanobot traces and will
contribute energy efficient ones back to the community.

## Synopsis

Generate nanobot traces to construct, deconstruct, and reconstruct target 3D
objects while minimizing energy used.

****

# Nanobot Matter Manipulation System Overview

<div class="fig-left" markdown="1">
![Build-a-Tron 4000](/assets/images/buildatron4000.png)
The initial nanobot is affectionately known as the Build-a-Tron&nbsp;4000.
</div>
The Nanobot Matter Manipulation System is a breakthrough technology that enables
a new form of 3D printing.
The matter subspace pad utilizes advances in subspace physics to facilitate the
light-weight conversion of energy to matter and vice versa.
During execution, the pad generates a (global) resonant subspace field that
establishes a matrix of voxels in which matter can be created and destroyed.
The field holds matter at its fixed position in the matrix; under low harmonics,
all matter must be part of a connected component that rests on the floor
("grounded"), while, under high harmonics, matter is unconstrained ("floating").
For precision construction, nanobots are used to focus the resonant subspace
field during energy-matter conversion, either creating matter within a voxel or
destroying matter within a voxel.
Nanobots are able to move through empty voxels of the matrix; utilizing a local
high-harmonics resonant subspace field, a nanobot's position is unconstrained
("floating").
Nanobots are able to undergo fission (to fork off another nanobot) and fusion
(to join with another nanobot).

Construction always begins and ends with a single nanobot at the origin of the
matter subspace pad and proceeds in discrete time steps.
Each time step, the pad generates a synchronous time-step signal that
coordinates the actions of the nanobots.
In response to the time-step signal, each active nanobot performs a single
command.
Commands include moving, swaping harmonics, creating and destroying matter, and
undergoing fission and fusion.
All commands take effect simultaneously at the end of the time step.
In general, it is an error if the commands of different nanobots interfere or
have conflicting updates to the state of the system.

Each time step that the matter subspace pad is active has an energy cost, which
depends on the volume of the space in which the resonant subspace field is being
generated and the global harmonics.
Similarly, each time step that a nanobot is active has an energy cost that
depends on the command being performed.

****

# Details

## Coordinate System

The (global) resonant subspace field of the matter subspace pad establishes a
cubical matrix (Cartesian grid) in finite three-dimensional Euclidean space,
where each voxel of the matrix corresponds to a cubical volume of space.  With
respect to an observer, the x-axis extends from left to right, the y-axis
extends from bottom to top, and the z-axis extends from near to far.

### Resolutions

A **resolution** _R_ specifies the number of voxels of the matrix along the x-,
y-, and z-axes, where _R_ is an integer and satisfies _0 &lt; R &le; 250_.

### Coordinates

A **coordinate** _c_ specifies a particular voxel of the matrix and is written
_(x, y, z)_, where _x_, _y_, and _z_ are non-negative integers.  For a matrix
with resolution _R_, coordinate _(0, 0, 0)_ corresponds to the left, bottom,
near voxel of the matrix and coordinate _(R - 1, R - 1, R - 1)_ corresponds to
the right, top, far voxel of the matrix.

### Coordinate Differences

A **coordinate difference** _d_ specifies the relative position of one
coordinate to another and is written _<dx, dy, dz>_, where _dx_, _dy_, and _dz_
are (positive or negative) integers.  Adding distance _d = <dx, dy, dz>_ to
coordinate _c = (x, y, z)_, written _c + d_, yields the coordinate _(x + dx, y +
dy, z + dz)_.

The **Manhattan length** (or _L<sub>1</sub>_ norm) of a coordinate difference _d
= <dx, dy, dz>_ is written _mlen(d)_ and defined as _|dx| + |dy| + |dz|_ (the
sum of the absolute values of _dx_, _dy_, and _dz_).  The Manhattan length of a
coordinate difference is always a non-negative integer.

Coordinates _c_ and _c&prime;_ are **adjacent** if there exists a coordinate
difference _d_ such that _c&prime; = c + d_ and _mlen(d) = 1_.  More
intuitively, coordinates are adjacent if they differ in exactly one component by
exactly _1_.

The **Chessboard length** (or Chebyshev distance or _L<sub>∞</sub>_ norm) of a
coordinate difference _d = <dx, dy, dz>_ is written _clen(d)_ and defined as
_max(|dx|, |dy|, |dz|)_ (the maximum of the absolute values of _dx_, _dy_, and
_dz_).  The Chessboard length of a coordinate difference is always a
non-negative integer.

#### Linear Coordinate Differences

A coordinate difference _d = <dx, dy, dz>_ is a **linear coordinate difference**
(notated _ld_) if _dx &ne; 0 &and; dy = 0 &and; dz = 0_ or _dx = 0 &and; dy &ne;
0 &and; dz = 0_ or _dx = 0 &and; dy = 0 &and; dz &ne; 0_.  That is, a coordinate
difference is a linear coordinate difference if exactly one component is
non-zero.  (For a linear coordinate difference, the Manhattan length is always
equal to the Chessboard length and is always greater than zero.)

A linear coordinate difference _ld_ is a **short linear coordinate difference**
(notated _sld_) if _mlen(ld) &le; 5_.  There are exactly _30_ short linear
coordinate differences.

A linear coordinate difference _ld_ is a **long linear coordinate difference**
(notated _lld_) if _mlen(ld) &le; 15_.  There are exactly _90_ long linear
coordinate differences.

#### Near Coordinate Differences

A coordinate difference _d_ is a **near coordinate difference** (notated _nd_)
if _0 &lt; mlen(d) &le; 2_ and _clen(d) = 1_.  That is, a coordinate difference
is a near coordinate difference if at least one and at most two components have
the value _-1_ or _1_ and the other components have the value _0_.  There are
exactly _18_ near coordinate differences.

#### Far Coordinate Differences

A coordinate difference _d_ is a **far coordinate difference** (notated _fd_) if
_0 &lt; clen(d) &le; 30_.  That is, a coordinate difference is a far coordinate
difference if all components have values between _-30_ and _30_ and at least one
component is non-zero.  There are exactly _226980_ far coordinate differences.

#### Regions

A **region** _r_ specifies opposing corners of a rectangular cuboid and is
written _[c<sub>1</sub>, c<sub>2</sub>]_.  A coordinate _c = (x, y, z)_ is a
member of a region _r = [c<sub>1</sub>,c<sub>2</sub>]_, where _c<sub>1</sub> =
(x<sub>1</sub>, y<sub>1</sub>, z<sub>1</sub>)_ and _c<sub>2</sub> =
(x<sub>2</sub>, y<sub>2</sub>, z<sub>2</sub>)_, if
_min(x<sub>1</sub>,x<sub>2</sub>) &le; x &le; max(x<sub>1</sub>,x<sub>2</sub>)_,
_min(y<sub>1</sub>,y<sub>2</sub>) &le; y &le; max(y<sub>1</sub>,y<sub>2</sub>)_,
and _min(z<sub>1</sub>,z<sub>2</sub>) &le; z &le;
max(z<sub>1</sub>,z<sub>2</sub>)_.

Two regions are considered equal if they have the same set of coordinates as
members; equivalently, two regions are considered equal if they describe the
same rectangular cuboid.

The **dimension** of a region _r = [(x<sub>1</sub>, y<sub>1</sub>,
z<sub>1</sub>), (x<sub>2</sub>, y<sub>2</sub>, z<sub>2</sub>)]_ is written
_dim(r)_ and is defined as _(x<sub>1</sub> = x<sub>2</sub> ? 0 : 1) +
(y<sub>1</sub> = y<sub>2</sub> ? 0 : 1) + (z<sub>1</sub> = z<sub>2</sub> ? 0 :
1)_.  That is, the dimension of a region counts the number of components that
differ.  A region with dimension 0 is a "point"; a region with dimension 1 is a
"line"; a region with dimension 2 is a "plane"; and a region with dimension 3 is
a "box".

## Matrix

A **matrix** _M_ has an implicit resolution _R_ and specifies the state of each
voxel as either **_Full_** (containing matter) or **_Void_** (containing no
matter).  A matrix _M_ can be considered a function from coordinates valid with
respect to the resolution _R_ to either _Full_ or _Void_.

### Grounded

A _Full_ coordinate _c = (x, y, z)_ of a matrix _M_ is **grounded** if either _y
= 0_ or there exists an adjacent _Full_ coordinate _c&prime; = c + d_ (where
_mlen(d) = 1_) that is itself grounded.  (Alternatively, a _Full_ coordinate _c_
is grounded if there is a (possibly empty) sequence of adjacent _Full_
coordinates that starts with the coordinate _c_ and ends with a _Full_
coordinate _c&prime; = (x&prime;, 0, z&prime;)_.)

## System State and Execution

### State

The state _S_ of an executing Nanobot Matter Manipulation System is comprised of:

 <!-- * _time_: the number of time steps executed (a non-negative integer) -->
 <!-- * _commands_: the number of commands executed (a non-negative integer) -->
 * _energy_: the amount of energy expended (an integer)
 * _harmonics_: the (global) field harmonics (either _Low_ or _High_)
 * _matrix_: the matrix of voxels (each voxel either _Full_ or _Empty_)
 * _bots_: the set of active nanobots
 * _trace_: the sequence of commands to be performed by nanobots

The state of an active nanobot _bot_ is comprised of:

 * _bid_: the (unique) identifier (a positive integer)
 * _pos_: the position (a coordinate)
 * _seeds_: the finite set of identifiers available for fission

Furthermore, a system state is **well-formed** if it satisfies the following
properties:

 * If the harmonics is _Low_, then all _Full_ voxels of the matrix are grounded.
 * Each active nanobot has a different identifier.
 * The position of each active nanobot is distinct and is _Void_ in the matrix.
 * The seeds of each active nanobot are disjoint.
 * The seeds of each active nanobot does not include the identifier of any active nanobot.

### Execution

Each time step that there are active nanobots, commands are taken from the trace
and assigned to nanobots and the system state is updated in response to the
commands performed by each nanobot.

In general, it is an error if the commands of different nanobots **interfere**.
Examples of interference include:
two nanobots moving through the same coordinate;
one nanobot creating matter at a coordinate and another nanobot destroying
matter at the same coordinate;
one nanobot fissioning a nanobot at a coordinate and another nanobot waiting in
the same coordinate.
More specifically, the commands of one nanobot group _bots<sub>1</sub>_
interferes with the commands of another nanobot group _bots<sub>2</sub>_ if the
volatile coordinates of the commands of _bots<sub>1</sub>_ include any of the
volatile coordinates of the commands of _bots<sub>2</sub>_.
The **volatile coordinates** of a nanobot group are those coordinates occupied
by nanobots of the group and being "used" by the commands of the group during
the time step.

At the beginning of a time step, it is an error if the system state is not
well-formed.

The commands to be performed by the active nanobots are taken from the trace.
Let _S.bots = {bot<sub>1</sub>, bot<sub>2</sub>, ..., bot<sub>n</sub>}_, where
_bot<sub>1</sub>.bid &lt; bot<sub>2</sub>.bid &lt; ... &lt;
bot<sub>n</sub>.bid_.  (In other words, the _n_ active nanobots are sorted by
identifier.)  Let _S.trace = cmd<sub>1</sub> cmd<sub>2</sub> ... cmd<sub>n</sub>
..._.  (It is an error if _S.trace_ contains less than _n_ commands.)  Each
nanobot _bot<sub>i</sub>_ is assigned the command _cmd<sub>i</sub>_ and nanobot
command groups are formed.  Command pre-conditions that would lead to an error
are checked with respect to the starting state matrix (before any updates to the
state matrix).  Interference between the volatile coordinates of nanobot command
groups that would lead to an error are checked.

Assuming no errors, then the system state is be updated:

 * There is an energy cost each time step to maintain the (global) resonant
 subspace field:

 > if (_S.harmonics == High_)  
 > &emsp; _S.energy := S.energy + 30 * R * R * R_  
 > else // (_S.harmonics == Low_)  
 > &emsp; _S.energy := S.energy + 3 * R * R * R_  
 > endif  
 
 * There is an energy cost each time step for each active nanobot to maintain
 its (local) resonant subspace field:

 > _S.energy := S.energy + 20 * n_  

 * The effects of each nanobot command group on the state energy, matrix, and
 active bots are applied to the system state.  Because none of the nanobot
 command groups interfere, the order in which the effects of each nanobot
 command group are applied does not matter.

 * The performed commands are removed from the trace:

 > _S.trace := drop(S.trace, n)_  

 <!-- * The state command count is incremented: -->

 <!-- > _S.commands := S.commands + n_ -->

 <!-- * The state time is incremented: -->

 <!-- > _S.time := S.time + 1_ -->

## Nanobot Commands

### Singleton Nanobot Commands

Most commands are performed by a single nanobot in isolation.  In the following
descriptions, assume that the command is being performed by nanobot _bot_ and
let _c = bot.pos_.  Note that _c_ (the current position of the nanobot) is
always a volatile coordinate, because there would be interference if the command
of any other nanobot were to "use" the current position of the nanobot.

 * _**Halt**_:

   It is an error if _c &ne; (0, 0, 0)_ or if _S.bots &ne; { bot }_ or if
   _S.harmonics &ne; Low_.

   The volatile coordinate of this command is the coordinate _c_.

   The effect of this command is:

   > _S.bots := { }_  

   (The nanobot _bot_ is removed from the set of active bots and the system
   halts.  Note that the pre-condition _S.bots == { bot }_ ensures that this was
   the only nanobot remaining in the system.)

 * _**Wait**_:

   The volatile coordinate of this command is the coordinate _c_.

   This command has no effect on the system state.

 * _**Flip**_:

   The volatile coordinate of this command is the coordinate _c_.

   The effect of this command is:

   > if (_S.harmonics == High_)  
   > &emsp; _S.harmonics := Low_  
   > else // (_S.harmonics == Low_)  
   > &emsp; _S.harmonics := High_  
   > endif  

 * _**SMove** lld_ (Straight Move):

   (_lld_ is a long linear coordinate difference.)

   Let _c&prime; = c + lld_.

   It is an error if _c&prime;_ is not a valid coordinate with respect to the
   resolution of the matrix.  It is an error if any coordinate in the region
   _[c,c&prime;]_ is _Full_ in the matrix.

   The volatile coordinates of this command are all coordinates in the region
   _[c,c&prime;]_.

   The effect of this command is:

   > _bot.pos := c&prime;_  
   > _S.energy := S.energy + 2 * mlen(lld)_  

   (The nanobot's position is updated and there is an energy cost proportional
   the Manhattan length of the move.)

 * _**LMove** sld1 sld2_ (L Move):

   (_sld1_ and _sld2_ are short linear coordinate differences.)

   Let _c&prime; = c + sld1_ and _c&Prime; = c&prime; + sld2_.

   It is an error if _c&prime;_ or _c&Prime;_ is not a valid coordinate with
   respect to the resolution of the matrix.  It is an error if any coordinate in
   the region _[c,c&prime;]_ or in the region _[c&prime;,c&Prime;]_ is _Full_ in
   the matrix.

   The volatile coordinates of this command are all coordinates in the regions
   _[c,c&prime;]_ and _[c&prime;,c&Prime;]_.

   The effect of this command is:

   > _bot.pos := c&Prime;_  
   > _S.energy := S.energy + 2 * (mlen(sld<sub>1</sub>) + 2 + mlen(sld<sub>2</sub>))_  

   (The nanobot's position is updated and there is an energy cost proportional
   the Manhattan length of the move and a small "turning" cost.)

 * _**Fission** nd m_:

   (_nd_ is a near coordinate difference and _m_ is a non-negative integer.)

   It is an error if _bid.seeds = { }_.

   Let _{bid<sub>1</sub>, bid<sub>2</sub>, ..., bid<sub>n</sub>} = bid.seeds_
   (where _bid<sub>1</sub> &lt; bid<sub>2</sub> &lt; ... &lt; bid<sub>n</sub>_).

   Let _c&prime; = c + nd_.

   It is an error if _c&prime;_ is not a valid coordinate with respect to the
   resolution of the matrix.  It is an error if coordinate _c&prime;_ is _Full_
   in the matrix.  It is an error if _n &lt; m + 1_.

   The volatile coordinates of this command are the coordinates _c_ and _c&prime;_.

   The effect of this command is:

   > _bot.seeds := {bid<sub>m+2</sub>, ..., bid<sub>n</sub>}_  
   > _bot&prime;.bid := bid<sub>1</sub>_  
   > _bot&prime;.pos := c&prime;_  
   > _bot&prime;.seeds := {bid<sub>2</sub>, ..., bid<sub>m+1</sub>}_  
   > _S.bots := union(S.bots, { bot&prime; })_  
   > _S.energy := S.energy + 24_  

   (The lowest _m + 1_ identifiers are removed from the parent bot's seeds.  A
   new child bot _bot&prime;_ is added to the set of active bots.  The lowest of
   the removed identifers becomes the identifier of the child bot and the
   remaining _m_ of the removed identifiers become the seeds of the child bot.
   Energy is expended during the creation of the child bot.)

 * _**Fill** nd_:

   (_nd_ is a near coordinate difference.)

   Let _c&prime; = c + nd_.

   It is an error if _c&prime;_ is not a valid coordinate with respect to the
   resolution of the matrix.

   The volatile coordinates of this command are the coordinates _c_ and
   _c&prime;_.

   The effect of this command is:

   > if (_S.matrix(c&prime;) == Void_)  
   > &emsp; _S.matrix(c&prime;) := Full_  
   > &emsp; _S.energy := S.energy + 12_  
   > else // (_S.matrix(c&prime;) == Full_)  
   > &emsp; _S.energy := S.energy + 6_  
   > endif  

   (If the voxel had no matter, then energy is converted to matter (a positive
   energy cost).  If the voxel had matter, then energy is lost (a positive
   energy cost).)

 * _**Void** nd_:

   (_nd_ is a near coordinate difference.)

   Let _c&prime; = c + nd_.

   It is an error if _c&prime;_ is not a valid coordinate with respect to the
   resolution of the matrix.

   The volatile coordinates of this command are the coordinates _c_ and _c&prime;_.

   The effect of this command is:

   > if (_S.matrix(c&prime;) == Full_)  
   > &emsp; _S.matrix(c&prime;) := Void_  
   > &emsp; _S.energy := S.energy - 12_  
   > else // (_S.matrix(c&prime;) == Void_)  
   > &emsp; _S.energy := S.energy + 3_  
   > endif  

   (If the voxel had matter, then the matter is converted to energy (a negative
   energy cost).  If the voxel had no matter, then energy is lost (a positive
   energy cost).)

### Group Nanobot Commands

Some nanobot commands are performed through the coordinated action of a group of
two or more nanobots.  It is an error if a group is missing one or more
partners.

 * _**FusionP** nd_ (Fusion Primary), _**FusionS** nd_ (Fusion Secondary):

   (_nd_ is a near coordinate difference.)

   There are two nanobots _bot<sub>p</sub>_ and _bot<sub>s</sub>_ such that
   _bot<sub>p</sub>_ is performing _**FusionP** nd<sub>p</sub>_ and
   _bot<sub>s</sub>_ is performing _**FusionS** nd<sub>s</sub>_, where
   _bot<sub>p</sub>.pos + nd<sub>p</sub> = bot<sub>s</sub>.pos_ and
   _bot<sub>s</sub>.pos + nd<sub>s</sub> = bot<sub>p</sub>.pos_.  (The primary
   nanobot identifies the secondary nanobot's position and the secondary nanobot
   identifies the primary nanobot's position.)

   It is an error if either coordinate _bot<sub>p</sub>.pos + nd<sub>p</sub>_ or
   coordinate _bot<sub>s</sub>.pos + nd<sub>s</sub>_ is not a valid coordinate
   with respect to the resolution of the matrix.

   The volatile coordinates of this command group are the coordinates
   _bot<sub>p</sub>.pos_ and _bot<sub>s</sub>.pos_.

   The effect of this command group is:

   > _S.bots := diff(S.bots, { bot<sub>s</sub> })_  
   > _bot<sub>p</sub>.seeds := union(bot<sub>p</sub>.seeds, { bot<sub>s</sub>.bid }, bot<sub>s</sub>.seeds)_  
   > _S.energy := S.energy - 24_  

   (The secondary nanobot is removed from the set of active nanobots.  The
   secondary nanobot's identifier and the secondary nanobot's seeds are added to
   the primary nanobot's seeds.  Energy is regained during the destruction of
   the secondary bot.)

 * _**GFill** nd fd_ (Group Fill):

   (_nd_ is a near coordinate difference and _fd_ is a far coordinate difference.)

   Let _r_ be a region and let _n = 2<sup>dim(r)</sup>_.

   There are _n_ nanobots _bot<sub>1</sub>_, ..., _bot<sub>n</sub>_ such that
   each _bot<sub>i</sub>_ is performing _**GFill** nd<sub>i</sub>
   fd<sub>i</sub>_, where _r = [bot<sub>i</sub>.pos + nd<sub>i</sub>,
   bot<sub>i</sub>.pos + nd<sub>i</sub> + fd<sub>i</sub>]_.  (Recall that two
   regions are considered equal if they have the same set of coordinates as
   members; equivalently, if they describe the same rectangular cuboid.)

   It is an error if any coordinate _bot<sub>i</sub>.pos + nd<sub>i</sub>_ or
   coordinate _bot<sub>i</sub>.pos + nd<sub>i</sub> + fd<sub>i</sub>_ is not a
   valid coordinate with respect to the resolution of the matrix.  It is also an
   error if _bot<sub>i</sub>.pos + nd<sub>i</sub> = bot<sub>j</sub>.pos +
   nd<sub>j</sub>_ (for _i &ne; j_).  It is also an error if any coordinate
   _bot<sub>i</sub>.pos_ is a member of region _r_.

   Intuitively, the group of nanobots identify a region, with a distinct nanobot
   at each corner. Two nanobots can fill a "line"; four nanobots can fill a
   "plane"; and eight nanobots can fill a "box".

   The volatile coordinates of this command are the coordinates
   _bot<sub>1</sub>.pos_, ..., _bot<sub>n</sub>.pos_ and all coordinates of the
   region _r_.

   The effect of this command group is:

   > for (_c&prime;_ in _r_)  
   > &emsp; if (_S.matrix(c&prime;) == Void_)  
   > &emsp; &emsp; _S.matrix(c&prime;) := Full_  
   > &emsp; &emsp; _S.energy := S.energy + 12_  
   > &emsp; else // (_S.matrix(c&prime;) == Full_)  
   > &emsp; &emsp; _S.energy := S.energy + 6_  
   > &emsp; endif  
   > endfor  

   (If a voxel in the region had no matter, then energy is converted to matter
   (a positive energy cost).  If a voxel in the region had matter, then energy
   is lost (a positive energy cost).)

 * _**GVoid** nd fd_ (Group Void):

   (_nd_ is a near coordinate difference and _fd_ is a far coordinate difference.)

   Let _r_ be a region and let _n = 2<sup>dim(r)</sup>_.

   There are _n_ nanobots _bot<sub>1</sub>_, ..., _bot<sub>n</sub>_ such that
   each _bot<sub>i</sub>_ is performing _**GVoid** nd<sub>i</sub>
   fd<sub>i</sub>_, where _r = [bot<sub>i</sub>.pos + nd<sub>i</sub>,
   bot<sub>i</sub>.pos + nd<sub>i</sub> + fd<sub>i</sub>]_.  (Recall that two
   regions are considered equal if they have the same set of coordinates as
   members; equivalently, if they describe the same rectangular cuboid.)

   It is an error if any coordinate _bot<sub>i</sub>.pos + nd<sub>i</sub>_ or
   coordinate _bot<sub>i</sub>.pos + nd<sub>i</sub> + fd<sub>i</sub>_ is not a
   valid coordinate with respect to the resolution of the matrix.  It is also an
   error if _bot<sub>i</sub>.pos + nd<sub>i</sub> = bot<sub>j</sub>.pos +
   nd<sub>j</sub>_ (for _i &ne; j_).  It is also an error if any coordinate
   _bot<sub>i</sub>.pos_ is a member of region _r_.

   Intuitively, the group of nanobots identify a region, with a distinct nanobot
   at each corner. Two nanobots can void a "line"; four nanobots can void a
   "plane"; and eight nanobots can void a "box".

   The volatile coordinates of this command are the coordinates
   _bot<sub>1</sub>.pos_, ..., _bot<sub>n</sub>.pos_ and all coordinates of the
   region _r_.

   > for (_c&prime;_ in _r_)  
   > &emsp; if (_S.matrix(c&prime;) == Full_)  
   > &emsp; &emsp; _S.matrix(c&prime;) := Void_  
   > &emsp; &emsp; _S.energy := S.energy - 12_  
   > &emsp; else // (_S.matrix(c&prime;) == Void_)  
   > &emsp; &emsp; _S.energy := S.energy + 3_  
   > &emsp; endif  
   > endfor  

   (If the voxel in the region had matter, then the matter is converted to
   energy (a negative energy cost).  If the voxel in the region had no matter,
   then energy is lost (a positive energy cost).)

## Traces

A **trace** _T_ specifies the commands performed by each nanobot during an
execution.  A trace is simply a sequence of commands, implicitly ordered first
by time step and then by nanobot identifier.

When executing a time step with _n_ active nanobots, the _n_ commands are taken
from the trace and assigned to the active nanobots in identifier order (the
first command is assigned to the nanobot with smallest identifier, the second
command is assigned to the nanobot with the second smallest identifier, ..., the
last command is assigned to the nanobot with the largest identifier).

### Trace Files

A trace file is a binary encoding of a trace.

By convention, a trace file has the extension `.nbt`.

A trace file is simply a sequence of encoded commands, where each command is
encoded as one, two, or four bytes.

In the following _[b<sub>n</sub>...b<sub>2</sub>b<sub>1</sub>]<sup>n</sup>_
represents an _n_-bit value, where _b<sub>1</sub>_ is the least-significant bit
and _b<sub>n</sub>_ is the most-significant bit and
_[...&laquo;x&raquo;<sup>m</sup>...]<sup>n</sup>_ represents the embedding of an
_m_-bit value within a larger _n_-bit value.

#### Encoding Coordinate Differences

The different types of coordinate differences that appear in commands have
distinct encodings.

##### Encoding Linear Coordinate Differences

A short linear coordinate difference _sld = <dx, dy, dz>_ is encoded as a 2-bit
axis _a_ and a 4-bit (unsigned) integer _i_ as follows:

 * if _dx &ne; 0_, then _a = [01]<sup>2</sup>_ and _i = dx + 5_
 * if _dy &ne; 0_, then _a = [10]<sup>2</sup>_ and _i = dy + 5_
 * if _dz &ne; 0_, then _a = [11]<sup>2</sup>_ and _i = dz + 5_

Recall that exactly one component of a short linear coordinate difference is
non-zero and a short linear coordinate difference has Manhattan length greater
than zero and less than or equal to 5.

A long linear coordinate difference _lld = <dx, dy, dz>_ is encoded as a 2-bit
axis _a_ and a 5-bit (unsigned) integer _i_ as follows:

 * if _dx &ne; 0_, then _a = [01]<sup>2</sup>_ and _i = dx + 15_
 * if _dy &ne; 0_, then _a = [10]<sup>2</sup>_ and _i = dy + 15_
 * if _dz &ne; 0_, then _a = [11]<sup>2</sup>_ and _i = dz + 15_

Recall that exactly one component of a long linear coordinate difference is
non-zero and a long linear coordinate difference has Manhattan length greater
than zero and less than or equal to 15.

##### Encoding Near Coordinate Differences

A near coordinate difference _nd = <dx, dy, dz>_ is encoded as a 5-bit
(unsigned) integer with the value _(dx + 1) * 9 + (dy + 1) * 3 + (dz + 1)_.
Recall that each component of a near coordinate difference must have the value
_-1_, _0_, or _1_, but not all combinations are legal.  In particular, _<1, 1,
1>_ is not a near coordinate difference; hence the 5-bit value
_[11111]<sup>5</sup> = 31_ is not the encoding of any near coordinate
difference.

##### Encoding Far Coordinate Differences

A far coordinate difference _fd = <dx, dy, dz>_ is encoded as a sequence of
three 8-bit (unsigned) integers with the values _dx + 30_, _dy + 30_, and _dz +
30_.  Recall that at least one component of a far coordinate difference is
non-zero and each component of a far coordinate difference has a value between
_-30_ and _30_.

#### Encoding Commands

Each command is encoded by one, two, or four bytes as follows:

 * _**Halt**_:

   > _[11111111]<sup>8</sup>_

 * _**Wait**_:

   > _[11111110]<sup>8</sup>_

 * _**Flip**_:

   > _[11111101]<sup>8</sup>_

 * _**SMove** lld_:

   > _[00&laquo;lld.a&raquo;<sup>2</sup>0100]<sup>8</sup> [000&laquo;lld.i&raquo;<sup>5</sup>]<sup>8</sup>_
   
   For example, _**SMove** <12,0,0>_ is encoded as _[00010100] [00011011]_
   and _**SMove** <0,0,-4>_ is encoded as _[00110100] [00001011]_.

 * _**LMove** sld1 sld2_:

   > _[&laquo;sld2.a&raquo;<sup>2</sup>&laquo;sld1.a&raquo;<sup>2</sup>1100]<sup>8</sup> [&laquo;sld2.i&raquo;<sup>4</sup>&laquo;sld1.i&raquo;<sup>4</sup>]<sup>8</sup>_

   For example, _**LMove** <3,0,0> <0,-5,0>_ is encoded as _[10011100] [00001000]_
   and _**LMove** <0,-2,0> <0,0,2>_ is encoded as _[11101100] [01110011]_.

 * _**FusionP** nd_:

   > _[&laquo;nd&raquo;<sup>5</sup>111]<sup>8</sup>_

   For example, _**FusionP** <-1,1,0>_ is encoded as _[00111111]_.

 * _**FusionS** nd_:

   > _[&laquo;nd&raquo;<sup>5</sup>110]<sup>8</sup>_

   For example, _**FusionS** <1,-1,0>_ is encoded as _[10011110]_.

 * _**Fission** nd m_:

   > _[&laquo;nd&raquo;<sup>5</sup>101]<sup>8</sup> [&laquo;m&raquo;<sup>8</sup>]<sup>8</sup>_
   
   The non-negative integer _m_ is encoded as an 8-bit (unsigned) integer with the value _m_.

   For example, _**Fission** <0,0,1> 5_ is encoded as _[01110101] [00000101]_.

 * _**Fill** nd_:

   > _[&laquo;nd&raquo;<sup>5</sup>011]<sup>8</sup>_

   For example, _**Fill** <0,-1,0>_ is encoded as _[01010011]_.

 * _**Void** nd_:

   > _[&laquo;nd&raquo;<sup>5</sup>010]<sup>8</sup>_

   For example, _**Void** <1,0,1>_ is encoded as _[10111010]_.

 * _**GFill** nd fd_:

   > _[&laquo;nd&raquo;<sup>5</sup>001]<sup>8</sup> [&laquo;fd.dx&raquo;<sup>8</sup>]<sup>8</sup> [&laquo;fd.dy&raquo;<sup>8</sup>]<sup>8</sup> [&laquo;fd.dz&raquo;<sup>8</sup>]<sup>8</sup>_

   For example, _**GFill** <0,-1,0> <10,-15,20>_ is encoded as _[01010001] [00101000] [00001111] [00110010]_.

 * _**GVoid** nd fd_:

   > _[&laquo;nd&raquo;<sup>5</sup>000]<sup>8</sup> [&laquo;fd.dx&raquo;<sup>8</sup>]<sup>8</sup> [&laquo;fd.dy&raquo;<sup>8</sup>]<sup>8</sup> [&laquo;fd.dz&raquo;<sup>8</sup>]<sup>8</sup>_

   For example, _**GVoid** <1,0,0> <5,5,-5>_ is encoded as _[10110000] [00100011] [00100011] [00011001]_.

## Models

A **model** _Mdl_ specifies a 3D object.  A model is comprised of the resolution
_R_ of a matrix (which is large enough to contain the object) and the set of
_Full_ coordinates of the matrix that make up the object.

A model is **well-formed** if

 * All coordinates of the set of _Full_ coordinates must not belong to the
   reserved left-, right-, top-, near-, or far-face regions of the space.  That
   is, all _Full_ coordinates _(x, y, z)_ satisfy _1 &le; x &le; R - 2_ and _0
   &le; y &le; R - 2_ and _1 &le; z &le; R - 2_.
 * All coordinates of the set of _Full_ coordinates must be **grounded**.  That
   is, all _Full_ coordinates _c = (x, y, z)_ satisfy either _y = 0_ or there
   exists an adjacent _Full_ coordinate _c&prime; = c + d_ (where _mlen(d) = 1_)
   that is grounded.

### Model Files

A model file is binary encoding of a model.  (Note that this binary encoding
handles both ill-formed and well-formed models.)

By convention, a model file has the extension `.mdl`.

The first byte of the model file encodes the resolution _R_, interpreting the
byte as an 8-bit (unsigned) integer.

The remaining _⌈(R × R × R) / 8⌉_ bytes of the model file encode the set of
_Full_ coordinates.  The sequence of bytes are interpreted as a sequence of bits
corresponding to the coordinates of the matrix by traversing the x-dimension
from _0_ to _R - 1_, traversing the y-dimension from _0_ to _R - 1_, and
traversing the z-dimension from _0_ to _R - 1_.  More explicitly, coordinate
_(x, y, z)_ is _Full_ in the model's matrix if and only if bit _x × R × R + y ×
R + z_ is set.  Note that some high-bits of the last byte of the model file may
be unused.

#### Extended Model Files

An extended model file is a binary encoding of a model and a set of nanobot
identifiers and positions.

By convention, a model file has the extension `.xmdl`.

As with a model file, the first byte of the extended model file encodes the
resolution _R_, interpreting the byte as an 8-bit (unsigned) integer, and the
subsequent _⌈(R × R × R) / 8⌉_ bytes of the extended model file encode the set
of _Full_ coordinates.

Subsequent 4-byte sequences encode the identifier _bid_ and position _(x, y, z)_
of nanobots.  The first byte encodes _bid_, the second byte encodes _x_, the
third byte encodes _y_, and the fourth byte encodes _z_, in each case
interpreting the byte as an 8-bit (unsigned) integer.

### Model Viewer

A JavaScript and WebGL-based [model viewer](/view-model.html) is available.

****

# Full Contest

[Saturday 21 July 2018 16:00
UTC](https://www.timeanddate.com/worldclock/fixedtime.html?msg=ICFP+Programming+Contest+2018+%28end+of+lightning+division%29&iso=20180721T16)
to [Monday 23 July 2018 16:00
UTC](https://www.timeanddate.com/worldclock/fixedtime.html?msg=ICFP+Programming+Contest+2018+%28end+of+full+contest%29&iso=20180723T16)

Generate and submit nanobot traces to assemble, disassemble, and reassemble
target 3D models while minimizing energy used.
The initial nanobot (the Build-a-Tron&nbsp;4000) has 39 seeds.

## Problems

Download [`problemsF.zip`](/assets/problemsF.zip), which is a collection of
(well-formed) target model files named <code
class="highlighter-rouge">FA<em>NNN</em>_tgt.mdl</code>, (well-formed) source
model files named <code class="highlighter-rouge">FD<em>NNN</em>_src.mdl</code>,
and (well-formed) source model files and target model files named <code
class="highlighter-rouge">FR<em>NNN</em>_src.mdl</code> and <code
class="highlighter-rouge">FR<em>NNN</em>_tgt.mdl</code>.  For each target model
file <code class="highlighter-rouge">FA<em>NNN</em>_tgt.mdl</code>, generate a
trace file named <code class="highlighter-rouge">FA<em>NNN</em>.nbt</code> that
assembles the target model; for each source model file <code
class="highlighter-rouge">FD<em>NNN</em>_src.mdl</code>, generate a trace file
named <code class="highlighter-rouge">FD<em>NNN</em>.nbt</code> that
disassembles the source model; for each source model file <code
class="highlighter-rouge">FR<em>NNN</em>_src.mdl</code> and target model file
<code class="highlighter-rouge">FR<em>NNN</em>_tgt.mdl</code> (guaranteed to
have equal resolutions), generate a trace file named <code
class="highlighter-rouge">FR<em>NNN</em>.nbt</code> that reassembles from the
source model to the target model.  A `problemsF.txt` file acknowledges the
sources for the problem models.

### Assembly Problems

For each <code class="highlighter-rouge">FA<em>NNN</em>_tgt.mdl</code> and
corresponding <code class="highlighter-rouge">FA<em>NNN</em>.nbt</code>, let
_Mdl<sub>tgt</sub>_ be the target model encoded by <code
class="highlighter-rouge">FA<em>NNN</em>_tgt.mdl</code>, let _R_ be the
resolution of _Mdl<sub>tgt</sub>_, and let _trace_ be the trace encoded by <code
class="highlighter-rouge">FA<em>NNN</em>.nbt</code>.  The trace is correct for
this problem if, when executed from the initial system state _S<sub>init</sub>_
where

 <!-- * _S<sub>init</sub>.time := 0_ -->
 <!-- * _S<sub>init</sub>.commands := 0_ -->
 * _S<sub>init</sub>.energy := 0_
 * _S<sub>init</sub>.harmonics := Low_
 * _S<sub>init</sub>.matrix(c) := Void_ &emsp;&emsp; for all coordinates _c_ valid with respect to the resolution _R_
 * _S<sub>init</sub>.bots := { bot<sub>init</sub> }_
   * _bot<sub>init</sub>.bid := 1_
   * _bot<sub>init</sub>.pos := (0, 0, 0)_
   * _bot<sub>init</sub>.seeds := { 2, ..., 40 }_
 * _S<sub>init</sub>.trace := trace_

there are no decoding or execution errors and the final state _S<sub>fini</sub>_
satisfies

 * _S<sub>fini</sub>.harmonics == Low_
 * _S<sub>fini</sub>.matrix(c) == Mdl<sub>tgt</sub>(c)_  &emsp;&emsp; for all coordinates _c_ valid with respect to the resolution _R_
 * _S<sub>fini</sub>.bots == { }_
 * _S<sub>fini</sub>.trace == &epsilon;_

The final energy of the trace is _S<sub>fini</sub>.energy_.

### Disassembly Problems

For each <code class="highlighter-rouge">FD<em>NNN</em>_src.mdl</code> and
corresponding <code class="highlighter-rouge">FD<em>NNN</em>.nbt</code>, let
_Mdl<sub>src</sub>_ be the source model encoded by <code
class="highlighter-rouge">FD<em>NNN</em>_src.mdl</code>, let _R_ be the
resolution of _Mdl<sub>src</sub>_, and let _trace_ be the trace encoded by <code
class="highlighter-rouge">FD<em>NNN</em>.nbt</code>.  The trace is correct for
this problem if, when executed from the initial system state _S<sub>init</sub>_
where

 <!-- * _S<sub>init</sub>.time := 0_ -->
 <!-- * _S<sub>init</sub>.commands := 0_ -->
 * _S<sub>init</sub>.energy := 0_
 * _S<sub>init</sub>.harmonics := Low_
 * _S<sub>init</sub>.matrix(c) := Mdl<sub>src</sub>(c)_ &emsp;&emsp; for all coordinates _c_ valid with respect to the resolution _R_
 * _S<sub>init</sub>.bots := { bot<sub>init</sub> }_
   * _bot<sub>init</sub>.bid := 1_
   * _bot<sub>init</sub>.pos := (0, 0, 0)_
   * _bot<sub>init</sub>.seeds := { 2, ..., 40 }_
 * _S<sub>init</sub>.trace := trace_

there are no decoding or execution errors and the final state _S<sub>fini</sub>_
satisfies

 * _S<sub>fini</sub>.harmonics == Low_
 * _S<sub>fini</sub>.matrix(c) == Void_  &emsp;&emsp; for all coordinates _c_ valid with respect to the resolution _R_
 * _S<sub>fini</sub>.bots == { }_
 * _S<sub>fini</sub>.trace == &epsilon;_

The final energy of the trace is _S<sub>fini</sub>.energy_.

### Reassembly Problems

For each <code class="highlighter-rouge">FR<em>NNN</em>_src.mdl</code> and <code
class="highlighter-rouge">FR<em>NNN</em>_tgt.mdl</code> and corresponding <code
class="highlighter-rouge">FR<em>NNN</em>.nbt</code>, let _Mdl<sub>src</sub>_ be
the source model encoded by <code
class="highlighter-rouge">FD<em>NNN</em>_src.mdl</code>, _Mdl<sub>tgt</sub>_ be
the target model encoded by <code
class="highlighter-rouge">FD<em>NNN</em>_tgt.mdl</code>, let _R_ be the
resolution of _Mdl<sub>src</sub>_ and _Mdl<sub>tgt</sub>_ (guaranteed to be
equal), and let _trace_ be the trace encoded by <code
class="highlighter-rouge">FR<em>NNN</em>.nbt</code>.  The trace is correct for
this problem if, when executed from the initial system state _S<sub>init</sub>_
where

 <!-- * _S<sub>init</sub>.time := 0_ -->
 <!-- * _S<sub>init</sub>.commands := 0_ -->
 * _S<sub>init</sub>.energy := 0_
 * _S<sub>init</sub>.harmonics := Low_
 * _S<sub>init</sub>.matrix(c) := Mdl<sub>src</sub>(c)_ &emsp;&emsp; for all coordinates _c_ valid with respect to the resolution _R_
 * _S<sub>init</sub>.bots := { bot<sub>init</sub> }_
   * _bot<sub>init</sub>.bid := 1_
   * _bot<sub>init</sub>.pos := (0, 0, 0)_
   * _bot<sub>init</sub>.seeds := { 2, ..., 40 }_
 * _S<sub>init</sub>.trace := trace_

there are no decoding or execution errors and the final state _S<sub>fini</sub>_
satisfies

 * _S<sub>fini</sub>.harmonics == Low_
 * _S<sub>fini</sub>.matrix(c) == Mdl<sub>tgt</sub>(c)_  &emsp;&emsp; for all coordinates _c_ valid with respect to the resolution _R_
 * _S<sub>fini</sub>.bots == { }_
 * _S<sub>fini</sub>.trace == &epsilon;_

The final energy of the trace is _S<sub>fini</sub>.energy_.

## Default Traces

A provided [`dfltTracesF.zip`](/assets/dfltTracesF.zip) is a collection of default
traces.  These default traces establish an upper-bound energy for each problem,
used for scoring.

Each default trace for an assembly problem applies the same uniform strategy (a
"classic" 3D printing): compute a bounding box for the target model, set
harmonics to _High_, use a single "head" nanobot to sweep each xz-plane of the
bounding box from bottom to top and filling the voxel below the nanobot as
dictated by the target model, return to the origin, set harmonics to _Low_, and
halt.

Each default trace for a disassembly problem applies the same uniform strategy
(the inverse of the "classic" 3D printing): compute a bounding box for the
source model, set harmonics to _High_, use a single "head" nanobot to sweep each
xz-plane of the bounding box from top to bottom and voiding the voxel below the
nanobot as dictated by the source model, return to the origin, set harmonics to
_Low_, and halt.

Each default trace for a reassembly problem applies the same uniform strategy:
compute a bounding box for the union of the source and target models, set
harmonics to _High_, use a single "head" nanobot to sweep each xz-plane of the
bounding box from top to bottom and void _Full_ voxels of the source model when
moving into a voxel and fill _Full_ voxels of the target model when moving out
of a voxel, return to the origin, set harmonics to _Low_, and halt.

## Scoring

A team's score for each problem depends upon the final energy of their submitted
trace, the final energy of the corresponding default trace, and the minimum
energy among all teams' corresponding submitted traces, and the resolution of
the problem.

Let _energy<sub>team</sub>_ be the final energy of the team's submitted trace,
_energy<sub>dflt</sub>_ be the final energy of the corresponding default trace,
_energy<sub>best</sub>_ be the minimum energy among all teams' corresponding
submitted traces and the value _energy<sub>dflt</sub> - 1_, and _R_ be the
resolution of the problem.  (If a submitted trace has decoding or execution
errors or final energy that exceeds that of the corresponding default trace,
then treat it as having final energy equal to that of the corresponding default
trace.  This ensures that it is always the case that _energy<sub>best</sub> &le;
energy<sub>team</sub> &le; energy<sub>dflt</sub>_ and _energy<sub>best</sub>
&lt; energy<sub>dflt</sub>_.)  The team's score for the problem is

> _⌊(⌊log<sub>2</sub> R⌋ × 1000 × (energy<sub>dflt</sub> - energy<sub>team</sub>)) / (energy<sub>dflt</sub> - energy<sub>best</sub>)⌋_

(Intuitively, a team's score is linearly interpolated from _0_ (if the submitted
trace is no better than the default) to _⌊log<sub>2</sub> R⌋ × 1000_ (if the
submitted trace is the best).  The _⌊log<sub>2</sub> R⌋_ term gives more weight
to larger problems and the flooring allows scores to be calculated with
(arbitrary-precision) integers.)

A team's contest score is the sum of their scores for all problems.

The contest winner is the team with the highest score.

## Trace Checker

A JavaScript [trace checker](/full/chk-trace.html) is available, which can be
used to verify that a trace file successfully decodes to a sequence of commands
and to display a prefix and suffix of the full trace.

## Trace Executor

A JavaScript and WebGL-based [trace executor](/full/exec-trace.html) is
available for testing submissions.  A (marginally) faster JavaScript-based
[trace executor without visualization](/fulln/exec-trace-novis.html) is also
available for testing submissions.

## Registration and Submission

[Register](/register.html) a contest team to obtain a team-specific private
identifier (a 32-digit hexadecimal string).

After generating correct traces, prepare a single `.zip` file containing exactly
(no more than and no less than) the files <code
class="highlighter-rouge">FA<em>NNN</em>.nbt</code>, <code
class="highlighter-rouge">FD<em>NNN</em>.nbt</code>, and <code
class="highlighter-rouge">FR<em>NNN</em>.nbt</code>; the provided
[`dfltTracesF.zip`](/assets/dfltTracesF.zip) demonstrates the submission format.
The `.zip` file may optionally be encrypted (`zip --encrypt`) with the
team-specific private identifier (if a team is concerned about posting
submissions to a publicly accessible location during the contest).  Make the
`.zip` file available at a publicly accessible URL (a personal or institutional
web server, Dropbox, Google Drive, etc.).  [Submit](/submit.html) the URL and
SHA256 checksum of the `.zip` file before the [end of the full
contest](https://www.timeanddate.com/worldclock/fixedtime.html?msg=ICFP+Programming+Contest+2018+%28end+of+full+contest%29&iso=20180723T16)
and watch for a [submission acknowledgement](/submission-acks.html).
Note that submissions for the full contest open at
[2018-07-21T18:00:00Z](https://www.timeanddate.com/worldclock/fixedtime.html?msg=ICFP+Programming+Contest+2018+%28full+contest+submissions+open%29&iso=20180721T18)
(two hours into the full contest).

Teams may submit multiple times during the contest (using either a new or the
same URL, but different SHA256 checksum), but teams are limited to one
submission every 15 minutes; early submissions may be evaluated during the
contest for live standings, but only the last submissions for the full contest
will be considered for prizes.  The last submissions for the full contest should
remain available for up to two weeks after the end of the contest.

To be considered for prizes, [within two hours of end of the
contest](https://www.timeanddate.com/worldclock/fixedtime.html?msg=ICFP+Programming+Contest+2018+%28source+code+submission+deadline%29&iso=20180723T18),
teams must update their [profile](/profile.html) with complete team information
and submit the URL and SHA256 checksum of a single `.zip` archive with their
source code, a `README.txt` file (brief directions for judges to build/run the
solution; description of the solution approach; feedback about the contest;
self-nomination for judges' prize; etc.), and any other supporting materials.

<!--
LocalWords:  voxel voxels
 -->
