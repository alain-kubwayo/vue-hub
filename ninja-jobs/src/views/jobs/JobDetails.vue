<template>
    <h1>Job Details Page</h1>
    <p>The job id is: {{ id }}</p>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            // id: this.$route.params.id // since now id is being accepted as a prop
        }
    }
}
</script>