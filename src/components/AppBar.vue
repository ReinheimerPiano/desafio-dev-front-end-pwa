<template>
  <v-app-bar
    app
    dark
    v-model="$_model"
    color="primary"
  >

    <router-link to="/">
      <div width="auto" class="d-flex align-center pa-1">
        <icon-canaltech v-model="$_model"/>
      </div>
    </router-link>

    <v-spacer />

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

  </v-app-bar>
</template>

<script>
import IconCanaltech from '@/components/IconCanaltech.vue';

export default {
  name: 'AppBar',
  props: {
    value: Boolean,
  },
  components: { IconCanaltech },
  computed: {
    $_model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
