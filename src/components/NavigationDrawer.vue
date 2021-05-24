<template>
  <v-navigation-drawer
    v-if="!$_model"
    app
    dark
    permanent
    color='primary'
    mini-variant
    mini-variant-width='60px'
    aria-label="Menu Principal"
    class="navigation-drawer">
    <router-link to="/">
      <v-btn icon x-large class="mt-2 pa-0">
        <icon-canaltech v-model="$_model"/>
      </v-btn>
    </router-link>
    <v-list dense class="pt-0">
      <v-list-item v-for='(menu, index) in allMenus' :key='index'>
        <v-btn icon large :to="menu.url" class="justify-center">
          <v-list-item-icon
            class='list-item-icon ma-auto'
            v-html='menu.icone'
            :aria-label='menu.titulo'
            role="img"
            aria-hidden="false">
          </v-list-item-icon>
        </v-btn>
        <v-list-item-content>
          {{ menu.titulo }}
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';
import IconCanaltech from '@/components/IconCanaltech.vue';

export default {
  name: 'NavigationDrawer',
  props: {
    value: Boolean,
  },
  components: { IconCanaltech },
  computed: {
    allMenus() {
      return this.allMenu();
    },
    $_model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
  methods: {
    ...mapGetters(['allMenu']),
  },
};
</script>

<style lang='scss' scoped>
.navigation-drawer {
  z-index: 500;
}

.list-item-icon {
  fill: var(--v-secondary-base);
  margin-top: 10px !important;
  margin-bottom: 10px !important;
}
</style>
