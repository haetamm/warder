import { useRoute, useRouter, type RouteLocationNormalizedLoaded } from 'vue-router';
import { urlPage } from './constans';

export const scrollTop = () => {
  window.scrollTo(0, 0)
}

export function backHandle() {
  const router = useRouter();
  return () => router.back();
}

export const isPageType = (
  route: ReturnType<typeof useRoute>,
  pageType: 'merchant' | 'cart' | 'shipment' | 'myShop' | 'userSettings' | 'userAddress' | 'wishlist' | 'transaction'
) => {
  const paths = {
    merchant: `/${route.params.merchant as string | undefined}`,
    cart: urlPage.CART,
    shipment: urlPage.SHIPMENT,
    myShop: urlPage.MY_SHOP,
    userSettings: urlPage.USER_SETTING,
    userAddress: urlPage.USER_ADDRESS,
    wishlist: urlPage.WISHLIST,
    transaction: urlPage.TRANSACTION
  }

  return route.path === paths[pageType]
}

export const capitalizeFirstLetterOnly = (text: string)  => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export const isActive = (targetPath: string): boolean => {
  const route: RouteLocationNormalizedLoaded = useRoute()
  return route.path === targetPath
}

const date = new Date();

export const currentDate = date.toLocaleDateString('id-ID', {
  day: '2-digit',
  month: 'long',
  year: 'numeric'
});
