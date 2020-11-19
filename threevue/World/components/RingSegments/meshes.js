import { Mesh } from 'three';

import { createGeometries } from './geometries.js';
import { createMaterials } from './materials.js';

function createMeshes() {
  const segment = createGeometries().segment;
  const keystone = createGeometries().keystone;
  const material = createMaterials();

  const segment1 = new Mesh(segment, material);
  segment1.rotation.x = Math.PI / 2;

  const segment2 = segment1.clone();
  segment2.rotation.y = 0.25 * Math.PI;

  const segment3 = segment1.clone();
  segment3.rotation.y = 0.5 * Math.PI;
  
  const segment4 = segment1.clone();
  segment4.rotation.y = 0.75 * Math.PI;

  const segment5 = segment1.clone();
  segment5.rotation.y = Math.PI;
  
  const segment6 = segment1.clone();
  segment6.rotation.y = 1.25 * Math.PI;

  const segment7 = segment1.clone();
  segment7.rotation.y = 1.5 * Math.PI;

  // const segment8 = segment1.clone();
  // segment8.rotation.y = 1.75 * Math.PI;

  const segment8 = new Mesh(segment, material);
  // segment8.rotation.x = Math.PI / 2;
  segment8.rotation.y = 1.75 * Math.PI;
  
  return {
    segment1,
    segment2,
    segment3,
    segment4, 
    segment5,
    segment6,
    segment7,
    segment8
  };
}

export { createMeshes }