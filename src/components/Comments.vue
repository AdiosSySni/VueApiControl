<script setup>
import {ref, reactive, inject} from 'vue'
import AppComment from './AppComment.vue'
const commentsApi = inject('commentsApi')    
let isLoad = ref(false)
const loader = ref("")

const users = commentsApi.getComments()
function loadComments() { 
    loader.value = "loader"
    setTimeout(()=> {
            if(!isLoad.value) {
                console.log('Check1')
                commentsApi.fetchComments()
                console.log(commentsApi.comments)
                isLoad.value = true
                loader.value = ""
            }
            else {
                console.log('Check')
                isLoad.value = false
            }
        }, 2000)
}

</script>

<template>
    <div class="container">
        <p>
        <button class="btn primary" :disabled="isLoad" @click="loadComments()" >Загрузить комментарии</button>
        </p>
        <h2>Комментарии</h2>
        <app-comment v-if="isLoad" v-for="user in users" :key="user" :user="user"></app-comment>
        <div :class="loader"></div>
  </div>
</template>


<style lang="sass" scoped>
    h2
        color: white
</style>