<script setup lang="ts">
import { CiUser } from '@kalimahapps/vue-icons'
</script>

<template>
  <div class="flex space-x-1 items-center">
    <img
      src="https://images.tokopedia.net/img/cache/300/tPxBYm/2023/1/20/757f728e-d320-4f75-91ac-cedc5f1edc42.jpg.webp?ect=3g"
      alt="profile-img"
      class="w-[45px] h-[45px] md:h-8 md:w-8 rounded-full"
    />
    <div class="flex items-center space-x-1">
      <CiUser class="block md:hidden h-6 w-6" />
      <div class="line-clamp-1">Tatang Haetami</div>
    </div>
  </div>
</template>
