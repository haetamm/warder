import DefaultLayout from '@/layouts/DefaultLayout.vue'
import GuestLayout from '@/layouts/GuestLayout.vue'
import CartPage from '@/pages/CartPage.vue'
import HomePage from '@/pages/HomePage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import MerchantPage from '@/pages/MerchantPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
import ProductDetailPage from '@/pages/ProductDetailPage.vue'
import RegisterPage from '@/pages/RegisterPage.vue'
import ShipmentPage from '@/pages/ShipmentPage.vue'
import MyShopPage from '@/pages/MyShopPage.vue'
import UserAddressPage from '@/pages/UserAddressPage.vue'
import UserPage from '@/pages/UserPage.vue'
import UserSettingsPage from '@/pages/UserSettingsPage.vue'
import { urlPage } from '@/utils/constans'
import WishlistPage from '@/pages/WishlistPage.vue'
import TransactionPage from '@/pages/TransactionPage.vue'
import SellerLayout from '@/layouts/SellerLayout.vue'
import SellerHomePage from '@/pages/SellerHomePage.vue'
import SellerProductPage from '@/pages/SellerProductPage.vue'
import SellerSettingsPage from '@/pages/SellerSettingsPage.vue'
import SellerInfoPage from '@/pages/SellerInfoPage.vue'
import SellerOperationalPage from '@/pages/SellerOperationalPage.vue'
import SellerAddressPage from '@/pages/SellerAddressPage.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import SellerNotePage from '@/pages/SellerNotePage.vue'
import SellerCreateProductPage from '@/pages/SellerCreateProductPage.vue'
import SellerUpdateProductPage from '@/pages/SellerUpdateProductPage.vue'

export const routes = [
  {
    path: urlPage.HOME,
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomePage,
      },
      {
        path: '/:merchant',
        name: 'Merchant',
        component: MerchantPage,
      },
      {
        path: '/:merchant/:id',
        name: 'Product Detail',
        component: ProductDetailPage,
      },
    ],
  },
  {
    path: urlPage.HOME,
    component: AuthLayout,
    children: [
      {
        path: urlPage.CART,
        name: 'Keranjang',
        component: CartPage,
      },
      {
        path: urlPage.WISHLIST,
        name: 'Wishlist',
        component: WishlistPage,
      },
      {
        path: urlPage.SHIPMENT,
        name: 'Shipment',
        component: ShipmentPage,
      },
      {
        path: urlPage.USER,
        component: UserPage,
        children: [
          {
            path: '',
            redirect: urlPage.USER_SETTING,
          },
          {
            path: 'settings',
            name: 'Akun Saya',
            component: UserSettingsPage,
          },
          {
            path: urlPage.USER_ADDRESS,
            name: 'Daftar Alamat',
            component: UserAddressPage,
          },
        ],
      },
      {
        path: urlPage.MY_SHOP,
        name: 'Buat Toko',
        component: MyShopPage,
      },
      {
        path: urlPage.TRANSACTION,
        name: 'Daftar Transaksi',
        component: TransactionPage,
      },
    ],
  },
  {
    path: urlPage.SELLER,
    component: SellerLayout,
    children: [
      {
        path: '',
        redirect: urlPage.SELLER_HOME,
      },
      {
        path: 'home',
        component: SellerHomePage,
        name: 'Dashboard',
      },
      {
        path: 'product',
        component: SellerProductPage,
        name: 'Daftar Produk',
      },
      {
        path: 'product/create',
        component: SellerCreateProductPage,
        name: 'Tambah Produk',
      },
      {
        path: 'product/:id/update',
        component: SellerUpdateProductPage,
        name: 'Edit Produk',
      },
      {
        path: urlPage.SELLER_SETTING,
        component: SellerSettingsPage,
        children: [
          {
            path: '',
            redirect: urlPage.SELLER_SETTING_INFO,
          },
          {
            path: 'info',
            component: SellerInfoPage,
          },
          {
            path: 'operational-hour',
            component: SellerOperationalPage,
          },
          {
            path: 'note',
            component: SellerNotePage,
          },
          {
            path: 'address',
            component: SellerAddressPage,
          },
        ],
      },
    ],
  },
  {
    path: urlPage.GUEST,
    component: GuestLayout,
    children: [
      {
        path: '',
        redirect: urlPage.LOGIN,
      },
      {
        path: 'login',
        name: 'login',
        component: LoginPage,
      },
      {
        path: 'register',
        name: 'register',
        component: RegisterPage,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundPage,
  },
]
