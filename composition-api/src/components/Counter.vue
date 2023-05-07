<template>
    <div>
        <p>{{ counter }}</p>
        <p>{{ arrayOfEmojis }}</p>
        <button @click="increment">Counter</button>
    </div>
</template>

<script>

import { onMounted, ref, watch, computed } from 'vue'
export default {
    props: {
        emoji: { type: String, default: '💩' }
    },
    setup(props) {
        console.log(props.emoji)

        onMounted(() => {
            console.log('the component has been mounted!')
        })

        const counter = ref(0)
        const increment = () => counter.value++;

        watch(counter, current => {
            if(current === 5) console.log('you have clicked 5 times!')
        })

        // watch(counter, (current, previous) => console.log(current, previous))

        const arrayOfEmojis = computed(() => Array.from(new Array(counter.value), () => props.emoji).join(' ')
        )

        return { counter, increment, arrayOfEmojis }
    }
}
</script>