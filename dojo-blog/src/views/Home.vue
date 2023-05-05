<template>
  <div class="home">
    <h1>homepage</h1>
    <!-- <p ref="p">{{ name }} - {{ age }}</p> -->
    <!-- <p>{{ name }} - {{ age }}</p> -->
    <p>{{ name }} - {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">Add 1 to age</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Home',
  setup() {
    // console.log(this) // this is undefined
    // const p = ref(null)

    // let name = 'alain'
    // let age = 30
    const name = ref('alain')
    const age = ref(30)

    const handleClick = () => {
      // console.log('you clicked me')
      // console.log(p, p.value)
      // p.value.classList.add('test')
      // p.value.textContent = 'Hello ninjas!'
      name.value = 'jules'
      age.value = 35
    }

    // return { name, age, handleClick, p }
    return { name, age, handleClick }
  }
}
</script>
