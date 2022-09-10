
<script setup lang="ts">
import { ref } from "@vue/reactivity";
import axios from "axios";
import {useRouter} from "vue-router";

const totalPosts = 0;//서버쪽에 몇개의 posts 가 있는지 가져와서 페이지 번호를 몇개까지 만들지
const posts = [
  {no : 1, title : "제목1", author:"백수1" , count : 1, date: ""},
  {no : 2, title : "제목2", author:"백수2" , count : 1, date: ""},
  {no : 3, title : "제목3", author:"백수3" , count : 1, date: ""},
];

// //PostsView.vue 가 렌더링 될때 서버로 axios 날리는게 되는듯?
// axios.get("/api/posts")
//   .then((response)=>{
//     console.log(response.data);
    
//   })
//   .catch()
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
      <tr  v-for="post in posts" :key="post.no">
        <td>{{post.no}}</td>
        <td>{{post.title}}</td>
        <td>{{post.author}}</td>
        <td>{{post.count}}</td>
        <td>{{post.date}}</td>
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
  justify-content: center;
  list-style: none;
  width: 100%;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
}

.paging li{
  padding: 10px;
}





.title{
  display: flex;
  justify-content: center;
}
.root{
  display: flex;
  flex-direction: column;
  width: 100%; 
  
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