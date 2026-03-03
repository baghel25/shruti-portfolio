<template>
  <section id="skills">
    <div class="section-label">Expertise</div>
    <h2 class="section-title">
      What I <span class="grad">bring</span> to the table
    </h2>
    <div class="skills-grid reveal" ref="gridRef">
      <div v-for="group in skillGroups" :key="group.id" class="skill-group">
        <div class="skill-group-title">{{ group.label }}</div>
        <div v-for="skill in group.skills" :key="skill.name" class="skill-item">
          <div class="skill-meta">
            <span class="skill-name">{{ skill.name }}</span>
            <span class="skill-pct">{{ skill.pct }}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-fill" :data-w="skill.w" ref="fillRefs"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { skillGroups } from "../data/skills";

const gridRef = ref(null);
const fillRefs = ref([]);

let gridObserver = null;
let barsAnimated = false;

const animateBars = () => {
  if (barsAnimated) return;
  barsAnimated = true;
  fillRefs.value.forEach((el) => {
    if (!el) return;
    const w = parseFloat(el.dataset.w);
    // Small stagger per bar for a nicer cascade effect
    const index = fillRefs.value.indexOf(el);
    setTimeout(() => {
      el.style.transform = `scaleX(${w})`;
    }, index * 60);
  });
};

onMounted(() => {
  // Watch the grid container — fires when it scrolls into view
  gridObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          // Small delay so the reveal fade-in starts first
          setTimeout(animateBars, 300);
          gridObserver.disconnect();
        }
      });
    },
    { threshold: 0.1 }
  );

  if (gridRef.value) gridObserver.observe(gridRef.value);
});

onUnmounted(() => gridObserver?.disconnect());
</script>

<style scoped>
#skills {
  background: var(--surface);
}
#skills::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--neon2), transparent);
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
}
.skill-group {
  padding: 1.75rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.3);
  transition: border-color 0.3s;
}
.skill-group:hover {
  border-color: rgba(123, 47, 255, 0.4);
}
.skill-group-title {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--neon2);
  font-family: "JetBrains Mono", monospace;
  margin-bottom: 1.25rem;
}
.skill-item {
  margin-bottom: 1rem;
}
.skill-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.4rem;
}
.skill-name {
  font-size: 0.9rem;
  font-weight: 600;
}
.skill-pct {
  font-size: 0.75rem;
  color: var(--muted);
  font-family: "JetBrains Mono", monospace;
}
.skill-bar {
  height: 3px;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 2px;
  overflow: hidden;
}
.skill-fill {
  height: 100%;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--neon2), var(--neon));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 1.2s cubic-bezier(0.23, 1, 0.32, 1);
}
.grad {
  background: linear-gradient(135deg, var(--neon2), var(--neon));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
