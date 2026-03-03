<template>
  <section id="contact">
    <div class="contact-inner reveal">
      <div class="section-label" style="justify-content: center">
        Let's Talk
      </div>
      <h2 class="section-title">Got a project<br />in mind?</h2>
      <p class="sub">
        I'm currently open to new opportunities. Whether it's a full-time role,
        freelance project, or just a chat about design and tech — my inbox is
        always open.
      </p>
      <a href="mailto:shrutibaghelsingh@gmail.com" class="contact-email">
        shrutibaghelsingh@gmail.com
      </a>
      <div class="social-links">
        <a
          v-for="s in socials"
          :key="s.title"
          :href="s.href"
          class="social-link"
          :title="s.title"
          v-html="s.svg"
        ></a>
      </div>
    </div>
  </section>
</template>

<script setup>
const socials = [
  {
    title: "GitHub",
    href: "https://github.com/baghel25",
    svg: `<svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>`,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/shruti-singh-baghel-2b67a416a/",
    svg: `<svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>`,
  },
  {
    title: "Twitter",
    href: "https://twitter.com/shrutibaghel25",
    svg: `<svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/></svg>`,
  },
  {
    title: "Dribbble",
    href: "https://dribbble.com/shrutibaghel",
    svg: `<svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8zm5.284 3.688a6.802 6.802 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A6.95 6.95 0 0 1 8 1.18zm-2.907.642A43.123 43.123 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.865 6.865 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.817 6.817 0 0 1-1.752-4.563zM8 14.837a6.785 6.785 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.246 28.246 0 0 1 1.457 5.18A6.722 6.722 0 0 1 8 14.837zm3.81-1.171a29.197 29.197 0 0 0-1.353-4.79c2.2-.353 4.13.23 4.382.311a6.833 6.833 0 0 1-3.029 4.479z"/></svg>`,
  },
];
</script>

<style scoped>
#contact {
  background: var(--bg);
  text-align: center;
}
.contact-inner {
  max-width: 600px;
  margin: 0 auto;
}
.sub {
  color: var(--muted);
  margin-top: 1rem;
  line-height: 1.7;
  font-size: 1rem;
}
.contact-email {
  font-size: clamp(1.5rem, 4vw, 2.2rem);
  font-weight: 800;
  display: inline-block;
  background: linear-gradient(135deg, var(--neon), var(--neon2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
  margin: 2rem 0;
  letter-spacing: -0.02em;
  transition: filter 0.3s;
}
.contact-email:hover {
  filter: brightness(1.3);
}
.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
}
.social-link {
  width: 44px;
  height: 44px;
  border: 1px solid var(--border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted);
  text-decoration: none;
  transition: all 0.3s;
}
.social-link:hover {
  border-color: var(--neon);
  color: var(--neon);
  box-shadow: 0 0 20px rgba(0, 245, 212, 0.2);
  transform: scale(1.1);
}
</style>
