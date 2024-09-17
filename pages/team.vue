<template>
    <div class="flex flex-col justify-center items-center min-h-screen bg-bgColor relative overflow-hidden">
        <Header />

        <!-- Motif de grille en arrière-plan -->
        <div class="absolute inset-0 z-0 pointer-events-none">
            <div class="grid-pattern w-full h-full"></div>
        </div>

        <!-- Contenu principal -->
        <div class="relative z-10 flex flex-col items-center pt-32 text-center font-bold text-white">
            <div class="text-7xl mb-16">
                <div v-for="(line, index) in lines" :key="index" class="line">{{ line }}</div>
            </div>
            <div class="relative transform rotate-2 bg-yellow-200 p-8 max-w-4xl shadow-lg">
                <p class="text-bgColor text-2xl max-w-xl mx-auto leading-relaxed tracking-wide">
                    Nilseuh, Aidenne et AKz4AFR, leaders dans leurs domaines respectifs, ont décidé
                    d'unir leurs forces autour d'un projet commun : un club ESPORT ! Forts de leur
                    expérience, ils ont maintenant à cœur de pouvoir la transmettre de la meilleure manière
                    possible et selon les valeurs qu'ils chérissent. Hoop Hustlers est né, tout commence ici.
                </p>
            </div>

            <!-- Section pres H&H -->
            <div class="grid grid-cols-3 max-w-7xl text-3xl space-x-4 my-8">
                <div class="flex flex-col bg-gradient-to-r from-degrade_one to-degrade_two rounded-xl">
                    <NuxtLink to="/team_pages/ethan">
                        <img class="size-" src="/assets/images/ethan_1_memoji-removebg-preview.png" alt="Ethan picture">
                        <h1>AKZ4AFR</h1>
                    </NuxtLink>
                </div>
                <div class="flex flex-col bg-gradient-to-r from-degrade_two to-degrade_three rounded-xl">
                    <NuxtLink to="/team_pages/nils">
                        <img src="/assets/images/memoji_nils.png" alt="Nils picture">
                        <h1>NILSEUH</h1>
                    </NuxtLink>
                </div>
                <div class="flex flex-col bg-gradient-to-r from-degrade_three to-degrade_four rounded-xl">
                    <NuxtLink to="/team_pages/eden">
                        <img src="/assets/images/eden_memoji-removebg-preview.png" alt="Eden picture">
                        <h1>AIDENNE</h1>
                    </NuxtLink>
                </div>
            </div>
        </div>
        
        <Footer />
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import Header from '~/components/header.vue';
import Footer from '~/components/footer.vue';

// Séparer chaque ligne
const lines = ref(['QUI', 'SONT LES', 'HUSTLERS']); // Lignes à affichers

onMounted(() => {
    gsap.set('.line', { opacity: 0, y: 50 }); // Initialiser les lignes avec gsap

    gsap.to('.line', {
        opacity: 1,
        y: 0,
        ease: 'power2.out',
        stagger: 0.3, // Délai entre chaque ligne
        duration: 0.8, // Durée de l'animation
    });
});
</script>

<style scoped>
.line {
    display: block;
    /* Assurez-vous que chaque ligne est sur un bloc séparé */
    opacity: 0;
}
</style>
