<script setup lang="ts">
import {
  AnFilledStar,
  BsChatLeftDots,
  BsThreeDotsVertical,
} from '@kalimahapps/vue-icons'
import { Select } from 'primevue'

import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'
import { ref } from 'vue'
import { dataReviews } from '@/utils/data'

const selectedSorted = ref()
const sort = ref([
  { name: 'Terbaru' },
  { name: 'Rating Tertinggi' },
  { name: 'Rating Terendah' },
])

const reviews = ref(dataReviews)
</script>

<template>
  <div class="mt-4 mb-10">
    <div class="flex items-center space-x-4 justify-between">
      <div class="flex-shrink-0">
        <div class="font-bold text-lg">Ulasan</div>
        <small>Menampilkan {{ reviews.length }} ulasan</small>
      </div>

      <Select
        v-model="selectedSorted"
        :options="sort"
        optionLabel="name"
        placeholder="Urutkan"
        class="w-full sm:w-44"
        :style="{ background: 'rgb(249 250 251 / var(--tw-bg-opacity)) ' }"
      />
    </div>

    <div v-for="review in reviews" :key="review.id">
      <div class="flex items-center mt-3 space-x-4">
        <div class="flex-shrink-0">
          <div class="flex">
            <AnFilledStar
              v-for="index in 5"
              :key="index"
              :class="
                index <= review.rating
                  ? 'text-purple-600 mr-1'
                  : 'text-gray-300 mr-1'
              "
            />
          </div>
        </div>
        <div class="flex-1 font text-md min-w-0 p-0">
          <p>{{ review.createdAt }}</p>
        </div>
        <BsThreeDotsVertical class="h-6 w-6" />
      </div>

      <div class="pb-1">
        <div class="flex items-center mt-3 font-semibold space-x-4 mb-2">
          <div class="flex-shrink-0">
            <img
              width="32"
              height="32"
              class="rounded-full"
              :src="review.image"
              alt="avatar"
            />
          </div>
          <div class="font text-md min-w-0 p-0">
            <p>{{ review.customer }}</p>
          </div>
        </div>
        <p>
          {{ review.content }}
        </p>

        <Accordion :style="{ margin: '0px' }">
          <AccordionPanel
            v-for="reply in review.replies"
            :key="reply.title"
            :value="reply.value"
            :style="{
              padding: '2px 0px 6px 0px',
              margin: '0px',
            }"
          >
            <AccordionHeader
              :style="{ padding: '4px 3px 6px 3px', marginBottom: '2px' }"
            >
              <div class="flex items-center mt-2 space-x-4">
                <BsChatLeftDots class="cursor-pointer hover:text-purple-600" />
                <div class="flex-1 font text-md min-w-0 p-0">
                  <div>Balasan</div>
                </div>
              </div>
            </AccordionHeader>
            <AccordionContent
              :style="{
                padding: '6px 0px 6px 0px',
                margin: '0px',
                backgroundColor: 'transparent',
              }"
            >
              <div
                class="flex items-center font-semibold space-x-4 mb-1.5 m-0 bg-transparent"
              >
                <div class="flex-shrink-0">
                  <img
                    width="32"
                    height="32"
                    class="rounded-full"
                    :src="reply.image"
                    alt="avatar"
                  />
                </div>
                <div
                  class="inline-block xs:flex font-semibold text-sm items-center min-w-0 p-0 space-x-1"
                >
                  <p>{{ reply.shopName }}</p>
                  <small class="bg-purple-600 rounded-md px-1 text-white">
                    penjual
                  </small>
                  <p>{{ reply.createdAt }}</p>
                </div>
              </div>
              <p>
                {{ reply.content }}
              </p>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>
    </div>
  </div>
</template>
