<script setup>
import { Curtains } from "vue-curtains";

const curtainsParams = {
      pixelRatio: Math.min(1.5, window.devicePixelRatio),
    };
</script>


<template>
    <Curtains id="CurtainsCanvas" :params="curtainsParams">
      <slot />
    </Curtains>
</template>

<style >
#CurtainsCanvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
}
</style>
