<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();


</script>

<template>
  <div>
    <h1>WELCOME</h1>
    <p>
      친구를 만들고 함께 일상을 공유해 봐요! <br>
      언제나 어디서나 모이다와 함께해 봐요!
    </p>
    <section class="input-section">
      <h2>입장하기</h2>
      <input type="text" placeholder="USERNAME">
      <input type="password" placeholder="PASSWORD">
      <button> SIGN IN</button>
      <router-link to="/join">
        <button> JOIN US</button>
      </router-link>
    </section>
  </div>

</template>

<style scoped>

.header{
  font-size: 40px;

}

.input-section{
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  padding: 50px;
}

input, button{
  width: 350px;
  height: 40px;
  border-radius: 8px;
  /* border: none; */
  margin-top: 10px;
}

button{
  width: 350px;
  background-color: lightblue;
}


</style>