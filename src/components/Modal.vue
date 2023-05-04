<template>
    <div class="backdrop">
        <div class="modal">
            <p>Modal Content</p>
            <h1>Hello</h1>
        </div>
    </div>
</template>

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
</style>