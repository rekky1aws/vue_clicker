<script setup>
import { ref } from 'vue'

import MainButton from './components/MainButton.vue';
import MoneyDisplay from './components/MoneyDisplay.vue';
import UpgradeButton from './components/UpgradeButton.vue'

const totalMoney = ref(0)
const mainButtonIncVal = ref(1)
const upgradeValue = ref(1)

function mainBtnClc() {
  totalMoney.value += mainButtonIncVal.value
}

</script>

<template>
  <MainButton :incVal="mainButtonIncVal" :incMain="mainBtnClc"/>
  <MoneyDisplay :value="totalMoney"/>
  <UpgradeButton :upgValue="upgradeValue" :incVal="mainButtonIncVal" />
</template>