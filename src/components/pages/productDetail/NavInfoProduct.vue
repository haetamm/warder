<script setup lang="ts">
import { ref } from 'vue'

// defineProps<{
//   description: string
//   title: string
// }>()

const selected = ref(1)

const showTab = (index: number) => {
  return (selected.value = index)
}
</script>

<template>
  <div class="pb-5 mt-4 border-b-2 font-normal">
    <ul
      class="mb-4 font-bold flex list-none flex-row flex-wrap border-b-0 pl-0 select-none"
      role="tablist"
    >
      <li
        role="presentation"
        class="flex-grow cursor-pointer basis-0 text-center"
      >
        <div
          @click="showTab(1)"
          :class="{ 'border-b-purple-600 text-purple-600': selected === 1 }"
          class="my-0 block border-x-0 border-b-2 border-t-2 px-0 md:px-7 pb-2 pt-2 text-sm font-medium"
          role="tab"
        >
          Detail
        </div>
      </li>
      <li
        role="presentation"
        class="flex-grow cursor-pointer basis-0 text-center"
      >
        <div
          @click="showTab(2)"
          :class="{ 'border-b-purple-600 text-purple-600': selected === 2 }"
          class="my-0 block border-x-0 border-b-2 border-t-2 px-0 md:px-7 pb-2 pt-2 text-sm font-medium"
          role="tab"
        >
          Info
        </div>
      </li>
    </ul>

    <div
      v-if="selected === 1"
      class="opacity-100 transition-opacity duration-150 ease-linear"
      role="tabpanel"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius veniam,
        molestias temporibus omnis eveniet quam voluptatem maxime esse aut
        dolorem nihil architecto fuga corporis fugit, id sit voluptate vitae.
      </p>
    </div>
    <div
      v-if="selected === 2"
      class="opacity-100 transition-opacity duration-150 ease-linear"
      role="tabpanel"
    >
      <div class="font-bold text-md">Jam Operasional pengiriman:</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius veniam,
        molestias temporibus omnis eveniet quam voluptatem maxime esse aut
        dolorem nihil architecto fuga corporis fugit, id sit voluptate vitae.
      </p>
      <br />
      <div class="font-bold text-md">Claim barang pecah:</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius veniam,
        molestias temporibus omnis eveniet quam voluptatem maxime esse aut
        dolorem nihil architecto fuga corporis fugit, id sit voluptate vitae.
      </p>
    </div>
  </div>
</template>
