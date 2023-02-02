<script setup>
import {ref, reactive} from 'vue'
import Resume from './Resume.vue';

// const selects = reactive([
//     "Заголовок",
//     "Подзаголовок",
//     "Аватар",
//     "Текст"
// ])

const select = ref("title")
const textValue = ref("")


function selectOption(value) {
    if(select.value == "title") {
        console.log(1)
    }
    if(select.value == "subtitle") {
        console.log(2)
    }
    if(select.value == "avatar") {
        console.log(3)
    }
    if(select.value == "text") {
        console.log(4)
    }
}

</script>

<template>
     <form class="card card-w30" 
        @submit.prevent="selectOption">
        <div class="form-control">
            <label for="type">Тип блока</label>
            <select id="type" v-model="select">
                <option value="title">Заголовок</option>
                <option value="subtitle">Подзаголовок</option>
                <option value="avatar">Аватар</option>
                <option value="text">Текст</option>
                <!-- <option v-for="select in selects" :key="select">{{ select }}</option> -->
            </select>
            <p>{{ select }}</p>
        </div>

        <div class="form-control">
            <label for="value">Значение</label>
            <textarea id="value" rows="3" v-model="textValue"></textarea>
        </div>

        <button class="btn primary">Добавить</button>
    </form>    
    

    <Resume
    :title="select"></Resume>
</template>