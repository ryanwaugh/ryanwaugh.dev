import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["src/frontend/scripts/main.ts"],
  bundle: true,
  minify: true,
  outfile: "frontend/scripts/main.js",
});

await esbuild.build({
  entryPoints: ["src/frontend/main.css"],
  bundle: false,
  minify: true,
  outfile: "frontend/main.css",
});
