import { useRouter } from 'vue-router';

export const scrollTop = () => {
  window.scrollTo(0, 0)
}

export function backHandle() {
  const router = useRouter();
  return () => router.back();
}
