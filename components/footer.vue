<template>
    <div class="flex flex-col w-full p-8 bg-black opacity-60 text-white">
        <!-- Barre de navigation avec espace entre le logo et les liens -->
        <nav class="flex flex-row justify-between items-center mb-4">
            <!-- Logo à gauche -->
            <nuxt-link to="/">
                <img class="w-32" src="/assets/images/Logo_white.png" alt="Logo blanc HOOP HUSTLERS">
            </nuxt-link>

            <!-- Liens à droite -->
            <ul class="flex space-x-6 text-white text-sm">
                <nuxt-link to="#">
                    <li>LEGAL</li>
                </nuxt-link>
                <nuxt-link to="#">
                    <li>CONTACT</li>
                </nuxt-link>
                <nuxt-link to="#">
                    <li>TERMS OF SALE</li>
                </nuxt-link>
                <nuxt-link to="#">
                    <li>TERMS OF USE</li>
                </nuxt-link>
                <nuxt-link to="#">
                    <li>FAQ</li>
                </nuxt-link>
            </ul>
        </nav>

        <!-- Footer avec Copyright et lien vers ton site -->
        <div class="flex justify-between items-center text-xs">
            <p>© Copyright 2024 - Hoop Hustlers. All rights reserved.</p>
            <p>Website by <a href="https://erieu.fr" target="_blank" class="hover:text-yellow-100 transition">Ethan Rieu</a></p>
        </div>
    </div>
</template>
