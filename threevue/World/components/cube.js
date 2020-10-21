import {
  BoxBufferGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  TextureLoader
} from 'three';

function createMaterial() {
  const textureLoader = new TextureLoader();

  const texture = textureLoader.load(require('@/assets/textures/uv-test-bw.png'));

  // a physically correct "standard" material
  const material = new MeshStandardMaterial({ 
    map: texture,
    color: 'orchid' 
  });

  return material
}

function createCube() {
  // create a geometry
  const geometry = new BoxBufferGeometry(2, 2, 2);

  const material = createMaterial();

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);

  const radiansPerSecond = MathUtils.degToRad(30); // 30 degrees

  // this method will be called once per frame
  cube.tick = (delta) => {
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube };
