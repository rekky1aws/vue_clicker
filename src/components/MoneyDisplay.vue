<script setup>
const props = defineProps({
    value: Number
})

console.log(props.incVal)
</script>

<template>
    <div> {{ value }} $ </div>
</template>