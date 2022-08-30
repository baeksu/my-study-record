<script setup lang="ts">
import { ref } from "@vue/reactivity";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");
const city = ref("");
const age = ref("");

// 요거 중복아이디 같은거 발생했을떄도 처리를 해줘야 하는데 요건 좀 나중에 채워나가자
// 회원가입 이후 로그인 화면으로 라우팅
const join = ()=>{
  axios.post("/api/join" , {
    username: username.value,
    password: password.value,
    city: city.value,
    age: age.value
  })
  .then((response)=>{
    router.replace({name : "login"});
  })
  .catch()
}


</script>

<template>
  <h1>환영합니다!</h1>
  <h2>아래 양식을 입력해주세요</h2>
  <section class="input-section">
    <input v-model="username" type="text" placeholder="USERNAME">
    <input v-model="password" type="password" placeholder="PASSWORD">
    <input v-model="city" type="text" placeholder="CITY">
    <input v-model="age" type="text" placeholder="AGE">
    <button @click="join"> SUBMIT</button>
    
  </section>

</template>

<style scoped>

.header{
  font-size: 40px;

}

.input-section{
  display: flex;
  flex-direction: column;
  /* margin-top: 50px; */
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