<script setup>
import {ref, reactive, inject} from 'vue'
import AppComment from './AppComment.vue'
const commentsApi = inject('commentsApi')    
let isLoad = ref(false)

const users = commentsApi.getComments()

function loadComments() {    
    if(!isLoad.value) {
        console.log('Check1')
        commentsApi.fetchComments()
        console.log(commentsApi.comments)
        isLoad.value = true
    }
    else {
        console.log('Check')
        isLoad.value = false
    }
}

</script>

<template>
    <div class="container">
        <p>
        <button class="btn primary" :disabled="isLoad" @click="loadComments()" >Загрузить комментарии</button>
        </p>
        <h2>Комментарии</h2>
        <app-comment v-if="isLoad" v-for="user in users" :user="user"></app-comment>
  </div>
</template>


<style lang="sass">
    h2
        color: white
</style>