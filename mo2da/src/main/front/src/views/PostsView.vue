
<script setup lang="ts">
import { ref } from "@vue/reactivity";
import axios from "axios";
import {useRouter} from "vue-router";

const posts = [];

//PostsView.vue 가 렌더링 될때 서버로 axios 날리는게 되는듯?
axios.get("/api/posts")
  .then((response)=>{
    console.log(response.data);
    
  })
  .catch()




</script>





<template>
  <div class="root">
    <div class="title">
      <h1>자유 게시판</h1>
    </div>
    
    <section class="input-section">
      <input type="button" value="글작성">
      <div>
        <input type="text" placeholder="검색어를 입력하세요"> 
        <input type="button" value="검색">
      </div>
      
    </section>
    
    <table>
      <tr>
        <th>번호</th>
        <th>제목</th>
        <th>작성자</th>
        <th>조회수</th>
        <th>날짜</th>
      </tr>
      <tr>
        <td>1</td>
        <td>오늘 점심 뭐먹지</td>
        <td>baeksu</td>
        <td>0</td>
        <td>2020.09.01</td>
      </tr>
      <tr>
        <td>2</td>
        <td>내일은 금요일</td>
        <td>백수</td>
        <td>2</td>
        <td>2020.09.01</td>
      </tr>
    </table>
    
    <section class="paging">
      <ul>
        <li><a href="#">&#10094;</a></li>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">&#10095;</a></li>
      </ul>
    </section>

    
      
  </div>
  

</template>


<style scoped>

.paging ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
}



.title{
  display: flex;
  justify-content: center;
}
.root{
  display: flex;
  flex-direction: column;
  width: 100%; 
  margin-bottom: 10px;
}

.input-section{
  display: flex;
  justify-content: space-between;
  
}

table{  
  width: 100%;
  border-top: 1px solid #444444;
  border-collapse: collapse;
}
th,td{
  border-bottom: 1px solid #444444;
  padding: 10px;
  text-align: center;
  
}




</style>