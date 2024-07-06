<script setup>
const props = defineProps({
    incVal: Number,
    incMain: Function
})

console.log(props.incVal)
</script>

<template>
    <button id="mainBtn" @click="incMain"> + {{  incVal }}</button>
</template>