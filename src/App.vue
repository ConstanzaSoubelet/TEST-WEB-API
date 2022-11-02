<template>
  <div id="nav" v-if="$store.state.user">
    <router-link to="/">Home</router-link> |

    <button @click="$store.dispatch('logout')">Logout</button>
    <h1>Fetch data with API</h1>
    <IndiceList/>
  </div>
  <router-view/>
</template>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import IndiceList from './components/IndiceList.vue'

export default {
  components: {
    IndiceList
  },
  setup() {
    const store = useStore()
    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  }
}
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>