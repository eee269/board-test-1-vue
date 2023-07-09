<template>
  <div class="container" @load="getList">
    <!-- <img src="../assets/logo.png"> -->
    <h1>WELCOME HOME</h1>
    <div>
        <table>
            <tr>
                <th width=10% class="text-center">번호</th>
                <th width=45% class="text-center">제목</th>
                <th width=15% class="text-center">작성자</th>
                <th width=20% class="text-center">작성일</th>
                <th width=10% class="text-center">조회수</th>
            </tr>
            <tr v-for="vo in a" :key="vo">
                <th width=10% class="text-center">{{vo.num}}</th>
                <th width=45% class="text-center">{{vo.title}}</th>
                <th width=15% class="text-center">{{vo.content}}</th>
                <th width=20% class="text-center">{{vo.userNum}}</th>
                <th width=10% class="text-center">0</th>
            </tr>
        </table>
    </div>
  </div>
</template>

<script>
export default {
    name: 'index',
    data: () => ({
        a: ''
    }),
    methods: {
        getList() {
            axios.get('http://localhost:8080/api/board/').then(result => {
                console.log(result.data)
                this.a = result.data
            })
        }
    }
}
</script>

<style>
.container {
    width: 30%;
}
</style>