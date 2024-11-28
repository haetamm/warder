<script setup lang="ts">
import { urlPage } from '@/utils/constans'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Tabs from 'primevue/tabs'
import Tab from 'primevue/tab'
import { TabList } from 'primevue'

const tabs = ref([
  { route: urlPage.SELLER_SETTING_INFO, label: 'Informasi' },
  { route: urlPage.SELLER_SETTING_OPERATIONAL, label: 'Jadwal ' },
  { route: urlPage.SELLER_SETTING_ADDRESS, label: 'Lokasi' },
])

const route = useRoute()
const selectedTab = ref(route.path)

watch(
  () => route.path,
  newPath => {
    selectedTab.value = newPath
  },
)
</script>

<template>
  <div class="m-1 xs:mx-2 md:mt-2 xl:mt-4 border-[1px] bg-white rounded-lg">
    <Tabs :value="selectedTab" class="">
      <TabList class="w-full py-0">
        <div class="flex justify-between xs:inline-block w-full">
          <Tab v-for="tab in tabs" :key="tab.label" :value="tab.route">
            <router-link
              v-if="tab.route"
              v-slot="{ href, navigate }"
              :to="tab.route"
              custom
            >
              <a
                :href="href"
                @click="navigate"
                class="flex items-center justify-center xs:justify-normal text-inherit py-[10px] px-[20px] xs:px-[24px]"
              >
                <span class="text-md font-semibold">
                  {{ tab.label }}
                </span>
              </a>
            </router-link>
          </Tab>
        </div>
      </TabList>
    </Tabs>
    <div class="py-[10px]">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.p-tab {
  padding: 0;
}
.p-tablist-content {
  border-radius: 8px;
}
</style>
