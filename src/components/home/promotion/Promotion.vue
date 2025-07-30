<template lang="html">
  <div 
    class="flex flex-row max-md:flex-col gap-4 items-center justify-between text-white mx-auto"
  >
    <!-- Left Side - Text -->
    <div class=" max-md:text-center">
      <h2 class="text-4xl font-bold mb-12">{{ slide.title }}</h2>
      <p class="text-lg mb-12">{{ slide.description }}</p>
      <a 
        :href="slide.link" 
        class="font-medium uppercase hover:bg-white hover:text-black transition cursor-pointer"
      >
        <span class="border-b-2 border-white py-2">Shop Now</span>
      </a>
    </div>

    <!-- Right Side - Image -->
    <div class="max-w-80 max-h-80 min-w-20 mx-auto overflow-hidden">
      <img 
        :src="slide.image" 
        :alt="slide.title"
        class="w-full h-full drop-shadow-lg"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
const slide = {
  title: "iPhone 6 Plus",
  description: "Performance and design. Taken right to the edge.",
  link: "#",
  image: new URL('@/assets/img/promotion/promotion.png', import.meta.url).href,
}
</script>
<style lang="css">
  
</style>