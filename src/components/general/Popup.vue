<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useStorage } from "@vueuse/core";

const modalRef = ref<HTMLDialogElement | null>(null);
const isModalOpen = ref(false); 

// Store "Don't Show Again" preference, defaulting to FALSE (so modal shows the first time)
const dontShowAgain = useStorage("newsletterPopupDontShow", false);

// Open modal if the user hasn't seen it before
const openModal = () => {
  isModalOpen.value = true;
  modalRef.value?.showModal();
};

// Close modal and save preference to never show it again
const closeModal = () => {
  isModalOpen.value = false;
  modalRef.value?.close();
  
  // Save user preference to never show modal again
  dontShowAgain.value = true;
};

// Check if modal should be displayed on first visit
onMounted(() => {
  if (!dontShowAgain.value) {
    openModal();
  }
});
</script>

<template>
  <div>
    <!-- Modal-->
    <dialog
      v-if="isModalOpen"
      ref="modalRef"
      class="fixed z-50 backdrop:bg-neutral-900/50 top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 bg-white flex flex-row items-center rounded-md shadow-lg w-full max-w-4xl dark:bg-gray-700 overflow-hidden"
    >
      <!-- Close Button -->
      <button
        @click="closeModal"
        class="absolute z-30 top-2 right-2 px-2.5 py-1 bg-gray-900 rounded-2xl text-gray-400 hover:text-white"
      >
        <font-awesome-icon icon="fa-solid fa-x" />
        <span class="sr-only">Close modal</span>
      </button>

      <!-- Modal Content -->
      <div class="text-center p-6 grow">
        <div class="flex flex-col gap-12">
          <div class="flex flex-col gap-4">
            <h3 class="mb-3 text-4xl font-semibold text-gray-700 dark:text-white tracking-wide">
              Newsletter
            </h3>
            <p class="mb-5 text-gray-500 dark:text-gray-300">
              Subscribe to our newsletter and stay updated!
            </p>
          </div>

          <div class="flex items-center h-14">
            <input
              type="email"
              placeholder="Email"
              class="dark:text-white h-full px-2 grow rounded-sm rounded-e-none outline-none bg-transparent min-w-0 border border-gray-200 dark:border-gray-400 border-e-0"
            />
            <button
              class="cursor-pointer h-full text-white px-8 p-1 rounded-s-none bg-blue-500 rounded-sm"
              aria-label="subscribe to the newsletter"
            >
              Subscribe
            </button>
          </div>
        </div>

        <!-- "Don't show again" Checkbox -->
        <div class="flex items-center justify-center mt-16">
          <input
            checked
            id="checked-checkbox"
            type="checkbox"
            v-model="dontShowAgain"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Don't show this popup again.
          </label>
        </div>
      </div>

      <!-- Modal Image -->
      <div class="max-w-screen-md">
        <img class="drop-shadow-lg h-110 w-full" alt="newsletter gifts" src="@/assets/img/popup/gift.webp">
      </div>
    </dialog>
  </div>
</template>

<style scoped></style>
