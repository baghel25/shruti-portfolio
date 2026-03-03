<template>
  <section id="about">
    <div class="section-label">Who I Am</div>
    <h2 class="section-title">
      Building the future,<br />
      <span class="grad">one pixel</span> at a time
    </h2>
    <div class="about-grid reveal">
      <div class="about-text">
        <p>
          Hey — I'm Shruti, a Senior Full Stack & GenAI Engineer based in
          Bangalore, India. Over 5.5+ years I've built production SaaS
          platforms, distributed analytics systems, and AI automation pipelines
          used by enterprise clients globally.
        </p>
        <p>
          At HeadSpin, I architected a RAG-based GenAI pipeline achieving ~90%
          script usability and a 70% reduction in manual effort. I've led teams,
          managed CI/CD rollouts, and shipped fintech-grade admin consoles with
          RBAC, audit trails, and contract lifecycle management.
        </p>
        <p>
          When I'm not engineering, I'm exploring new GenAI capabilities,
          contributing to open source, and sharpening my DSA skills.
        </p>
        <p>
          My approach blends technical precision with creative intuition. I
          think deeply about systems and equally deeply about the humans using
          them. The best interfaces feel invisible.
        </p>
        <p>
          When I'm not shipping products, I'm exploring generative art,
          contributing to open source, or hunting for the city's best coffee.
        </p>
      </div>
      <div class="about-stats">
        <div v-for="stat in stats" :key="stat.label" class="stat-card">
          <div class="stat-num">{{ stat.num }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { num: "5.5+", label: "Years of Experience" },
  { num: "13+", label: "GitHub Projects" },
  { num: "70%", label: "Manual Effort Cut (GenAI)" },
  { num: "4", label: "Engineers Led" },
];
</script>

<style scoped>
#about {
  background: var(--surface);
}
#about::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--neon), transparent);
}
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  margin-top: 3rem;
}
.about-text p {
  color: rgba(232, 234, 246, 0.7);
  line-height: 1.85;
  margin-bottom: 1.5rem;
  font-size: 1.02rem;
}
.about-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}
.stat-card {
  border: 1px solid var(--border);
  padding: 1.75rem;
  border-radius: 4px;
  background: rgba(0, 245, 212, 0.03);
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}
.stat-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 0;
  background: linear-gradient(to bottom, var(--neon), var(--neon2));
  transition: height 0.4s;
}
.stat-card:hover {
  border-color: rgba(0, 245, 212, 0.4);
  transform: translateY(-4px);
}
.stat-card:hover::before {
  height: 100%;
}
.stat-num {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 0.4rem;
  background: linear-gradient(135deg, var(--neon), var(--neon2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.stat-label {
  font-size: 0.85rem;
  color: var(--muted);
  letter-spacing: 0.05em;
}
.grad {
  background: linear-gradient(135deg, var(--neon), var(--neon2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}
</style>
