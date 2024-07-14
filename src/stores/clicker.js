import { defineStore } from 'pinia'

export const useClicker = defineStore('clicker', {
  // Default state / config
  state: () => {
    return {
      balance: 0,
      tickDurationMs: 250,
      totalConfettis: 0,
      factoryPriceMultiplier: 1.05,
      factories: {
        partyPopper: {
          id: 'partyPopper',
          name: 'Party Popper',
          emoji: '🎉',
          basePrice: 10,
          cps: 0.25,
          owned: 0
        },
        balloon: {
          id: 'balloon',
          name: 'Balloon',
          emoji: '🎈',
          basePrice: 100,
          cps: 2.5,
          owned: 0
        }
      }
    }
  },
  getters: {
    factoryPrice: (state) => (factoryID) => {
      // factoryPrice = basePrice * (factoryPriceMultiplier ** owned)
      let price = state.factories[factoryID].basePrice;
      for (let i = 0; i < state.factories[factoryID].owned; i++) {
        price = Math.ceil(price * state.factoryPriceMultiplier)
      }

      return price
    },
    factoryConfettiPerSecond: (state) => (factoryID) => {
      // factoryConfettiPerSecond = confettiPerSecond * owned
      return state.factories[factoryID].cps * state.factories[factoryID].owned
    },
    canBuyFactory(state) {
      return (factoryID) => state.balance >= this.factoryPrice(factoryID)
    },
    confettiPerSecond: (state) => {
      const factories = Object.keys(state.factories)
      let sum = 0
      
      factories.forEach((factoryID) => {
        sum = sum + state.factoryConfettiPerSecond(factoryID)
      })

      return sum
    }
  },
  actions: {
    buyFactory(factoryID) {
      if (!this.canBuyFactory(factoryID)) {
        throw new Error('Not enough money')
      }
      this.balance -= this.factoryPrice(factoryID)
      this.factories[factoryID].owned++
    },
    tick() {
      const tickValue = this.confettiPerSecond * this.tickDurationMs / 1000
      this.balance += tickValue
      this.totalConfettis += tickValue
    }
  }
})