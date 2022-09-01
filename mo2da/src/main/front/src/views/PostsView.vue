<template>
  <h1>자유 게시판</h1>
  
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
  

</template>

<script>
export default {

}
</script>

<style scoped>

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