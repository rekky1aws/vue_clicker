<script setup>
const props = defineProps({
    incVal: Number,
    incMain: Function
})
</script>

<template>
    <button id="mainBtn" @click="incMain"> + {{  incVal }}</button>
</template>