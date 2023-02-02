<script setup>
const props = defineProps({
    title: String,
    subtitle: String,
    avatar: MediaSource,
    text: String
})
</script>

<template>
     <div class="card card-w70">
        <h1 v-if="title != ''">Резюме {{ props.title }}</h1>
        <h1 v-else>Заполните свое резюме</h1>
        <div class="avatar">
            <img :src="avatar"/>
        </div>
        <h2>{{ subtitle }}</h2>
        <p>{{ text }}</p>
    </div>
</template>