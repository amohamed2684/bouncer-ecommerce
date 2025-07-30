<template lang="html">
  <div class="grid grid-cols-3 max-lg:grid-cols-1 items-center justify-between max-w-screen-xl mx-auto ">
    <!-- Brand Section -->
    <div class="flex flex-col gap-4 text-center lg:text-left">
      <Logo class="text-gray-400 dark:text-gray-400" />
      <p class="text-gray-600 mt-2 dark:text-gray-400">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Since the 1500s, when an unknown printer...
      </p>
    </div>

    <!-- Follow Us Section -->
    <div class="text-center lg:text-left">
      <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-400">Follow Us</h3>
      <p class="text-gray-600 dark:text-gray-500 text-sm mt-2">Stay connected with us on social media.</p>
      <div class="flex flex-row justify-center md:justify-start space-x-4 mt-4">
        <a href="#" class="text-blue-600 text-2xl hover:text-blue-800">
          <font-awesome-icon icon="fab fa-facebook" />
        </a>
        <a href="#" class="text-blue-400 text-2xl hover:text-blue-600">
          <font-awesome-icon icon="fab fa-twitter"></font-awesome-icon>
        </a>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="text-center lg:text-left">
      <h3 class="text-lg font-medium text-gray-800 dark:text-gray-400">Contact Us</h3>
      <p class="text-gray-600 dark:text-gray-500  mt-2">My Company, 4578 Marmora Road, Glasgow D04 89GR</p>
      <p class="text-gray-600 dark:text-gray-500">
        Call us: <span class="font-medium">0123-456-789</span>
      </p>
      <p class="text-gray-600 dark:text-gray-500">
        Email:
        <a href="mailto:support@whatever.com" class="text-blue-600 dark:text-blue-500 hover:underline">
          support@whatever.com
        </a>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Logo from '../header/Logo.vue';

</script>
<style lang="css">
  
</style>