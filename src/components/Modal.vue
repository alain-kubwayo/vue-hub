<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{sale: theme === 'sale'}">
            <!-- <h1>{{ header }}</h1>
            <p>{{ text }}</p> -->
            <slot>default content</slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['header', 'text', 'theme'],
    methods: {
        closeModal(){
            this.$emit('close')
        }
    }
}
</script>

<style>
    .backdrop {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.5);
    }

    .modal {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }

    .modal h1 {
        color: green;
        border: none;
        padding: 0;
    }

    .modal p{
        font-style: normal;
    }

    .modal.sale {
        background: crimson;
        color: white;
    }

    .modal.sale h1 {
        color: white;
    }

    .modal.actions {
        text-align: center;
        margin: 30px 0px 10px 0px;
    }

    .modal .actions a {
        color: #333;
        padding: 8px;
        border: 1px solid #eee;
        border-radius: 4px;
        text-decoration: none;
        margin: 10px;
    }

    .modal.sale .actions {
        color: white;
    }

    .modal.sale .actions a {
        color: white;
    }
</style>