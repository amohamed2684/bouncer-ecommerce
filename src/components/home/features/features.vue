<template lang="html">
  <div>
    <section class="flex justify-center dark:text-white">
      <div class="flex flex-row justify-between gap-8 max-w-screen-xl">
        <div
          class="text-center flex flex-col items-center gap-4"
          v-for="(feature, index) in features"
          :key="index"
        >
          <img class=" w-18 h-18" :src="feature.image" :alt="feature.title">
          <h2 class="uppercase text-2xl font-medium tracking-wide">{{ feature.title }}</h2>
          <p>
            {{ feature.description }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
  const features = [
    {
      image: "../assets/img/features/shipping.png",
      title: 'Free Shipping',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequatur velit, cum error expedita quam saepe officia culpa quod itaque repellendus, ipsum, ducimus illum ipsa corrupti id sed enim accusamus.'
    },
    {
      image: "../assets/img/features/refund.png",
      title: '100% Refund',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequatur velit, cum error expedita quam saepe officia culpa quod itaque repellendus, ipsum, ducimus illum ipsa corrupti id sed enim accusamus.'
    },
    {
      image: "../assets/img/features/support.png",
      title: 'Support 24/7',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequatur velit, cum error expedita quam saepe officia culpa quod itaque repellendus, ipsum, ducimus illum ipsa corrupti id sed enim accusamus.'
    },
  ]
</script>
<style lang="css">
  
</style>