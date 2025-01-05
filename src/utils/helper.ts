import {
  useRoute,
  useRouter,
  type RouteLocationNormalizedLoaded,
} from 'vue-router'
import { urlPage } from './constans'

export const scrollTop = () => {
  window.scrollTo(0, 0)
}

export function backHandle() {
  const router = useRouter()
  return () => router.back()
}

export function backHandleGuest() {
  const router = useRouter()
  return () => router.go(-2)
}

export const isPageType = (
  route: ReturnType<typeof useRoute>,
  pageType:
    | 'merchant'
    | 'cart'
    | 'shipment'
    | 'myShop'
    | 'userSettings'
    | 'userAddress'
    | 'wishlist'
    | 'transaction',
) => {
  const paths = {
    merchant: `/${route.params.merchant as string | undefined}`,
    cart: urlPage.CART,
    shipment: urlPage.SHIPMENT,
    myShop: urlPage.MY_SHOP,
    userSettings: urlPage.USER_SETTING,
    userAddress: urlPage.USER_ADDRESS,
    wishlist: urlPage.WISHLIST,
    transaction: urlPage.TRANSACTION,
  }

  return route.path === paths[pageType]
}

export const capitalizeFirstLetterOnly = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}

export const isActive = (targetPrefix: string): boolean => {
  const route: RouteLocationNormalizedLoaded = useRoute()
  return route.path.startsWith(targetPrefix)
}

const date = new Date()

export const currentDate = date.toLocaleDateString('id-ID', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
})

export const formatDate = (date: Date | null) => {
  if (!date) return '-'
  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function formatDateNote(dateString: string): string {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }
  return date.toLocaleDateString('id-ID', options)
}
