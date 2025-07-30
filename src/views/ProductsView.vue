<template>
  <div class="flex gap-6 max-w-screen-xl mx-auto dark:text-white relative">
    <!-- Sidebar content (filters, categories, etc.) -->
    <aside 
      class="w-1/4 max-w-[250px] max-md:w-full flex flex-col gap-6 max-md:absolute transition-all"
      :class="{'max-md:left-0 max-md:top-125 max-md:bg-gray-200 max-md:dark:bg-gray-800': showFilters, 'max-md:left-[-100%]': !showFilters}"
    >
      <!-- Accessories -->
      <div class="flex flex-col gap-6 bg-gray-200 dark:bg-gray-800 p-4">
        <h3 class="uppercase font-medium">Accessories</h3>
        <ol class="flex flex-col gap-4">
          <li 
            v-for="accessory in accessories" :key="accessory.name"
            class="flex justify-between"
          >
            <h4>{{ accessory.name }}</h4>
            <p class="text-gray-600 dark:text-gray-400">{{ accessory.number }}</p>
          </li>
        </ol>
      </div>

      <!-- Prices -->
      <div class="flex flex-col gap-6 bg-gray-200 dark:bg-gray-800 p-4">
        <h3 class="uppercase font-medium">Prices</h3>
        <div class="relative mb-6">
          <div class="flex justify-between">
            <h4>Range:</h4>
            <p class="text-sm">${{ priceRange }}</p>
          </div>
          <input 
            id="labels-range-input" 
            type="range" 
            v-model="priceRange" 
            min="100" 
            max="1500" 
            class="w-full h-2 bg-gray-400 rounded-lg cursor-pointer dark:bg-gray-700"
          />
          <div class="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
            <span>$100</span>
            <span>$1500</span>
          </div>
        </div>
      </div>

      <!-- Colors -->
      <div class="flex flex-col gap-6 bg-gray-200 dark:bg-gray-800 p-4">
        <h3 class="uppercase font-medium">Colors</h3>
        <div class="flex gap-2">
          <button
            v-for="color in colors" 
            :key="color.name"
            :class="[
              'w-fit cursor-pointer border-0 px-1 rounded-2xl text-' + color.class,
              { ['border-2 border-' + color.class]: selectedColor === color.name }
            ]"

            type="button" 
            @click="selectedColor = color.name"
          >
            <font-awesome-icon icon="fa-solid fa-circle" />
          </button>
        </div>
      </div>

      <!-- Brands -->
      <div class="flex flex-col gap-6 bg-gray-200 dark:bg-gray-800 p-4">
        <h3 class="uppercase font-medium">Brands</h3>
        <ol class="flex flex-col gap-4">
          <li 
            v-for="brand in brands" :key="brand.name"
            class="flex justify-between"
          >
            <h4>{{ brand.name }}</h4>
            <p class="text-gray-600 dark:text-gray-400">{{ brand.number }}</p>
          </li>
        </ol>
      </div>

      <!-- More -->
      <button class="bg-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 p-4 cursor-pointer">
        <h3 class="text-center font-medium">More</h3>
      </button>
    </aside>
    
    <!-- Main content -->
    <main class="flex flex-col items-center w-full gap-6">
      <section class="h-100 flex w-full justify-center bg-blue-500 overflow-hidden">
        <Promotion class="p-4" :slide="promotionSlide"/>
      </section>

      <!-- Settings -->
      <div class="bg-gray-200 dark:bg-gray-800 w-full flex justify-between p-2 px-8">
        <form class="flex items-center gap-x-3">
          <div class="flex items-center gap-2">
            <label for="sort-by">Sort By</label>
            <select id="sort-by" v-model="sortBy" class="text-sm border border-gray-600 dark:border-gray-400 px-4 py-2 dark:bg-gray-800">
              <option value="name">Name</option>
              <option value="category">Category</option>
            </select>
          </div>

          <div class="flex items-center gap-2">
            <label for="products-per-page">Show</label>
            <select id="products-per-page" v-model="productsPerPage" class="text-sm border border-gray-600 dark:border-gray-400 px-4 py-2 dark:bg-gray-800">
              <option value="12">12</option>
              <option value="16">16</option>
            </select>
          </div>
        </form>

        <div class="flex gap-4 text-xl">
          <button
            @click="productDisplayForm = 'grid'"
            class="px-2 py-1"
            :class="{'bg-gray-400 text-white dark:bg-gray-600': productDisplayForm === 'grid'}"
          >
            <font-awesome-icon icon="fa-solid fa-grip" />
          </button>
          <button
            @click="productDisplayForm = 'list'"
            class="px-2 py-1"
            :class="{'bg-gray-400 text-white dark:bg-gray-600': productDisplayForm === 'list'}"
          >
            <font-awesome-icon icon="fa-solid fa-list" />
          </button>
          <button
            @click="showFilters = !showFilters"
            class="px-2 py-1 md:hidden"
            :class="{'bg-gray-400 text-white dark:bg-gray-600': showFilters}"
          >
            <font-awesome-icon icon="fa-solid fa-filter" />
          </button>
        </div>
      </div>

      <!-- Products -->
      <Suspense>
        <div 
          class="text-sm w-full px-4 flex flex-col justify-center font-medium text-gray-800 dark:text-white gap-4"
          :class="productDisplayForm === 'grid' ? 'grid grid-cols-3 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1' : 'flex flex-col'"
        >
          <ProductCard v-for="product in products" :key="product.id" :mode="productDisplayForm" :product="product" />
        </div>
      </Suspense>
    </main>
  </div>
</template>

<script setup>
import Promotion from '@/components/home/promotion/Promotion.vue';
import ProductCard from '@/components/home/best seller/ProductCard.vue';
import { ref, onMounted } from 'vue';
import getAllProducts from '@/composables/getAllProducts';

const accessories = ref([
  { name: "Apple Car", number: 2 },
  { name: "AirPort & Wireless", number: 48 },
  { name: "Cables & Docks", number: 14 },
]);

const brands = ref([
  { name: "Apple", number: 99 },
  { name: "Samsung", number: 99 },
]);

const colors = ref([
  { name: "blue", class: "blue-500" },
  { name: "red", class: "red-500" },
]);

const selectedColor = ref(null);
const showFilters = ref(false);
const productDisplayForm = ref("grid");
const products = ref([]);
const sortBy = ref("name");
const productsPerPage = ref(12);
const priceRange = ref(1000);

onMounted(async () => {
  products.value = await getAllProducts();
});
</script>
