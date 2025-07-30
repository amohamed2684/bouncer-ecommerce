<template lang="html">
  <section class="max-w-screen-xl mx-auto flex flex-col gap-12">
    <h2 class="text-center dark:text-white text-2xl font-medium drop-shadow-xl uppercase tracking-wide">
      Featured Products
    </h2>
    <div class="flex flex-row items-center gap-12 max-lg:grid max-lg:grid-cols-2 max-md:grid-cols-1">
      <ProductSideCard v-for="(product, index) in products" :key="index" :product="product" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import ProductSideCard from './ProductSideCard.vue';

  const products = [
    {
      title: 'Beats solo 2 on ear headphones - black',
      category: 'Mac',
      image: new URL('@/assets/img/featured products/first.png', import.meta.url).href,
      rating: 4,
      price: 600,
      totalPrice: 500,
    },
    {
      title: 'H-squared tvTray',
      category: 'Mac',
      image: new URL('@/assets/img/featured products/second.png', import.meta.url).href,
      rating: 4,
      price: 600,
      totalPrice: 500,
    },
    {
      title: 'Apple Macbook Pro',
      category: 'Mac',
      image: new URL('@/assets/img/featured products/third.png', import.meta.url).href,
      rating: 4,
      price: 600,
      totalPrice: 500,
    },
  ];

</script>

<style scoped lang="css">
  
</style>