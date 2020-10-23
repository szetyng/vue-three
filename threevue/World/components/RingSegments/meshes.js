import { Mesh } from 'three';

import { createGeometries } from './geometries.js';
import { createMaterials } from './materials.js';

function createMeshes() {
  const segment = createGeometries();
  const material = createMaterials();

  const segment1 = new Mesh(segment, material);
  segment1.rotation.set(Math.PI/2, 0, 0);

  // const cabin = new Mesh(geometries.cabin, materials.body);
  // cabin.position.set(1.5, 1.4, 0);

  // const chimney = new Mesh(geometries.chimney, materials.detail);
  // chimney.position.set(-2, 1.9, 0);

  // const nose = new Mesh(geometries.nose, materials.body);
  // nose.position.set(-1, 1, 0);
  // nose.rotation.z = Math.PI / 2;

  // const smallWheelRear = new Mesh(geometries.wheel, materials.detail);
  // smallWheelRear.position.y = 0.5;
  // smallWheelRear.rotation.x = Math.PI / 2;

  // const smallWheelCenter = smallWheelRear.clone();
  // smallWheelCenter.position.x = -1;

  // const smallWheelFront = smallWheelRear.clone();
  // smallWheelFront.position.x = -2;

  // const bigWheel = smallWheelRear.clone();
  // bigWheel.position.set(1.5, 0.9, 0);
  // bigWheel.scale.set(2, 1.25, 2);

  return {
    segment1
  };
}

export { createMeshes }