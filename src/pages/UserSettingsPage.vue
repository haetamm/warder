<script setup lang="ts">
import CredentialUser from '@/components/pages/user/CredentialUser.vue'
import { useUserStore } from '@/stores/user'
import FileUpload from 'primevue/fileupload'

const { image } = useUserStore()
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
              :src="
                image
                  ? image
                  : 'https://images.tokopedia.net/img/cache/300/tPxBYm/2023/1/20/757f728e-d320-4f75-91ac-cedc5f1edc42.jpg.webp?ect=3g'
              "
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
      <CredentialUser />
    </div>
  </div>
</template>

<style scoped></style>
