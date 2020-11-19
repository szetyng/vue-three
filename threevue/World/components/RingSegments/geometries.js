import { CylinderBufferGeometry } from 'three';

function createGeometries() {
  // reuse a single segment geometry for all eight segments
  const segment = new CylinderBufferGeometry(3, 3, 1.4, 3, 1, true, 0, Math.PI / 4);

  const keystone = new CylinderBufferGeometry(3, 2.5, 1.4, 3, 1, true, 0, Math.PI / 4);

  return { segment, keystone };
}

export { createGeometries }