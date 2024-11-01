<template>
  <div
    class="hidden md:block h-full md:h-[calc(100vh-70px)] lg:h-[calc(100vh-89px)] md:sticky top-[89px] overflow-hidden"
  >
    <div class="p-1">
      <div class="px-1 font-bold py-1 border-b-2">Etalase Toko</div>
      <div class="px-3 py-1 rounded-md bg-slate-300 cursor-pointer my-1">
        Semua Produk
      </div>
      <div class="px-3 py-1 rounded-md hover:bg-slate-300 cursor-pointer">
        Produk Terjual
      </div>
    </div>
  </div>

  <div
    class="block xs:flex md:hidden w-full px-1 items-center xs:justify-between"
  >
    <div class="px-2 font-bold text-md mb-1 xs:mb-0 w-full xs:w-1/3">
      Etalase Toko :
    </div>
    <select class="w-full py-2 border-2 rounded-md px-1">
      <option selected>Semua Produk</option>
      <option>Produk Terjual</option>
    </select>
  </div>
</template>
