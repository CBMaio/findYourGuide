<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToLogin = function () {
  router.push({ name: 'login' })
}
const goToRegisterView = function () {
  router.push({ name: 'register' })
}
</script>

<template>
  <main class="main">
    <div class="main-text">
      <p class="bold-text">world</p>
      <p class="regular-text">travel</p>
    </div>
    <div class="legend">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
    </div>
    <button @click="goToLogin" class="button dark">Ingresar</button>
    <button class="button light" @click="goToRegisterView">Registrarse</button>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/css/views/_getStartedView.scss';
</style>
