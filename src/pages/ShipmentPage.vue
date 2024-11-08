<script setup lang="ts">
import CartCheckout from '@/components/pages/cart/CartCheckout.vue'
import ListOrder from '@/components/pages/shipment/ListOrder.vue'
import { useScrollVisibility } from '@/compsables/useScrollVisibility'
import { urlPage } from '@/utils/constans'
import { scrollTop } from '@/utils/helper'
import { useHead } from '@vueuse/head'

const { isVisible } = useScrollVisibility()

useHead({
  title: 'Checkout | Warder',
  meta: [
    { name: 'description', content: 'Warder Checkout Page' },
    { name: 'keywords', content: 'marketplace, warder, checkout' },
  ],
})
</script>

<template>
  <div class="flex-grow">
    <div class="fixed mx-auto px-2 xl:px-0 z-10 bg-white w-full shadow-md">
      <div :class="{ hidden: !isVisible }" class="kontener mx-auto">
        <router-link
          :to="urlPage.HOME"
          @click="scrollTop"
          class="h-[60px] items-center flex"
        >
          <img src="/image/logo.png" alt="logo" class="h-[40px] w-[150px]" />
        </router-link>
      </div>
    </div>
    <hr class="mt-[53px] md:mt-[60px]" />
    <div class="bg-cartpage">
      <div class="kontener mx-auto mb-1">
        <div class="grid grid-cols-1 md:grid-cols-[60%_40%]">
          <div
            class="overflow-y-scroll no-scrollbar h-full md:h-[calc(100vh-58px)]"
          >
            <ListOrder />
          </div>
          <div
            class="h-full md:h-[calc(100vh-58px)] md:sticky xl:top-[85px] overflow-hidden"
          >
            <CartCheckout />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-cartpage {
  background-color: rgb(var(--NN50, 240, 243, 247));
}
</style>
