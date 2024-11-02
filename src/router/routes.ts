import DefaultLayout from "@/layouts/DefaultLayout.vue";
import GuestLayout from "@/layouts/GuestLayout.vue";
import CartPage from "@/pages/CartPage.vue";
import HomePage from "@/pages/HomePage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import MerchantPage from "@/pages/MerchantPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";
import ProductDetailPage from "@/pages/ProductDetailPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import { urlPage } from "@/utils/constans";

export const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomePage
      },
      {
        path: '/:merchant',
        name: 'merchant',
        component: MerchantPage
      },
      { path: '/:merchant/:id',
        name: 'productDetail',
        component: ProductDetailPage
      },
      {
        path: '/cart',
        name: 'cart',
        component: CartPage
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
