<template>
  <div v-if="$_model" class="div-menu-list">
    <div class="container-list-icons d-flex align-center">

    <v-slide-group
      multiple
    >
      <v-slide-item
        v-for='(menu, index) in allMenus'
        :key='index'
        v-slot="{ active, toggle }"
      >

        <v-card elevation="0" class="card-menu">

          <v-btn
            icon
            outlined
            x-large
            :to="menu.url"
            @click="toggle"
            :input-value="active"
            class="btn-icon d-flex align-center justify-center pa-3 mx-2"
            v-html='menu.icone'>
          </v-btn>

          <span class="title-item">{{menu.titulo}}</span>

        </v-card>

      </v-slide-item>
    </v-slide-group>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MenuListIcons',
  props: {
    value: Boolean,
  },
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

<style lang="scss" scoped>
$list-item-icon-margin: 0px;

.div-menu-list{
  height: auto;
  width: 100vw;
  margin-top: 56px;
}

.container-list-icons {
  flex-flow: row nowrap;
  height: 80px;
  width: auto;
  margin-top: 1rem;
  overflow: auto;
}

::-webkit-scrollbar {
    display: none;
}

.card-menu:first-child{
  margin-left: 0.8rem;
}

.item-icon {
  height: 56px;
  width: 56px;
  padding: 15px;
}

.btn-icon {
  fill: var(--v-tertiary-base);
}

.title-item {
  font-size: 0.8rem;
}

</style>
