const { createApp } = Vue

createApp({
  data() {
    return {
      books: [
        { name: "Pemrograman Web", author: "Ridho Rahman H", toggle: false},
        { name: "Sistem Deteksi Intrusi", author: "Hatma Surotrisongko", toggle: false},
        { name: "Smart City", author: "M Husni", toggle: false},
        { name: "Intenet of Things", author: "M Husni", toggle: false}
      ]
    }
  }
}).mount('#app')