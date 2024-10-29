import DefaultLayout from "@/layouts/DefaultLayout.vue";
import HomePage from "@/pages/HomePage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";
import ProductDetailPage from "@/pages/ProductDetailPage.vue";

export const routes = [
  {
    path: '/',
    name: 'home',
    component: DefaultLayout,
    children: [
      { path: '', component: HomePage },
      { path: '/product/:id', component: ProductDetailPage }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundPage,
  },
]
