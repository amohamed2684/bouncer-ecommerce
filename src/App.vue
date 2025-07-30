<script setup lang="ts">
import { RouterView, useRoute, useRouter } from 'vue-router';
import { useDark, useToggle } from '@vueuse/core';
import Headers from './components/header/Headers.vue';
import Nav from './components/header/Nav.vue';
import BreadCrumbs from './components/header/BreadCrumbs.vue';
import Logo from './components/header/Logo.vue';
import Popup from './components/general/Popup.vue';
import FooterAbout from './components/footer/FooterAbout.vue';
import FooterInfo from './components/footer/FooterInfo.vue';
import FooterBottom from './components/footer/FooterBottom.vue';
import { ref } from 'vue';

// Dark mode state
const isDarkMode = useDark();
const toggleDarkMode = useToggle(isDarkMode);
const mobileNavOpen = ref(false);

</script>

<template>
  <div :class="{ dark: isDarkMode }" class="">
    <div class="dark:bg-neutral-900">
      <header class="gap-2">
        <Headers :is-dark-mode="isDarkMode" @toggle-dark="toggleDarkMode" @toggle-mobile-nav="mobileNavOpen = !mobileNavOpen"/>
        <div class="flex justify-center">
          <Logo class="text-red-600 dark:text-red-500" />
        </div>
        <Nav :mobile-nav-open="mobileNavOpen" />
        <BreadCrumbs />
      </header>

      <!-- Main App Content -->
      <main class="flex-grow w-full">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>

      <!-- Footer -->
      <footer class="flex flex-col gap-8 mt-12">
        <FooterAbout />
        <FooterInfo />
        <FooterBottom />
      </footer>

      <!-- Newsletter Popup -->
       <div class="absolute top-50 left-0">
         <Popup />
      </div>
       </div>
  </div>
</template>

<style scoped></style>
