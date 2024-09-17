<template>
    <header class="absolute top-0 left-0 right-0 z-10">
        <nav class="flex justify-between items-center p-4">
            <!-- Section gauche -->
            <ul class="flex items-center">
                <li>
                    <NuxtLink to="/" class="text-white text-2xl font-bold">
                        <img src="/assets/images/Logo_white.png" alt="logo" />
                    </NuxtLink>
                </li>
            </ul>

            <!-- Section centrale -->
            <ul class="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
                <li>
                    <NuxtLink to="/"
                        class="bg-yellow-200 text-black font-bold py-2 px-4 border border-black rounded hover:bg-yellow-300 duration-200 mx-4">
                        T
                    </NuxtLink>
                    <NuxtLink to="/team" class="text-white text-xl font-bold">LA TEAM</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/"
                        class="bg-yellow-200 text-black font-bold py-2 px-4 border border-black rounded hover:bg-yellow-300 duration-200 mx-4">
                        E
                    </NuxtLink>
                    <NuxtLink to="/esport" class="text-white text-xl font-bold">ESPORT</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/"
                        class="bg-yellow-200 text-black font-bold py-2 px-4 border border-black rounded hover:bg-yellow-300 duration-200 mx-4">
                        S
                    </NuxtLink>
                    <NuxtLink to="/shop" class="text-white text-xl font-bold">SHOP</NuxtLink>
                </li>
            </ul>

            <!-- Section droite -->
            <NuxtLink to="/shop">
                <div
                    class="flex items-center justify-between bg-yellow-200 hover:bg-yellow-300 duration-150 border border-black px-4 py-2 rounded-lg">
                    <div class="flex items-center space-x-2">
                        <img class="w-8 h-8" src="/assets/images/shoppingBag.png" alt="Shopping bag icon" />
                    </div>
                </div>
            </NuxtLink>
        </nav>
    </header>
</template>

<script>
export default {
    mounted() {
        // Ajoute l'écouteur pour capturer l'événement "keydown"
        window.addEventListener("keydown", this.handleKeyPress);
    },
    beforeDestroy() {
        // Retire l'écouteur d'événements lorsqu'on quitte le composant
        window.removeEventListener("keydown", this.handleKeyPress);
    },
    methods: {
        handleKeyPress(event) {
            // Vérifie la touche pressée et redirige vers la page correspondante
            if (event.key === "t" || event.key === "T") {
                this.$router.push("/team");
            } else if (event.key === "e" || event.key === "E") {
                this.$router.push("/esport");
            } else if (event.key === "s" || event.key === "S") {
                this.$router.push("/shop");
            } else if (event.key === "h" || event.key === "H") {
                this.$router.push("/");
            }
        },
    },
};
</script>