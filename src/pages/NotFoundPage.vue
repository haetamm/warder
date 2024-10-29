<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: '404 | Not Found',
  meta: [
    { name: 'description', content: 'Not Found Page' },
    { name: 'keywords', content: 'warder, not found' },
  ],
})
</script>
<template>
  <div id="not-found" className="bg-white font-gabarito">
    <div>404</div>
    <div className="txt">Not Found<span className="blink">_</span></div>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
  font-family: 'Plus Jakarta Sans';
}

#not-found {
  padding: 1rem;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  color: var(--color);
  text-shadow: 0px 0px var(--glowSize);
  font-size: 6rem;
  flex-direction: column;
  font-weight: 800;

  .txt {
    font-size: 1.8rem;

    .blink {
      animation-name: blink;
      animation-duration: 1s;
      animation-iteration-count: infinite;
    }
  }
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  49% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
</style>
