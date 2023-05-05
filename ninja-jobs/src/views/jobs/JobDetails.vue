<template>
    <div v-if="job">
        <h1>{{ job.title }}</h1>
        <p>The job id is: {{ id }}</p>
        <p>Job details: {{ job.details }}</p>
    </div>
    <div v-else>
        <p>Loading job details...</p>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            // id: this.$route.params.id // since now id is being accepted as a prop
            job: null

        }
    },
    mounted() {
        fetch('http://localhost:3000/jobs/' + this.id)
            .then(res => res.json())
            .then(data => this.job = data)
            .catch(error => console.log(error.message))
    }
}
</script>