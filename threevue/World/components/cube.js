import { BoxBufferGeometry, Mesh, MeshStandardMaterial  } from 'three';

function createCube() {
  // create a geometry
  const geometry = new BoxBufferGeometry(2, 2, 2);

  // a physically correct "standard" material
  const material = new MeshStandardMaterial({ color: 'orchid' });

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);

  return cube;
}

export { createCube };
