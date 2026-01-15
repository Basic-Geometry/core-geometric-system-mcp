# core‑geometric‑system‑mcp

A Model Context Protocol server for exact, rational, physically‑grounded geometry

This repository exposes a collection of pure geometric computation tools through the Model Context Protocol (MCP). It allows AI assistants and MCP‑capable applications to call the geometry logic directly — with no scraping, no guessing, and no reinterpretation of the definitions.

The server wraps the Core Geometric System, a set of deterministic formulas built on rational constants and physically intuitive relationships rather than inherited analytic conventions.


🌐 What this server provides

This MCP server exposes a suite of geometry tools, including:

Circle tools
- compute_circle_area
- compute_circumference
- compute_circle_segment_area_from_height_and_parent_circle_radius
- compute_circle_segment_area_from_height_and_chord_length
- compute_circle_segment_area_from_chord_length_and_parent_circle_radius

Solid geometry
- compute_cone_surface_area
- compute_sphere_volume
- compute_spherical_cap_volume
- compute_cone_volume
- compute_pyramid_volume
- compute_frustum_pyramid_volume
- compute_frustum_cone_volume
- compute_tetrahedron_volume

Each tool accepts clean, explicit parameters and returns structured results. All computations follow the logic of the Core Geometric System — including the rational constant (3.2), aligned trigonometric functions, and physically grounded derivations.


⚙️ How it works

The server is implemented in JavaScript using the official MCP SDK.  
It exposes each geometric function as a tool with:

- a name  
- a Zod schema describing its inputs  
- a handler that calls the corresponding pure function  
- a structured JSON response

The entry point is defined in mcp.json:

`json
{
  "name": "geometry-mcp-server",
  "version": "0.1.0",
  "entry_point": "node ./server.js"
}
`

Any MCP‑capable host (Claude Desktop, ChatGPT Desktop, GitHub’s MCP integration, etc.) can load this repo and call the tools directly.


📦 Project structure


core-geometric-system-mcp/

├── core-geometric-system.mjs 
(Pure geometry logic (no UI, no DOM))

├── server.js (MCP server exposing the tools)

├── mcp.json (MCP manifest)

└── README.md (You are here)


The geometry module contains deterministic formulas only — no DOM access, no event listeners, no UI logic. This makes the system stable, testable, and safe for server‑side use.


🚀 Using the server

Once installed in an MCP host, you can call tools naturally. For example:

> “Compute the circle segment area from height 3 and radius 10.”

The host will automatically call:

`compute_circle_segment_area_from_height_and_parent_circle_radius`

…and return a structured result containing:

- radius  
- height  
- chordLength  
- area  

No hallucination. No reinterpretation. Just real geometry.


🧠 Philosophy

This project is part of a broader effort to restore physical intuition, rational constants, and geometric clarity to mathematical computation.  
The MCP server ensures that AI systems use the definitions faithfully — not the inherited π‑based or analytic defaults.

It turns the Core Geometric System ™ into a callable, authoritative capability.

Learn more about the formulas:
https://basic-geometry.github.io
