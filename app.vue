<template>
  <div class="bg-bgColor">
    <!-- Transition GSAP -->
    <Transition mode="out-in" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <NuxtPage />
    </Transition>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'

// Animation d'entrée avant que l'élément soit ajouté au DOM
const beforeEnter = (el) => {
  gsap.set(el, { opacity: 0, y: 50 }) // Initialisation de l'opacité et de la position
}

// Animation pendant l'entrée (transition visible)
const enter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    y: 0, // Revenir à la position originale
    duration: 0.8, // Durée de l'animation
    ease: 'power2.out',
    onComplete: done, // Indiquer quand l'animation est terminée
  })
}

// Animation pendant la sortie
const leave = (el, done) => {
  gsap.to(el, {
    opacity: 0,
    y: -50, // Déplacement vers le haut
    duration: 0.5,
    ease: 'power2.in',
    onComplete: done,
  })
}
</script>