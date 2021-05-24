<template>
  <v-app id="app">
    <app-bar v-model="$vuetify.breakpoint.mobile" />
    <menu-list-icons v-model="$vuetify.breakpoint.mobile" />
    <navigation-drawer v-model="$vuetify.breakpoint.mobile" />

    <v-main class="pa-0">
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
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

$body-font-family: 'Open Sans';
$title-font: 'Open Sans';

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

.img-emphasis{
  width: 100%;
  height: 100%;
}

.emphasis:hover .img-emphasis > div.v-image__image {
  -webkit-transform: scale(1.05);
  -moz-transform: scale(1.05);
  -ms-transform: scale(1.05);
  transform: scale(1.05);
  transition: all .2s ease;
  margin: 0 auto;
}
</style>
