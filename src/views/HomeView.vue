<template lang="html">
  <div class="flex flex-col justify-center gap-24">
    <HeroCarousel />
    <Suspense>
      <BestSeller />
    </Suspense>
    <section class="my-4 h-100 max-md:h-140 flex items-center bg-blue-500 overflow-hidden">
      <Promotion />
    </section>
    <News />
    <FeaturedProducts />
  </div>
</template>
<script setup>
import BestSeller from '@/components/home/best seller/BestSeller.vue';
import HeroCarousel from '@/components/home/hero/HeroCarousel.vue';
import FeaturedProducts from '@/components/home/featured products/FeaturedProducts.vue';
import News from '../components/home/news/News.vue';
import Promotion from '@/components/home/promotion/promotion.vue';


</script>
<style scoped lang="css">
  
</style>