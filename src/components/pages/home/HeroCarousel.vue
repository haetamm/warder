<script lang="ts" setup>
import { slides } from '../../../utils/data'
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref<number>(0)
let slideInterval: ReturnType<typeof setInterval> | undefined = undefined

const nextSlide = (): void => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

const prevSlide = (): void => {
  currentSlide.value =
    (currentSlide.value - 1 + slides.value.length) % slides.value.length
}

const goToSlide = (index: number): void => {
  currentSlide.value = index
}

const startSlideShow = (): void => {
  slideInterval = setInterval(nextSlide, 3000)
}

const stopSlideShow = (): void => {
  if (slideInterval) clearInterval(slideInterval)
}

onMounted(() => {
  startSlideShow()
})

onUnmounted(() => {
  stopSlideShow()
})
</script>

<template>
  <div class="kontener mx-auto">
    <div class="hero-carousel h-[99px] xs:h-[170px] xl:h-[320px]">
      <!-- Carousel Items -->
      <div
        v-for="(slide, index) in slides"
        :key="index"
        :class="['hero-slide mt-2 md:mt-3', { active: index === currentSlide }]"
      >
        <img
          :src="slide.image"
          alt="Hero Slide"
          style="width: 100%; height: 100%; object-fit: contain"
          class="rounded-none xl:rounded-lg"
        />
      </div>

      <!-- Navigation Arrows -->
      <button @click="prevSlide" class="nav prev hidden xs:inline-block">
        &#10094;
      </button>
      <button @click="nextSlide" class="nav next hidden xs:inline-block">
        &#10095;
      </button>

      <!-- Dots Navigation -->
      <div
        class="dots flex justify-end md:justify-start mr-3 md:mr-0 ml-0 md:ml-3"
      >
        <span
          v-for="(_slide, index) in slides"
          :key="index"
          :class="{ active: index === currentSlide }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-carousel {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  overflow: hidden;

  .hero-slide {
    display: none;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transition: opacity 0.5s ease;

    &.active {
      display: flex;
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }

  .nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    color: white;
    background: rgba(244, 240, 240, 0.3);
    border: none;
    cursor: pointer;
    padding: 7px;
    z-index: 10;
    border-radius: 10px;

    &.prev {
      left: 10px;
    }

    &.next {
      right: 10px;
    }
  }

  .dots {
    text-align: center;
    position: absolute;
    bottom: 15px;
    width: 100%;

    span {
      height: 7px;
      width: 7px;
      margin: 0 3px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
      cursor: pointer;

      &.active {
        background-color: white;
      }
    }
  }
}
</style>
