<template>
  <div class="home">
    <h1>homepage</h1>
    <p>{{ name }} - {{ age }}</p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>


export default {
  name: 'Home',
  setup() {
    let name = 'alain'
    let age = 30

    const handleClick = () => {
      console.log('you clicked me');
    }

    return { name, age, handleClick }
  }
}
</script>
