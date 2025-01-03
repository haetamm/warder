import { object, string, date, boolean } from 'yup'

const alphanumericRegex = /^[a-zA-Z0-9]*$/

// Authentication
export const email = string().email().required()
export const passwordLogin = string().required()
export const password = string()
  .min(6)
  .max(12)
  .matches(alphanumericRegex, 'password must only contain alphanumeric')
  .required()

// user profile
export const name = string()
  .required('Nama harus diisi')
  .max(16, 'Nama maksimal 16 karakter')

export const birth_date = date()
  .required('Tanggal lahir harus diisi')
  .nullable()

export const gender = string()
  .required('Jenis kelamin harus diisi')
  .oneOf(['pria', 'wanita'], 'Jenis kelamin tidak valid')

export const phoneNumber = string()
  .required('Nomor telepon harus diisi')
  .max(15, 'Nomor telepon maksimal 15 karakter')
  .matches(/^\d+$/, 'Hanya karakter numerik')

// user address
export const recipientName = string()
  .required('Nama penerima wajib diisi.')
  .max(50, 'Nama penerima tidak boleh lebih dari 50 karakter.')

export const label = string()
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
  .required('Nama jalan wajib diisi.')
  .max(100, 'Nama jalan tidak boleh lebih dari 255 karakter.')

export const postalCode = string()
  .required('Kode pos wajib diisi.')
  .max(10, 'Kode pos tidak boleh lebih dari 10 karakter.')
  .matches(/^\d+$/, 'Hanya karakter numerik')

export const shopName = string()
  .required('Nama toko wajib diisi')
  .max(28, 'Nama toko harus maksimal 28 karakter')

export const shopDomain = string()
  .required('Domain wajib diisi')
  .min(6, 'Minimal 6 karakter')
  .max(20, 'Maksimal 20 karakter')
  .matches(/^[a-zA-Z0-9]+$/, 'Hanya karakter alfanumerik')

export const slogan = string().max(
  48,
  'Slogan tidak boleh lebih dari 45 karakter.',
)
export const desc = string()
  .nullable()
  .max(140, 'Deskripsi tidak boleh lebih dari 140 karakter.')

export const selected = boolean().default(false)

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
