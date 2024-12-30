export interface ProductCardProps {
  id: string
  product_name: string
  color: string
  price: string
  address: string
  rating: string
  merchant_name: string
  count_sales: string
  poster_path: string
  createdAt: string
}

export interface Slide {
  image: string
  title: string
  description: string
}

export interface Product {
  id: number
  name: string
  color: string
  price: string
  image: string
}

export interface LoginResponse {
  token: string
  roles: string[]
  name: string
  image: string
}

export interface ProfileResponse {
  name: string | null
  image: string | null
  birth_date: Date | null
  gender: string | null
  email: string | null
  phone_number: string | null
}

export interface AddressResponse {
  id: string | null
  recipient_name: string | null
  phone_number: string | null
  label: string | null
  province: string | null
  regencies: string | null
  district: string | null
  villages: string | null
  street_name: string | null
  postal_code: string | null
  selected: boolean | null
}

export interface AddressForm {
  [key: string]: string | boolean | null
  recipient_name: string | null
  phone_number: string | null
  label: string | null
  province: string | null
  regencies: string | null
  district: string | null
  villages: string | null
  street_name: string | null
  postal_code: string | null
  selected: boolean | null
}

export interface RegSellerForm {
  phone_number: string | null
  shop_name: string | null
  shop_domain: string | null
  regencies: string | null
  district: string | null
  villages: string | null
}

export interface UserStore {
  token: string | null
}

export interface GuestForm {
  email: string
  password: string
}

export interface SelectedField {
  label: string
  value: string
  name: string
  type: string
  inputType: string
}

export interface UpdateProfilePayload {
  name?: string
  birth_date?: string
  gender?: 'pria' | 'wanita'
  email?: string
  phone_number?: string
}

export interface Region {
  id: string
  name: string
}
