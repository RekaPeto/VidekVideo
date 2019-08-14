<template>
    <div id="app">
        <h1>VidekVideo</h1>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/upload">Upload</router-link>
        </div>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>


<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.4;
        background-color:azure
    }

    .btn {
        display: inline-block;
        border: none;
        background: #555;
        color: #fff;
        padding: 7px 20px;
        cursor: pointer;
    }

        .btn:hover {
            background: #666;
        }
</style>