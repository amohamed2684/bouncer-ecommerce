<template>
  <div class="bg-gray-200 dark:bg-gray-800 py-2 my-6 rounded-md">
    <nav class="flex justify-center" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li v-for="(crumb, index) in crumbs" :key="index" class="flex items-center dark:text-white">
          <div class="flex flex-row items-center" v-if="!isLast(index)">
            <button
              class="inline-flex items-center text-md font-medium hover:text-blue-600 dark:hover:text-gray-300 cursor-pointer"
              @click="navigateTo(crumb.link)"
            >
              {{ crumb.label }}
            </button>
            <font-awesome-icon
              class="w-3 h-3 mx-1 rtl:rotate-180"
              icon="fa-solid fa-angle-right"
            />
          </div>

          <div v-else>
            <span class="text-md font-medium text-gray-500 dark:text-gray-400" aria-current="page">
              {{ crumb.label }}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

// Generate breadcrumbs dynamically from route meta
const crumbs = computed(() => {
  const dynamicCrumbs = route.matched
    .filter((r) => r.meta && r.meta.breadcrumb)
    .map((r) => ({
      label: r.meta.breadcrumb,
      link: r.path,
    }));

  // Add 'Home' only if it's not already the first breadcrumb
  return dynamicCrumbs.length > 0 && dynamicCrumbs[0].link === '/' 
    ? dynamicCrumbs 
    : [{ label: 'Home', link: '/' }, ...dynamicCrumbs];
});

// Check if the current crumb is the last one
const isLast = (index) => index === crumbs.value.length - 1;

// Navigate to the selected breadcrumb
const navigateTo = (link) => {
  router.push(link);
};
</script>

<style scoped lang="css">
  
</style>