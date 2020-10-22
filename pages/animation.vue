<template>
  <div>
    <!-- <v-btn color="primary" @click="render">Render</v-btn> -->  
    <div id="scene-container"></div>
  </div>
</template>

<script>
import { AnimatedWorld } from '../threevue/World/Animation.js'; 

export default {
  data() {
    return {
      world: null
    }
  },
  methods: {
    start() {
      // Render on demand
      this.world.start();
    }
  },
  mounted() {
    // Get a reference to the container element
    const container = document.querySelector('#scene-container');

    // Create an instance of the World app
    this.world = new AnimatedWorld(container);

    this.start();

  }
}
</script>


<style scoped>
body {
  /* remove margins and scroll bars */
  margin: 0;
  overflow: hidden;

  /* style text */
  text-align: center;
  font-size: 12px;
  font-family: Sans-Serif;

  /* color text */
  color: #444;
}

h1 {
  /* position the heading */
  position: absolute;
  width: 100%;

  /* make sure that the heading is drawn on top */
  z-index: 1;
}

#scene-container {
  /* tell our scene container to take up the full page */
  position: absolute;
  width: 100%;
  height: 100%;

  /*
    Set the container's background color to the same as the scene's
    background to prevent flashing on load
  */
  background-color: skyblue;
}
</style>
