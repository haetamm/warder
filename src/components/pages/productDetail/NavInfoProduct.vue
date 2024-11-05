<script setup lang="ts">
import Tabs from 'primevue/tabs'
import Tab from 'primevue/tab'
import TabPanel from 'primevue/tabpanel'
import { TabList } from 'primevue'

// defineProps<{
//   description: string
//   title: string
// }>()
</script>

<template>
  <Tabs value="0" class="pb-5 mt-6 border-b-2 font-normal">
    <TabList class="border-slate-100 border-y-2">
      <div class="grid grid-cols-2 w-full">
        <Tab value="0">Detail</Tab>
        <Tab value="1">Info Penting</Tab>
      </div>
    </TabList>
    <div class="px-2 mt-3 mb-1">
      <TabPanel value="0">
        <p class="m-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius
          veniam, molestias temporibus omnis eveniet quam voluptatem maxime esse
          aut dolorem nihil architecto fuga corporis fugit, id sit voluptate
          vitae.
        </p>
      </TabPanel>
      <TabPanel value="1">
        <div class="font-bold text-md">Jam Operasional pengiriman:</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius
          veniam, molestias temporibus omnis eveniet quam voluptatem maxime esse
          aut dolorem nihil architecto fuga corporis fugit, id sit voluptate
          vitae.
        </p>
        <br />
        <div class="font-bold text-md">Claim barang pecah:</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius
          veniam, molestias temporibus omnis eveniet quam voluptatem maxime esse
          aut dolorem nihil architecto fuga corporis fugit, id sit voluptate
          vitae.
        </p>
      </TabPanel>
    </div>
  </Tabs>
</template>

<style scoped>
.p-tab {
  padding: 8px 10px 8px 10px;
}
</style>
