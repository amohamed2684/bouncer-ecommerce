<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import HeroSlide from "./HeroSlide.vue";

const slides = ref([
  {
    title: "iPhone X",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "#",
    image: new URL('@/assets/img/hero carousel/slide1.png', import.meta.url).href,
  },
  {
    title: "iPad 12",
    description: "High-performance and sleek design.",
    link: "#",
    image: new URL('@/assets/img/hero carousel/slider2.png', import.meta.url).href,
  },
  {
    title: "iPod 3",
    description: "A camera built for the future.",
    link: "#",
    image: new URL('@/assets/img/hero carousel/slider3.png', import.meta.url).href,
  },
  {
    title: "airPods 2",
    description: "Speed and power redefined.",
    link: "#",
    image: new URL('@/assets/img/hero carousel/slider4.png', import.meta.url).href,
  },
]);

const currentIndex = ref(0);
let interval: ReturnType<typeof setInterval> | null = null;

// Auto-slide
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length;
};

const goToSlide = (index: number) => {
  currentIndex.value = index;
};

const startAutoSlide = () => {
  interval = setInterval(() => {
    nextSlide();
  }, 3000);
};

const stopAutoSlide = () => {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
};

onMounted(startAutoSlide);
onUnmounted(stopAutoSlide);
</script>

<template>
  <div class="flex items-center justify-center bg-linear-65 from-purple-500 to-pink-500">
    <div id="carousel" class="relative w-full max-w-screen-xl">
      <!-- Carousel Wrapper -->
      <div class="w-full h-100 max-md:h-140 rounded-lg flex items-center">
        <transition name="fade" mode="out-in">
          <HeroSlide
            :key="currentIndex"
            :slide="slides[currentIndex]"
          />
        </transition>
      </div>

      <!-- Indicators -->
      <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          @click="goToSlide(index)"
          class="w-3 h-3 rounded-full transition-all duration-300"
          :class="index === currentIndex ? 'bg-blue-600' : 'bg-gray-200'"
        ></button>
      </div>

      <!-- Controls -->
      <button
        @click="prevSlide"
        @mouseenter="stopAutoSlide"
        @mouseleave="startAutoSlide"
        class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-blue-500/60 group-hover:bg-white/50 dark:group-hover:bg-blue-500/60 group-focus:ring-4 group-focus:ring-gray-50 dark:group-focus:ring-blue-500">
          <font-awesome-icon class="w-4 h-4 text-white rtl:rotate-180" icon="fa-solid fa-chevron-left" />
          <span class="sr-only">Previous</span>
        </span>
      </button>

      <button
        @click="nextSlide"
        @mouseenter="stopAutoSlide"
        @mouseleave="startAutoSlide"
        class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-blue-500/60 group-hover:bg-white/50 dark:group-hover:bg-blue-500/60 group-focus:ring-4 group-focus:ring-gray-50 dark:group-focus:ring-blue-500">
          <font-awesome-icon class="w-4 h-4 text-white rtl:rotate-180" icon="fa-solid fa-chevron-right" />
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  </div>
</template>

<style>
/* Fade Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.7s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
