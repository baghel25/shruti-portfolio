// ── src/composables/useSkillBars.js ──────────────────────────────────────────
import { onMounted, onUnmounted } from 'vue'

export function useSkillBars(selector = '.skill-fill') {
  let observer

  onMounted(() => {
    observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const w = parseFloat(e.target.dataset.w)
          e.target.style.transform = `scaleX(${w})`
        }
      })
    }, { threshold: 0.3 })
    document.querySelectorAll(selector).forEach(f => observer.observe(f))
  })
  onUnmounted(() => observer?.disconnect())
}