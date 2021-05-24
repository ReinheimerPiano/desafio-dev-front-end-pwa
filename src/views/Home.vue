<template>
  <div heigth="100%" class="div-home">
    <!-- Secão Destaques -->
    <highlights />
    <!-- Secão Produtos -->
    <products-list />
    <!-- Secão Vídeos para breakpoint mobile -->
    <videos-list v-model="$vuetify.breakpoint.mobile" />
    <!-- Secão Notícias -->
    <news-list />

  </div>
</template>

<script>
import Highlights from '@/components/Highlights.vue';
import ProductsList from '@/components/ProductsList.vue';
import VideosList from '@/components/VideosList.vue';
import NewsList from '@/components/NewsList.vue';

export default {
  name: 'Home',
  components: {
    Highlights,
    ProductsList,
    VideosList,
    NewsList,
  },
};
</script>
<style lang="scss" scoped>
$breakpoint: 600px;

.div-home{
  width: 100%;
  height: auto;
  padding-bottom: 3rem;
}

@media (min-width: $breakpoint) {
  .div-home{
    padding-left: 60px;
  }
}
</style>
