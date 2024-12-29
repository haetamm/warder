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

// user address
export const recipientName = string()
  .required('Nama penerima wajib diisi.')
  .max(50, 'Nama penerima tidak boleh lebih dari 50 karakter.')

export const label = string()
  .required('Label wajib diisi.')
  .max(20, 'Label tidak boleh lebih dari 20 karakter.')

export const province = string().required('Provinsi wajib diisi.')

export const regencies = string()
  .required('Kota wajib diisi.')
  .max(255, 'Kota tidak boleh lebih dari 255 karakter.')

export const district = string()
  .required('Kecamatan wajib diisi.')
  .max(255, 'Kecamatan tidak boleh lebih dari 255 karakter.')

export const villages = string()
  .required('Kelurahan wajib diisi.')
  .max(255, 'Kelurahan tidak boleh lebih dari 255 karakter.')

export const streetName = string()
  .required('Nama jalan wajib diisi.')
  .max(255, 'Nama jalan tidak boleh lebih dari 255 karakter.')

export const postalCode = string()
  .required('Kode pos wajib diisi.')
  .max(10, 'Kode pos tidak boleh lebih dari 10 karakter.')

export const selected = boolean().default(false)

export const loginSchema = object({
  email: email,
  password: passwordLogin,
})

export const registerUserSchema = object({
  email: email,
  password: password,
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

export const districtSchema = object({
  province: province,
  regencies: regencies,
  district: district,
  villages: villages,
})
