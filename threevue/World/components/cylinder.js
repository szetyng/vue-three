import {
  CylinderBufferGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  TextureLoader,
  DoubleSide
} from 'three';


function createMaterial(loadingManager) {
  //const textureLoader = new TextureLoader(loadingManager);

  //const texture = textureLoader.load(require('@/assets/textures/uv-test-bw.png'));

  // a physically correct "standard" material
  const material = new MeshStandardMaterial({ 
    //map: texture,
    color: 'darkslategrey' 
  });

  material.side = DoubleSide;

  return material
}

function createCylinder(loadingManager) {
  const segmentLength = MathUtils.degToRad(360);

  // create a geometry
  const geometry = new CylinderBufferGeometry(
    3, // radiusTop
    3, // radiusBottom
    1.4, // height
    28, // radialSegments
    1, // heightSegments
    true, // openEnded
    0, // thetaStart
    segmentLength // thetaLength  
  );

  const material = createMaterial(loadingManager);

  // create a Mesh containing the geometry and material
  const cylinder = new Mesh(geometry, material);

  //cylinder.rotation.set(-0.5, -0.1, 0.8);
  cylinder.rotation.set(MathUtils.degToRad(90), 0, 0)

  // const radiansPerSecond = MathUtils.degToRad(30); // 30 degrees

  // this method will be called once per frame
  cylinder.tick = (delta) => {
    // cube.rotation.z += radiansPerSecond * delta;
    // cube.rotation.x += radiansPerSecond * delta;
    // cube.rotation.y += radiansPerSecond * delta;
  };

  return cylinder;
}

export { createCylinder };
