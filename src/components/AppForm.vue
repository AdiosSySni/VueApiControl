<script setup>
import {ref, reactive, watchEffect} from 'vue'
import Resume from './Resume.vue';

const optionsArray = reactive([
    {id: 0, title: "Заголовок", text: "", value:"title"},
    {id: 1, title: "Подзаголовок", text: "", value:"subtitle"},
    {id: 2, title: "Аватар", text: "", value:"avatar"},
    {id: 3, title: "Текст", text: "", value:"text"}
])

const textValue = ref('')
const isTyping = ref(false)
let idx = 0

watchEffect((onInvalidate)=> {
    if(textValue.value.length > 0) {
        isTyping.value  = true
        const showTypingStatus = setTimeout(()=> {
            isTyping.value = false
        }, 1000)

        onInvalidate(()=> {
            clearInterval(showTypingStatus)
        })
    }
    else {
        isTyping.value = false
    }
})  

function getOptionsKey(e) {
    return idx = e.target.value
}

function selectOption(selectedIndex) {
    if(selectedIndex == optionsArray[0].id) {
        optionsArray[0].text = textValue.value
        console.log(optionsArray[0].text + " " + selectedIndex)
    }
    if(selectedIndex == optionsArray[1].id) {
        optionsArray[1].text = textValue.value
        console.log(optionsArray[1].text + " " + selectedIndex)
    }
    if(selectedIndex == optionsArray[2].id) {
        optionsArray[2].text = textValue.value
        console.log(optionsArray[2].text + " " + selectedIndex)
    }
    if(selectedIndex == optionsArray[3].id) {
        optionsArray[3].text = textValue.value
        console.log(optionsArray[3].text + " " + selectedIndex)
    }
    textValue.value = ""
}
</script>

<template>
     <form class="card card-w30" 
        @submit.prevent="selectOption(idx)">
        <div class="form-control">
            <label for="type">Тип блока</label>
            <select id="type" @change="getOptionsKey($event)">
                <option v-for="option in optionsArray" :key="option.id" :value="option.id">{{option.title}}</option>
            </select>
        </div>

        <div class="form-control">
            <label for="value">Значение</label>
            <textarea id="value" rows="3" v-model="textValue"></textarea>
        </div>

        <button type="submit" class="btn primary">Добавить</button>
    </form>    
    
    <Resume
        :title="optionsArray[0].text"
        :subtitle="optionsArray[1].text"
        :avatar="optionsArray[2].text"
        :text="optionsArray[3].text">
        <p v-if="isTyping">Typing resume...</p>
    </Resume>
</template>