<template>
  <AppCursor />
  <ParticleCanvas />
  <AppNav />
  <main>
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <SkillsSection />
    <ContactSection />
  </main>
  <AppFooter />
</template>

<script setup>
import AppCursor from "./components/AppCursor.vue";
import ParticleCanvas from "./components/ParticleCanvas.vue";
import AppNav from "./components/AppNav.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
import ContactSection from "./components/ContactSection.vue";
import AppFooter from "./components/AppFooter.vue";

import { useScrollReveal } from "./composables/useScrollReveal";
useScrollReveal();
</script>
