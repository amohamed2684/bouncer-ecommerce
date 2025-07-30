<template lang="html">
  <div>
    <a href="#" class="grid grid-cols-2 items-center md:flex-row max-w-md hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
        <img class="object-cover w-32 h-32 rounded-t-lg border border-gray-200 dark:border-gray-400 md:rounded-none" :src="newsPiece.image" :alt="newsPiece.title">
        <div class="flex flex-col justify-between leading-normal">
            <div class=" flex flex-col grow font-medium">
              <p class="text-gray-600 dark:text-gray-400">{{ newsPiece.date }}</p>

              <h5 class="mb-2 max-w-screen-md text-lg font-medium tracking-tight dark:text-white">{{ newsPiece.title }}</h5>

              <p class="font-normal">{{ newsPiece.description }}</p>
            </div>
        </div>
    </a>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    newsPiece: {
      type: Object,
      required: true
    }
  });
</script>

<style scoped lang="css">
  
</style>