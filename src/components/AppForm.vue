<script setup>
import {ref, reactive} from 'vue'
import Resume from './Resume.vue';



const selects = reactive([
    {id: 0, title: "Заголовок", text: "", value:"title"},
    {id: 1, title: "Подзаголовок", text: "", value:"subtitle"},
    {id: 2, title: "Аватар", text: "", value:"avatar"},
    {id: 3, title: "Текст", text: "", value:"text"}
])

const selected = ref("title")
const textValue = ref("")

function selectOption(selectedValue) {
    if(selected.value == selects[0].value) {
        selects[0].text = textValue.value
        console.log(selects[0].text + " " + selected.value)
        console.log(selectedValue)
        textValue.value = ""
    }
    if(selected.value == selects[1].value) {
        selects[1].text = textValue.value
        console.log(selects[1].text + " " + selected.value)
        textValue.value = ""
    }
    if(selected.value == selects[2].value) {
        selects[2].text = textValue.value
        console.log(selects[2].text + " " + selected.value)
        textValue.value = ""
    }
    if(selected.value == selects[3].value) {
        selects[3].text = textValue.value
        console.log(selects[3].text + " " + selected.value)
        textValue.value = ""
    }
}

</script>

<template>
     <form class="card card-w30" 
        @submit.prevent="">
        <div class="form-control">
            <label for="type">Тип блока</label>
            <select id="type" v-model="selected">
                <!-- <option value="title">Заголовок</option>
                <option value="subtitle">Подзаголовок</option>
                <option value="avatar">Аватар</option>
                <option value="text">Текст</option> -->
                <option v-for="select in selects" :value="select.value">{{select.title}}</option>
            </select>
        </div>

        <div class="form-control">
            <label for="value">Значение</label>
            <textarea id="value" rows="3" v-model="textValue"></textarea>
        </div>

        <button type="submit" @click="selectOption(selected)" class="btn primary">Добавить</button>
    </form>    
    
    <Resume
        :title="selects.id" ></Resume> // ???????????
</template>