import { useRouter } from "vue-router"

const router = useRouter()

export const scrollTop = () => {
  window.scrollTo(0, 0)
}

export const backHandle = () => {
  router.back()
}
