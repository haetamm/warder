<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Button,
  Column,
  DataTable,
  Dialog,
  IconField,
  InputIcon,
  InputText,
  Select,
  useToast,
} from 'primevue'
import { useMediaQuery } from '@vueuse/core'
import { ProgressSpinner } from 'primevue'
import { useProductStore } from '@/stores/product'
import type { ProductResponse } from '@/utils/interface'
import { statusOptions } from '@/utils/fields'
import FormProduct from './FormProduct.vue'
import ButtonAndAction from './ButtonAndAction.vue'

const toast = useToast()
const visible = ref(false)
const productStore = useProductStore()
const products = computed(() => productStore.products)
const loading = computed(() => productStore.loading)
const selectedStatus = ref<{ label: string; value: boolean } | null>(null)
const searchQuery = ref('')
const isLargeScreen = useMediaQuery('(min-width: 1024px)')
const isMediumScreen = useMediaQuery('(min-width: 768px)')
const dt = ref()
const dialogState = ref({
  id: '',
  type: '' as 'edit' | 'delete' | '',
})

const filterByStatus = () => {
  if (selectedStatus.value === null) {
    return products.value
  }

  return products.value.filter((product: ProductResponse) => {
    if (selectedStatus.value?.value === true) {
      return product.is_active === null
    } else {
      return product.is_active !== null
    }
  })
}

const filteredProducts = computed(() => {
  const queryFilter = searchQuery.value.trim().toLowerCase()
  const searchFiltered = products.value.filter(
    (product: ProductResponse) =>
      product.name.toLowerCase().includes(queryFilter) ||
      product.sku?.toLowerCase().includes(queryFilter),
  )

  return filterByStatus().filter((product: ProductResponse) =>
    searchFiltered.includes(product),
  )
})

const handleChange = (id: string) => {
  productStore.updateStatusProduct(toast, id)
}

const handleDelete = (id: string) => {
  productStore.deleteProduct(toast, id)
  visible.value = false
}

const handleExportCSV = () => {
  dt.value.exportCSV()
}
</script>

<template>
  <div class="mx-0">
    <DataTable
      stripedRows
      :loading="loading"
      ref="dt"
      :value="filteredProducts"
      removableSort
      scrollable
      tableStyle="min-width: 500px"
      :scrollHeight="
        isLargeScreen
          ? 'calc(100vh - 250px)'
          : isMediumScreen
            ? 'calc(100vh - 250px)'
            : 'none'
      "
      paginator
      class="text-black p-1"
      :rows="isMediumScreen ? 20 : 7"
    >
      <div
        class="flex flex-col lg:flex-row justify-between w-full items-center mb-5"
      >
        <div
          class="w-full lg:w-[60%] xl:w-full inline-block xs:flex justify-start items-center order-2 lg:order-1 mt-4 lg:mt-0 space-x-0 xs:space-x-2"
        >
          <IconField class="w-full">
            <InputIcon>
              <i class="pi pi-search" />
            </InputIcon>
            <InputText
              size="small"
              type="search"
              v-model="searchQuery"
              class="w-full"
              placeholder="Cari berdasarkan Nama atau SKU"
            />
          </IconField>
          <Select
            size="small"
            :options="statusOptions"
            optionLabel="label"
            placeholder="Status"
            :showClear="true"
            class="w-full xs:w-[118px] mt-3 xs:mt-0"
            v-model="selectedStatus"
          />
        </div>

        <ButtonAndAction :handleExportCSV="handleExportCSV" />
      </div>
      <template #empty> Tidak ada data produk yang ditemukan. </template>
      <template #loadingicon>
        <ProgressSpinner
          style="width: 50px; height: 50px"
          strokeWidth="8"
          fill="transparent"
          animationDuration=".5s"
          aria-label="Custom ProgressSpinner"
        />
      </template>
      <Column
        class="min-w-[200px] text-black"
        field="name"
        header="INFO PRODUK"
        sortable
        :style="{ padding: '5px 2px 5px 2px', fontSize: '1rem' }"
      >
        <template #body="slotProps">
          <div class="flex space-x-2 items-center text-md">
            <img
              :src="
                slotProps.data.image_url ||
                'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2024/11/25/927aaf.jpg'
              "
              :alt="slotProps.data.image_url"
              class="w-[65px] h-[65px] rounded-md flex-shrink-0"
            />
            <div class="flex flex-col">
              <p class="line-clamp-2 mb-1 font-bold">
                {{ slotProps.data.name }}
              </p>
              <small>SKU: {{ slotProps.data.sku || '-' }}</small>
            </div>
          </div>
        </template>
      </Column>

      <Column
        class="text-sm text-black"
        field="price"
        header="HARGA"
        sortable
      />
      <Column class="text-sm text-black" field="stock" header="STOK" sortable />
      <Column class="text-sm text-black" field="status" header="AKTIF">
        <template #body="slotProps">
          <div class="flex space-x-1.5 items-center">
            <label class="switch">
              <input
                type="checkbox"
                class="hidden"
                :checked="slotProps.data.is_active === null"
                @change="handleChange(slotProps.data.id)"
              />
              <span class="slider round"></span>
            </label>
            <Button
              size="small"
              @click="
                (visible = true),
                  (dialogState = {
                    id: slotProps.data.id ?? 0,
                    type: 'edit',
                  })
              "
              icon="pi pi-pencil"
              severity="warn"
              aria-label="Edit"
              class="w-[40px]"
              :style="{ padding: '2px' }"
            />
            <Button
              @click="
                (visible = true),
                  (dialogState = {
                    id: slotProps.data.id ?? 0,
                    type: 'delete',
                  })
              "
              size="small"
              icon="pi pi-trash"
              severity="danger"
              aria-label="Delete"
              class="w-[40px]"
              :style="{ padding: '2px' }"
            />
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
  <Dialog
    v-model:visible="visible"
    modal
    :header="dialogState.type === 'edit' ? 'Ubah Produk' : 'Hapus Produk'"
    :style="
      dialogState.type === 'edit'
        ? {
            width: '100vw',
            height: '100vh',
            maxHeight: '100vh',
            borderRadius: '0',
          }
        : { width: '20rem' }
    "
  >
    <template v-if="dialogState.type === 'edit'">
      <FormProduct v-model:visible="visible" :id="dialogState.id" />
    </template>
    <template v-if="dialogState.type === 'delete'">
      <h1>Yakin dihapus??</h1>
      <div class="flex justify-end">
        <Button
          :disabled="productStore.loading"
          :label="productStore.loading ? 'Loading' : 'Hapus'"
          class="w-[100px] mt-3"
          @click="handleDelete(dialogState.id)"
        />
      </div>
    </template>
  </Dialog>
</template>

<style scoped>
.p-togglebutton.p-togglebutton-checked::before {
  background: #6b21a8;
  color: white;
}
</style>
