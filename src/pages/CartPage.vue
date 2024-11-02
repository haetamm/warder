<script setup lang="ts">
import CartEmpty from '@/components/layouts/CartEmpty.vue'
import CartCheckout from '@/components/pages/cart/CartCheckout.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Keranjang | Warder',
  meta: [
    { name: 'description', content: 'Warder Cart Page' },
    { name: 'keywords', content: 'marketplace, warder, cart' },
  ],
})
</script>

<template>
  <div class="flex-grow pt-[45px] xl:pt-[65px] bg-cartpage">
    <div class="kontener mx-auto mb-4">
      <div class="grid grid-cols-1 md:grid-cols-[60%_40%]">
        <div
          class="overflow-y-scroll no-scrollbar h-full md:h-[calc(100vh-85px)]"
        >
          <div class="font-bold text-xl mb-0 md:mb-2 mt-3 px-4">Keranjang</div>
          <div class="px-0 md:px-4 pb-2 flex justify-center">
            <div
              class="bg-white w-full py-0 md:py-4 md:rounded-xl rounded-none flex justify-center items-center min-h-[200px]"
            >
              <CartEmpty />
            </div>
          </div>
        </div>
        <div
          class="h-full md:h-[calc(100vh-85px)] md:sticky top-[85px] overflow-hidden"
        >
          <CartCheckout />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-cartpage {
  background-color: white;
}

@media (min-width: 768px) {
  .bg-cartpage {
    background-color: rgb(var(--NN50, 240, 243, 247));
  }
}
</style>
