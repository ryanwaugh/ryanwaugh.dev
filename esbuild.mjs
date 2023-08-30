import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['src/scripts/main.ts'],
  bundle: true,
  minify: true,
  outfile: 'frontend/scripts/main.js',
});

await esbuild.build({
  entryPoints: ['src/scripts/xr.ts'],
  bundle: false,
  minify: true,
  outfile: 'frontend/scripts/xr.js',
});

await esbuild.build({
  entryPoints: ['src/main.css'],
  bundle: false,
  minify: true,
  outfile: 'frontend/main.css',
});
