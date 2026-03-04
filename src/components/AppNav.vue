<!-- ══════════════════════════════════════════════════════════════
     AppNav.vue
════════════════════════════════════════════════════════════════ -->
<template>
  <nav>
    <a class="nav-logo" href="#">
      <img src="/public/logo-icon.svg" alt="Logo" />
    </a>
    <ul class="nav-links">
      <li v-for="link in links" :key="link.href">
        <a :href="link.href">{{ link.label }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 4rem;
  z-index: 100;
  backdrop-filter: blur(20px);
  background: rgba(6, 6, 16, 0.7);
  border-bottom: 1px solid var(--border);
}
.nav-logo {
  font-family: "JetBrains Mono", monospace;
  font-size: 1.1rem;
  color: var(--neon);
  letter-spacing: 0.15em;
  text-decoration: none;
}
.nav-links {
  display: flex;
  gap: 2.5rem;
  list-style: none;
}
.nav-links a {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: color 0.25s;
  position: relative;
}
.nav-links a::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--neon);
  transition: width 0.3s ease;
}
.nav-links a:hover {
  color: var(--neon);
}
.nav-links a:hover::after {
  width: 100%;
}
@media (max-width: 768px) {
  nav {
    padding: 0.2rem 1.5rem;
  }
  .nav-links {
    gap: 1.2rem;
  }
}
</style>
