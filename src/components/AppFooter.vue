<template>
  <footer>
    <span>© 2026 Shruti Singh Baghel</span>
    <span>Built with <span class="footer-dot"></span> in Bangalore, India</span>
  </footer>
</template>

<style scoped>
footer {
  padding: 2rem 4rem;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.7rem;
  color: var(--muted);
  letter-spacing: 0.08em;
}
.footer-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--neon);
  display: inline-block;
  margin: 0 0.5rem;
  animation: blink 1.5s ease-in-out infinite;
}
@media (max-width: 768px) {
  footer {
    padding: 1.5rem;
    flex-direction: column;
    gap: 0.75rem;
    text-align: center;
  }
}
</style>
