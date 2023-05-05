<template>
  <div class="home">
    <h1>homepage</h1>
    <PostList :posts="posts" />
   
  </div>
</template>

<script>
import { ref } from 'vue'
import PostList from '../components/PostList.vue'

export default {
  name: 'Home',
  components: { PostList },
  setup() {
    const posts = ref([
      { title: 'welcome to the blog', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio unde corrupti consequuntur molestiae ipsam dolore minus magnam, amet adipisci temporibus, maxime tempora obcaecati quod ullam iusto? Ab odit natus aliquid sed provident ea consequatur voluptatem, tempore eligendi rerum modi, esse praesentium. Nam aliquid hic, eligendi rerum neque corporis accusantium aperiam.', id: 1 },
      { title: 'top 5 CSS tips', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio unde corrupti consequuntur molestiae ipsam dolore minus magnam, amet adipisci temporibus, maxime tempora obcaecati quod ullam iusto? Ab odit natus aliquid sed provident ea consequatur voluptatem, tempore eligendi rerum modi, esse praesentium. Nam aliquid hic, eligendi rerum neque corporis accusantium aperiam.', id: 2 }
    ])
  
    return { posts }
  }
}
</script>
