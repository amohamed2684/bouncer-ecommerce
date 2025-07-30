<template>
  <div 
    class="flex flex-row max-md:flex-col max-md:text-center items-center justify-between w-full max-w-screen-md text-white mx-auto"
  >
    <!-- Left Side - Text -->
    <div class="max-w-lg">
      <h2 class="text-4xl font-bold mb-12">{{ slide.title }}</h2>
      <p class="text-lg mb-12">{{ slide.description }}</p>
      <a 
        :href="slide.link" 
        class="font-medium uppercase hover:bg-white hover:text-black transition cursor-pointer"
      >
        <span class="border-b-2 border-white py-2">More</span>
      </a>
    </div>

    <!-- Right Side - Image -->
    <div class="max-w-80 max-h-80 min-w-20 mx-auto overflow-hidden">
      <img 
        :src="slide.image" 
        :alt="slide.title"
        class="rounded-t-lg p-1 w-full h-auto"
      />
    </div>
  </div>
</template>

<script setup>
  defineProps({
    slide: {
      type: Object,
      required: true
    }
  });
</script>

<style scoped lang="css">
  
</style>