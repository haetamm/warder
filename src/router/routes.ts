import DefaultLayout from "@/layouts/DefaultLayout.vue";
import GuestLayout from "@/layouts/GuestLayout.vue";
import CartPage from "@/pages/CartPage.vue";
import HomePage from "@/pages/HomePage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import MerchantPage from "@/pages/MerchantPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";
import ProductDetailPage from "@/pages/ProductDetailPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import ShipmentPage from "@/pages/ShipmentPage.vue";
import MyShopPage from "@/pages/MyShopPage.vue";
import UserAddressPage from "@/pages/UserAddressPage.vue";
import UserPage from "@/pages/UserPage.vue";
import UserSettingsPage from "@/pages/UserSettingsPage.vue";
import { urlPage } from "@/utils/constans";
import WishlistPage from "@/pages/WishlistPage.vue";

export const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomePage
      },
      {
        path: '/:merchant',
        name: 'Merchant',
        component: MerchantPage
      },
      { path: '/:merchant/:id',
        name: 'Product Detail',
        component: ProductDetailPage
      },
      {
        path: urlPage.CART,
        name: 'Keranjang',
        component: CartPage,
      },
      {
        path: urlPage.WISHLIST,
        name: 'Wishlist',
        component: WishlistPage
      },
      {
        path: urlPage.SHIPMENT,
        name: 'Shipment',
        component: ShipmentPage
      },
      {
        path: '/user',
        component: UserPage,
        children: [
            {
                path: '',
                redirect: urlPage.USER_SETTING
            },
            {
                path: 'settings',
                name: 'Akun Saya',
                component: UserSettingsPage,
            },
            {
              path: urlPage.USER_ADDRESS,
              name: 'Daftar Alamat',
              component: UserAddressPage
          }
        ]
      },
      {
        path: urlPage.MY_SHOP,
        name: 'myShopPage',
        component: MyShopPage
      }

    ]
  },
  {
    path: '/guest',
    component: GuestLayout,
    children: [
      {
        path: '',
        redirect: urlPage.LOGIN
      },
      {
        path: 'login',
        name: 'login',
        component: LoginPage
      },
      {
        path: 'register',
        name: 'register',
        component: RegisterPage
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundPage,
  },
]
