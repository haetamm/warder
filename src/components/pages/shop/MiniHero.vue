<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import FirstStepImg from './FirstStepImg.vue'
import LastStepImg from './LastStepImg.vue'
import { computed } from 'vue'

const userStore = useUserStore()

const activeStep = computed(() => {
  if (userStore.phoneNumber && !userStore.shopName) {
    return 2
  } else if (userStore.shopName) {
    return 3
  } else {
    return 1
  }
})

const step = [
  {
    id: 1,
    component: FirstStepImg,
    props: {},
  },
  {
    id: 2,
    component: LastStepImg,
    props: {
      title: 'Nama toko yang unik, selalu terlihat menarik',
      subtitle:
        'Gunakan nama yang singkat dan sederhana agar tokomu mudah diingat pembeli',
      img: 'https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/8d9aee94.png',
    },
  },
  {
    id: 3,
    component: LastStepImg,
    props: {
      title: 'Lokasi semakin akurat, barang sampai semakin cepat',
      subtitle:
        'Pastikan lokasimu sudah akurat, sehingga kurir mudah menjemput barangmu',
      img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRpTr72JbFhGnaiKYLzQHImdE2oL7mcPpcPkTeaWgkztHUlb0Ur',
    },
  },
]
</script>

<template>
  <div class="font-sans px-0 pt-4 lg:pt-8 lg:pb-12 w-full">
    <div class="flex w-full justify-center">
      <component
        :is="step.find(s => s.id === activeStep)?.component"
        v-bind="step.find(s => s.id === activeStep)?.props"
      />
    </div>
  </div>
</template>
