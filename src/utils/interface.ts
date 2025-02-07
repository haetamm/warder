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

export interface AddressFormModal {
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
  selected: boolean
  [key: string]: string | boolean | null
}

export interface UserStore {
  token: string | null
}

export interface GuestForm {
  email: string
  password: string
}

export interface PhoneNumberForm {
  phoneNumber: string
}

export interface ChangePasswordForm {
  password: string
  newPassword: string
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

export interface Seller {
  id: string
  shop_name: string
  shop_domain: string
  province: string
  regencies: string
  district: string
  villages: string
  street_name: string
  postal_code: string
  created_at: string
  updated_at: string
}

export interface CurrentSellerResponse {
  id: string
  shop_name: string
  shop_domain: string
  province: string
  regencies: string
  district: string
  villages: string
  street_name: string
  postal_code: string
  slogan: string | null
  desc: string | null
  created_at: string
  updated_at: string
}

export interface UpdateDescSellerForm {
  desc: string | null
  slogan: string | null
}

export interface RegCredentialSellerResponse {
  shop_name: string | null
  shop_domain: string | null
}

export interface RegCredentialSellerForm {
  shop_name: string | null
  shop_domain: string | null
}

export interface RegSellerResponse {
  seller: Seller
  roles: string[]
}

export interface RegRegionSellerForm {
  street_name: string | null
  postal_code: string | null
  province: string | null
  regencies: string | null
  district: string | null
  villages: string | null
}

export interface UpdateSellerPayload {
  shop_name?: string | null
  shop_domain?: string | null
  province?: string | null
  regencies?: string | null
  district?: string | null
  villages?: string | null
  street_name?: string | null
  postal_code?: string | null
  slogan?: string | null
  desc?: string | null
}

export interface NoteResponse {
  id: number
  title: string
  body: string
  updated_at: string
}

export interface NoteForm {
  title: string | null
  body: string | null
}

export interface ProductForm {
  name: string
  image_url: string | null
  condition: string
  description: string
  price: number
  stock: number
  sku: string | null
  product_weight: number
  shipping_insurance: string
}

export interface ProductFormDinamic {
  id: string | null
  name: string | null
  image_url: string | null
  condition: string | null
  description: string | null
  price: number | null
  stock: number | null
  sku: string | null
  product_weight: number | null
  shipping_insurance: string | null
  [key: string]: string | boolean | number | null
}

export interface ProductResponse {
  id: string
  name: string
  image_url: string | null
  condition: string
  description: string
  price: number
  stock: number
  sku: string | null
  product_weight: number
  shipping_insurance: string
  is_active: string | null
  created_at: string
  updated_at: string
}
