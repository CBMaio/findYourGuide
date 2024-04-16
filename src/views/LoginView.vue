<script setup>
import { useRouter } from 'vue-router'
import BackArrow from '@/assets/svg/back-arrow.svg'

const router = useRouter()

const goToRegisterView = function () {
  router.push({ name: 'register' })
}
const goToStartedScreen = function () {
  router.replace({ name: 'start' })
}
</script>

<template>
  <header class="header">
    <BackArrow class="icon" @click="goToStartedScreen" />
    <div class="title">Iniciar Sesión</div>
  </header>
  <main class="main">
    <div class="welcome-text">
      <div class="title">Bienvenido</div>
      <div class="subtitle">Por favor ingrese sus datos</div>
    </div>
    <form action="" class="form">
      <div class="input-container">
        <label class="label" for=""> Email </label>
        <input class="input" type="text" placeholder="example@example.com" />
      </div>
      <div class="input-container">
        <label class="label" for=""> Email </label>
        <input class="input" type="password" placeholder="******" />
      </div>
      <button class="button dark">Ingresar</button>
      <div class="sign-up">
        No tienes una cuenta?
        <span class="link" @click="goToRegisterView"> Registrate </span>
      </div>
    </form>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/css/views/_loginView.scss';
</style>
