import { MeshStandardMaterial, DoubleSide } from 'three';

function createMaterials() {
  const body = new MeshStandardMaterial({
    color: 'darkslategrey',
    flatShading: true
  });

  body.side = DoubleSide;

  return body
}

export { createMaterials }