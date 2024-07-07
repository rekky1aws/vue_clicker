<script setup>
defineProps({
    incVal: Number,
    incMain: Function
})
</script>

<template>
    <button id="mainBtn" @click="incMain"> + {{  incVal }}</button>
</template>