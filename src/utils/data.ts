import { ref } from "vue"

interface Slide {
  image: string
  title: string
  description: string
}

export const slides = ref<Slide[]>([
  {
    image:
      'https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/10/22/85a37f44-1d7e-492d-b241-88b9b13a925d.jpg.webp?ect=4g',
    title: 'Welcome to Our Site',
    description: 'Discover amazing things with us!',
  },
  {
    image:
      'https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/10/24/85a25bb5-3865-46d6-99b2-e5b700c6a0e0.jpg.webp?ect=4g',
    title: 'Our Services',
    description: 'We provide the best solutions for you.',
  },
  {
    image:
      'https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/10/24/18189109-4504-46ed-b9d0-2443cc3cff89.jpg.webp?ect=4g',
    title: 'Join Us Today',
    description: 'Be a part of our community.',
  },
])

export const carouselData1 = [
  {
    id: 1,
    poster_path: "https://via.placeholder.com/200x300?text=Product+1",
  },
  {
    id: 2,
    poster_path: "https://via.placeholder.com/200x300?text=Product+2",
  },
  {
    id: 3,
    poster_path: "https://via.placeholder.com/200x300?text=Product+3",
  },
  {
    id: 4,
    poster_path: "https://via.placeholder.com/200x300?text=Product+4",
  },
  {
    id: 5,
    poster_path: "https://via.placeholder.com/200x300?text=Product+5",
  },
  {
    id: 6,
    poster_path: "https://via.placeholder.com/200x300?text=Product+6",
  },
  {
    id: 7,
    poster_path: "https://via.placeholder.com/200x300?text=Product+7",
  },
  {
    id: 8,
    poster_path: "https://via.placeholder.com/200x300?text=Product+8",
  },
  {
    id: 9,
    poster_path: "https://via.placeholder.com/200x300?text=Product+9",
  },
  {
    id: 10,
    poster_path: "https://via.placeholder.com/200x300?text=Product+10",
  },
  {
    id: 11,
    poster_path: "https://via.placeholder.com/200x300?text=Product+11",
  },
  {
    id: 12,
    poster_path: "https://via.placeholder.com/200x300?text=Product+12",
  },
]
