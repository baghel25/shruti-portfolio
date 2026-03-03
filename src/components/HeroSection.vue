<template>
  <section id="hero">
    <div class="hero-grid-bg"></div>
    <div class="hero-glow"></div>
    <div class="hero-glow2"></div>

    <!-- LEFT CONTENT -->
    <div class="hero-content">
      <h1 class="hero-name">Shruti<br /><span>Singh Baghel</span></h1>
      <p class="hero-role">Senior Full Stack &amp; GenAI Engineer</p>
      <p class="hero-desc">
        5.5+ years building production-grade SaaS, analytics, and AI automation
        platforms. Delivered RAG pipelines, fintech admin systems, and led teams
        shipping enterprise-grade features across Vue 3, Python, and AWS.
      </p>
      <div class="hero-cta">
        <a href="#projects" class="btn-primary">View My Work</a>
        <a href="#contact" class="btn-outline">Get In Touch</a>
      </div>
    </div>

    <!-- RIGHT VISUAL -->
    <div class="hero-visual" ref="visualRef">
      <div class="ring ring-1"></div>
      <div class="ring ring-2"></div>
      <div class="ring ring-3"></div>

      <div class="orb-wrap">
        <div class="orb">
          <div class="orb-inner">
            <span class="orb-icon">⚡</span>
          </div>
        </div>
      </div>

      <!-- Badges — JS positions them, CSS never rotates them -->
      <div
        v-for="badge in badges"
        :key="badge.label"
        class="badge"
        :class="badge.variant"
        :ref="
          (el) => {
            if (el) badgeEls[badge.label] = el;
          }
        "
      >
        {{ badge.label }}
      </div>

      <div class="float-card card-1">
        <span class="card-num">~90%</span>
        <span class="card-label">Script Usability</span>
      </div>
      <div class="float-card card-2">
        <span class="card-num">5.5+</span>
        <span class="card-label">Years Exp.</span>
      </div>
      <div class="float-card card-3">
        <span class="card-num">70%</span>
        <span class="card-label">Effort Reduced</span>
      </div>

      <div class="scan-line"></div>
    </div>

    <div class="hero-scroll-hint">
      <span class="scroll-text">Scroll</span>
      <div class="scroll-line"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive } from "vue";

const visualRef = ref(null);
const badgeEls = reactive({});

const badges = [
  { label: "Vue 3", variant: "neon", radius: 155, speed: 0.4, startAngle: 0 },
  {
    label: "Python",
    variant: "neon",
    radius: 155,
    speed: 0.4,
    startAngle: 120,
  },
  { label: "GenAI", variant: "neon", radius: 155, speed: 0.4, startAngle: 240 },
  {
    label: "AWS",
    variant: "purple",
    radius: 210,
    speed: -0.28,
    startAngle: 60,
  },
  {
    label: "RAG",
    variant: "purple",
    radius: 210,
    speed: -0.28,
    startAngle: 180,
  },
  {
    label: "React",
    variant: "purple",
    radius: 210,
    speed: -0.28,
    startAngle: 300,
  },
];

let rafId;
let startTime;

onMounted(() => {
  startTime = performance.now();

  const tick = (now) => {
    const t = (now - startTime) / 1000;
    const cx = 240;
    const cy = 240;

    badges.forEach((b) => {
      const el = badgeEls[b.label];
      if (!el) return;
      const angle = (b.startAngle * Math.PI) / 180 + t * b.speed;
      const x = cx + b.radius * Math.cos(angle) - el.offsetWidth / 2;
      const y = cy + b.radius * Math.sin(angle) - el.offsetHeight / 2;
      // Only translate — text is ALWAYS horizontal, never rotated
      el.style.transform = `translate(${x}px, ${y}px)`;
    });

    rafId = requestAnimationFrame(tick);
  };

  rafId = requestAnimationFrame(tick);
});

onUnmounted(() => cancelAnimationFrame(rafId));
</script>

<style scoped>
#hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
  position: relative;
  overflow: hidden;
  gap: 2rem;
}
.hero-grid-bg {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      rgba(0, 245, 212, 0.04) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(0, 245, 212, 0.04) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: gridPulse 8s ease-in-out infinite;
}
.hero-glow {
  position: absolute;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(123, 47, 255, 0.18) 0%,
    transparent 70%
  );
  top: -200px;
  right: -100px;
  animation: floatGlow 10s ease-in-out infinite;
}
.hero-glow2 {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(0, 245, 212, 0.12) 0%,
    transparent 70%
  );
  bottom: -150px;
  left: 10%;
  animation: floatGlow 12s ease-in-out infinite reverse;
}

/* LEFT */
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 560px;
  flex: 1;
}
.hero-tag {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--neon);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  opacity: 0;
  animation: fadeSlideUp 0.8s 0.3s forwards;
}
.hero-tag::before {
  content: "";
  width: 40px;
  height: 1px;
  background: var(--neon);
}
.hero-name {
  font-size: clamp(3.2rem, 9vw, 8rem);
  font-weight: 800;
  letter-spacing: 0.02em;
  line-height: 0.92;
  margin-bottom: 1rem;
  opacity: 0;
  animation: fadeSlideUp 0.9s 0.5s forwards;
}
.hero-name span {
  background: linear-gradient(
    135deg,
    var(--neon) 0%,
    var(--neon2) 60%,
    var(--neon3) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-role {
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  color: var(--muted);
  font-weight: 400;
  margin-bottom: 2rem;
  letter-spacing: 0.02em;
  opacity: 0;
  animation: fadeSlideUp 0.9s 0.7s forwards;
}
.hero-desc {
  font-size: 1rem;
  color: rgba(232, 234, 246, 0.65);
  line-height: 1.75;
  max-width: 480px;
  margin-bottom: 3rem;
  opacity: 0;
  animation: fadeSlideUp 0.9s 0.9s forwards;
}
.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  opacity: 0;
  animation: fadeSlideUp 0.9s 1.1s forwards;
}

/* RIGHT VISUAL */
.hero-visual {
  position: relative;
  z-index: 2;
  width: 480px;
  height: 480px;
  flex-shrink: 0;
  opacity: 0;
  animation: fadeSlideUp 1s 0.8s forwards;
}

.ring {
  position: absolute;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.ring-1 {
  width: 200px;
  height: 200px;
  border: 1px solid rgba(0, 245, 212, 0.25);
  animation: spinCW 12s linear infinite;
}
.ring-2 {
  width: 330px;
  height: 330px;
  border: 1px solid rgba(123, 47, 255, 0.2);
  animation: spinCCW 18s linear infinite;
}
.ring-3 {
  width: 440px;
  height: 440px;
  border: 1px dashed rgba(0, 245, 212, 0.08);
  animation: spinCW 30s linear infinite;
}

.orb-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: floatOrb 4s ease-in-out infinite;
}
.orb {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    var(--neon),
    var(--neon2),
    var(--neon3),
    var(--neon)
  );
  padding: 3px;
  box-shadow: 0 0 60px rgba(0, 245, 212, 0.4), 0 0 120px rgba(123, 47, 255, 0.3);
  animation: rotateConic 4s linear infinite;
}
.orb-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--bg);
  display: flex;
  align-items: center;
  justify-content: center;
}
.orb-icon {
  font-size: 2.5rem;
}

/* Badges — JS sets transform: translate(x, y) only. No rotation ever. */
.badge {
  position: absolute;
  top: 0;
  left: 0;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 0.35rem 0.9rem;
  border-radius: 20px;
  white-space: nowrap;
  backdrop-filter: blur(8px);
  pointer-events: none;
  user-select: none;
  z-index: 10;
}
.badge.neon {
  border: 1px solid rgba(0, 245, 212, 0.35);
  background: rgba(6, 6, 16, 0.9);
  color: var(--neon);
  box-shadow: 0 0 14px rgba(0, 245, 212, 0.2);
}
.badge.purple {
  border: 1px solid rgba(123, 47, 255, 0.35);
  background: rgba(6, 6, 16, 0.9);
  color: rgba(190, 160, 255, 1);
  box-shadow: 0 0 14px rgba(123, 47, 255, 0.2);
}

/* Stat cards */
.float-card {
  position: absolute;
  background: rgba(13, 13, 31, 0.92);
  border: 1px solid rgba(0, 245, 212, 0.2);
  border-radius: 8px;
  padding: 0.65rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}
.card-1 {
  top: 4%;
  left: -8px;
  animation: floatCard 5s ease-in-out infinite;
}
.card-2 {
  bottom: 10%;
  left: -8px;
  animation: floatCard 6s ease-in-out infinite reverse;
}
.card-3 {
  top: 4%;
  right: -8px;
  animation: floatCard 4.5s ease-in-out infinite 1s;
}
.card-num {
  font-family: "JetBrains Mono", monospace;
  font-size: 1.1rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--neon), var(--neon2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}
.card-label {
  font-size: 0.62rem;
  color: var(--muted);
  letter-spacing: 0.08em;
  margin-top: 0.2rem;
  text-transform: uppercase;
  white-space: nowrap;
}

.scan-line {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  pointer-events: none;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 245, 212, 0.5),
    transparent
  );
  animation: scanDown 3s ease-in-out infinite;
  border-radius: 1px;
}

/* Scroll hint */
.hero-scroll-hint {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0;
  animation: fadeSlideUp 1s 1.5s forwards;
}
.scroll-line {
  width: 1px;
  height: 50px;
  background: linear-gradient(to bottom, var(--neon), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}
.scroll-text {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  color: var(--muted);
  text-transform: uppercase;
}

/* Keyframes */
@keyframes spinCW {
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@keyframes spinCCW {
  to {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}
@keyframes rotateConic {
  to {
    transform: rotate(360deg);
  }
}
@keyframes floatOrb {
  0%,
  100% {
    transform: translate(-50%, -50%) translateY(0);
  }
  50% {
    transform: translate(-50%, -50%) translateY(-12px);
  }
}
@keyframes floatCard {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
@keyframes scanDown {
  0% {
    top: 0%;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    top: 100%;
    opacity: 0;
  }
}

@media (max-width: 1100px) {
  #hero {
    flex-direction: column;
    justify-content: center;
    padding: 6rem 2rem 4rem;
    gap: 3rem;
  }
  .hero-visual {
    width: 340px;
    height: 340px;
  }
  .ring-3 {
    width: 320px;
    height: 320px;
  }
  .ring-2 {
    width: 230px;
    height: 230px;
  }
  .ring-1 {
    width: 140px;
    height: 140px;
  }
  .orb {
    width: 86px;
    height: 86px;
  }
  .orb-icon {
    font-size: 1.8rem;
  }
}
@media (max-width: 768px) {
  #hero {
    padding: 5rem 1.5rem 3rem;
  }
  .hero-visual {
    width: 280px;
    height: 280px;
  }
  .ring-3 {
    width: 260px;
    height: 260px;
  }
  .ring-2 {
    width: 190px;
    height: 190px;
  }
  .ring-1 {
    width: 120px;
    height: 120px;
  }
  .card-3 {
    display: none;
  }
}
</style>
