<template lang="html">
  <section class="max-w-screen-xl mx-auto flex flex-col gap-12">
    <h2 class="text-center dark:text-white text-2xl font-medium drop-shadow-xl uppercase tracking-wide">
      Latest News
    </h2>
    <div class="flex flex-row items-center gap-12 max-lg:grid max-lg:grid-cols-2 max-md:grid-cols-1">
      <NewsCard v-for="(newsPiece, index) in news" :key="index" :newsPiece="newsPiece" />
    </div>
  </section>
</template>

<script setup lang="ts">
import NewsCard from './NewsCard.vue';


const news = [
  {
    date: "01 Jan, 2015",
    image: new URL('@/assets/img/latest news/first.png', import.meta.url).href,
    title: "Typesetting Industry",
    description: "Lorem ipsum dolor, sit amet consectetur adipiscing elit. Neque, ut?"
  },
  {
    date: "01 Jan, 2015",
    image: new URL('@/assets/img/latest news/second.png', import.meta.url).href,
    title: "Typesetting Industry",
    description: "Lorem ipsum dolor, sit amet consectetur adipiscing elit. Neque, ut?"
  },
  {
    date: "01 Jan, 2015",
    image: new URL('@/assets/img/latest news/third.png', import.meta.url).href,
    title: "Typesetting Industry",
    description: "Lorem ipsum dolor, sit amet consectetur adipiscing elit. Neque, ut?"
  }
];

</script>

<style scoped lang="css">
  
</style>