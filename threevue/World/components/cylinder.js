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
    3, // radiusTop
    3, // radiusBottom
    1.4, // height
    3, // radialSegments
    1, // heightSegments
    true, // openEnded
    0, // thetaStart
    segmentLength // thetaLength  
  );

  const material = createMaterial(loadingManager);

  // create a Mesh containing the geometry and material
  const cylinder = new Mesh(geometry, material);

  const group = new Group();
  //group.add(cylinder);
  for (let i=0; i<MathUtils.degToRad(90); i+=segmentLength) {
    const seg = cylinder.clone();
    console.log(MathUtils.radToDeg(i))

    seg.geometry = new CylinderBufferGeometry(
      3, // radiusTop
      3, // radiusBottom
      1.4, // height
      3, // radialSegments
      1, // heightSegments
      true, // openEnded
      i, // thetaStart
      segmentLength // thetaLength  
    );

    group.add(seg);
  }






  //cylinder.rotation.set(-0.5, -0.1, 0.8);
  group.rotation.set(MathUtils.degToRad(90), 0, 0)


  return group;
}

export { createCylinder };
