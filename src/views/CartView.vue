<template lang="html">
  <div class="w-full mt-4 flex flex-col justify-center gap-12 max-w-screen-xl mx-auto">
    <div class="w-full mx-auto rounded-md">
        <table class="w-full text-sm text-left rtl:text-right dark:text-gray-400">
            <thead class="text-xs dark:text-white uppercase border-b border-gray-200 dark:border-gary-600">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Product
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Qty
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Unit Price
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr 
                  v-for="item in cartItems" :key="item.product.id"
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                >
                    <th scope="row" class=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div class="flex flex-row items-center">
                          <button 
                            @click="removeItem(index)"
                            class="bg-gray-200 dark:bg-gray-600 py-0.5 px-2 rounded-4xl"
                          >x</button>
                          <div class="max-w-40">
                            <img
                              class="rounded-t-lg p-1 w-full h-full border-gray-200 dark:border-gray-700"
                              :alt="item.product.title"
                              :src="item.product.image"
                            />
                          </div>
                          <p> {{ item.product.title }} </p>
                        </div>
                    </th>
                    <td class="px-6 py-4">
                        ${{ item.product.price.toFixed(2) * item.quantity }}
                    </td>
                    <td class="px-6 py-4">
                      <div class="bg-gray-200 dark:bg-gray-600 rounded-sm dark:text-white w-fit font-medium flex flex-nowrap items-center">
                        <button @click="decreaseQty(index)" class="px-3 py-1 cursor-pointer">-</button>
                        <span class="px-3">{{ item.quantity }}</span>
                        <button @click="increaseQty(index)" class="px-3 py-1 cursor-pointer">+</button>
                      </div>
                    </td>
                    <td class="px-6 py-4">
                        ${{ item.product.price }}
                    </td>
                </tr>

            </tbody>
        </table>
    </div>

    <div class="flex flex-row max-md:flex-col gap-8 max-md:items-center justify-between">
      <div class="flex items-center h-14">
        <input
          type="text"
          placeholder="Voucher Code"
          class="dark:text-white h-full px-2 grow rounded-sm rounded-e-none outline-none bg-transparent min-w-0 border border-gray-200 dark:border-gray-400 border-e-0"
        />
        <button
          class="cursor-pointer h-full text-white px-8 p-1 rounded-s-none bg-blue-500 rounded-sm"
          aria-label="subscribe to the newsletter"
        >
          Redeem
        </button>
      </div>

      <div class="flex flex-col gap-4 max-w-80 w-full">
        <div class="flex flex-col gap-2 pb-4 border-b dark:text-white border-gray-200 dark:border-gray-600">
          <div class="flex flex-row justify-between">
            <h3>Subtotal</h3>
            <p>$998</p>
          </div>
          <div class="flex flex-row justify-between">
            <h3>Shipping fee</h3>
            <p>$20</p>
          </div>
          <div class="flex flex-row justify-between">
            <h3>Coubon</h3>
            <p>No</p>
          </div>
        </div>

        <div class="flex flex-row justify-between dark:text-white">
          <h3 class="text-2xl">Total</h3>
          <p class="text-2xl">$118</p>
        </div>

        <button class="text-white rounded-sm bg-blue-500 w-full py-4">
          Check out
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import getSingleCart from "@/composables/getSingleCart";
import getSingleProduct from "@/composables/getSingleProduct";
import { ref, computed, onMounted } from "vue";

const cart = ref({});
const cartItems = ref([]);

onMounted(async () => {
  cart.value = await getSingleCart();

  cart.value.products.forEach( async (item) => {
    const product = await getSingleProduct(item.productId);
    cartItems.value.push({product: product, quantity: item.quantity});
  });

}); 

const subtotal = computed(() =>
  cartItems.value.reduce((acc, item) => acc + item.price * item.quantity, 0)
);

const removeItem = (index) => {
  cartItems.value.splice(index, 1);
};

const increaseQty = (index) => {
  cartItems.value[index].quantity++;
};

const decreaseQty = (index) => {
  if (cartItems.value[index].quantity > 1) {
    cartItems.value[index].quantity--;
  }
};

</script>
<style scoped lang="css">
  
</style>