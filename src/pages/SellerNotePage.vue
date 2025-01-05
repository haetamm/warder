<script setup lang="ts">
import FormNote from '@/components/pages/sellerSettingPage/FormNote.vue'
import ListNote from '@/components/pages/sellerSettingPage/ListNote.vue'
import { Button, Dialog } from 'primevue'
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
  <div class="px-2 xs:px-[20px] my-3">
    <div class="flex justify-between items-center">
      <div class="font-bold text-lg">Catatan Toko</div>
      <Button
        @click="visible = true"
        label="+ Catatan Toko"
        class="w-[150px]"
        variant="outlined"
      />
    </div>
    <ListNote />
  </div>
  <Dialog
    v-model:visible="visible"
    modal
    header="Tambahkan Catatan Toko"
    :style="{ width: '42rem' }"
  >
    <FormNote v-model:visible="visible" />
  </Dialog>
</template>

<style scoped>
.p-inputtext {
  width: 100%;
  height: 48px;
}
</style>
