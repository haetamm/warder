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
import { urlPage } from '@/utils/constans'
import { useProductStore } from '@/stores/product'
import type { ProductResponse } from '@/utils/interface'

const statusOptions = [
  { label: 'Aktif', value: true },
  { label: 'Non Aktif', value: false },
]

const toast = useToast()
const visible = ref(false)
const productId = ref('')
const productStore = useProductStore()
const products = computed(() => productStore.products)
const loading = computed(() => productStore.loading)
const selectedStatus = ref<{ label: string; value: boolean } | null>(null)
const searchQuery = ref('')
const isLargeScreen = useMediaQuery('(min-width: 1024px)')
const isMediumScreen = useMediaQuery('(min-width: 768px)')
const dt = ref()

const filterByStatus = () => {
  if (selectedStatus.value === null) {
    return products.value
  }

  return products.value.filter((product: ProductResponse) => {
    if (selectedStatus.value?.value === true) {
      return product.deleted_at === null
    } else {
      return product.deleted_at !== null
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

const handleStatus = (id: string, status: boolean) => {
  productStore
    .updateStatusProduct(toast, id, status)
    .then((response: ProductResponse) => {
      console.log(response)
    })
    .catch((err: unknown) => {
      console.error(err)
    })
}

const handleChange = (id: string, currentStatus: boolean) => {
  handleStatus(id, !currentStatus)
}

const handleDelete = () => {
  console.log(productId)
  productStore.deleteProduct(toast, productId.value)
  visible.value = false
}

const exportCSV = () => {
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
      class="text-black"
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

        <div
          class="flex justify-between md:justify-end space-x-2 items-center order-1 lg:order-2 w-full lg:w-[40%] xl:w-full"
        >
          <Button
            icon="pi pi-external-link"
            size="small"
            :style="{ background: '#9333ea' }"
            label="Export"
            @click="exportCSV()"
          />
          <Button
            as="router-link"
            :to="urlPage.SELLER_CREATE_PRODUCT"
            size="small"
            :style="{ background: '#9333ea' }"
            icon="pi pi-plus"
            label="Tambah Produk"
          />
        </div>
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
              :src="slotProps.data.image_url"
              :alt="slotProps.data.image_url"
              class="w-[56px] h-[56px] rounded-md flex-shrink-0"
            />
            <div class="flex flex-col">
              <p class="line-clamp-2 mb-1">{{ slotProps.data.name }}</p>
              <small>SKU: {{ slotProps.data.sku }}</small>
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
                :checked="slotProps.data.deleted_at === null"
                @change="
                  handleChange(
                    slotProps.data.id,
                    slotProps.data.deleted_at === null,
                  )
                "
              />
              <span class="slider round"></span>
            </label>
            <Button
              size="small"
              as="router-link"
              :to="`/seller/product/${slotProps.data.id}/update`"
              icon="pi pi-pencil"
              severity="warn"
              aria-label="Edit"
              class="w-[40px]"
              :style="{ padding: '2px' }"
            />
            <Button
              @click="(visible = true), (productId = slotProps.data.id)"
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
    header="Hapus Produk"
    :style="{ width: '20rem' }"
  >
    <h1>Yakin dihapus??</h1>
    <div class="flex justify-end">
      <Button
        :disabled="productStore.loading"
        :label="productStore.loading ? 'Loading' : 'Hapus'"
        class="w-[100px] mt-3"
        @click="handleDelete"
      />
    </div>
  </Dialog>
</template>

<style scoped>
.p-togglebutton.p-togglebutton-checked::before {
  background: #6b21a8;
  color: white;
}
</style>
