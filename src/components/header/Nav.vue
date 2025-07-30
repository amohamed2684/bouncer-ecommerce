<template lang="html">
  <div 
    class="flex justify-center w-full max-md:fixed max-md:justify-start max-md:item-center max-md:left-[-100%] max-md:top-0 max-md:h-full max-md:shadow-lg max-md:border-e-2 border-gray-400"
    :class="{'max-md:left-[0px] max-md:bg-gray-200 dark:max-md:bg-gray-800 max-md:max-w-[250px] w-full max-md:z-40': mobileNavOpen}"
    >
    <ul 
      class="flex flex-row items-center p-4 gap-4 mt-4 font-medium rounded-lg rtl:space-x-reverse dark:text-white"
      :class="{'max-md:flex-col max-md:gap-4 max-md:items-start max-md:justify-center': mobileNavOpen}"
    >
      <li v-for="link in links" :key="link" class="hover:text-blue-500">
        <router-link 
          class="uppercase"
          :to="{ name: link.path }"
        >{{ link.name }}</router-link>
      </li>
    </ul>

    <div 
      class="hidden max-md:flex max-md:fixed z-50"
      :class="{'max-md:left-[0px] max-md:top-0 m-4 z-50': mobileNavOpen}"
    >
      <Logo class="text-red-600 dark:text-red-500" />
    </div>
  </div>

</template>
<script setup>
  import { RouterLink } from 'vue-router';
  import Logo from './Logo.vue';

  defineProps({
    mobileNavOpen: {
      type: Boolean,
      required: true
    }
  })

  const links = [
    { 
      name: 'HOME',
      path: 'Home'
    },
    { 
      name: 'STORE',
      path: 'Store'
    },
    { 
      name: 'iPhone',
      path: 'Home'
    },
    { 
      name: 'iPad',
      path: 'Home'
    },
    { 
      name: 'Macbook',
      path: 'Home'
    },
    { 
      name: 'Accessories',
      path: 'Home'
    },
  ]
</script>
<style scoped lang="scss">

</style>