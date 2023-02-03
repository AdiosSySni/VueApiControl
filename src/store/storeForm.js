import {ref, reactive, watchEffect} from 'vue'

const textValue = ref("")
const isTyping = ref(false)
let idx = 0

const optionsArray = reactive([
    {id: 0, title: "Заголовок", text: "", value:"title"},
    {id: 1, title: "Подзаголовок", text: "", value:"subtitle"},
    {id: 2, title: "Аватар", text: "", value:"avatar"},
    {id: 3, title: "Текст", text: "", value:"text"}
])

function getOptionsKey(e) {
    return idx.value = e.target.value
}

function getOptionsArray() {
    return optionsArray
}

function getIsTyping() {
    return isTyping
}

const loaderWatching = () => {
    watchEffect((onInvalidate) => {
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
}

const selectOption = (selectedIndex) => {
    if(selectedIndex == optionsArray[0].id) {
        return optionsArray[0].text = textValue.value
    }
    if(selectedIndex == optionsArray[1].id) {
        return optionsArray[1].text = textValue.value
    }
    if(selectedIndex == optionsArray[2].id) {
        return optionsArray[2].text = textValue.value
    }
    if(selectedIndex == optionsArray[3].id) {
        return optionsArray[3].text = textValue.value
    }
    return textValue.value = ""
}

export function storeForms() {
    return {
        getOptionsKey,
        selectOption,
        getOptionsArray,
        loaderWatching,
        getIsTyping
    }
   
}
