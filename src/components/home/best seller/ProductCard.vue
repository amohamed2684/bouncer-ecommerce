<template>
  <div 
    class="bg-white border w-full border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-2"
    :class="{'max-w-sm': mode === 'grid', 'flex flex-row items-center gap-2': mode === 'list'}"
  >
      <a href="#">
        <div 
          class="max-w-80 max-h-60 min-w-40 min-h-60 aspect-square mx-auto overflow-hidden border-gray-200 dark:border-gray-700 grid place-items-center"
          :class="{'border-b': mode === 'grid', 'border-e': mode === 'list'}"
        >
          <img
          class="object-contain rounded-t-lg p-1 w-full h-auto"
            :alt="product.title"
            :src="product.image"
          />
        </div>
      </a>
      <div 
        class="p-5"
        :class="{'text-center': mode === 'grid', 'grow': mode === 'list'}"
      >
          <a 
            href="#" 
            class="mb-6"
          >
          <h5 
            class="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white line-clamp-2 break-words"
            :class="{
              '': mode === 'grid', 
              'pb-4 border-b border-gray-200 dark:border-gray-600': mode === 'list'
            }"
          >
            {{ product.title }}
          </h5>

          </a>
          
          <div 
            class="flex my-2"
            :class="{'justify-center': mode === 'grid', 'hidden': mode === 'list'}"
          >
            <font-awesome-icon
              v-for="x in 5"
              :key="x"
              :class="{'text-yellow-300': x <= product.rating.rate, 'text-gray-400': x > product.rating.rate}"
              icon="fa-solid fa-star" />
          </div>

          <div 
            class="flex flex-row gap-x-6"
            :class="{'justify-center': mode === 'grid', '': mode === 'list'}"
          >
            <span class="text-red-400 font-semibold">
              ${{ product.price.toFixed(2) }}
            </span>
            <!-- <span 
              v-if="product.price && product.price > product.totalPrice"
              class="text-gray-400 line-through"
            >
              ${{ product.price.toFixed(2) }}
            </span> -->
          </div>

          <div 
            v-if="product.description && mode === 'list'"
            class="mt-4"
          >
            <p class="font-normal">
              {{ product.description }}
            </p>
          </div>

          <div
            class="flex flex-row gap-4 mt-6"
            :class="{'hidden': mode === 'grid', '': mode === 'list'}"
          >
            <button class="font-normal bg-blue-100 dark:bg-blue-200 rounded-sm text-blue-500 p-2 flex flex-row items-center gap-4">
              <font-awesome-icon icon="fa-solid fa-cart-shopping" />
              <span v-if="mode === 'list'">Add to cart</span>
            </button>
            <button class="font-normal bg-blue-100 dark:bg-blue-200 rounded-sm text-blue-500 px-2.5 flex flex-row items-center gap-4">
              <font-awesome-icon icon="fa-solid fa-heart" />
            </button>
          </div>

      </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  },
  mode: {
    type: String
  }
});
</script>

<style scoped>
</style>
