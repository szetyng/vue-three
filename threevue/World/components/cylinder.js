import {
  CylinderBufferGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  TextureLoader,
  DoubleSide,
  Group
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
  const segmentLength = MathUtils.degToRad(45);

  // create a geometry
  const geometry = new CylinderBufferGeometry(
    1, // radiusTop
    1, // radiusBottom
    5, // height
    15, // radialSegments
    1, // heightSegments
    true, // openEnded
     // thetaStart
     // thetaLength  
  );

  const material = createMaterial(loadingManager);

  // create a Mesh containing the geometry and material
  const cylinder = new Mesh(geometry, material);

  const radiansPerSecond = MathUtils.degToRad(30); // 30 degrees

  // this method will be called once per frame
  cylinder.tick = (delta) => {
    cylinder.rotation.z += radiansPerSecond * delta;
  };

  return cylinder;
}

export { createCylinder };
