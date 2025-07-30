<template>
  <div class="bg-white dark:bg-blue-500 px-4 border-b dark:border-gray-400 border-gray-100 font-medium">
    <div class="max-w-screen-xl mx-auto px-4 py-2 flex flex-row justify-between">
      <form class="w-fit flex flex-nowrap items-center content-between gap-x-3">
        <select class="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:placeholder-gray-400 dark:text-white dark:bg-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 ">
          <option value="en" selected>EN</option>
          <option value="ar">AR</option>
        </select>

        <select class="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:placeholder-gray-400 dark:text-white dark:bg-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="usd" selected>USD</option>
          <option value="egp">EGP</option>
        </select>

        <button 
          @click.prevent="$emit('toggle-dark')" 
          class="text-gray-900 text-sm rounded-lg hover:border-1 hover:border-blue-300 focus:ring-blue-500 focus:border-blue-500 block px-2 py-1.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:hover:border-gray-100"
        >
          <font-awesome-icon v-if="!isDarkMode" icon="fa-solid fa-sun" />
          <font-awesome-icon v-else icon="fa-solid fa-moon" />
        </button>
      </form>

      <div class="flex flex-row items-center gap-4 dark:text-white">
        <div class="flex items-center relative rounded-4xl p-1 transition-all duration-300 ease-in-out group focus-within:min-w-md max-md:focus-within:min-w-sm focus-within:border">
          <!-- Search Input -->
          <input 
            type="text" 
            placeholder="Search a product"
            class="peer hidden my-1 px-2 grow outline-none font-medium bg-transparent min-w-0 transition-all duration-300 opacity-0 group-focus-within:block group-focus-within:opacity-100"
          />
          
          <!-- Search Button -->
          <button 
            class="cursor-pointer right-0 px-2 p-1 rounded-2xl transition-colors group-focus-within:bg-gray-300 dark:group-focus-within:bg-blue-700"
            aria-label="submit search"
          >
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </button>
        </div>

        <router-link 
          :to="{ name: 'Cart' }" 
          class="flex items-center hover:text-blue-500 space-x-2 max-md:fixed max-md:left-[-100%] font-medium"
          :class="{'max-md:left-[0px] max-md:bottom-15 m-4 z-50': mobileNavOpen}"
        >
          <font-awesome-icon icon="fa-solid fa-basket-shopping" />
          <span>$0.00</span>
        </router-link>

        <button 
          class="flex flex-nowrap items-center max-md:fixed max-md:left-[-100%] space-x-2 font-medium"
          :class="{'max-md:left-[0px] max-md:bottom-5 m-4 z-50': mobileNavOpen}"
        >
          <font-awesome-icon icon="fa-regular fa-user" />
          <span class="text-nowrap">My Profile</span>
        </button>

        <!-- Mobile nav toggler -->
        <div class="hidden max-md:block">
          <button
                type="button"
                class="w-10 h-10 inline-flex items-center p-2 justify-center text-xl text-gray-600 dark:text-white rounded-md focus:outline-none focus:ring focus:ring-gray-500 dark:focus:ring-gray-200"
                @click="toggleMobileNav"
              >
                <span class="sr-only">Open main menu</span>
                <font-awesome-icon v-if="!mobileNavOpen" icon="bars" />
                <font-awesome-icon v-else icon="x" />
              </button>
        </div>
      </div>

      
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const mobileNavOpen = ref(false);

const toggleMobileNav = () => {
  mobileNavOpen.value = !mobileNavOpen.value;
  emit('toggleMobileNav')
}

defineProps({
  isDarkMode: Boolean
});

const emit = defineEmits(['toggle-dark', 'toggleMobileNav']);
</script>

<style scoped>

</style>
