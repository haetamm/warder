import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useScrollVisibility() {
  const isVisible = ref(true);
  let lastScrollTop = 0;

  const handleScroll = () => {
    const currentScrollTop = window.scrollY
    console.log(currentScrollTop, isVisible.value)
    isVisible.value = currentScrollTop < lastScrollTop || currentScrollTop === 0;
    lastScrollTop = currentScrollTop;
  };

  onMounted(() => {
    console.log('Scroll event listener added');
    window.addEventListener('scroll', handleScroll);
  });

  onBeforeUnmount(() => {
    console.log('Scroll event listener added');
    window.removeEventListener('scroll', handleScroll);
  });

  return { isVisible };
}
