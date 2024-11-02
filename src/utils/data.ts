import { AnFilledInstagram, BsFacebook, CaPlayOutlineFilled, FaBandsSquareTwitter } from "@kalimahapps/vue-icons"
import { ref } from "vue"
import type { Slide } from "./interface"

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
