import { OrbitControls } from '@/node_modules/three/examples/jsm/controls/OrbitControls.js';

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);

  // only works if rendering frames in an animation loop
  controls.enableDamping = true;

  controls.tick = () => controls.update();

  return controls
}

export { createControls };