<script setup lang="ts">
import { urlPage } from '@/utils/constans'
import {
  AkTextAlignJustified,
  MdOutlinedNotifications,
} from '@kalimahapps/vue-icons'
import { Dialog } from 'primevue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import SidebarNav from '../SidebarNav.vue'
import ButtonDropdownProfile from '../auth/ButtonDropdownProfile.vue'

const route = useRoute()
const visibleBottom = ref(false)

const toggleSidebar = () => {
  visibleBottom.value = !visibleBottom.value
}
</script>

<template>
  <div class="w-full fixed bg-white z-50 py-2 px-0 md:px-5">
    <div class="kontener mx-auto">
      <div class="flex justify-between items-center px-2 lg:px-0 xl:py-1">
        <RouterLink
          :to="urlPage.HOME"
          class="h-[35px] w-[170px] hidden md:flex items-center space-x-2"
        >
          <img src="/image/logo.png" alt="logo" class="h-[30px] w-[170px]" />
          <img src="/image/seller.svg" alt="logo" class="h-[20px] w-[170px]" />
        </RouterLink>

        <div class="inline-block md:hidden font-bold text-lg">
          {{ route.name }}
        </div>

        <div class="flex justify-center items-center space-x-3">
          <MdOutlinedNotifications class="w-8 h-8" severity="secondary" />

          <div class="border-l-2 border-purple-300 py-3"></div>

          <AkTextAlignJustified
            class="w-7 h-7 inline-block md:hidden"
            @click="visibleBottom = true"
            severity="secondary"
          />

          <ButtonDropdownProfile />
        </div>
      </div>
    </div>
  </div>

  <Dialog
    v-model:visible="visibleBottom"
    position="bottom"
    :modal="true"
    :showHeader="false"
    :draggable="false"
    :style="{
      height: '100vh',
      margin: '0px',
      padding: '0px',
      maxHeight: '100%',
      backgroundColor: 'rgb(var(--NN50, 240, 243, 247))',
    }"
  >
    <SidebarNav :toggleSidebar="toggleSidebar" />
  </Dialog>
</template>

<style scoped>
.kontener {
  width: 100%;
}

@media (min-width: 1340px) {
  .kontener {
    max-width: 1340px;
  }
}
</style>
