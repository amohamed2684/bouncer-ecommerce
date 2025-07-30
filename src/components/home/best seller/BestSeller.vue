<template lang="html">
  <div class="flex flex-col items-center gap-4">
    <div class="max-w-screen-xl text-sm font-medium text-center text-gray-800 dark:text-white">
      <h2 class="text-center text-2xl drop-shadow-xl uppercase tracking-wide">
        Best Seller
      </h2>
      <transition name="fade" mode="out-in">
        <ul class="flex flex-wrap justify-center -mb-px">
          <li v-for="tab in tabs" :key="tab" class="me-2">
            <button 
              @click="filterProductsByCategory(tab)"
              class="inline-block drop-shadow-lg p-4 hover:text-blue-500 hover:border-blue-600 cursor-pointer"
              :class="{'text-blue-500 border-b-2 border-blue-500': selectedCategory === tab}"
            >
              <span class="drop-shadow-lg uppercase">{{ tab }}</span>
            </button>
          </li>
        </ul>
      </transition>
    </div>
    
    <div 
      id="default-tab-content"
      class="max-w-screen-xl text-sm font-medium text-center text-gray-800 dark:text-white grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1"
    >
      <ProductCard 
        v-for="product in products" 
        :key="product.id" 
        :product="product" 
        mode="grid" 
      />
    </div>
    
    <button 
      @click="loadMore"
      class="py-2 text-xl dark:text-white hover:text-blue-500 uppercase drop-shadow-lg font-medium border-b-4 border-blue-500 cursor-pointer"
    >
      Load more
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ProductCard from './ProductCard.vue';
import getAllProducts from '@/composables/getAllProducts';

const tabs = ref<string[]>([]);
const products = ref<any[]>([]);
const productLimit = ref(8);
const selectedCategory = ref('all');

const fetchProducts = async () => {
  if (selectedCategory.value === 'all') {
    // getAllProducts now supports the limit parameter correctly
    products.value = await getAllProducts(productLimit.value);
  } else {
    // Fetch all products in the category then limit them manually
    const response = await fetch(`https://fakestoreapi.com/products/category/${selectedCategory.value}`);
    const categoryProducts = await response.json();
    products.value = categoryProducts.slice(0, productLimit.value);
  }
};

// Fetch categories and initial products on mount
onMounted(async () => {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  tabs.value = await res.json();
  tabs.value = ['all', ...tabs.value];
  
  await fetchProducts();
});

// Increase the limit by 4 and fetch products again
const loadMore = async () => {
  productLimit.value += 4;
  await fetchProducts();
}

// Filter products by category; reset productLimit to initial value
const filterProductsByCategory = async (category: string) => {
  selectedCategory.value = category;
  productLimit.value = 8; // Reset to initial limit when switching category
  await fetchProducts();
};
</script>
