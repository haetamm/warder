import { object, string } from 'yup'

export const loginSchema = object({
  email: string().email().required('Email is required'),
  password: string().required('Password is required'),
})

export const registerUserSchema = object({
  email: string().email().required('Email is required'),
  password: string().min(6).max(12).required('Password is required'),
})
