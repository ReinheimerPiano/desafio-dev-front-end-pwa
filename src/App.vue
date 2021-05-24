<template>
  <v-app id="app">
    <!-- Barra de aplicativo para breackpoint mobile -->
    <app-bar v-model="$vuetify.breakpoint.mobile" />
    <!-- Menu em icones e titulo para breackpoint mobile -->
    <menu-list-icons v-model="$vuetify.breakpoint.mobile" />
    <!-- Menu de navegação para breackpoint maior que mobile -->
    <navigation-drawer v-model="$vuetify.breakpoint.mobile" />
    <!-- Main para rederizacao das rotas -->
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

  // Uso de contantes de tema do vuetify são declarados desta forma var(--v-primary-base)
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--v-primary-base);
  background-color: var(--v-background-base)
}

// Para efeito de houver em imagens com essas classes
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
