<template>
    <div>
        <p>{{ counter }}</p>
        <p>{{ arrayOfEmojis }}</p>
        <button @click="increment">Counter</button>
        <p>Years: {{ years }}</p>
    </div>
</template>

<script>

import { onMounted, ref, watch, computed, reactive, toRef, toRefs } from 'vue'
export default {
    props: {
        emoji: { type: String, default: '💩' },
        a: { type: Number, default: 0 },
        b: { type: String, default: 'Vue 3!' },
        c: { type: Boolean, default: true }
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

        const age = reactive({ value: 0 })
        console.log(age)

        // primitive types: to be reactive use ref instead of reactive
        const years = ref(30)
        console.log('years: ', years.value)

        const obj = reactive({ a: 0, b: 'string' })
        const aRef = toRef(obj, 'a') // useful when you want to pass a specific property to a function while maintaining reactivity
        // console.log(obj, aRef)

        const { a, b, c } = toRefs(props)
        console.log(a.value)
        console.log(b.value)
        console.log(c.value)

        return { counter, increment, arrayOfEmojis, years }
    }
}
</script>