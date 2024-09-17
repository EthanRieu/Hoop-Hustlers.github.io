<template>
    <div>
        <Header />
        <!-- Section d'introduction avec l'image de fond -->
        <div class="relative h-screen text-white">
            <!-- Image de fond en plein écran -->
            <div class="absolute inset-0">
                <img src="/assets/images/fond_noir_violet.png" alt="Index Background Image"
                    class="w-full h-full object-cover">
            </div>
            <!-- Texte centré avec un fond noir semi-transparent -->
            <div class="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-20">
                <img ref="logo" src="/assets/images/Logo_white.png" alt="Logo Hoop Hustlers" class="logo opacity-0">
                <p ref="slogan" class="text-2xl mt-4 slogan opacity-0">Déterminés à dominer, ensemble.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import Header from '~/components/header.vue';

const logo = ref(null);
const slogan = ref(null);

onMounted(() => {
    // Animation du logo (apparaît en premier)
    gsap.to(logo.value, {
        opacity: 1,
        y: 0,
        ease: 'power2.out',
        duration: 1.5,
    });

    // Animation du slogan (apparaît après le logo)
    gsap.to(slogan.value, {
        opacity: 1,
        y: 0,
        ease: 'power2.out',
        delay: 0.5, // Le texte apparaît après le logo
        duration: 1,
    });
});
</script>

<style scoped>
.logo, .slogan {
    opacity: 0;
    transform: translateY(50px); /* Le logo et le slogan démarrent avec un léger décalage vers le bas */
}
</style>
