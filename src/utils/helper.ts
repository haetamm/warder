import { useRoute, useRouter } from 'vue-router';
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
  pageType: 'merchant' | 'cart' | 'shipment',
) => {
  const paths = {
    merchant: `/${route.params.merchant as string | undefined}`,
    cart: urlPage.CART,
    shipment: urlPage.SHIPMENT,
  }

  return route.path === paths[pageType]
}
