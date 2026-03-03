<!-- ══════════════════════════════════════════════════════════════
     ProjectsSection.vue
════════════════════════════════════════════════════════════════ -->
<template>
  <section id="projects">
    <div class="section-label">Selected Work</div>
    <h2 class="section-title">
      Projects that <span class="grad-pink">ship.</span>
    </h2>
    <div class="projects-grid reveal">
      <div v-for="p in projects" :key="p.id" class="project-card">
        <div class="project-thumb" :class="p.bgClass">
          <div class="project-thumb-inner">{{ p.emoji }}</div>
          <div class="project-tag-overlay">{{ p.tag }}</div>
        </div>
        <div class="project-body">
          <div class="project-title">{{ p.title }}</div>
          <div class="project-desc">{{ p.desc }}</div>
          <div class="project-stack">
            <span v-for="s in p.stack" :key="s" class="stack-tag">{{ s }}</span>
          </div>
          <div class="project-links">
            <a
              v-for="l in p.links"
              :key="l.label"
              :href="l.href"
              class="project-link"
              >{{ l.label }} →</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { projects } from "../data/projects";
</script>

<style scoped>
#projects {
  background: var(--bg);
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
}
.project-card {
  border: 1px solid var(--border);
  border-radius: 6px;
  overflow: hidden;
  background: var(--surface);
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.project-card:hover {
  transform: translateY(-8px);
  border-color: rgba(0, 245, 212, 0.45);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 245, 212, 0.1);
}
.project-thumb {
  height: 180px;
  position: relative;
  overflow: hidden;
}
.project-thumb-inner {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  transition: transform 0.5s ease;
}
.project-card:hover .project-thumb-inner {
  transform: scale(1.08);
}
.p1 {
  background: linear-gradient(135deg, #0a0a1a, #1a0533, #2a0060);
}
.p2 {
  background: linear-gradient(135deg, #001a12, #003325, #006644);
}
.p3 {
  background: linear-gradient(135deg, #1a0010, #33001f, #660040);
}
.p4 {
  background: linear-gradient(135deg, #0a0814, #1a1030, #2d1a50);
}
.p5 {
  background: linear-gradient(135deg, #0a1400, #1a2800, #2a4500);
}
.p6 {
  background: linear-gradient(135deg, #14080a, #280f14, #451a22);
}
.project-tag-overlay {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid var(--border);
  padding: 0.3rem 0.7rem;
  border-radius: 20px;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  color: var(--neon);
  text-transform: uppercase;
}
.project-body {
  padding: 1.5rem;
}
.project-title {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
}
.project-desc {
  font-size: 0.88rem;
  color: var(--muted);
  line-height: 1.65;
  margin-bottom: 1.25rem;
}
.project-stack {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
}
.stack-tag {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.65rem;
  padding: 0.25rem 0.6rem;
  border: 1px solid rgba(123, 47, 255, 0.3);
  border-radius: 2px;
  color: rgba(123, 47, 255, 0.9);
  background: rgba(123, 47, 255, 0.05);
}
.project-links {
  display: flex;
  gap: 1rem;
}
.project-link {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--neon);
  text-decoration: none;
  transition: letter-spacing 0.2s;
}
.project-link:hover {
  letter-spacing: 0.15em;
}
.grad-pink {
  background: linear-gradient(135deg, var(--neon3), var(--neon2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
