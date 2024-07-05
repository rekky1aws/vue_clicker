<script setup>
import { ref } from 'vue'

const totalMoney = ref(0)
const mainButtonIncVal = ref(1)

function mainBtnClc() {
  totalMoney.value += mainButtonIncVal.value
}
</script>

<template>
  <button id="mainBtn" @click="mainBtnClc"> + {{  mainButtonIncVal }}</button>
  <div> {{ totalMoney }} $ </div>
</template>