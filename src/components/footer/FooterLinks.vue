<template lang="html">
  <div class="w-full relative max-lg:text-center">
    <!-- Clickable Title -->
    <h3 
      class="text-lg font-medium text-gray-800 dark:text-gray-400 dark:max-md:text-gray-200 mb-3 
             max-md:bg-blue-900 max-md:text-white max-md:flex max-md:items-center 
             max-md:justify-between max-md:p-4 rounded-lg cursor-pointer"
      @click="isOpen = !isOpen"
    >
      {{ title }}
      <span class="hidden max-md:inline-block transition-transform duration-300"
            :class="{ 'rotate-180': isOpen }">
        <font-awesome-icon icon="fa-solid fa-chevron-down" />
      </span>
    </h3>

    <!-- Dropdown List -->
    <ul 
      class="space-y-2 transition-all duration-300 overflow-hidden 
             absolute left-0 right-0 z-10 rounded-lg max-md:dark:bg-gray-800 
             md:static md:block max-md:p-4 md:!max-h-full md:!opacity-100 max-md:shadow-lg max-md:bg-gray-200"
      :class="isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
    >
      <li v-for="(link, index) in links" :key="index">
        <a 
          :href="link.url" 
          class="font-medium text-gray-600  dark:text-gray-500 dark:max-md:text-gray-200 hover:text-blue-600 transition-colors duration-200"
        >
          {{ link.label }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  title: String,
  links: Object
});

const isOpen = ref(false);
</script>
