<template lang="html">
  <div>
    <a href="#" class="grid grid-cols-2 items-center md:flex-row max-w-md hover:bg-gray-100  dark:hover:bg-gray-700">
        <img class="object-cover w-32 h-32 rounded-t-lg border border-gray-200 dark:border-gray-600 md:rounded-none md:rounded-s-lg" :src="product.image" :alt="product.title">
        <div class="flex flex-row justify-between text-center p-4 leading-normal">
            <div class="text-center">
              <h5 class="mb-2 max-w-screen-md text-lg font-medium tracking-tight text-gray-900 dark:text-white">{{ product.title }}</h5>

            <div class="flex justify-center my-2">
              <font-awesome-icon
                v-for="x in 5"
                :key="x"
                :class="{'text-yellow-300': x <= product.rating, 'text-gray-400': x > product.rating}"
                icon="fa-solid fa-star" />
            </div>

            <div class="flex flex-row gap-x-6 justify-center">
              <span class="text-red-400 font-medium">
                ${{ product.totalPrice.toFixed(2) }}
              </span>
              <span 
                v-if="product.price && product.price > product.totalPrice"
                class="text-gray-400 line-through"
              >
                ${{ product.price.toFixed(2) }}
              </span>
            </div>
            </div>
        </div>
    </a>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    product: {
      type: Object,
      required: true
    }
  });
</script>

<style scoped lang="css">
  
</style>