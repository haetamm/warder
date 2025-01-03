<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <div class="text-center max-w-[360px] mx-auto hidden lg:inline-block mt-10">
    <div class="font-bold text-2xl">
      {{ title }}
    </div>
    <div class="text-slate-600 text-sm">
      {{ subtitle }}
    </div>
    <div class="flex justify-center mt-4">
      <img
        :src="img"
        alt="img-shop-log"
        class="h-[272px] w-[360px] object-fill"
      />
    </div>
  </div>
</template>
