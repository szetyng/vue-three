import { Group } from 'three';

import { createGeometries } from './geometries.js';
import { createMaterials } from './materials.js';
import { createMeshes } from './meshes.js';

class RingSegments extends Group {
  constructor() {
    super();

    this.meshes = createMeshes();

    this.add(
      // this.meshes.segment1,
      // this.meshes.segment2,
      // this.meshes.segment3,
      // this.meshes.segment4,
      // this.meshes.segment5,
      // this.meshes.segment6,
      // this.meshes.segment7,
      this.meshes.segment8
    );
  }
}

export { RingSegments }