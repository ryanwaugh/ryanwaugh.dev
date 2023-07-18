const scene = document.createElement('a-scene');

const sky = document.createElement('a-sky');
// Texture credit Solar System Scope:
//    https://www.solarsystemscope.com/textures/
sky.setAttribute('src', '../images/textures/stars_8k.jpg');
scene.appendChild(sky);

const greetText = document.createElement('a-text');
greetText.setAttribute('value', 'welcome to space,\nfriend!\n- Capt. Ryan');
greetText.setAttribute('position', '0 0.5 16');
greetText.setAttribute('color', '#d7ed31');
greetText.setAttribute('align', 'center');
greetText.setAttribute('font', 'exo2bold');
scene.appendChild(greetText);

const player = document.createElement('a-entity');
player.setAttribute('id', 'rig');
player.setAttribute('movement-controls', '');
player.setAttribute('position', '0 0 20');

const camera = document.createElement('a-entity');
camera.setAttribute('camera', '');
camera.setAttribute('position', '0 1.6 0');
camera.setAttribute('look-controls', 'pointerLockEnabled: true');

const leftHand = document.createElement('a-entity');
leftHand.setAttribute(
  'hand-controls',
  'hand: left; handModelStyle: lowPoly; color: #ffcccc '
);

const rightHand = document.createElement('a-entity');
rightHand.setAttribute(
  'hand-controls',
  'hand: right; handModelStyle: lowPoly; color: #ffcccc '
);

player.appendChild(camera);
player.appendChild(leftHand);
player.appendChild(rightHand);
scene.appendChild(player);

const planets = [
  {
    id: 'sun',
    text: 'Sun',
    position: '0 0 0',
    text_position: '0 15 0',
    radius: '10',
    texture: '../images/textures/sun_2k.jpg',
  },
  {
    id: 'mercury',
    text: 'Mercury',
    position: '0 1 -20',
    text_position: '0 3 -20',
    radius: '0.1',
    texture: '../images/textures/mercury_1k.jpg',
  },
  {
    id: 'venus',
    text: 'Venus',
    position: '-30 1 0',
    text_position: '-30 3 0',
    radius: '0.25',
    texture: '../images/textures/venus_1k.jpg',
  },
  {
    id: 'earth',
    text: 'Earth',
    position: '0 1 40',
    text_position: '0 3 40',
    radius: '0.3',
    texture: '../images/textures/earth_1k.jpg',
  },
  {
    id: 'mars',
    text: 'Mars',
    position: '50 1 0',
    text_position: '50 3 0',
    radius: '0.15',
    texture: '../images/textures/mars_1k.jpg',
  },
  {
    id: 'jupiter',
    text: 'Jupiter',
    position: '0 3 -60',
    text_position: '0 5 -60',
    radius: '1.5',
    texture: '../images/textures/jupiter_1k.jpg',
  },
  {
    id: 'saturn',
    text: 'Saturn',
    position: '-80 2 0',
    text_position: '-80 4 0',
    radius: '1',
    texture: '../images/textures/saturn_1k.jpg',
  },
  {
    id: 'uranus',
    text: 'Uranus',
    position: '0 1 100',
    text_position: '0 3 100',
    radius: '0.6',
    texture: '../images/textures/uranus_1k.jpg',
  },
  {
    id: 'neptune',
    text: 'Neptune',
    position: '120 0 1',
    text_position: '120 2 1',
    radius: '0.5',
    texture: '../images/textures/neptune_1k.jpg',
  },
];

// Loop through the planets array and create the entities dynamically
planets.forEach((planet) => {
  const planetEntity = document.createElement('a-entity');
  planetEntity.setAttribute('id', planet.id);
  if (planet.id != 'sun') {
    planetEntity.setAttribute(
      'animation',
      'property: rotation; to: 0 360 0; loop: true; dur: 50000'
    );
  }

  const textEntity = document.createElement('a-text');
  textEntity.setAttribute('value', planet.text);
  textEntity.setAttribute('position', planet.text_position);
  textEntity.setAttribute('color', '#fcfcfc');
  textEntity.setAttribute('align', 'center');
  textEntity.setAttribute('side', 'double');

  const sphereEntity = document.createElement('a-sphere');
  sphereEntity.setAttribute('radius', planet.radius);
  sphereEntity.setAttribute('position', planet.position);
  sphereEntity.setAttribute('src', planet.texture);

  planetEntity.appendChild(textEntity);
  planetEntity.appendChild(sphereEntity);

  scene.appendChild(planetEntity);
});

// Append the scene to the document body
document.body.appendChild(scene);
