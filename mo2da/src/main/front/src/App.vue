<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LoginView from './views/LoginView.vue'
import JoinView from './views/JoinView.vue'
</script>

<template>
  <div class="root">
    <div class="left-side"></div>
    <div class="main">
      <RouterView></RouterView>
    </div>
    <div class="right-side"></div>
  </div>


</template>

<style scoped>

.left-side , .right-side{
  width: 25%;
  height: 100vh;
  /* background-color: bisque; */
}


.main{
  width: 50%;
  background-color: azure;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
}

.root{
  display: flex;
}


</style>
