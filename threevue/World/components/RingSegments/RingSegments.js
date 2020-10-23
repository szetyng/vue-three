import { Group } from 'three';

import { createGeometries } from './geometries.js';
import { createMaterials } from './materials.js';
import { createMeshes } from './meshes.js';

class RingSegments extends Group {
  constructor() {
    super();

    this.meshes = createMeshes();

    this.add(
      this.meshes.segment1
    );
  }
}

export { RingSegments }