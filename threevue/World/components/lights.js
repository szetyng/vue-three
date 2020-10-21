import {
  AmbientLight,
  DirectionalLight,
  HemisphereLight,
} from 'three';

function createLights() {
  const ambientLight = new AmbientLight('white', 2);
  const mainLight = new DirectionalLight('white', 5);

  // move the light right, up, and towards us
  mainLight .position.set(10, 10, 10);

  return { ambientLight, mainLight };
}

export { createLights };