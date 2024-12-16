<script setup lang="ts">
import { urlPage } from '@/utils/constans'
import { scrollTop } from '@/utils/helper'
import { Button } from 'primevue'
</script>

<template>
  <Button
    v-on:click="scrollTop"
    as="router-link"
    label="Login"
    :to="urlPage.LOGIN"
    class="w-full"
    :style="{
      background: 'white',
      color: '#9333ea',
      padding: '3px 12px 3px 12px',
    }"
  />
  <Button
    v-on:click="scrollTop"
    as="router-link"
    label="Register"
    :to="urlPage.REGISTER_USER"
    class="w-full"
    :style="{
      padding: '3px 12px 3px 12px',
    }"
  />
</template>
