const { createApp } = Vue

createApp({
  data() {
    return {
      input1: 0,
      input2: 0,
      result: 0,
    }
  }
}).mount('#app')