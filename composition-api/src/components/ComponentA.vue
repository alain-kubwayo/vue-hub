<template>
    <h1>ComponentA</h1>
    <button @click="toggle = !toggle">Toggle</button>
    <teleport to="#endofbody" :disabled="toggle">
    <!-- <teleport to="#endofbody" v-if="toggle"> -->
        <p>Text from ComponentA</p>
    </teleport>
    <button @click="toggle2 = !toggle2">Toggle 2</button>
    <teleport to="#endofbody" :toggle="toggle2">
        <p>Second Text from ComponentA</p>
    </teleport>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        return { toggle: ref(false), toggle2: ref(false) }
    }
}
</script>