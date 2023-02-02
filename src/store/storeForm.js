import {ref, reactive} from 'vue'

const textValue = ref("")
let idx = 0

const optionsArray = reactive([
    {id: 0, title: "Заголовок", text: "", value:"title"},
    {id: 1, title: "Подзаголовок", text: "", value:"subtitle"},
    {id: 2, title: "Аватар", text: "", value:"avatar"},
    {id: 3, title: "Текст", text: "", value:"text"}
])

function getOptionsKey(e) {
    return idx = e.target.value
}

function getOptionsArray() {
    return optionsArray
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

export function storeForms() {
    return {
        getOptionsKey,
        selectOption,
        getOptionsArray,
        textValue,
        idx
    }
   
}