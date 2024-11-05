<script setup lang="ts">
import Tabs from 'primevue/tabs'
import Tab from 'primevue/tab'
import { urlPage } from '@/utils/constans'

import { ref, watch } from 'vue'
import { TabList } from 'primevue'
import { useRoute } from 'vue-router'

const items = ref([
  { route: urlPage.USER_SETTING, label: 'Biodata Diri' },
  { route: urlPage.USER_ADDRESS, label: 'Daftar Alamat' },
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
  <div class="flex-grow mt-[70px] px-2 mb-3">
    <div class="kontener mx-auto border-xl border-2 h-full rounded-xl">
      <Tabs :value="selectedTab">
        <TabList class="w-full py-0">
          <Tab v-for="tab in items" :key="tab.label" :value="tab.route">
            <router-link
              v-if="tab.route"
              v-slot="{ href, navigate }"
              :to="tab.route"
              custom
            >
              <a
                :href="href"
                @click="navigate"
                class="flex items-center text-inherit py-2.5 px-6"
              >
                <span class="text-sm md:text-md font-semibold">{{
                  tab.label
                }}</span>
              </a>
            </router-link>
          </Tab>
        </TabList>
      </Tabs>
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.p-tab {
  padding: 0;
}

.kontener {
  width: 100%;
}

@media (min-width: 600px) {
  .kontener {
    max-width: 600px;
  }
}
@media (min-width: 640px) {
  .kontener {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .kontener {
    max-width: 768px;
  }
}
@media (min-width: 845px) {
  .kontener {
    max-width: 845px;
  }
}
@media (min-width: 1024px) {
  .kontener {
    max-width: 900px;
  }
  .hero {
    max-height: 100%;
  }
}
</style>
