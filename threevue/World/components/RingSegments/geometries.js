import { CylinderBufferGeometry } from 'three';

function createGeometries() {
  // reuse a single segment geometry for all eight segments
  const segment = new CylinderBufferGeometry(3, 3, 1.4, 3, 1, true, 0, Math.PI / 4);

  return segment;
}

export { createGeometries }