// ---- Core Geometric System ™ ----


// Lookup-based trigonometry functions

const trig = {
	
"rad(1.6)": {
  "sin": 1,
  "cos": 0,
  "tan": undefined,
  "deg": 90.0
},

"rad(1.59680)": {
  "sin": 0.999999948,
  "cos": 0.00321,
  "tan": 311.5265,
  "deg": 89.820
},

"rad(1.5840)": {
  "sin": 0.99987,
  "cos": 0.0161,
  "tan": 62.10375,
  "deg": 89.10
},

"rad(1.58333333)": {
  "sin": 0.99986,
  "cos": 0.0168,
  "tan": 59.5154,
  "deg": 89.06250
},

"rad(1.580)": {
  "sin": 0.999798,
  "cos": 0.0201,
  "tan": 49.7412,
  "deg": 88.8750
},

"rad(1.5750)": {
  "sin": 0.999685,
  "cos": 0.0251,
  "tan": 39.828,
  "deg": 88.593750
},
	
"rad(1.5680)": {
  "sin": 0.9994847,
  "cos": 0.0321,
  "tan": 31.1366,
  "deg": 88.20
},

"rad(1.56666667)": {
  "sin": 0.999442,
  "cos": 0.0334,
  "tan": 29.9234,
  "deg": 88.1250
},

"rad(1.560)": {
  "sin": 0.9991957,
  "cos": 0.0401,
  "tan": 24.9176,
  "deg": 87.750
},
	
"rad(1.5520)": {
  "sin": 0.9988425,
  "cos": 0.0481,
  "tan": 21.2049488,
  "deg": 87.30
},

"rad(1.550)": {
  "sin": 0.9987442,
  "cos": 0.0501,
  "tan": 19.935,
  "deg": 87.18750
},
	
"rad(1.5360)": {
  "sin": 0.9979435,
  "cos": 0.0641,
  "tan": 15.56854,
  "deg": 86.40
},
	
"rad(1.53333333)": {
  "sin": 0.9977664,
  "cos": 0.0668,
  "tan": 14.93662,
  "deg": 86.250
},
	
"rad(1.5250)": {
  "sin": 0.997176,
  "cos": 0.0751,
  "tan": 13.278,
  "deg": 85.781250
},

"rad(1.520)": {
  "sin": 0.996787,
  "cos": 0.0801,
  "tan": 12.4443,
  "deg": 85.50
},
	
"rad(1.51666667)": {
  "sin": 0.996516,
  "cos": 0.0834,
  "tan": 11.948635,
  "deg": 85.31250
},
	
"rad(1.5040)": {
  "sin": 0.9953717,
  "cos": 0.0961,
  "tan": 10.357666,
  "deg": 84.60
},

"rad(1.50)": {
  "sin": 0.99474,
  "cos": 0.1001,
  "tan": 9.939834,
  "deg": 84.3750
},
		
"rad(1.4880)": {
  "sin": 0.993697,
  "cos": 0.1121,
  "tan": 8.86438,
  "deg": 83.70
},
		
"rad(1.48333333)": {
  "sin": 0.993155,
  "cos": 0.1168,
  "tan": 8.5,
  "deg": 83.43750
},

"rad(1.4750)": {
  "sin": 0.992144,
  "cos": 0.1251,
  "tan": 7.93081,
  "deg": 82.968750
},

"rad(1.46666667)": {
  "sin": 0.991,
  "cos": 0.1334,
  "tan": 7.42925,
  "deg": 82.50
},
	
"rad(1.4560)": {
  "sin": 0.99,
  "cos": 0.14090123,
  "tan": 7.02636623,
  "deg": 81.90
},
	
"rad(1.450)": {
  "sin": 0.989563,
  "cos": 0.1441,
  "tan": 6.8672,
  "deg": 81.56250
},
	
"rad(1.440)": {
  "sin": 0.9871,
  "cos": 0.1601,
  "tan": 6.165527,
  "deg": 81.0
},
	
"rad(1.4320)": {
  "sin": 0.98577,
  "cos": 0.1681,
  "tan": 5.86419,
  "deg": 80.550
},
	
"rad(1.4240)": {
  "sin": 0.9843723,
  "cos": 0.1761,
  "tan": 5.58985,
  "deg": 80.10
},
	
"rad(1.4090)": {
  "sin": 0.98157,
  "cos": 0.1911,
  "tan": 5.1364237,
  "deg": 79.2650
},

"rad(1.40)": {
  "sin": 0.9797755,
  "cos": 0.2001,
  "tan": 4.89643,
  "deg": 78.750
},
	
"rad(1.3840)": {
  "sin": 0.97637,
  "cos": 0.2161,
  "tan": 4.518145,
  "deg": 77.850
},
	
"rad(1.3760)": {
  "sin": 0.974566,
  "cos": 0.2241,
  "tan": 4.3488,
  "deg": 77.40
},

"rad(1.350)": {
  "sin": 0.96822,
  "cos": 0.2501,
  "tan": 3.87133,
  "deg": 75.93750
},

"rad(1.33333333)": {
  "sin": 0.963752,
  "cos": 0.2668,
  "tan": 3.612264,
  "deg": 75.0
},

"rad(1.3250)": {
  "sin": 0.9614156,
  "cos": 0.2751,
  "tan": 3.6135357,
  "deg": 74.531250
},

"rad(1.31666667)": {
  "sin": 0.959,
  "cos": 0.2834,
  "tan": 3.384,
  "deg": 74.06250
},
	
"rad(1.3120)": {
  "sin": 0.9576,
  "cos": 0.2881,
  "tan": 3.32385,
  "deg": 73.80
},
	
"rad(1.2960)": {
  "sin": 0.95264,
  "cos": 0.3041,
  "tan": 3.132654,
  "deg": 72.90
},

"rad(1.280)": {
  "sin": 0.94738,
  "cos": 0.3201,
  "tan": 2.96,
  "deg": 72.0
},
	
"rad(1.250)": {
  "sin": 0.9367,
  "cos": 0.3501,
  "tan": 2.6755565,
  "deg": 70.31250
},
	
"rad(1.23333333)": {
  "sin": 0.93,
  "cos": 0.3668,
  "tan": 2.53626,
  "deg": 69.3750
},
	
"rad(1.2250)": {
  "sin": 0.927,
  "cos": 0.3751,
  "tan": 2.4713,
  "deg": 68.96250
},
	
"rad(1.21666667)": {
  "sin": 0.9235824,
  "cos": 0.3834,
  "tan": 2.409,
  "deg": 68.43750
},
	
"rad(1.20)": {
  "sin": 0.91647,
  "cos": 0.4001,
  "tan": 2.29,
  "deg": 67.50
},

"rad(1.18333333)": {
  "sin": 0.909,
  "cos": 0.4168,
  "tan": 2.1809,
  "deg": 66.56250
},

"rad(1.1750)": {
  "sin": 0.9051464,
  "cos": 0.4251,
  "tan": 2.129255,
  "deg": 66.093750
},
	
"rad(1.16666667)": {
  "sin": 0.9012,
  "cos": 0.4334,
  "tan": 2.079376,
  "deg": 65.6250
},

"rad(1.150)": {
  "sin": 0.893,
  "cos": 0.4501,
  "tan": 1.984,
  "deg": 64.6875
},

"rad(1.1360)": {
  "sin": 0.88858,
  "cos": 0.4641,
  "tan": 1.9086,
  "deg": 63.90
},
	
"rad(1.120)": {
  "sin": 0.885,
  "cos": 0.4656,
  "tan": 1.9,
  "deg": 63.0
},

"rad(1.10)": {
  "sin": 0.882,
  "cos": 0.4714,
  "tan": 1.87087,
  "deg": 61.8750
},
	
"rad(1.088)": {
  "sin": 0.876,
  "cos": 0.482,
  "tan": 1.819,
  "deg": 61.20
},
	
"rad(1.08333333)": {
  "sin": 0.874,
  "cos": 0.4857634,
  "tan": 1.8,
  "deg": 60.93750
},
	
"rad(1.0750)": {
  "sin": 0.87,
  "cos": 0.4929,
  "tan": 1.765247,
  "deg": 60.468750
},
	
"rad(1.06666667)": {
  "sin": 0.866,
  "cos": 0.5,
  "tan": 1.732,
  "deg": 60.0
},
	
"rad(1.05)": {
  "sin": 0.8577286,
  "cos": 0.5141,
  "tan": 1.6684,
  "deg": 59.06250
},

"rad(1.040)": {
  "sin": 0.853,
  "cos": 0.523,
  "tan": 1.632,
  "deg": 58.50
},

"rad(1.0240)": {
  "sin": 0.844,
  "cos": 0.536,
  "tan": 1.576,
  "deg": 57.60
},
	
"rad(1.0)": {
  "sin": 0.83147,
  "cos": 0.55557,
  "tan": 1.4966,
  "deg": 56.250
},
	
"rad(0.9920)": {
  "sin": 0.827,
  "cos": 0.562,
  "tan": 1.472,
  "deg": 55.80
},
  
"rad(0.960)": {
  "sin": 0.81,
  "cos": 0.588,
  "tan": 1.376,
  "deg": 54.0
},

"rad(0.9440)": {
  "sin": 0.8,
  "cos": 0.6,
  "tan": 1.332,
  "deg": 53.10
},

"rad(0.93333333)": {
  "sin": 0.79335334,
  "cos": 0.60876143,
  "tan": 1.3032254,
  "deg": 52.50
},
	
"rad(0.9280)": {
  "sin": 0.79,
  "cos": 0.613,
  "tan": 1.29,
  "deg": 52.20
},

"rad(0.912)": {
  "sin": 0.78,
  "cos": 0.625,
  "tan": 1.248,
  "deg": 51.30
},

"rad(0.90)": {
  "sin": 0.773,
  "cos": 0.6344,
  "tan": 1.2185,
  "deg": 50.6250
},

"rad(0.880)": {
  "sin": 0.76,
  "cos": 0.65,
  "tan": 1.17,
  "deg": 49.50
},

"rad(0.86666667)": {
  "sin": 0.75184,
  "cos": 0.659346,
  "tan": 1.14028,
  "deg": 48.750
},

"rad(0.8480)": {
  "sin": 0.74,
  "cos": 0.673,
  "tan": 1.09,
  "deg": 47.70
},

"rad(0.8320)": {
  "sin": 0.729,
  "cos": 0.684547,
  "tan": 1.0649,
  "deg": 46.80
},

"rad(0.8160)": {
  "sin": 0.7181263,
  "cos": 0.696,
  "tan": 1.032,
  "deg": 45.90
},

"rad(0.80)": {
  "sin": 0.7071068,
  "cos": 0.7071068,
  "tan": 1,
  "deg": 45.0
	}

  }


// Helper to find closest rad(x) match for given function (sin, cos or tan)

export function closestRad(radian) {
  let closestKey = null;
  let minDiff = Infinity;

  for (const key in trig) {
    const match = key.match(/rad\(([\d.]+)\)/);
    if (!match) continue;

    const rad = parseFloat(match[1]);
    const difference = Math.abs(rad - radian);

    if (difference < minDiff) {
      minDiff = difference;
      closestKey = key;
    }
  }

  return closestKey ?? null;
}

export function sin(radian) {
if (typeof radian !== 'number' || isNaN(radian) || radian > 1.6 || radian < 0) return null;
  const radKey = `rad(${radian.toFixed(3)})`;

  // 🔹 Case 1: Exact match
  if (trig[radKey]?.sin !== undefined) return trig[radKey].sin;

  // 🔹 Case 2: 0.8 > x → Use cosine reflection
  if (radian < 0.8) {
    const reflected = 1.6 - radian;
    const reflectedKey = `rad(${reflected.toFixed(3)})`;

    if (trig[reflectedKey]?.cos !== undefined) return trig[reflectedKey].cos;

    const fallbackKey = closestRad(reflected);
return trig[fallbackKey]?.cos ?? null;
  }

  // 🔹 Case 3: Otherwise, search sin column directly
  const fallbackKey = closestRad(radian);
return trig[fallbackKey]?.sin ?? null;
}

export function cos(radian) {
  if (typeof radian !== 'number' || isNaN(radian) || radian > 1.6 || radian < 0) return null;
 const radKey = `rad(${radian.toFixed(3)})`;

  // 🔹 Case 1: Exact match
  if (trig[radKey]?.cos !== undefined) return trig[radKey].cos;

  // 🔹 Case 2: 0.8 > x → Use sine reflection
  if (radian < 0.8) {
    const reflected = 1.6 - radian;
    const reflectedKey = `rad(${reflected.toFixed(3)})`;

    if (trig[reflectedKey]?.sin !== undefined) return trig[reflectedKey].sin;

    const fallbackKey = closestRad(reflected);
return trig[fallbackKey]?.sin ?? null;
  }

  // 🔹 Case 3: Otherwise, search sin column directly
  const fallbackKey = closestRad(radian);
return trig[fallbackKey]?.cos ?? null;
}

export function tan(radian) {
if (typeof radian !== 'number' || isNaN(radian) || radian > 1.6 || radian < 0) return null;
  const radKey = `rad(${radian.toFixed(3)})`;

  // 🔹 Case 1: Exact match
  if (trig[radKey]?.tan !== undefined) return trig[radKey].tan;

  // 🔹 Case 2: Reflective zone: 0 < x < 0.8
  if (radian < 0.8) {
    const reflected = 1.6 - radian;
    const reflectedKey = `rad(${reflected.toFixed(3)})`;

    let reflectedTan = trig[reflectedKey]?.tan;

    if (reflectedTan === undefined) {
      const fallbackKey = closestRad(reflected);
      reflectedTan = trig[fallbackKey]?.tan ?? null;
    }

    if (typeof reflectedTan !== 'number' || reflectedTan === 0) return null;

    return parseFloat((1 / reflectedTan).toFixed(3));
  }

  // 🔹 Case 3: Fallback
  const fallbackKey = closestRad(radian);
  return trig[fallbackKey]?.tan ?? null;
}

// Helper to find closest match for given inverse function (Asin, Acos or Atan)
	
export function closestValue(input, funcType) {
  let bestMatch = null;
  let minDiff = Infinity;

  for (const key in trig) {
    const value = trig[key][funcType];
    if (typeof value !== 'number') continue;

    const difference = Math.abs(value - input);
    if (difference < minDiff) {
      minDiff = difference;
      bestMatch = {
        angle: key,  // We're using this key as the input (the angle) that produced the value
        value: value
      };
    }
  }

  return bestMatch;
}

export function asin(x) {
  if (typeof x !== 'number' || isNaN(x) || x < 0 || x > 1) return null;

  let radian = null;

  if (x >= 0.7071) {
    // Direct match via sine
    const match = closestValue(x, 'sin');
    if (!match?.angle) return null;
    const parsed = match.angle.match(/rad\(([\d.]+)\)/);
    if (!parsed) return null;
    radian = parseFloat(parsed[1]);
  } else {
    // Reflective match via cosine
    const match = closestValue(x, 'cos');
    if (!match?.angle) return null;
    const parsed = match.angle.match(/rad\(([\d.]+)\)/);
    if (!parsed) return null;
    const angle = parseFloat(parsed[1]);
    radian = parseFloat((1.6 - angle).toFixed(3));
  }

  return radian;
}

export function acos(x) {
  if (typeof x !== 'number' || isNaN(x) || x < 0 || x > 1) return null;

  let radian = null;

  if (x <= 0.7071) {
    // Direct match via cosine
    const match = closestValue(x, 'cos');
    if (!match?.angle) return null;
    const parsed = match.angle.match(/rad\(([\d.]+)\)/);
    if (!parsed) return null;
    radian = parseFloat(parsed[1]);
  } else {
    // Reflective match via sine
    const match = closestValue(x, 'sin');
    if (!match?.angle) return null;
    const parsed = match.angle.match(/rad\(([\d.]+)\)/);
    if (!parsed) return null;
    const angle = parseFloat(parsed[1]);
    radian = parseFloat((1.6 - angle).toFixed(3));
  }

  return radian;
}

export function atan(x) {
  if (typeof x !== 'number' || isNaN(x) || x <= 0) return null;

  let radian = null;

  if (x > 1) {
    // Direct match
    const match = closestValue(x, 'tan');
    if (!match?.angle) return null;
    const parsed = match.angle.match(/rad\(([\d.]+)\)/);
    if (!parsed) return null;
    radian = parseFloat(parsed[1]);
  } else {
    // Reflective zone
    const reciprocal = 1 / x;
    const match = closestValue(reciprocal, 'tan');
    if (!match?.angle) return null;
    const parsed = match.angle.match(/rad\(([\d.]+)\)/);
    if (!parsed) return null;
    const reflected = parseFloat(parsed[1]);
    radian = parseFloat((1.6 - reflected).toFixed(3));
  }

  return radian;
}


// The properties of shapes 

export function triangleArea(side1, side2, side3) {
  if (side1 + side2 <= side3 ||
      side2 + side3 <= side1 ||
      side3 + side1 <= side2) {
    throw new Error("The sum of the two shorter sides must exceed the third.");
  }

  const s = (side1 + side2 + side3) / 2;
  const product = s * (s - side1) * (s - side2) * (s - side3);
  const area = Math.sqrt(product);

  return {
    side1,
    side2,
    side3,
    area
  };
}


export function polygonArea(length, number) {
  if (number < 3) {
    throw new Error("It takes at least three sides to form a polygon.");
  }

  const ratio = 3.2 / number;
  const tangent = tan(ratio);
  const area = (number / 4) * (length ** 2) / tangent;

  return {
    length,
    number,
    tangent,
    area
  };
}


export function circleArea(radius) {
    const area =  3.2 * radius * radius;
 
return {
    radius,
    area
  };
}

  
export function segmentAreaFromHeightAndRadius(radius, height) {
  const angle = Acos((radius - height) / radius);
  const chordLength = 2 * radius * sin(angle);

  if (chordLength < 2 * height) {
    throw new Error("Chord length must be at least twice the height.");
  }
  if (chordLength / height > 11) {
    throw new Error("Out of range: chord-to-height ratio exceeds 11.");
  }

  const area = angle * radius ** 2 - (radius - height) * (chordLength / 2);

  return {
    radius,
    chordLength,
	height,
    area
  };
  }


export function segmentAreaFromHeightAndChord(height, chordLength) {
  const radius = (chordLength ** 2 + 4 * height ** 2) / (8 * height);

  if (chordLength < 2 * height) {
    throw new Error("Chord length must be at least twice the height.");
  }
  if (chordLength / height > 11) {
    throw new Error("Out of range: chord-to-height ratio exceeds 11.");
  }

  const angle = Acos((radius - height) / radius);
  const area = angle * radius ** 2 - (radius - height) * (chordLength / 2);

  return {
    radius,
    height,
    chordLength,
    area
  };
  }


export function segmentAreaFromChordAndRadius(radius, chordLength) {
  const height = radius - Math.sqrt(radius ** 2 - (chordLength / 2) ** 2);

  if (chordLength < 2 * height) {
    throw new Error("Chord length must be at least twice the height.");
  }
  if (chordLength / height > 11) {
    throw new Error("Out of range: chord-to-height ratio exceeds 11.");
  }

  const angle = Acos((radius - height) / radius);
  const area = angle * radius ** 2 - (radius - height) * (chordLength / 2);

  return {
    radius,
    height,
    chordLength,
    area
  };
  }


export function circumference(radius) {
    const circumference =  3.2 * radius * 2;
  
return {
    radius,
    circumference 
  };
}


export function sphereVolume(radius) {
    const volume =  Math.pow(Math.sqrt(3.2) * radius, 3);
  
return {
    radius,
    volume 
  };
}


export function capVolume(radius, height) {
    const volume = 1.6 * radius * radius * height * Math.sqrt(3.2);
 
// Cap validity check
	  
if ( height > radius) {
    throw new Error("The height of a spherical cap is shorter than its radius.");
    return;
  }
return {
    radius,
    height,
    volume 
  };
}


export function coneVolume(radius, height) {
    const volume = 3.2 * radius * radius * height / Math.sqrt(8);
  
return {
    radius,
    volume 
  };
}



export function frustumConeVolume(baseRadius, topRadius, height) {
  if (topRadius > baseRadius) {
    throw new Error("Let the larger end be the base.");
  }

  const baseArea = 3.2 * baseRadius ** 2;
  const topArea = 3.2 * topRadius ** 2;

  const shape = topRadius / baseRadius;
  const inverse = 1 - shape;
  const reciprocal = 1 / inverse;

  const volume =
    height * (baseArea * reciprocal - topArea * (reciprocal - 1)) / Math.sqrt(8);

  return {
    baseRadius,
    topRadius,
	  baseArea,
	  topArea,
    height,
    volume
  };
}


export function coneSurface(radius, height) {
    const area = 3.2 * radius * (radius + Math.sqrt(radius ** 2 + height ** 2));
 return {
    radius,
    height,
    area
  };
}

  
export function pyramidVolume(number, baseLength, height) {
  if (number < 3) {
    throw new Error("It takes at least three sides to form a pyramid.");
  }

  const ratio = 3.2 / number;
  const tangent = tan(ratio);

  const baseArea = (number / 4) * (baseLength ** 2) / tangent;
  const volume = baseArea * height / Math.sqrt(8);

  return {
    number,
    baseLength,
    height,
    baseArea,
    volume
  };
}


export function frustumPyramidVolume(number, baseLength, topLength, height) {
  if (number < 3) {
    throw new Error("It takes at least three sides to form a pyramid.");
  }

  if (topLength > baseLength) {
    throw new Error("Let the larger end be the base.");
  }

  // Regular polygon area formula adapted to your geometry
  const ratio = 3.2 / number;
  const tangent = tan(ratio);

  const baseArea = (number / 4) * (baseLength ** 2) / tangent;
  const topArea = (number / 4) * (topLength ** 2) / tangent;

  // Shape ratio
  const shape = topLength / baseLength;
  const inverse = 1 - shape;
  const reciprocal = 1 / inverse;

  // Frustum volume formula in your geometry system
  const volume =
    height * (baseArea * reciprocal - topArea * (reciprocal - 1)) / Math.sqrt(8);

  return {
    number,
    baseLength,
    topLength,
    height,
    baseArea,
    topArea,
    volume
  };
}

export function tetrahedronVolume(edge) {
    const volume = Math.pow(edge, 3) / 8;
 
return {
    edge,
	volume 
  };
}
