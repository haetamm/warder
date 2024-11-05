import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useScrollVisibility() {
  const isVisible = ref(true);
  let lastScrollTop = 0;

  const handleScroll = () => {
    const currentScrollTop = window.scrollY;
    isVisible.value = currentScrollTop < lastScrollTop || currentScrollTop === 0;
    lastScrollTop = currentScrollTop;
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return { isVisible };
}
