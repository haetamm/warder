import { object, string, date, boolean, number } from 'yup'

const alphanumericRegex = /^[a-zA-Z0-9]*$/

// Authentication
export const email = string().trim().email().required()
export const passwordLogin = string().trim().required()
export const password = string()
  .trim()
  .min(6)
  .max(12)
  .matches(alphanumericRegex, 'password must only contain alphanumeric')
  .required()

// user profile
export const name = string()
  .trim()
  .required('Nama harus diisi')
  .max(16, 'Nama maksimal 16 karakter')

export const birth_date = date()
  .required('Tanggal lahir harus diisi')
  .nullable()

export const gender = string()
  .required('Jenis kelamin harus diisi')
  .oneOf(['pria', 'wanita'], 'Jenis kelamin tidak valid')

export const phoneNumber = string()
  .trim()
  .required('Nomor telepon harus diisi')
  .max(15, 'Nomor telepon maksimal 15 karakter')
  .matches(/^\d+$/, 'Hanya karakter numerik')

// user address
export const recipientName = string()
  .required('Nama penerima wajib diisi.')
  .max(50, 'Nama penerima tidak boleh lebih dari 50 karakter.')

export const selected = boolean().default(false)

export const label = string()
  .trim()
  .required('Label wajib diisi.')
  .max(20, 'Label tidak boleh lebih dari 20 karakter.')

export const province = string().required('Provinsi wajib diisi.')

export const provinceUpdate = string()
  .nullable()
  .max(255, 'Provinsi tidak boleh lebih dari 255 karakter.')

export const regencies = string()
  .required('Kota wajib diisi.')
  .max(255, 'Kota tidak boleh lebih dari 255 karakter.')

export const regenciesUpdate = string()
  .nullable()
  .max(255, 'Kota tidak boleh lebih dari 255 karakter.')
  .test(
    'regencies-required',
    'Kota wajib diisi karena provinsi diupdate.',
    function (value) {
      return !this.parent.province || !!value
    },
  )

export const district = string()
  .required('Kecamatan wajib diisi.')
  .max(255, 'Kecamatan tidak boleh lebih dari 255 karakter.')

export const districtUpdate = string()
  .nullable()
  .max(255, 'Kecamatan tidak boleh lebih dari 255 karakter.')
  .test(
    'district-required',
    'Kecamatan wajib diisi karena kota diupdate.',
    function (value) {
      return !this.parent.regencies || !!value
    },
  )

export const villagesUpdate = string()
  .nullable()
  .max(255, 'Kelurahan tidak boleh lebih dari 255 karakter.')
  .test(
    'villages-required',
    'Kelurahan wajib diisi karena kecamatan diupdate.',
    function (value) {
      return !this.parent.district || !!value
    },
  )

export const villages = string()
  .required()
  .max(255, 'Kelurahan tidak boleh lebih dari 255 karakter.')

export const streetName = string()
  .trim()
  .required('Nama jalan wajib diisi.')
  .max(100, 'Nama jalan tidak boleh lebih dari 255 karakter.')

export const postalCode = string()
  .trim()
  .required('Kode pos wajib diisi.')
  .max(10, 'Kode pos tidak boleh lebih dari 10 karakter.')
  .matches(/^\d+$/, 'Hanya karakter numerik')

export const shopName = string()
  .trim()
  .required('Nama toko wajib diisi')
  .max(28, 'Nama toko harus maksimal 28 karakter')

export const shopDomain = string()
  .trim()
  .required('Domain wajib diisi')
  .min(6, 'Minimal 6 karakter')
  .max(20, 'Maksimal 20 karakter')
  .matches(/^[a-zA-Z0-9]+$/, 'Hanya karakter alfanumerik')

export const slogan = string().max(
  48,
  'Slogan tidak boleh lebih dari 45 karakter.',
)
export const desc = string().max(
  140,
  'Deskripsi tidak boleh lebih dari 140 karakter.',
)

export const title = string()
  .trim()
  .required('Judul wajib diisi')
  .max(128, 'Maksimal 128 karakter')

export const body = string()
  .trim()
  .required('Catatan wajib diisi')
  .max(6000, 'Maksimal 6000 karakter')

// product
export const nameProduct = string()
  .trim()
  .required('Nama produk wajib diisi')
  .min(25, 'Minimal 25 karakter')
  .max(255, 'Maksimal 255 karakter')

export const imageUrl = string()
  .nullable()
  .url('URL gambar harus berupa URL yang valid')

export const condition = string()
  .trim()
  .required('Kondisi produk wajib diisi')
  .oneOf(['baru', 'bekas'], 'Kondisi produk harus "baru" atau "bekas"')

export const description = string()
  .trim()
  .required('Deskripsi produk wajib diisi')
  .min(260, 'Minimal 260 karakter')
  .max(5000, 'Maksimal 5000 karakter')

export const price = number()
  .required('Harga produk wajib diisi')
  .min(100, 'Harga produk minimal adalah 100')
  .max(100000000000000, 'Harga Maksimal 100.000.000.000.000')

export const stock = number().required('Stok produk wajib diisi').min(0)

export const sku = string().trim().nullable()

export const productWeight = number()
  .required('Berat produk wajib diisi')
  .min(1, 'Berat produk minimal adalah 1 gram')
  .max(500000, 'Berat produk maksimal adalah 500.000 gram')

export const shippingInsurance = string()
  .required('Asuransi pengiriman wajib diisi')
  .oneOf(
    ['wajib', 'opsional'],
    'Asuransi pengiriman harus "wajib" atau "opsional"',
  )

export const loginSchema = object({
  email: email,
  password: passwordLogin,
})

export const registerUserSchema = object({
  email: email,
  password: password,
})

export const changePassworrdSchema = object({
  password: passwordLogin,
  newPassword: password,
})

export const updateUserSchema = (field: string) => {
  switch (field) {
    case 'name':
      return object({
        name: name,
      })
    case 'birth_date':
      return object({
        birth_date: birth_date,
      })
    case 'gender':
      return object({
        gender: gender,
      })
    case 'email':
      return object({
        email: email,
      })
    case 'phone_number':
      return object({
        phone_number: phoneNumber,
      })
    default:
      return object({})
  }
}

export const addressSchema = object({
  recipient_name: recipientName,
  phone_number: phoneNumber,
  label: label,
  province: province,
  regencies: regencies,
  district: district,
  villages: villages,
  street_name: streetName,
  postal_code: postalCode,
  selected: selected,
})

export const addressUpdateSchema = object({
  recipient_name: recipientName,
  phone_number: phoneNumber,
  label: label,
  province: provinceUpdate,
  regencies: regenciesUpdate,
  district: districtUpdate,
  villages: villagesUpdate,
  street_name: streetName,
  postal_code: postalCode,
  selected: selected,
})

export const regionSchema = object({
  street_name: streetName,
  postal_code: postalCode,
  province: province,
  regencies: regencies,
  district: district,
  villages: villages,
})

export const updateRegionSchema = object({
  street_name: streetName,
  postal_code: postalCode,
  province: provinceUpdate,
  regencies: regenciesUpdate,
  district: districtUpdate,
  villages: villagesUpdate,
})

export const descSellerSchema = object({
  slogan: slogan,
  desc: desc,
})

export const phoneNumberSchema = object({
  phone_number: phoneNumber,
})

export const regCredentialShopSchema = object({
  shop_name: shopName,
  shop_domain: shopDomain,
})

export const noteSchema = object({
  title: title,
  body: body,
})

export const productSchema = object().shape({
  name: nameProduct,
  image_url: imageUrl,
  condition: condition,
  description: description,
  price: price,
  stock: stock,
  sku: sku,
  product_weight: productWeight,
  shipping_insurance: shippingInsurance,
})
