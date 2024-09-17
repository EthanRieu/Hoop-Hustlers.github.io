<template>
    <div class="flex flex-col justify-center items-center min-h-screen bg-bgColor">
        <Header />
        <!-- Motif de grille en arrière-plan -->
        <div class="absolute inset-0 z-0 pointer-events-none">
            <div class="grid-pattern w-full h-full"></div>
        </div>
        <div class="flex flex-col items-center pt-32 text-center font-bold text-white">
            <div class="text-7xl mb-16">
                <div v-for="(line, index) in lines" :key="index" class="line">{{ line }}</div>
            </div>

            <!-- Section pres équipes -->
            <div class="grid grid-cols-2 gap-8 max-w-7xl text-3xl my-8">
                <!-- Carte pour BO6 -->
                <div class="relative group overflow-hidden rounded-xl">
                    <NuxtLink to="/esport_pages/bo6" class="block w-full h-full">
                        <img src="/assets/images/bg_BO6.jpg" alt="Rocket League"
                            class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110">
                        <div class="absolute inset-0  flex items-center justify-center">
                            <img src="/assets/images/BO6_logo-removebg-preview.png" alt="BO6 logo">
                        </div>
                    </NuxtLink>
                </div>

                <!-- Carte pour Fortnite -->
                <div class="relative group overflow-hidden rounded-xl">
                    <NuxtLink to="/esport_pages/fortnite" class="block w-full h-full">
                        <img src="/assets/images/fortnite_bg.png" alt="Fortnite"
                            class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110">
                        <div class="absolute inset-0  flex items-center justify-center">
                            <img class="w-72" src="/assets/images/white_fortnite_logo-removebg-preview.png"
                                alt="Fortnite logo">
                        </div>
                    </NuxtLink>
                </div>

                <!-- Carte pour Valorant -->
                <div class="relative group overflow-hidden rounded-xl">
                    <NuxtLink to="/esport_pages/valorant" class="block w-full h-full">
                        <img src="/assets/images/VALO_bg.png" alt="Valorant"
                            class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110">
                        <div class="absolute inset-0  flex items-center justify-center">
                            <img class="w-96" src="/assets/images/white_valo_logo-removebg-preview.png"
                                alt="Valorant logo">
                        </div>
                    </NuxtLink>
                </div>

                <!-- Carte pour Accetto Corsa Competizione -->
                <div class="relative group overflow-hidden rounded-xl">
                    <NuxtLink to="/esport_pages/acc" class="block w-full h-full">
                        <img src="/assets/images/acc_bg.png" alt="Accetto Corsa Competizione"
                            class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110">
                        <div class="absolute inset-0  flex items-center justify-center">
                            <img class="w-96" src="/assets/images/white_acc_logo-removebg-preview.png" alt="ACC logo">
                        </div>
                    </NuxtLink>
                </div>

                <!-- Carte pour NBA2K -->
                <div class="relative group overflow-hidden rounded-xl">
                    <NuxtLink to="/esport_pages/nba2k" class="block w-full h-full">
                        <img src="/assets/images/NBA2K_bg.jpg" alt="NBA2K"
                            class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110">
                        <div class="absolute inset-0  flex items-center justify-center">
                            <img class="w-96" src="/assets/images/white_nba2k_logo-removebg-preview.png"
                                alt="NBA2K logo">
                        </div>
                    </NuxtLink>
                </div>

                <!-- Carte pour Minecraft -->
                <div class="relative group overflow-hidden rounded-xl">
                    <NuxtLink to="/esport_pages/minecraft" class="block w-full h-full">
                        <img src="/assets/images/minecraft_bg.jpg" alt="Minecraft"
                            class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110">
                        <div class="absolute inset-0  flex items-center justify-center">
                            <img class="w-64" src="/assets/images/Minecraft-Logo.png" alt="Minecraft logo">
                        </div>
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
const lines = ref(['CHOISIS', 'TON ÉQUIPE']); // Lignes à affichers

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
