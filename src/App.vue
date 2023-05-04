<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name">
  <button @click="handleClick">click me</button>
  <div v-if="showModal">
    <!-- <Modal 
      :header="header" 
      :text="text" 
      theme="sale"
      @close="toggleModal"
    /> -->
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="$">more info</a>
      </template>
      <h1>Ninja Giveaway!</h1>
      <p>Grab your ninja swag for half price!</p>
    </Modal>
  </div>
  <div v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
      <template v-slot:bootcamp>
        <h1>The Gym - Sotware Development Training Program</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsam, debitis sint architecto labore tempora nostrum. Adipisci veniam mollitia harum error soluta totam pariatur. Earum cupiditate delectus nam repellendus consequuntur.</p>
      </template>
    </Modal>
  </div>
  <button @click.alt="toggleModal">Open Modal (alt)</button>
  <button @click="toggleModalTwo">Open Modal Two</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Modal
  },
  data(){
    return {
      title: "My First Vue App :)",
      header: "Signup for the giveaway!",
      text: "Grab your ninja swag for half price!",
      showModal: false,
      showModalTwo: false,
    }
  },
  methods: {
    handleClick(){
      // console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal(){
      this.showModal = !this.showModal
    },
    toggleModalTwo(){
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}
</style>
