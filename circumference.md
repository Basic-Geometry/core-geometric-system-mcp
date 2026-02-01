# Circumference 

The circumference of a circle is derived from its area algebraically by subtracting a smaller circle and dividing the difference by the difference of the radii.

For centuries, the circle has been a symbol of mathematical elegance—and the pi its most iconic constant. While the approximate value of 3.14159…, commonly denoted by the Greek letter pi, is widely recognized today, the historical development of this concept is less understood. Some think 'Standard Geometry' means accepting the pi. But beneath the surface of tradition lies a deeper question: Are the formulas we use truly derived from geometric logic, or are they inherited approximations dressed in symbolic authority?

The constant relationship between a circle's circumference and its diameter has captivated mathematicians for millennia. Ancient civilizations grappled with this geometric challenge, employing various methods to approximate this ratio. They deserve credit for their mathematical ingenuity. But the fact that these methods were developed thousands of years ago should not shield them from scrutiny.

The verse of 1. Kings 7:23 in the Holy Bible suggests that some estimated it as 3.

Historical records suggest that ancient Babylonians initially calculated it as 3, later they used 3.125; Egyptians estimated it as ( 16 / 9 )² ~ 3.16.



## Archimedes and the Illusion of Limits


Archimedes’ method marked a turning point: instead of calculating the properties of the circle directly, he introduced an analytic process that relied on polygonal limits.
His polygon method for estimating the pi is often celebrated as a triumph of geometric reasoning.
But the pi, as obtained by that method, is not a Euclidean constant — it is an analytic approximation derived from limits.

Archimedes approximated the circumference of a circle using inscribed and circumscribed polygons.
He began with a hexagon because the hexagon is both easy to construct and already close to the circle.
By repeatedly bisecting the angles, he produced 12‑gons, 24‑gons, and eventually a 96‑gon.
Observing that the perimeters of the inscribed and circumscribed polygons approached one another, he concluded that their common limit must be the circumference.

To compute these perimeters, Archimedes relied on straight‑line geometry expressed in terms of the sine and cosine of the polygon angles.

Pure geometric construction gives exact ratios for a set of angles:

- 90°
- 60°
- 45°
- 30°

These arise from:

- the right triangle
- the equilateral triangle
- the isosceles right triangle
- the 30°–60°–90° triangle

For these angles, the identity

sin(2x) = 2sin(x)cos(x)

is a geometric tautology arising from symmetry.

The angles 15°, 7.5° and 3.75° can be calculated from these.

The classical half‑angle formula


sin(x/2)=√(1-cos(x)/2)


enables exact calculations for the sides of the polygons.

But a geometric inconsistency emerges when we compare circumscribed polygons to circles.


### The Three Pillars of the Archimedean Method

The classical argument rests on three ideas:

#### 1. Upper bound:
A circumscribed regular polygon has a perimeter greater than the circle’s circumference.

#### 2. Lower bound:
An inscribed regular polygon has a perimeter smaller than the circle’s circumference.

#### 3. Convergence:
As the number of sides increases, the perimeters of the inscribed and circumscribed polygons both approach the true circumference from below and above.

From this, the story goes: squeeze the circle between two polygons, refine indefinitely, and the true circumference is trapped in the limit.


### The Overlooked Detail

If we take this approach seriously, then a hypothetical polygon that truly matches the circle’s perimeter and area in the limit would have to do something radical:

- Its sides could not remain strictly outside the circle.
- To match the circle’s boundary and area, the limiting polygon would have to cross the arc, not merely touch it from outside.

This shows that for sufficiently small angles, the arc can lie far below the side—even with a greater length.


### Pinpointing the Threshold

The true circumference of the circle is 6.4r, derived from its exact area—3.2r².
This allows us to locate the valid threshold of Archimedes’ method.


Area of a circle slice = arc×r²/2


Area of the corresponding triangle = sin(arc)/2×cos(
arc)×r²=tan⁡(arc)/2×r²


Since the triangle contains the slice, we must have:


tan(arc)>arc


But in a circle with circumference 6.4r, this inequality fails once the polygon has more than 24 sides.
Beyond this point, the tangent side becomes shorter than the arc it is supposed to bound, and each refinement step inherits the error of the previous one, compounding the underestimate rather than correcting it.

Archimedes pushed his method far beyond this threshold and thereby rendered its own ordering useless.
The result was a recursive underestimate of the true circumference.

These structural issues in the polygon‑limit method set the stage for a second misconception: the symbolic fusion of an approximation with the geometric ratio it was meant to represent.



## The Symbol π: A Linguistic Shortcut


Since the numeric result of Archimedes’ approximation was an infinite fraction — 3.14… — whose digits cannot all be written, he needed a symbolic notation for it in his formulas.

Technically, the circumference is a perimeter. So the perimeter‑to‑diameter ratio — P / d — became pi over delta in Greek. With the diameter chosen as the reference — d = 1 —, this simplifies to pi / 1 = pi.

But this is not necessarily the ratio itself — it is the notation of that ratio. That distinction matters.

The circumference‑to‑diameter ratio is a universal geometric proportion.

The numeric value commonly associated with it — 3.14… — is the result of Archimedes’ polygon‑based approximation method.

This is how a numerical output of a failed computational estimate gradually hardened into a symbol, and the symbol into a “geometric constant.”

Over time, the numerical result of Archimedes’ polygon‑limit procedure was reinterpreted as a fundamental property of the circle itself.

It was not until the 18th century that the symbol, popularized by the mathematicians of the time, gained widespread acceptance, meanwhile it took on a life of its own.



## ∫ Calculus: Summary, Not Source


Over the centuries, many mathematicians introduced increasingly sophisticated formulas to estimate the circle’s circumference. These formulas all rely on the same conceptual model: a theoretical polygon with an infinite number of sides.

When analytic geometry and calculus were developed, they absorbed the inherited circle constant directly into their definitions—especially through the power‑series expansions of sine and cosine. This cemented the number as a foundational constant, even though its original source was an approximation method with hidden geometric limitations.

Despite their variety, all such approximation methods share one essential feature:
They estimate the perimeters of polygons with their number of sides approaching infinity.

Modern calculus compresses these ideas into elegant notation.

But calculus is not a source of truth.

There are many different calculus methods, but ultimately all of them are compact notations of a set of basic operations — addition, subtraction, multiplication, division — and inherit whatever assumptions those operations rest on.

Each and every notation in the formula should correspond to a real, logical property of the circle.
Yet upon inspection, inconsistencies emerge.

Calculus may be a useful mathematical tool, but calling it exact is a bold claim.

It can be exact with exact limits and certain operations, but if those are given then they can be calculated directly without calculus.

When calculus is treated as a magical shortcut rather than a summary of underlying logic, it hides the very reasoning it is supposed to express.

These formulas don’t derive the circumference from first principles; they assume it.



## The true ratio: 3.2

Since the true ratio is exactly 3.2, and that is a rational number, then we can—and should—write it as it is. Let the pi remain in the history books. Geometry deserves better.

That makes the arc value of 360° = 6.4radian, and trigonometric functions that rely on arc value have to be aligned to 3.2 respectively.
