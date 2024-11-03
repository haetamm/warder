export interface ProductCardProps {
  id: string
  poster_path: string
  merchant_name: string
}

export interface Slide {
  image: string
  title: string
  description: string
}

export interface Product {
  id: number;
  name: string;
  color: string;
  price: string;
  image: string;
}
