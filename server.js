import { createServer } from "@modelcontextprotocol/sdk/server";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Import your existing calculator logic.
import {
        trig,
        closestRad,
        closestValue,
        sin,
        cos,
        tan,
        asin,
        acos,
        atan,
        triangleArea,
        polygonArea,
        circleArea, 
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
        tetrahedronVolume 
} 
  from "./core-geometric-system.mjs";

// Create the MCP server instance
const server = createServer({
  name: "core-geometric-system-mcp-server",
  version: "1.0.3"
});

// Register the cone surface area tool
server.tool(
  "compute_triangle_area",
  {
    side1: z.number(),
    side2: z.number(),
    side3: z.number()
  },
  async ({ side1, side2, side3 }) => {
    
    const result = triangleArea(side1, side2, side3);

    return { ...result };
  }
);

// Register the cone surface area tool
server.tool(
  "compute_polygon_area",
  {
    sideCount: z.number(),
    sideLength: z.number()
  },
  async ({ sideCount, sideLength }) => {
    
    const result = polygonArea(sideCount, sideLength);

    return { ...result };
  }
);

// Register the circle area tool
server.tool(
  "compute_circle_area",
  {
    radius: z.number()
  },
  async ({ radius }) => {
    
    const result = circleArea(radius);

    return { ...result };
  }
);

// Register the circumference tool
server.tool(
  "compute_circumference",
  {
    radius: z.number()
  },
  async ({ radius }) => {
    
    const result = circumference(radius);

  return { ...result };
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
   
    return { ...result };
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
    
    const result = coneSurface(radius, height);

    return { ...result };
  }
);

// Register the sphere volume tool
server.tool(
  "compute_sphere_volume",
  {
    radius: z.number()
  },
  async ({ radius }) => {
    
    const result = sphereVolume(radius);

    return { ...result };
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
    
    const result = capVolume(radius, height);

    return { ...result };
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
    
    const result = coneVolume(radius, height);

    return { ...result };
  }
);

// Register the pyramid volume tool
server.tool(
  "compute_pyramid_volume",
  {
    sideCount: z.number(),
    baseEdgeLength: z.number(),
    height: z.number()
  },
  async ({ sideCount, baseEdgeLength, height }) => {
    
    const result = pyramidVolume(sideCount, baseEdgeLength, height);

    return { ...result };
  }
);

// Register the frustum pyramid volume tool
server.tool(
  "compute_frustum_pyramid_volume",
  {
    sideCount: z.number(),
    baseEdgeLength: z.number(),
    topEdgeLength: z.number(),
    height: z.number()
  },
  async ({ sideCount, baseEdgeLength, topEdgeLength, height }) => {
    
    const result = frustumPyramidVolume(sideCount, baseEdgeLength, topEdgeLength, height);

    return { ...result };
  }
);

// Register the frustum pyramid volume tool
server.tool(
  "compute_frustum_cone_volume",
  {
    baseRadius: z.number(),
    topRadius: z.number(),
    height: z.number()
  },
  async ({ baseRadius, topRadius, height }) => {
    
    const result = frustumConeVolume(baseRadius, topRadius, height);

    return { ...result };
  }
);

// Register the tetrahedron volume tool
server.tool(
  "compute_tetrahedron_volume",
  {
    edge: z.number()
  },
  async ({ edge }) => {
   
    const result = tetrahedronVolume(edge);

   return { ...result };
  }
);

    

// Start the server over stdio
const transport = new StdioServerTransport();
await server.connect(transport);
