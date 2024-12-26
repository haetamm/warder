import { object, string, date } from 'yup'

const alphanumericRegex = /^[a-zA-Z0-9]*$/

export const email = string().email().required()
export const passwordLogin = string().required()
export const password = string()
  .min(6)
  .max(12)
  .matches(alphanumericRegex, 'password must only contain alphanumeric')
  .required()

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
