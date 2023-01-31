<script setup>
import Comments from './components/Comments.vue';
import InputForm from './components/InputForm.vue';
import Resume from './components/Resume.vue';

import {ref, reactive, provide} from 'vue'
import {commentsStore} from './store/store'

const store = commentsStore()
provide('commentsStore', store)
// store.fetchComments()
// console.log(store.comments)



</script>


<template>
  <div class="container column">
    <input-form></input-form>
    <resume></resume>
  </div>
  <comments></comments>
</template>

<style>
  .avatar {
    display: flex;
    justify-content: center;
  }

  .avatar img {
    width: 150px;
    height: auto;
    border-radius: 50%;
  }
</style>
