<template>
  <div id="cursor" ref="cursorEl"></div>
  <div id="cursor-ring" ref="ringEl"></div>
</template>

<script setup>
import { ref } from "vue";
import { useCursor } from "../composables/useCursor";

const cursorEl = ref(null);
const ringEl = ref(null);
useCursor(cursorEl, ringEl);
</script>

<style scoped>
#cursor {
  width: 12px;
  height: 12px;
  background: var(--neon);
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: screen;
}
#cursor-ring {
  width: 36px;
  height: 36px;
  border: 1.5px solid rgba(0, 245, 212, 0.5);
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9998;
  transition: all 0.18s ease;
}
</style>
