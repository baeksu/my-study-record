<script setup lang="ts">
import { ref } from "@vue/reactivity";
import axios from "axios";
import {useRouter} from "vue-router";


const router = useRouter();
const username = ref("");
const password = ref("");

const login = () =>{
  axios.post("/api/login",{
    username : username.value,
    password : password.value
  })
  .then((response)=>{
    router.replace({name : "posts"})
  })
  .catch()
}




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
      <input v-model="username" type="text" placeholder="USERNAME">
      <input v-model="password" type="password" placeholder="PASSWORD">
      <button @click="login"> SIGN IN</button>
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