<template>
  <nuxt-layout>
    <NuxtPage />
    <Notivue style="z-index: 9999 !important;" v-slot="item">
        <Notification :item="item" />
     </Notivue>
  </nuxt-layout>
</template>

<style>
.Notivue__notification{
  z-index: 99px !important;
  margin-top: 80px !important;
}
</style>

<script setup>

</script>