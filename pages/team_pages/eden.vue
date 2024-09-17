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

            <!-- Texte centré avec un fond blanc -->
            <div class="absolute inset-0 flex flex-col justify-center items-center text-center z-0">
                <div
                    class="relative flex flex-col text-start bg-white text-black w-full max-w-7xl space-y-4 p-8 rounded-xl mt-20">
                    <div class="flex flx-row justify-between border-dashed border-bgColor border-b-2">
                        <div class="flex flex-row space-x-4 items-center">
                            <img class="size-32" src="/assets/images/eden_memoji-removebg-preview.png" alt="Nils memoji">
                            <img class="h-20" src="/assets/images/Valorant Black.svg" alt="NBA2K logo">
                        </div>
                        <div class="flex flex-row space-x-2 items-center">
                            <img class="size-8" src="/assets/images/snapchat-svgrepo-com.svg" alt="Snapchat logo">
                            <img class="size-8" src="/assets/images/instagram-svgrepo-com.svg" alt="Instagram logo">
                            <div class="bg-black text-white font-bold text-xl p-2 rounded-lg">JOUEUR</div>
                        </div>
                    </div>
                    <div>
                        <p class="ml-8"><span class="text-stone-500">Eden</span> AKA</p>
                        <h1 class="text-3xl font-bold ml-12">AIDENNE</h1><br>
                        <h1 class="text-3xl font-bold ml-12">BIO</h1>
                        <p>Eden "Aidenne" Monny est un passionné de jeux vidéo et de compétition, avec un intérêt
                            particulier pour Valorant, les jeux de course et de sport. En 2024, il décide de transformer
                            sa passion en projet concret en fondant une équipe e-sport. Son ambition est de créer un
                            groupe soudé, performant et prêt à se dépasser dans chaque compétition, c'est pourquoi, il
                            co-crée Hoop Hustlers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from '~/components/header.vue'
</script>
