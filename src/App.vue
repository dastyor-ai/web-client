<template>
  <nav>
    <!-- Uncomment the following lines if needed -->
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
  </nav>
  <TopMenu/>
  <Sidebar v-if="!isLimitedRoute"/>
  <router-view/>
</template>

<style lang="scss">
/* Add your SCSS styles here */
</style>

<script>
import Sidebar from './components/Sidebar.vue'
import TopMenu from './components/TopMenu.vue'

export default {
  components: {
    Sidebar,
    TopMenu
  },
  computed: {
        isLimitedRoute() {
            return this.$route.path === '/events' || this.$route.path === '/login' ;
        }
  }
}
</script>
