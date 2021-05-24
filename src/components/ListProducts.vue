<template>
  <div class="div-list">
    <v-toolbar elevation="0">
      <v-toolbar-title class="title-bar">Mais Procurados</v-toolbar-title>
      <v-spacer/>
      <v-progress-linear value="15" class="progress-list mr-1" color="accent"></v-progress-linear>
    </v-toolbar>
    <div class="container-list d-flex align-center">
      <v-slide-group
        multiple
        :show-arrows="!$vuetify.breakpoint.mobile"
        class="pb-3"
      >
        <template v-slot:next="{}">
          <v-btn small fab dark color="accent">
            <v-icon>
              mdi-chevron-right
            </v-icon>
          </v-btn>
        </template>
        <template v-slot:prev="{}">
          <v-btn small fab dark color="accent">
            <v-icon>
              mdi-chevron-left
            </v-icon>
          </v-btn>
        </template>
        <v-slide-item
          v-for='(item, index) in allPdts'
          :key='index'
          v-slot="{ active, toggle }"
          class="slide-item-pdt mx-2 pb-2"
        >
          <v-card
            elevation="0"
            outlined
            @click="toggle"
            :input-value="active"
            :to="item.url"
            class="card-product rounded-lg pt-4 mb-3">
            <v-img
              class="pdt-img mb-3"
              contain
              :src="item.imagem"
              >
            </v-img>
            <span class="title-item mt-2">{{item.titulo}}</span>
            <v-badge v-if="item.rumor" color="warning" class="bdg-rumor"  content="RUMOR"/>
          </v-card>
        </v-slide-item>
      </v-slide-group>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ListProducts',
  computed: {
    allPdts() {
      return this.allProdutos();
    },
  },
  methods: {
    ...mapGetters(['allProdutos']),
  },

};
</script>

<style lang="scss" scoped>
$breakpoint: 600px;

.div-list{
  margin: 2rem 0 0 0;
}

.title-bar{
  font-size: 1.2rem;
  font-weight: bolder;
  color: var(--v-primary-base);
}

.progress-list{
  width: 3rem;
}

.card-product{
  width: 10rem;
  height: 13.5rem;
}

.card-product:first-child{
  margin-left: 1rem !important;
}

.card-product:last-child{
  margin-right: 1rem !important;
}

.pdt-img{
  height: 8rem;
}

.title-item{
  font-size: 12.8px;
  font-weight: 800;
}

.bdg-rumor{
  position: absolute;
  bottom: -6px;
  left: 36%;
  font-size: 0.5rem;
  font-size: 8px;
}

@media (min-width: $breakpoint) {
  .div-list{
    margin: 4rem 8rem 0 8rem;
  }

  .title-bar{
    font-size: 1.5rem;
  }

  .progress-list{
    width: 5rem;
  }

  .card-product:hover .title-item{
    color: var(--v-accent-base);
    transition: all .2s ease;
  }
}
</style>
