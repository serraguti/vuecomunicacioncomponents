<template>
  <div>
    <MenuComponent/>
    <hr/>
    <MenuTabla/>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuTabla from './components/MenuTabla.vue';
import MenuComponent from './components/MenuComponent.vue';
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    MenuComponent, MenuTabla
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
