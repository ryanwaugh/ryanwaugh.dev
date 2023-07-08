# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2023-07-08

### Added

- TypeScript type-checking done via `tsc --noEmit`
- Compiling and bundling done with `esbuild`
- code linting done by `eslint`
- code formatting done by `prettier`

### Changed

- ThreeJS homepage .js now written in TypeScript
- `npm run dev` now using pm2-dev for reloading
- A-Frame textures organized, some changed

### Security

- nodemon removed from project due to new vulnerability requiring downgrade

## [0.1.0] - 2023-05-11

### Added

- A-Frame solarsystem environment created

### Removed

- A-Frame forest test scene and golfclub model
