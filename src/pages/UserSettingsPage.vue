<script setup lang="ts">
import { dataIdentity } from '@/utils/data'
import FileUpload from 'primevue/fileupload'

const renderData = (type: string) => {
  return dataIdentity
    .filter(data => data.type === type)
    .map(
      data => `
      <div class="flex my-5 text-sm md:text-md">
        <span class="w-[114px]">${data.label}</span>
        <span class="mr-[12px]">${data.value}</span>
        <span class="text-purple-600 cursor-pointer">Ubah</span>
      </div>
    `,
    )
    .join('')
}

const onUpload = () => {
  //
}
</script>
<template>
  <div class="px-2 mb-4">
    <div class="grid grid-cols-1 xs:grid-cols-[50%_50%] md:grid-cols-[40%_60%]">
      <div class="flex justify-center xs:justify-start xs:ml-4">
        <div class="mt-6">
          <div class="border-2 shadow-sm flex-1 justify-center p-3 rounded-lg">
            <img
              src="https://images.tokopedia.net/img/cache/300/tPxBYm/2023/1/20/757f728e-d320-4f75-91ac-cedc5f1edc42.jpg"
              alt="profile-img"
              class="h-[258px] w-[255px]"
            />
            <FileUpload
              class="w-full px-3 mt-3"
              mode="basic"
              name="demo[]"
              url="/api/upload"
              accept="image/*"
              :maxFileSize="1000000"
              @upload="onUpload"
              :auto="true"
              chooseLabel="Pilih Foto"
              uploadIcon="false"
            />
          </div>
          <button
            class="px-4 py-1.5 w-full border-2 rounded-lg text-md mt-3 mb-6"
          >
            Ubah Kata Sandi
          </button>
        </div>
      </div>
      <div class="px-2 xs:mt-10">
        <div class="font-bold">Ubah Biodata Diri</div>
        <div v-html="renderData('personal')"></div>
        <div class="mt-8 font-bold">Ubah Kontak</div>
        <div v-html="renderData('contact')"></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
