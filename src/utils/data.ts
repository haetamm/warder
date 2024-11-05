import { AnFilledInstagram, BsFacebook, CaPlayOutlineFilled, FaBandsSquareTwitter } from "@kalimahapps/vue-icons"
import { ref } from "vue"
import type { Product, Slide } from "./interface"

export const slides = ref<Slide[]>([
  {
    image:
      'https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/10/22/85a37f44-1d7e-492d-b241-88b9b13a925d.jpg.webp?ect=4g',
    title: 'Welcome to Our Site',
    description: 'Discover amazing things with us!',
  },
  {
    image:
      'https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/10/24/85a25bb5-3865-46d6-99b2-e5b700c6a0e0.jpg.webp?ect=4g',
    title: 'Our Services',
    description: 'We provide the best solutions for you.',
  },
  {
    image:
      'https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/10/24/18189109-4504-46ed-b9d0-2443cc3cff89.jpg.webp?ect=4g',
    title: 'Join Us Today',
    description: 'Be a part of our community.',
  },
])

export const dataProduct = [
  {
    id: "1",
    merchant_name: "jakaslot",
    poster_path: "https://via.placeholder.com/200x300?text=Product+1",
  },
  {
    id: "2",
    merchant_name: "tangkalcau",
    poster_path: "https://via.placeholder.com/200x300?text=Product+2",
  },
  {
    id: "3",
    merchant_name: "pancingmania",
    poster_path: "https://via.placeholder.com/200x300?text=Product+3",
  },
  {
    id: "4",
    merchant_name: "gamingg",
    poster_path: "https://via.placeholder.com/200x300?text=Product+4",
  },
  {
    id: "5",
    merchant_name: "jakaslot",
    poster_path: "https://via.placeholder.com/200x300?text=Product+5",
  },
  {
    id: "6",
    merchant_name: "gamming",
    poster_path: "https://via.placeholder.com/200x300?text=Product+6",
  },
  {
    id: "7",
    merchant_name: "ronggadal",
    poster_path: "https://via.placeholder.com/200x300?text=Product+7",
  },
  {
    id: "8",
    merchant_name: "sokocay",
    poster_path: "https://via.placeholder.com/200x300?text=Product+8",
  },
  {
    id: "9",
    merchant_name: "jakaslot",
    poster_path: "https://via.placeholder.com/200x300?text=Product+9",
  },
  {
    id: "10",
    merchant_name: "jakaslot",
    poster_path: "https://via.placeholder.com/200x300?text=Product+10",
  },
  {
    id: "1",
    merchant_name: "jakaslot",
    poster_path: "https://via.placeholder.com/200x300?text=Product+1",
  },
  {
    id: "2",
    merchant_name: "tangkalcau",
    poster_path: "https://via.placeholder.com/200x300?text=Product+2",
  },
  {
    id: "3",
    merchant_name: "pancingmania",
    poster_path: "https://via.placeholder.com/200x300?text=Product+3",
  },
  {
    id: "4",
    merchant_name: "gamingg",
    poster_path: "https://via.placeholder.com/200x300?text=Product+4",
  },
  {
    id: "5",
    merchant_name: "jakaslot",
    poster_path: "https://via.placeholder.com/200x300?text=Product+5",
  },
  {
    id: "6",
    merchant_name: "gamming",
    poster_path: "https://via.placeholder.com/200x300?text=Product+6",
  },
  {
    id: "7",
    merchant_name: "ronggadal",
    poster_path: "https://via.placeholder.com/200x300?text=Product+7",
  },
  {
    id: "8",
    merchant_name: "sokocay",
    poster_path: "https://via.placeholder.com/200x300?text=Product+8",
  },
  {
    id: "9",
    merchant_name: "jakaslot",
    poster_path: "https://via.placeholder.com/200x300?text=Product+9",
  },
  {
    id: "10",
    merchant_name: "jakaslot",
    poster_path: "https://via.placeholder.com/200x300?text=Product+10",
  },
]

export const links = [
  "Tentang Warder",
  "Hak Kekayaan Intelektual",
  "Karir",
  "Blog",
  "Beli Lokal",
  "Promo Hari Ini",
  "Promo Guncang",
  "Afiliate program",
  "Marketing Solution"
]

export const beliLink = [
  "Tagihan Dan Top Up",
  "Warder COD",
  "Bebas Ongkir"
]

export const jualLink = [
  "Pusat Edukasi Seller",
  "Daftar Official Store",
]

export const bantuan = [
  "Warder Care",
  "Syarat Dan Ketentuan",
  "Kebijakan Privasi"
]

export const linkApps = [
  "https://assets.tokopedia.net/asts/assets-unify/img/icon-download-android.svg",
  "https://assets.tokopedia.net/asts/assets-unify/img/icon-download-ios.svg",
  "https://assets.tokopedia.net/asts/assets-unify/img/icon-download-huawei.svg"
]

export const linkSocmed = [
  { component: BsFacebook, sizeClass: 'w-7 h-7' },
  { component: FaBandsSquareTwitter, sizeClass: 'w-7 h-7' },
  { component: AnFilledInstagram, sizeClass: 'w-8 h-8' },
  { component: CaPlayOutlineFilled, sizeClass: 'w-8 h-8' },
]

export const products: Product[] = [
  {
    id: 1,
    name: 'Headset Earphone Samsung M23 M31 M33 Original 100% Super Bass',
    color: 'Putih',
    price: 'Rp35.500',
    image: 'https://images.tokopedia.net/img/cache/100-square/VqbcmM/2023/5/29/93db4e43-41a2-4d4f-bbf4-b45dbf34cfce.jpg',
  },
  {
    id: 2,
    name: 'Earphone JBL T110 In-Ear',
    color: 'Hitam',
    price: 'Rp150.000',
    image: 'https://via.placeholder.com/80x80?text=Product+1',
  },
  {
    id: 3,
    name: 'Sony WH-CH510 Wireless Headphone',
    color: 'Biru',
    price: 'Rp550.000',
    image: 'https://via.placeholder.com/80x80?text=Product+2',
  },
  {
    id: 4,
    name: 'Xiaomi Redmi AirDots',
    color: 'Merah',
    price: 'Rp120.000',
    image: 'https://via.placeholder.com/80x80?text=Product+3',
  },
  {
    id: 5,
    name: 'Samsung Galaxy Buds Live',
    color: 'Emerald',
    price: 'Rp1.200.000',
    image: 'https://via.placeholder.com/80x80?text=Product+4',
  },
]

export const listCost = [
  "Total Harga",
  "Total Ongkos Kirim",
  "Biaya Jasa Aplikasi",
]

export const dataIdentity = [
  {
    label: "Name",
    value: "Tatang Haetami",
    type: "personal"
  },
  {
    label: "Tanggal Lahir",
    value: "11 September 2010",
    type: "personal"
  },
  {
    label: "Jenis Kelamin",
    value: "Pria",
    type: "personal"
  },
  {
    label: "Email",
    value: 'tami@ganteng.com',
    type: "contact"
  },
  {
    label: "Nomor HP",
    value: '082260283276',
    type: "contact"
  }
]

export const dataAddress = [
  {
    id: 1,
    label: 'Rumah',
    name: 'Tatang Haetami',
    phone: '082260283276',
    address:
      'Jln. Veteran, RT/RW : 02/03, Gambir, Kecamatan Gambir Jakarta pusat, DKI Jakarta',
    selected: true,
  },
  {
    id: 2,
    label: 'Kantor',
    name: 'Tatang Haetami',
    phone: '082260283277',
    address: 'Jl. Sudirman, Kav 50, Jakarta Selatan, DKI Jakarta',
    selected: false,
  },
  {
    id: 3,
    label: 'Apartemen',
    name: 'Tatang Haetami',
    phone: '082260283278',
    address: 'Jl. Casablanca, Kuningan, Jakarta Selatan, DKI Jakarta',
    selected: false,
  },
  {
    id: 4,
    label: 'Rumah Kedua',
    name: 'Tatang Haetami',
    phone: '082260283279',
    address: 'Jl. Palmerah, Kebayoran Lama, Jakarta Barat, DKI Jakarta',
    selected: false,
  },
  {
    id: 5,
    label: 'Rumah Ketiga',
    name: 'Tatang Haetami',
    phone: '082260283280',
    address: 'Jl. Thamrin, Jakarta Pusat, DKI Jakarta',
    selected: false,
  },
]
