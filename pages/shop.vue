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
        </div>

        <!-- Section des articles -->
        <div class="grid grid-cols-4 gap-8 max-w-7xl text-3xl my-8">
            <!-- Carte pour chaque article -->
            <div v-for="item in items" :key="item.slug" class="relative group overflow-hidden rounded-xl">
                <!-- Redirection vers la page dynamique avec les données du produit -->
                <NuxtLink :to="`/merch_pages/${item.slug}`" class="block w-full h-full">
                    <img :src="item.images[0]" :alt="item.name"
                        class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h2 class="text-white text-4xl font-bold text-center">{{ item.name }}</h2>
                    </div>
                </NuxtLink>
            </div>
        </div>

        <!-- Pied de page -->
        <Footer />
    </div>
</template>

<script setup>
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'
import { gsap } from 'gsap';
import { onMounted, ref } from 'vue';

// Liste centralisée des articles
const items = [
    {
        name: 'T-SHIRT COMPÉTITION',
        slug: 't-shirt-competition',
        images: ['/merch/t-shirt_1_1.png', '/merch/t-shirt_1_2.png', '/merch/t-shirt_1_3.png'],
        description: 'Exprime ta passion pour le club avec nos t-shirts Gentle Mates. Fabriqués en coton doux,\
         ces t-shirts offrent une coupe confortable tout en arborant le logo brodé de notre club.',
        price: 25.00,
        sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
        name: 'HOODIE HOOP HUSTLERS VIOLET',
        slug: 'hoodie-hoop-hustlers-violet',
        images: ['/merch/sweat_1_1.png', '/merch/sweat_1_2.png', '/merch/sweat_1_3.png'],
        description: 'Plonge dans le confort ultime avec nos hoodies Gentle Mates à la coupe oversize. Parfaits\
         pour les sessions de jeu prolongées ou pour te détendre entre les matchs, ces hoodies sont un mélange \
         d\'élégance et d\'efficacité.',
        price: 20.00,
        sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
        name: 'JOGGING LOGO VIOLET',
        slug: 'jogging-logo-violet',
        images: ['/merch/jogging_1_1.png', '/merch/jogging_1_2.png', '/merch/jogging_1_3.png'],
        description: 'Conçus pour le mouvement et le confort, ces joggings sont parfaits pour les séances \
        d\'entraînement en intérieur comme en extérieur ou pour se détendre après une victoire bien méritée.',
        price: 40.00,
        sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
        name: 'ÉCHARPE LOGO NOIR / VIOLET',
        slug: 'echarpe-logo-noir-violet',
        images: ['/merch/echarpe_1_1.png', '/merch/echarpe_1_2.png'],
        description: 'Sac à dos pratique pour vos déplacements. Parfait pour l\'école ou le travail.',
        price: 35.00,
        sizes: ['UNIQUE']
    },
]

const lines = ref(['CHOISIS', 'TON MERCH']); // Lignes à afficher

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