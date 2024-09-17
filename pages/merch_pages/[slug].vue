<template>
    <div class="min-h-screen flex flex-col justify-between bg-bgColor text-white">
        <Header />
        <!-- Motif de grille en arrière-plan -->
        <div class="absolute inset-0 z-0 pointer-events-none">
            <div class="grid-pattern w-full h-full"></div>
        </div>

        <!-- Contenu principal -->
        <div class="flex flex-col items-center pt-32 mb-8">
            <!-- Section du titre avec l'animation du product.name -->
            <h1 ref="title" class="text-7xl font-bold mb-8 leading-tight text-center">
                <span v-for="(line, index) in lines" :key="index" class="line">{{ line }}</span>
            </h1>

            <div class="grid grid-cols-2">
                <div class="">
                    <!-- Galerie d'images -->
                    <div class="flex flex-row pl-8">
                        <!-- Miniatures des images -->
                        <div class="flex flex-col space-y-4">
                            <img v-for="(img, index) in product.images" :key="index" :src="img" alt="miniature"
                                @click="currentImage = img" class="w-16 h-16 cursor-pointer border-2 p-1"
                                :class="{ 'border-purple-400': currentImage === img, 'border-gray-400': currentImage !== img }">
                        </div>

                        <!-- Image principale -->
                        <div class="relative flex justify-center items-center w-full">
                            <img :src="currentImage" alt="current merch"
                                class="w-96 h-auto object-cover rounded-xl shadow-lg">
                        </div>
                    </div>
                </div>

                <div>
                    <!-- Description et informations du produit -->
                    <p class="text-xl mt-8">{{ product.description }}</p>

                    <!-- Sélecteur de tailles -->
                    <div v-if="product.sizes.length" class="flex mt-4 space-x-4">
                        <button v-for="size in product.sizes" :key="size" @click="selectedSize = size"
                            :class="selectedSize === size ? 'bg-yellow-200 text-bgColor' : 'bg-gray-600 text-white'"
                            class="p-2 rounded-md">
                            {{ size }}
                        </button>
                    </div>

                    <!-- Prix et boutons -->
                    <div class="mt-8 flex space-x-4">
                        <p class="text-3xl font-bold">€{{ product.price.toFixed(2) }}</p>
                    </div>

                    <div class="mt-4 flex space-x-4">
                        <NuxtLink to="/shop" class="text-lg font-bold bg-gray-700 px-4 py-2 rounded-md">Back</NuxtLink>
                        <button @click="addToCart"
                            class="text-lg text-bgColor font-bold bg-yellow-200 px-4 py-2 rounded-md">Ajouter
                            au panier</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <Footer />
    </div>
</template>

<script setup>
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';

// Liste centralisée des articles
const items = [
    {
        name: 'T-SHIRT COMPÉTITION',
        slug: 't-shirt-competition',
        images: ['/merch/t-shirt_1_1.png', '/merch/t-shirt_1_2.png', '/merch/t-shirt_1_3.png'],
        description: 'Exprime ta passion pour le club avec nos t-shirts Gentle Mates. Fabriqués en coton doux,\ ces t-shirts offrent une coupe confortable tout en arborant le logo brodé de notre club.',
        price: 25.00,
        sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
        name: 'HOODIE HOOP HUSTLERS VIOLET',
        slug: 'hoodie-hoop-hustlers-violet',
        images: ['/merch/sweat_1_1.png', '/merch/sweat_1_2.png', '/merch/sweat_1_3.png'],
        description: 'Plonge dans le confort ultime avec nos hoodies Gentle Mates à la coupe oversize. Parfaits pour les sessions de jeu prolongées ou pour te détendre entre les matchs, ces hoodies sont un mélange d\'élégance et d\'efficacité.',
        price: 40.00,
        sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
        name: 'JOGGING LOGO VIOLET',
        slug: 'jogging-logo-violet',
        images: ['/merch/jogging_1_1.png', '/merch/jogging_1_2.png', '/merch/jogging_1_3.png'],
        description: 'Conçus pour le mouvement et le confort, ces joggings sont parfaits pour les séances d\'entraînement en intérieur comme en extérieur ou pour se détendre après une victoire bien méritée.',
        price: 30.00,
        sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
        name: 'ÉCHARPE LOGO NOIR / VIOLET',
        slug: 'echarpe-logo-noir-violet',
        images: ['/merch/echarpe_1_1.png', '/merch/echarpe_1_2.png'],
        description: 'Cette écharpe, fabriquée en coton, arbore fièrement les couleurs et logos brodés du club pour soutenir votre équipe préférée lors des plus grands matchs',
        price: 15.00,
        sizes: ['UNIQUE']
    },
]

// Récupération du slug dans l'URL
const route = useRoute()
const product = items.find(item => item.slug === route.params.slug)

// Image actuellement affichée (par défaut la première image)
const currentImage = ref(product.images[0])

// Taille sélectionnée
const selectedSize = ref()

// Fonction pour ajouter au panier
const addToCart = () => {
    if (selectedSize.value) {
        alert(`Article "${product.name}" taille "${selectedSize.value}" ajouté au panier !`)
    } else {
        alert('Veuillez sélectionner une taille.')
    }
}

// Séparer chaque mot du `product.name` pour afficher par ligne
const lines = ref(product.name.split(','))

onMounted(() => {
    gsap.set('.line', { opacity: 0, y: 50 }) // Initialiser les lignes avec gsap

    gsap.to('.line', {
        opacity: 1,
        y: 0,
        ease: 'power2.out',
        stagger: 0.3, // Délai entre chaque mot
        duration: 0.8, // Durée de l'animation
    })
})
</script>

<style scoped>
.line {
    display: block;
    opacity: 0;
}
</style>
