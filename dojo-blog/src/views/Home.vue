<template>
  <div class="home">
    <h1>homepage</h1>
    <!-- <p ref="p">{{ name }} - {{ age }}</p> -->
    <!-- <p>{{ name }} - {{ age }}</p> -->
    <p>{{ name }} - {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">Add 1 to age</button>
    <input type="text" v-model="name">
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update ninja one</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update ninja two</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

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

    const ninjaOne = ref({ name: 'aline', age: 29 })
    const ninjaTwo = reactive({ name: 'caren', age: 43 })

    // drawbacks: we can't use reactive with primitive types. They will show but won't be reactive

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40
    }

    const updateNinjaTwo = () => {
      ninjaTwo.age = 34
    }

    // return { name, age, handleClick, p }
    return { name, age, handleClick, ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo }
  }
}
</script>
