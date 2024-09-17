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
                    class="relative flex flex-col text-start bg-white text-black w-full max-w-7xl space-y-4 p-4 rounded-xl mt-20">
                    <div class="flex justify-between border-dashed border-bgColor border-b-2 pb-4">
                        <div class="flex flex-row space-x-4 items-center">
                            <img class="size-32" src="/assets/images/ethan_2_memoji-removebg-preview.png"
                                alt="Nils memoji">
                            <img class="h-20" src="/assets/images/ACC_logo.png" alt="NBA2K logo">
                            <img class="h-20 rounded-xl" src="/assets/images/BO6_logo_xs.png" alt="ACC logo">
                            <img class="h-20" src="/assets/images/Minecraft-Logo.png" alt="NBA2K logo">
                        </div>
                        <div class="flex flex-row space-x-2 items-center">
                            <img class="size-8" src="/assets/images/snapchat-svgrepo-com.svg" alt="Snapchat logo">
                            <img class="size-8" src="/assets/images/instagram-svgrepo-com.svg" alt="Instagram logo">
                            <div class="bg-black text-white font-bold text-xl p-2 rounded-lg">JOUEUR</div>
                        </div>
                    </div>
                    <div>
                        <p class="ml-8"><span class="text-stone-500">Ethan</span> AKA</p>
                        <h1 class="text-3xl font-bold ml-12">AKZ4AFR</h1><br>
                        <h1 class="text-3xl font-bold ml-12">BIO</h1>
                        <p>Ethan "AKz4aFR" Rieu est un jeune prodige français de l'esport, reconnu pour ses performances
                            sur Assetto Corsa Competizione, Minecraft et Call of Duty: Black Ops 6. Après avoir brillé
                            sur la scène internationale, notamment sur Assetto Corsa Competizione, il a décidé de
                            quitter la compétition en tant que joueur pour se consacrer à un rôle de leader. En 2023, il
                            co-fonde Hoop Hustlers, une équipe en plein essor dans le milieu esport. Aujourd'hui, Ethan se
                            concentre sur la gestion et la formation des talents, partageant son expérience pour guider
                            la nouvelle génération vers le succès. Il reste une figure clé de l'esport, même en dehors
                            du terrain de jeu.
                        </p>
                    </div>
                    <div>
                        <h3 class="font-bold">Fun Fact :</h3>
                        <p>Outre la course virtuel, Ethan participe également à quelques courses automobiles, notamment
                            en
                            Karting, Formule Renault ou encore en MX-5 CUP.
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
