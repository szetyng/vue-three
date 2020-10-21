import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createCylinder } from './components/cylinder.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

import { LoadingManager } from 'three';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    //loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    const controls = createControls(camera, renderer.domElement);
    const loadingManager = new LoadingManager();

    const cylinder = createCylinder(loadingManager);
    const { ambientLight, mainLight } = createLights();

    loadingManager.onLoad = () => {
      this.render();
    }

    // rendering on demand
    controls.addEventListener('change', () => {
      this.render();
    });

    //loop.updatables.push(controls);
    //loop.updatables.push(cube);

    scene.add(cylinder, mainLight, ambientLight);

    const resizer = new Resizer(container, camera, renderer);
    
    // onResize hook not needed if there is an animation loop 
    // resizer.onResize = () => {
    //   this.render();
    // };
  }

  // a method of the World() class
  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }
  
  stop() {
    loop.stop();
  }
}

export { World };
