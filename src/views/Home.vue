<template>
  <div heigth="100%" class="div-home">
    <highlights />
    <list-products />
  </div>
</template>

<script>
import Highlights from '@/components/Highlights.vue';
import ListProducts from '@/components/ListProducts.vue';

export default {
  name: 'Home',
  components: {
    Highlights,
    ListProducts,
  },
};
</script>
<style lang="scss" scoped>
$breakpoint: 600px;

.div-home{
  width: 100%;
}

@media (min-width: $breakpoint) {
  .div-home{
    padding-left: 60px;
  }
}
</style>
