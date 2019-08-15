<template>
  <header class="header">
    <img src="../../assets/piglogo.png" height="10%" width="10%">
    <h1>VidékiCSŐ</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Upload">Upload</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
  .header {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
    border-style: solid;
    border-width: 0 0 5px 0;
  }
  .header a {
    color: #fff;
    padding-right: 5px;
    text-decoration: none;
  }
</style>
