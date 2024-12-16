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
}

export interface UserStore {
  token: string | null
}
