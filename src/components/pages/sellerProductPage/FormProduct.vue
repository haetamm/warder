<script setup lang="ts">
import {
  conditionOptions,
  fieldsProduct,
  shippingInsuranceOptions,
} from '@/utils/fields'
import InputTextCustom from './InputTextCustom.vue'
import { Button, useToast } from 'primevue'
import { Field, useForm, ErrorMessage } from 'vee-validate'
import { defineProps, onMounted, reactive, defineEmits } from 'vue'
import { useProductStore } from '@/stores/product'
import {
  type ProductForm,
  type ProductFormDinamic,
  type ProductResponse,
} from '@/utils/interface'
import { productSchema } from '@/utils/validation'
import { useRouter } from 'vue-router'
import { urlPage } from '@/utils/constans'

const props = defineProps({
  id: {
    type: String,
    required: false,
  },
  visibleForm: {
    type: Boolean,
    required: false,
  },
})

const emit = defineEmits(['update:visible'])
const productStore = useProductStore()
const toast = useToast()
const router = useRouter()

const form: ProductFormDinamic = reactive({
  id: null,
  name: '',
  image_url: '',
  condition: '',
  description: '',
  price: null,
  stock: null,
  sku: '',
  product_weight: null,
  shipping_insurance: '',
})

onMounted(() => {
  if (props.id) {
    const selectedProduct: ProductResponse | undefined =
      productStore.products.find(
        (product: ProductResponse) => product.id === props.id,
      )

    if (selectedProduct) {
      Object.keys(form).forEach(key => {
        if (key in selectedProduct) {
          form[key as keyof ProductFormDinamic] =
            selectedProduct[key as keyof ProductResponse] || form[key]
        }
      })
    }
  }
})

const { handleSubmit, setErrors } = useForm<ProductForm>({
  validationSchema: productSchema,
})

const onSubmit = handleSubmit(() => {
  if (props.id) {
    productStore
      .updateProduct(toast, form, props.id, setErrors)
      .then((response: ProductResponse) => {
        if (response) {
          emit('update:visible', false)
        }
      })
  } else {
    productStore
      .postProduct(toast, form, setErrors)
      .then((response: ProductResponse) => {
        if (response) {
          router.push(urlPage.SELLER_PRODUCT)
        }
      })
  }
})
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div
      v-for="(field, index) in fieldsProduct"
      :key="index"
      class="inline-block w-full space-y-4 lg:space-y-0 lg:flex mt-2 space-x-0 lg:space-x-6 mb-6 lg:mb-8"
    >
      <div class="w-full lg:w-[30%]">
        <div class="flex items-center space-x-2">
          <p class="font-bold text-md">{{ field.label }}</p>
          <p
            v-if="field.required"
            class="bg-gray-200 px-[2px] py-0 rounded-md font-bold"
          >
            <small>Wajib</small>
          </p>
        </div>
        <p v-show="field.descFirst">
          <small>{{ field.descFirst }}</small>
        </p>
        <template v-if="field.descLast">
          <small>{{ field.descLast }}</small>
        </template>
      </div>

      <div class="w-full lg:w-[70%]">
        <template v-if="field.name === 'name'">
          <InputTextCustom v-model="form.name" :field="field" />
        </template>

        <template v-if="field.name === 'condition'">
          <div class="flex justify-start space-x-4">
            <div
              v-for="option in conditionOptions"
              :key="option.value"
              class="flex space-x-2"
            >
              <Field
                type="radio"
                v-model="form.condition"
                :name="field.name"
                :id="option.value"
                :value="option.value"
                class="cursor-pointer"
              />
              <label :for="option.value" class="cursor-pointer">
                {{ option.label }}
              </label>
            </div>
          </div>
          <ErrorMessage :name="field.name" class="text-red-500 text-sm" />
        </template>

        <template v-if="field.name === 'description'">
          <Field
            v-model="form.description"
            as="textarea"
            :name="field.name"
            placeholder="Deskripsi Produk"
            rows="10"
            cols="30"
            minlength="1"
            class="w-full mt-1 border-2 rounded-lg p-2 outline-none"
          />
          <ErrorMessage :name="field.name" class="text-red-500 text-sm" />
        </template>

        <div v-if="field.name === 'price'" class="w-full">
          <div class="flex items-center">
            <div
              class="w-[50px] bg-slate-300 rounded-l-lg py-2 px-3 border-l-2 border-y-2 outline-none"
            >
              Rp.
            </div>
            <Field
              v-model="form.price"
              :name="field.name"
              type="number"
              minlength="1"
              class="w-full rounded-r-lg border-r-2 border-y-2 py-2 px-3 outline-none"
            />
          </div>
          <ErrorMessage :name="field.name" class="text-red-500 text-sm" />
        </div>

        <template v-if="field.name === 'stock'">
          <Field
            v-model="form.stock"
            :name="field.name"
            type="number"
            minlength="1"
            class="w-full rounded-lg py-2 px-3 border-2 outline-none"
            placeholder="Masukan Jumlah Stok"
          />
          <ErrorMessage :name="field.name" class="text-red-500 text-sm" />
        </template>

        <template v-if="field.name === 'sku'">
          <Field
            v-model="form.sku"
            :name="field.name"
            type="text"
            minlength="1"
            class="w-full rounded-lg py-2 px-3 border-2 outline-none"
            placeholder="Masukan SKU"
          />
          <ErrorMessage :name="field.name" class="text-red-500 text-sm" />
        </template>

        <div v-if="field.name === 'product_weight'" class="w-full lg:w-[330px]">
          <div class="flex items-center">
            <Field
              v-model="form.product_weight"
              :name="field.name"
              type="number"
              minlength="1"
              class="w-full rounded-l-lg py-2 px-3 border-l-2 border-y-2 outline-none"
            />
            <div
              class="w-[70px] bg-slate-300 rounded-r-lg py-2 px-3 border-r-2 border-y-2 outline-none"
            >
              Gram
            </div>
          </div>
          <ErrorMessage :name="field.name" class="text-red-500 text-sm" />
        </div>

        <template v-if="field.name === 'shipping_insurance'">
          <div class="flex justify-start space-x-30">
            <div
              v-for="option in shippingInsuranceOptions"
              :key="option.value"
              class="flex-col space-x-5"
            >
              <div class="flex space-x-2">
                <Field
                  v-model="form.shipping_insurance"
                  :name="field.name"
                  type="radio"
                  :id="option.value"
                  :value="option.value"
                  class="cursor-pointer"
                />
                <label :for="option.value" class="cursor-pointer">
                  {{ option.label }}
                </label>
              </div>
              <p>
                <small>{{ option.desc }}</small>
              </p>
            </div>
          </div>
          <ErrorMessage :name="field.name" class="text-red-500 text-sm" />
        </template>
      </div>
    </div>

    <div class="flex justify-end w-full space-x-2">
      <Button
        type="submit"
        :label="productStore.loading ? 'Loading' : 'Simpan'"
        size="small"
        class="mt-3"
      />
    </div>
  </form>
</template>
