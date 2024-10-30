import DefaultLayout from "@/layouts/DefaultLayout.vue";
import GuestLayout from "@/layouts/GuestLayout.vue";
import HomePage from "@/pages/HomePage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";
import ProductDetailPage from "@/pages/ProductDetailPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";

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
      { path: '/product/:id',
        name: 'productDetail',
        component: ProductDetailPage
      }
    ]
  },
  {
    path: '/guest',
    component: GuestLayout,
    children: [
      {
        path: '',
        redirect: '/login'
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
