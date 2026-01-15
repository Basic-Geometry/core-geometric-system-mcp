// server.js

import { createServer } from "@modelcontextprotocol/sdk/server";
import { z } from "zod";

// Import your existing calculator logic.
import { circleArea, 
        circumference,
        segmentAreaFromHeightAndRadius,
        segmentAreaFromHeightAndChord,
        segmentAreaFromChordAndRadius,
        coneSurface, 
        sphereVolume, 
        capVolume,
        coneVolume,
        pyramidVolume,
        frustumPyramidVolume,
        frustumConeVolume,
        tetrahedronVolume } 
  from "./core-geometric-system.mjs";

// Create the MCP server instance
const server = createServer({
  name: "geometry-mcp-server",
  version: "0.1.0"
});

// Register the circle area tool
server.tool(
  "compute_circle_area",
  {
    radius: z.number()
  },
  async ({ radius }) => {
    // Call your existing logic
    const result = circleArea(radius);

    // Return structured output
    return {
      circle_area: result.circleArea
    };
  }
);

// Register the circumference tool
server.tool(
  "compute_circumference",
  {
    radius: z.number()
  },
  async ({ radius }) => {
    // Call your existing logic
    const result = circumference(radius);

    // Return structured output
  return { ...result };
    };
  }
);

//Register the circle segment area tool

// Height + Radius
server.tool(
  "compute_circle_segment_area_from_height_and_parent_circle_radius",
  {
    radius: z.number(),
    height: z.number()
  },
  async ({ radius, height }) => {
    const result = segmentAreaFromHeightAndRadius(radius, height);
    
    // Return structured output
    return { ...result };
  }
);

// Height + Chord
server.tool(
  "compute_circle_segment_area_from_height_and_chord_length",
  {
    chordLength: z.number(),
    height: z.number()
  },
  async ({ chordLength, height }) => {
    const result = segmentAreaFromHeightAndChord(height, chordLength);
    
    // Return structured output
    return { ...result };
  }
);

// Chord + Radius
server.tool(
  "compute_circle_segment_area_from_chord_length_and_parent_circle_radius",
  {
    radius: z.number(),
    chordLength: z.number()
  },
  async ({ radius, chordLength }) => {
    const result = segmentAreaFromChordAndRadius(radius, chordLength);
   
    // Return structured output
    return { ...result };
  }
);

// Register the circle segment tool
server.tool(
  "compute_circle_segment_area_from_height_and_chord_length",
  {
    chordLength: z.number(),
    height: z.number()
  },
  async ({ chordLength, height }) => {
    // Call your existing logic
    const result = segmentArea(chordLength, height);

    // Return structured output
    return { ...result };
    };
  }
);

// Register the circle segment tool
server.tool(
  "compute_circle_segment_area_from_chord_length_and_parent_circle_radius",
  {
    radius: z.number(),
    chordLength: z.number()
  },
  async ({ radius, chordLength }) => {
    // Call your existing logic
    const result = segmentArea(radius, chordLength);

    // Return structured output
    return { ...result };
    };
  }
);

// Register the cone surface area tool
server.tool(
  "compute_cone_surface_area",
  {
    radius: z.number(),
    height: z.number()
  },
  async ({ radius, height }) => {
    // Call your existing logic
    const result = coneSurface(radius, height);

    // Return structured output
    return { ...result };
    };
  }
);

// Register the sphere volume tool
server.tool(
  "compute_sphere_volume",
  {
    radius: z.number()
  },
  async ({ radius }) => {
    // Call your existing logic
    const result = sphereVolume(radius);

    // Return structured output
    return { ...result };
    };
  }
);

// Register the spherical cap volume tool
server.tool(
  "compute_spherical_cap_volume",
  {
    radius: z.number(),
    height: z.number()
  },
  async ({ radius, height }) => {
    // Call your existing logic
    const result = capVolume(radius, height);

    // Return structured output
    return { ...result };
    };
  }
);

// Register the cone volume tool
server.tool(
  "compute_cone_volume",
  {
    radius: z.number(),
    height: z.number()
  },
  async ({ radius, height }) => {
    // Call your existing logic
    const result = coneVolume(radius, height);

    // Return structured output
    return { ...result };
    };
  }
);

// Register the pyramid volume tool
server.tool(
  "compute_pyramid_volume",
  {
    number: z.number(),
    baseLength: z.number(),
    height: z.number()
  },
  async ({ number, baseLength, height }) => {
    // Call your existing logic
    const result = pyramidVolume(number, baseLength, height);

    // Return structured output
    return { ...result };
    };
  }
);

// Register the frustum pyramid volume tool
server.tool(
  "compute_frustum_pyramid_volume",
  {
    number: z.number(),
    baseLength: z.number(),
    topLength: z.number(),
    height: z.number()
  },
  async ({ number, baseLength, topLength, height }) => {
    // Call your existing logic
    const result = frustumPyramidVolume(number, baseLength, topLength, height);

    // Return structured output
    return { ...result };
    };
  }
);

// Register the frustum pyramid volume tool
server.tool(
  "compute_frustum_cone_volume",
  {
    number: z.number(),
    baseRadius: z.number(),
    topRadius: z.number(),
    height: z.number()
  },
  async ({ number, baseRadius, topRadius, height }) => {
    // Call your existing logic
    const result = frustumConeVolume(number, baseRadius, topRadius, height);

    // Return structured output
    return { ...result };
    };
  }
);

// Register the tetrahedron volume tool
server.tool(
  "compute_tetrahedron_volume",
  {
    edge: z.number()
  },
  async ({ edge }) => {
    // Call your existing logic
    const result = tetrahedronVolume(edge);

    // Return structured output
   return { ...result };
    };
  }
);

    

// Start the server over stdio
server.start();
