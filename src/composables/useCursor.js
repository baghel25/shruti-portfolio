// ── src/composables/useCursor.js ──────────────────────────────────────────────
import { onMounted, onUnmounted } from 'vue'

export function useCursor(cursorRef, ringRef) {
  let mx = 0, my = 0, rx = 0, ry = 0
  let rafId

  const onMove = e => { mx = e.clientX; my = e.clientY }

  const animate = () => {
    rx += (mx - rx) * 0.12
    ry += (my - ry) * 0.12
    if (cursorRef.value) cursorRef.value.style.transform = `translate(${mx - 6}px,${my - 6}px)`
    if (ringRef.value)   ringRef.value.style.transform   = `translate(${rx - 18}px,${ry - 18}px)`
    rafId = requestAnimationFrame(animate)
  }

  onMounted(() => {
    document.addEventListener('mousemove', onMove)
    animate()
  })
  onUnmounted(() => {
    document.removeEventListener('mousemove', onMove)
    cancelAnimationFrame(rafId)
  })
}
