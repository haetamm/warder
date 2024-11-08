<template>
  <div
    class="flex tabCs:hidden hidden-costome justify-between items-center bottom-0 fixed w-full z-50 space-x-1 px-2 py-1.5 shadow-3xl shadow-black bg-white border-t-2 border-slate-50"
  >
    <button
      class="w-full py-1.5 border-2 font-normal rounded-md text-purple-600 border-purple-600"
    >
      Beli
    </button>
    <button
      class="w-full py-1.5 border-2 border-purple-600 font-normal bg-purple-600 text-white rounded-md hover:bg-purple-700"
    >
      + Keranjang
    </button>
  </div>
</template>

<style scoped>
@media (min-height: 1024px) and (min-width: 768px) {
  .hidden-costome {
    display: none;
  }
}

@media (min-height: 1180px) and (min-width: 820px) {
  .hidden-costome {
    display: none;
  }
}

@media (min-height: 1280px) {
  .hidden-costome {
    display: none;
  }
}
</style>
