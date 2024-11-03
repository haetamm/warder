<script setup lang="ts">
import ButtonBuy from '@/components/pages/cart/ButtonBuy.vue'
import CartCheckout from '@/components/pages/cart/CartCheckout.vue'
import ListProductCartPage from '@/components/pages/cart/ListProductCartPage.vue'
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
  <div class="flex-grow pt-[40px] xl:pt-[65px] bg-cartpage">
    <div class="kontener mx-auto mb-1">
      <div
        class="grid grid-cols-1 md:grid-cols-[60%_40%] lg:grid-cols-[70%_30%]"
      >
        <div
          class="overflow-y-scroll no-scrollbar h-full md:h-[calc(100vh-58px)]"
        >
          <ListProductCartPage />
        </div>
        <div
          class="h-full md:h-[calc(100vh-58px)] md:sticky xl:top-[85px] overflow-hidden hidden md:block"
        >
          <CartCheckout />
        </div>
      </div>
    </div>
  </div>
  <ButtonBuy />
</template>

<style scoped>
.bg-cartpage {
  background-color: rgb(var(--NN50, 240, 243, 247));
}
</style>
