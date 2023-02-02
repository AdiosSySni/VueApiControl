<script setup>  
const props = defineProps({
    user: null
})
const user = props.user
</script>

<template>
   <div class="card">
        <ul class="list">
            <li class="list-item">
            <div>
                <p><strong>{{ user.email }}</strong></p>
                <small>{{user.body}}</small>
            </div>
            </li>
        </ul>
    </div>
</template>