<template>
  <div id="app">
    <the-header></the-header>
    <router-view class="content"/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader'
export default {
  name: 'App',
  components: {
    'the-header': TheHeader
  },
}
</script>

<style lang="scss">

section {
  padding: 10px 10px 20px 10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px 0px
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p
{
  padding: 0;
  margin: 0;
}

.flex-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  &.between {
    justify-content: space-between
  }
  &.around {
    justify-content: space-around;
  }
  &.center {
    justify-content: center;
  }
  &.column {
    flex-direction: column;
  }
}

.form-control {
  p {
    text-align: left;
    padding: 5px 0px;
  }
  input, textarea, select {
    padding: 10px;
    min-width: 250px;
    border-radius: 6px;
    font-size: 16px;
    border: 1px solid #D9DADC;
  }
}


button {
  padding: 20px 15px;
  width: 280px;
  border-radius: 6px;
  border: 1px solid #D9DADC;
  color: white;
  font-size: 16px;
  background-color: green;
}
</style>
