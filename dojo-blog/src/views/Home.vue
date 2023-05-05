<template>
  <div class="home">
    <h1>homepage</h1>
    <!-- <PostList :posts="posts" v-if="showPosts" /> -->
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
    <!-- <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">delete a post</button> -->
  </div>
</template>

<script>
import { ref } from 'vue'
import PostList from '../components/PostList.vue'

export default {
  name: 'Home',
  components: { PostList },
  setup() {
    // const posts = ref([
    //   { title: 'welcome to the blog', body: 'Lorem', id: 1 },
    //   { title: 'top 5 CSS tips', body: 'Lorem', id: 2 }
    // ])
    const posts = ref([])
    const error = ref(null)

    // const showPosts = ref(true)

    const load = async () => {
      try {
        const res = await fetch('http://localhost:3000/posts')
        if(!res.ok){
          throw Error('no data available')
        }
        posts.value = await res.json()
      }
      catch (err){
        error.value = err.message
        console.log(error.value)
      }
    }

    load()
  
    // return { posts, showPosts }
    return { posts, error }

  }
}
</script>
