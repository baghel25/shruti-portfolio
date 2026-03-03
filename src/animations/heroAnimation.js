import gsap from "gsap"

export function animateHero() {
  gsap.from(".hero-title", {
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
  })

  gsap.from(".hero-subtitle", {
    y: 40,
    opacity: 0,
    delay: 0.3,
    duration: 1,
    ease: "power3.out"
  })
}