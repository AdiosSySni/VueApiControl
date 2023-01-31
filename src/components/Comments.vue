<script setup>
import {ref, reactive, inject} from 'vue'
const commentsStore = inject('commentsStore')    
let isLoad = ref(true);

console.log('Check')

function loadComments() {    
    console.log(commentsStore.comments)
    commentsStore.fetchComments()
}
</script>

<template>
    <div class="container">
        <p>
        <button class="btn primary" @click="loadComments()">Загрузить комментарии</button>
        </p>

        <div class="card">
        <h2>Комментарии</h2>
        <ul class="list">
            <li class="list-item">
            <div>
                <p><strong>test@microsoft.com</strong></p>
                <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, reiciendis.</small>
            </div>
            </li>
        </ul>
        </div>
  </div>
</template>