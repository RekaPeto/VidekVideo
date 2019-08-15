<template>
    <div id="app">
        <Header />
        <router-view />
    </div>
</template>

<script>
import Header from './components/layout/Header';
    export default {
        name: "App",
        components: {
            Header
    }
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
    background-color:darkslategray
  }


  a {
    color: #fff;
    padding-right: 5px;
    text-decoration: none;
  }
  
 
</style>