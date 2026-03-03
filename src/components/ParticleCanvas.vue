<!-- ══════════════════════════════════════════════════════════════
     ParticleCanvas.vue
════════════════════════════════════════════════════════════════ -->
<template>
  <canvas ref="canvasEl" id="particles"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const canvasEl = ref(null);
let rafId;

onMounted(() => {
  const canvas = canvasEl.value;
  const ctx = canvas.getContext("2d");

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener("resize", resize);

  const pts = Array.from({ length: 80 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: Math.random() * 1.5 + 0.3,
    dx: (Math.random() - 0.5) * 0.35,
    dy: (Math.random() - 0.5) * 0.35,
    alpha: Math.random() * 0.5 + 0.1,
    color: Math.random() > 0.5 ? "0,245,212" : "123,47,255",
  }));

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pts.forEach((p) => {
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
      ctx.fill();
    });
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
        if (d < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0,245,212,${(1 - d / 120) * 0.08})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.stroke();
        }
      }
    }
    rafId = requestAnimationFrame(draw);
  };
  draw();

  onUnmounted(() => {
    cancelAnimationFrame(rafId);
    window.removeEventListener("resize", resize);
  });
});
</script>

<style scoped>
#particles {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}
</style>
