<script setup>
import { onUnmounted } from 'vue'

import { useClicker } from './stores/clicker'

import PartyArea from './components/PartyArea.vue'
import FactoryList from './components/FactoryList.vue'

const clicker = useClicker()

// Tick every tick duration
let interval
const run = (durationMs = clicker.tickDurationMs) => {
  interval = setInterval(() => {
    clicker.tick()
  }, durationMs);
}
run()

// Clear interval on unmount
onUnmounted(() => {
  clearInterval(interval)
})

clicker.loadFromLocalStorage()
</script>

<template>
  <main class="app">
    <PartyArea />
    <FactoryList />
  </main>
</template>