<template>
  <div class="div-container my-5">

    <div class="bar-news">
      <span class="title-bar">Notícias</span>
    </div>

    <div class="news-container">
      <div
        v-for="(nw, index) in allNoticia"
        :key="index"
        class="container-card"
      >

        <v-card
          elevation="0"
          :to="nw.url"
          class="card-news emphasis rounded-lg"
        >

          <v-img :src="nw.imagem" cover class="img-emphasis grey darken-4 rounded-lg img-card" />

          <div class="texts-card">
            <v-card-subtitle class="category-text pa-0">{{nw.categoria}}</v-card-subtitle>
            <v-card-title class="title-text px-0 pt-0">{{nw.titulo}}</v-card-title>
            <v-card-subtitle class="data-text px-0">{{nw.data}}</v-card-subtitle>
          </div>

        </v-card>
      </div>
    </div>

    <v-btn
      outlined
      large
      class="btn-more-news"
    >
      Mais notícias
      <v-icon class="ml-2">mdi-arrow-right</v-icon>
    </v-btn>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'NewsList',
  computed: {
    allNoticia() {
      return this.allNoticias();
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
    ...mapGetters(['allNoticias']),
  },
};
</script>

<style lang="scss" scoped>
$breakpoint: 600px;

.div-container{
  width: 100%;
  height: 100%;
  padding: 0 1rem;
}

.news-container{
  margin-top: 2rem;
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column wrap;
  justify-content:space-between;
}

.bar-news{
  padding-top: 0;
  text-align: justify;
}

.title-bar{
  font-size: 1.2rem;
  font-weight: bolder;
  color: var(--v-primary-base);
}

.container-card{
  width: 100%;
  height: 100%;
  padding: 10px;
}

.card-news{
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row-reverse nowrap;
  justify-content:space-between;
}

.img-card{
  width: 30%;
  height: 100%;
}

.texts-card{
  display: flex;
  flex-flow: row wrap;
  padding-right: 0.5rem;
}

.category-text{
  font-size: 10.24px;
  line-height: 14px;
  font-weight: bold;
  text-align: initial;
  word-break: keep-all;
  color: var(--v-accent-base) !important;
}

.title-text{
  font-size: 13.7884px;
  line-height: 19px;
  font-weight: bold;
  text-align: initial;
  word-break: keep-all;
  color: var(--v-primary-base) !important;
}

.data-text{
  font-size: 10.24px;
  line-height: 14px;
  text-align: initial;
  word-break: keep-all;
  color: var(--v-secondary-base) !important;
}

.btn-more-news{
  margin-top: 2rem;
  border: 0.1px solid #e7e7e7 ;
  text-transform: initial;
  font-weight: bold;
  padding: 1.7rem 8vh !important;
  color: var(--v-accent-base);
}

.btn-more-news:hover {
  color: #fff;
  background-color: var(--v-accent-base);
}

@media (min-width: $breakpoint) {
  .div-container{
    width: 100%;
    height: 100%;
    padding: 0 9rem;
  }

  .bar-news{
    padding-top: 4rem;
    text-align: justify;
  }

  .title-bar{
    font-size: 1.5rem;
  }

  .news-container{
    flex-flow: row wrap;
  }

  .container-card{
    width: 33%;
    height: 100%;
    padding: 10px;
  }

  .card-news{
    flex-flow: column wrap;
    width: 100%;
    height: 100%;
  }

  .img-card{
    width: 100%;
    height: 10rem;
  }

  .category-text{
    font-size: 12.8px;
    line-height: 17px;
    font-weight: bold;
    text-align: initial;
    word-break: keep-all;
    color: var(--v-accent-base) !important;
    margin-top: 1rem;
  }

  .title-text{
    font-size: 16px;
    line-height: 22px;
    font-weight: bold;
    text-align: initial;
    word-break: keep-all;
    color: var(--v-primary-base) !important;
  }

  .emphasis:hover .title-text{
    color: var(--v-accent-base) !important;
    transition: all .2s ease;
  }

  .data-text{
    font-size: 12.8px;
    line-height: 17px;
    text-align: initial;
    word-break: keep-all;
    color: var(--v-secondary-base) !important;
  }

  .btn-more-news{
    margin-top: 2rem;
    border: 0.1px solid #e7e7e7 ;
    text-transform: initial;
    font-weight: bold;
    padding: 1.7rem 6rem !important;
    color: var(--v-accent-base);
  }
}
</style>
