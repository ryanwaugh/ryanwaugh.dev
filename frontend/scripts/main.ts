import * as THREE from "three";
import { AsciiEffect } from "three/addons/effects/AsciiEffect.js";

let scene, camera, renderer, effect, knot;

init();
animate();

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  knot = new THREE.Mesh(
    new THREE.TorusKnotGeometry(1.5, 0.4, 64, 8),
    new THREE.MeshBasicMaterial()
  );
  scene.add(knot);

  camera.position.z = 5;

  effect = new AsciiEffect(renderer, " .:-+*=%@#", { invert: true });
  effect.setSize(window.innerWidth, window.innerHeight);
  effect.domElement.style.color = "white";
  effect.domElement.style.backgroundColor = "black";

  // Special case: append effect.domElement, instead of renderer.domElement.
  // AsciiEffect creates a custom domElement (a div container) where the ASCII elements are placed.
  document.body.appendChild(effect.domElement);

  window.addEventListener("resize", onWindowResize);
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  knot.rotation.x += 0.01;
  knot.rotation.y += 0.01;
  effect.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  effect.setSize(window.innerWidth, window.innerHeight);
}
