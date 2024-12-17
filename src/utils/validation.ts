import { object, string } from 'yup'

const alphanumericRegex = /^[a-zA-Z0-9]*$/

export const email = string().email().required()
export const passwordLogin = string().required()
export const password = string()
  .min(6)
  .max(12)
  .matches(alphanumericRegex, 'password must only contain alphanumeric')
  .required()

export const loginSchema = object({
  email: email,
  password: passwordLogin,
})

export const registerUserSchema = object({
  email: email,
  password: password,
})
