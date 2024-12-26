<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { CiUser } from '@kalimahapps/vue-icons'

const { name, image } = useUserStore()
</script>

<template>
  <div class="flex space-x-1 items-center">
    <img
      :src="
        image
          ? image
          : 'https://images.tokopedia.net/img/cache/300/tPxBYm/2023/1/20/757f728e-d320-4f75-91ac-cedc5f1edc42.jpg.webp?ect=3g'
      "
      alt="profile-img"
      class="w-[45px] h-[45px] md:h-8 md:w-8 rounded-full"
    />
    <div class="flex items-center space-x-1">
      <CiUser class="block md:hidden h-6 w-6" />
      <div class="line-clamp-1">{{ name }}</div>
    </div>
  </div>
</template>
