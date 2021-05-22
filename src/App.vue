<template>
  <v-app id="app">
    <app-bar v-model="$vuetify.breakpoint.mobile" />
    <menu-list-icons v-model="$vuetify.breakpoint.mobile" />
    <navigation-drawer v-model="$vuetify.breakpoint.mobile" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavigationDrawer from '@/components/NavigationDrawer.vue';
import AppBar from '@/components/AppBar.vue';
import MenuListIcons from '@/components/MenuListIcons.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    NavigationDrawer,
    AppBar,
    MenuListIcons,
  },
  data() {
    return {
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    ...mapActions(['fetchData']),
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #222;

    &.router-link-exact-active {
      color: #27a9e1;
    }
  }
}
</style>
